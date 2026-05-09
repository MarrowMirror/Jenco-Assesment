interface Props {
  onBookClick: () => void;
}

export default function Footer({ onBookClick }: Props) {
  return (
    <footer className="footer section">
      <div className="container footer__inner">
        <div className="footer__content">
          <div className="footer__brand">
            <h3>Jenco IT Solutions</h3>
            <p>Managed IT services for modern construction firms.</p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4>Services</h4>
              <a href="#services">IT Infrastructure</a>
              <a href="#services">Cybersecurity</a>
              <a href="#services">Cloud Solutions</a>
            </div>

            <div className="footer__column">
              <h4>Support</h4>
              <button type="button" className="footer__link-button" onClick={onBookClick}>
                Contact Us
              </button>
              <a href="#faq">FAQ</a>
              <a href="#case-study">Case Studies</a>
            </div>

            <div className="footer__column">
              <h4>Legal</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Jenco IT Solutions. All rights reserved.</p>
          <div className="footer__social">
            <a href="#linkedin" aria-label="LinkedIn">LinkedIn</a>
            <a href="#twitter" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}