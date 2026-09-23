import React from 'react'

function Footer() {
  return (
    <footer className="site-footer">
  <div className="footer-content">
    <p>© 2026 Mi Portafolio. Todos los derechos reservados.</p>
    
    <div className="social-icons">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
        <i className="fab fa-x-twitter"></i>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
        <i className="fab fa-pinterest-p"></i>
      </a>
    </div>
  </div>
</footer>
  )
}

export default Footer