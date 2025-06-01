import { useRef, useState, useEffect, use } from "react";
import Links from "./Links";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }
    isOpen? document.addEventListener("mousedown", handleClickOutside)
      : document.removeEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      };
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="navbar">
      <div className="navbar-container">
        <button ref={buttonRef} className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={24} />
        </button>

        <nav ref={menuRef} className={`nav-links ${isOpen ? "open" : ""}`}>
          <Links onLinkClick={() => setIsOpen(false)} />
        </nav>
      </div>
    </header>
  );
}
