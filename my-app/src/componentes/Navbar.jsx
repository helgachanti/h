import { useState } from 'react';
import Footer from './Footer';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#inicio" className="logo" onClick={closeMenu}>
          H
        </a>

        {/* Botón Hamburguesa */}
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Menú de Navegación */}
        <nav className={`navigation ${isOpen ? 'active' : ''}`}>
          <a href="#inicio" className="active" onClick={closeMenu}>
            INICIO
          </a>
            SOBRE Mi
          <a href="#competencias" onClick={() => {closeMenu; document.getElementById("site-footer").scrollIntoView()}}>
          </a>
          <a href="#experiencia" onClick={closeMenu}>
            EXPERIENCIA
          </a>
          <a href="#portafolio" onClick={closeMenu}>
            PORTAFOLIO
          </a>
          <a href="#contacto" onClick={closeMenu}>
            CONTACTO
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Navbar