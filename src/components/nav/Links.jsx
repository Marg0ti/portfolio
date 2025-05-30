export default function Links({onLinkClick}) {

    
    return (
        <ul className="navBar-ul">
            <li className="navBar-li">
                <a className="navBar-a" href="#inicio" onClick={onLinkClick}>Inicio</a>
            </li>
            <li className="navBar-li" > 
                <a className="navBar-a" href="#experiencia" onClick={onLinkClick}>Experiencia</a>
            </li>
            <li className="navBar-li" > 
                <a className="navBar-a" href="#proyectos" onClick={onLinkClick}>Proyectos</a>
            </li>
            <li className="navBar-li" > 
                <a className="navBar-a" href="#sobre-mi" onClick={onLinkClick}>Sobre mi</a>
            </li>
        </ul>
    )
}