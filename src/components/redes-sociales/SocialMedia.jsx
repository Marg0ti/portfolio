export default function SocialMedia() {
    return (
        <ul className="social-media-ul">
            <li className="social-media-li">
                <a 
                    className="social-media-a" 
                    href="https://www.linkedin.com/in/margot-hergon/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="#ffffff" 
                        viewBox="0 0 24 24" 
                        width="32" 
                        height="32"
                    >
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 24V7.98h4V24h-4zM8.5 8h3.8v2.2h.1c.5-.95 1.8-2 3.7-2 3.9 0 4.6 2.6 4.6 6V24h-4v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 3.9V24h-4V8z"/>
                    </svg>
                </a>
            </li>
            <li className="social-media-li">
                <a 
                    className="social-media-a" 
                    href="https://github.com/Marg0ti/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="#ffffff" 
                        viewBox="0 0 24 24" 
                        width="32" 
                        height="32"
                    >
                        <path d="M12 0C5.37 0 0 5.38 0 12c0 5.3 3.44 9.8 8.2 11.39.6.1.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.54-1.36-1.33-1.73-1.33-1.73-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.84 2.84 1.3 3.53.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.16 0 0 1-.33 3.3 1.24A11.4 11.4 0 0112 6.8c1.02.01 2.05.14 3.01.4 2.29-1.57 3.29-1.24 3.29-1.24.66 1.64.24 2.86.12 3.16.77.85 1.23 1.93 1.23 3.25 0 4.63-2.81 5.66-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0024 12c0-6.62-5.38-12-12-12z"/>
                    </svg>
                </a>
            </li>
            <li className="social-media-li">
                <a 
                    className="social-media-a" 
                    href="/pictures/cv/Margot-HerGon-.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Curriculum Vitae"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="#ffffff" 
                        viewBox="0 0 24 24" 
                        width="32" 
                        height="32"
                    >
                        <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 13h8v2H8v-2zm0 4h5v2H8v-2z"/>
                    </svg>
                </a>
            </li>
        </ul>
    );
}
