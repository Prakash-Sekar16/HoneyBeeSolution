import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark">🐝</span>
            <span>
              HoneyBee <b>Solution</b>
              <small>HOME SERVICES</small>
            </span>
          </Link>
          <p>
            One trusted team for the everyday services that keep your home
            running smoothly.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <Link to="/about">About us</Link>
          <Link to="/services">Our services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Get in touch</h4>
          <p>
            <Phone size={15} /> Add your business phone
          </p>
          <p>
            <Mail size={15} /> Add your email address
          </p>
          <p>
            <MapPin size={15} /> Serving homes in your area
          </p>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} HoneyBee Solution. All rights reserved.
      </div>
    </footer>
  );
}
