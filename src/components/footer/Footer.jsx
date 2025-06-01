export default function Footer() {
      const currentYear = new Date().getFullYear();
    const name= "Margot Hernández González";
    return (
        <footer>
            <p>© {currentYear} {name} . Todos los derechos reservados.</p>
            <p>Diseñado y desarrollado por {name}.</p>
            <p>Imágenes de <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a></p>
        </footer>
    );
} 