import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Clock3, ThumbsUp } from "lucide-react";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span /> YOUR HOME, OUR PRIORITY
          </span>
          <h1>
            Home care made <em>simple.</em>
          </h1>
          <p>
            From a dripping tap to a cool, comfortable room, connect with
            dependable home-service professionals without the hassle.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-dark" to="/services">
              Explore services <ArrowRight size={18} />
            </Link>
            <Link className="btn btn-light" to="/contact">
              Request a callback
            </Link>
          </div>
          <div className="trust-row">
            <span>
              <ShieldCheck /> Trusted support
            </span>
            <span>
              <Clock3 /> Convenient booking
            </span>
            <span>
              <ThumbsUp /> Quality focused
            </span>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-photo" />
          <div className="floating-card">
            <span className="floating-icon">✦</span>
            <div>
              <b>Home services, sorted.</b>
              <small>One simple place to start</small>
            </div>
          </div>
          <div className="yellow-orb" />
        </div>
      </div>
    </section>
  );
}
