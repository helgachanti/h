import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="site-footer"id="site-footer">
      <div className="footer-content">

        <p>
          © 2026 Mi Portafolio. Todos los derechos reservados.
        </p>

        <div className="social-icons">

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
          >
            <FaPinterest />
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;