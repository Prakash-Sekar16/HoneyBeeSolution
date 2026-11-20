import { Link } from "react-router-dom";
import { HeartHandshake, Home, ClipboardCheck } from "lucide-react";
export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">ABOUT HONEYBEE</span>
          <h1>
            A helping hand for <em>your home.</em>
          </h1>
          <p>
            We want home maintenance to feel easier to arrange, easier to
            understand and less stressful.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-emoji">🐝</div>
            <span>Small details. Better home care.</span>
          </div>
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2>Connecting households with home-service support.</h2>
            <p>
              HoneyBee Solution brings common home-service needs together in one
              convenient place. Whether you need an electrical repair, plumbing
              help, CCTV installation or AC service, you can send us your
              requirements and our team will follow up.
            </p>
            <div className="about-points">
              <p>
                <HeartHandshake /> Helpful communication from enquiry to
                follow-up
              </p>
              <p>
                <Home /> Services designed around residential needs
              </p>
              <p>
                <ClipboardCheck /> Clear booking details to understand your
                request
              </p>
            </div>
            <Link to="/contact" className="btn btn-dark">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
