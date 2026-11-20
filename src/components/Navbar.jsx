import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">🐝</span>
          <span>
            HoneyBee <b>Solution</b>
            <small>HOME SERVICES</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          <NavLink to="/" onClick={close}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={close}>
            About
          </NavLink>
          <NavLink to="/services" onClick={close}>
            Services
          </NavLink>
          <NavLink to="/contact" onClick={close}>
            Contact
          </NavLink>
          <Link className="nav-call" to="/contact" onClick={close}>
            <Phone size={16} /> Book a service
          </Link>
        </nav>
      </div>
    </header>
  );
}
