import {JsLogo, ReactLogo, GitLogo, SQLLogo, CLogo} from "../../components/tecnologias/Icons.jsx"
import { GitCode } from "../../components/button/GitCode.jsx"
export default function Proyectos(){
    return(
        <section id="proyectos">
            <h2>Proyectos</h2>
            
            <article className="proyecto-item">
                <div className="proyecto-imagen">
                    <video src="/pictures/proyect/mariposario.mp4" controls muted loop playsInline></video>
                </div>
                <div className="proyecto-detalles">
                    <div className="proyecto-detalles2">
                        <div className="proyecto-codigo">
                        <GitCode url="https://github.com/Marg0ti/"/>
                        </div>
                        <div className="proyecto-tecnologias">
                            <div> 
                                <JsLogo />
                            </div> 
                            <div>
                                <ReactLogo/>
                            </div>
                        </div>
                    </div>
                    <div className="proyecto-info">
                        <h3>Mariposario</h3>
                        <p>Con motivo de mi trabajo de fin de grado, decidí hacer un prototipo de aplicación web para la mejora de una ya existente. En este caso añadí determinadas funcionales, la más relevante fue una pasarela de pago, y ciertos ajustes en la organización del contenido y apariencia de la interfaz</p>
                    </div>
                </div>
            </article>

            <article className="proyecto-item">
                <div className="proyecto-imagen">
                    <video src="/pictures/proyect/stripe.mp4" controls muted loop playsInline></video>
                    
                </div>

                <div className="proyecto-detalles">
                    <div className="proyecto-detalles2">
                        <div className="proyecto-codigo">
                            <GitCode url="https://github.com/Marg0ti/"/>
                        </div>
                        <div className="proyecto-tecnologias">
                            <div> 
                                <JsLogo />
                            </div> 
                            <div>
                                <ReactLogo/>
                            </div>
                        </div> 
                    </div> 

                    <div className="proyecto-info">
                        <h3 >Integración de pasarela de pago</h3>
                        <p>De manera más detallada se puede ver de manera práctica el formulario con la redirección a Stripe para proceder al pago.</p>
                    </div>
                </div>


            </article>

           <article className="proyecto-item">
    <div className="proyecto-imagen">
        <img src="/pictures/proyect/API.png" alt="" />
    </div>
    <div className="proyecto-detalles">
        <div className="proyecto-detalles2">
            <div className="proyecto-codigo">
                <GitCode url="https://github.com/Marg0ti/API-music" />
            </div>
            <div className="proyecto-tecnologias">
                <div> 
                    <CLogo />
                </div> 
                <div>
                    <SQLLogo />
                </div>
            </div>
        </div>
        <div className="proyecto-info">
            <h3>API REST con .NET Core y Entity Framework</h3>
            <p>Una aplicación sencilla donde realizar las distintas operaciones CRUD sobre los artistas y sus álbumes.</p>
        </div>
    </div>
</article>

<article className="proyecto-item">
    <div className="proyecto-imagen">
        <img src="/pictures/proyect/MVC.png" alt="" />
    </div>
    <div className="proyecto-detalles">
        <div className="proyecto-detalles2">
            <div className="proyecto-codigo">
                <GitCode url="https://github.com/Marg0ti/API-music" />
            </div>
            <div className="proyecto-tecnologias">
                <div> 
                    <CLogo />
                </div> 
                <div>
                    <SQLLogo />
                </div>
            </div>
        </div>
        <div className="proyecto-info">
            <h3>Aplicación web con MVC con .NET Core y Entity Framework</h3>
            <p>Aplicación desarrollada con el patrón Modelo-Vista-Controlador. Permite realizar las distintas operaciones CRUD sobre los artista y sus álbumes, con control de acceso basado en roles asignados a los usuarios.</p>
        </div>
    </div>
</article>
             
        </section>
    )
}