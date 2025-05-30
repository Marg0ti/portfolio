import { useRef, useState, useEffect } from "react";
import Links from "./Links";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }
    isOpen? document.addEventListener("mousedown", handleClickOutside)
      : document.removeEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <header className="navbar">
      <div className="navbar-container">
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={24} />
        </button>

        <nav ref={menuRef} className={`nav-links ${isOpen ? "open" : ""}`}>
          <Links onLinkClick={() => setIsOpen(false)} />
        </nav>
      </div>
    </header>
  );
}
