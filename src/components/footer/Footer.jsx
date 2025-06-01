import SocialMedia from "../redes-sociales/SocialMedia";
export default function Footer() {
      const currentYear = new Date().getFullYear();
    const name= "Margot Hernández González";
    return (
        <footer>
            <p>© {currentYear} {name} </p>
            <SocialMedia />
        </footer>
    );
} 