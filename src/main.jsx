import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import NavBar from './components/nav/navBar'
import Inicio from './pages/inicio/Inicio'
import Experiencia from './pages/experiencia/Experiencia'
import Proyectos from './pages/proyectos/Proyectos'
import SobreMi from './pages/sobreMi/SobreMi'
import Footer from './components/footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Inicio />
    <Experiencia />
    <Proyectos />
    <SobreMi />
    <Footer />
  </StrictMode>,
)
