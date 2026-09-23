import { useState, useEffect } from 'react';
import asset_img_random from './Imagenes/random.jpg';

function Body() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calcula qué tanto se ha bajado (0 al inicio, máximo 1)
      const maxScroll = 500; // Distancia en px para completar la expansión
      const currentScroll = window.scrollY;
      const progress = Math.min(currentScroll / maxScroll, 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcula la escala de la imagen (de 1x hasta 3x)
  const imageScale = 1 + scrollProgress * 2;
  // Cambia el border-radius suavemente de ovalado a rectangular
  const borderRadius = `${50 - scrollProgress * 40}%`;

  return (
    <div className="hero-wrapper">
      <section className="hero-container">
        {/* Texto de fondo */}
        <div className="hero-text">
          <h6>BIENVENIDO A MI</h6>
          <br/>
          <h6>PORTAFOLIO</h6>
        </div>

        {/* Imagen central flotante */}
        <div 
          className="image-wrapper"
          style={{
            transform: `translate(-50%, -50%) scale(${imageScale})`,
            borderRadius: borderRadius
          }}
        >
          <img src={asset_img_random} alt="random pero en blanco"/>
        </div>

        <div className="scroll-indicator">
          SCROLL TO EXPLORE ( ↓ )
        </div>
      </section>

      {/* Espacio adicional para permitir el scroll */}
      <section className="content-section">
        <h2>Siguiente sección...</h2>
      </section>
    </div>
  );
}
export default Body