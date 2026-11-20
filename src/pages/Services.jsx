import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Link } from "react-router-dom";
export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">OUR SERVICES</span>
          <h1>
            One place for your <em>home needs.</em>
          </h1>
          <p>
            Choose a service to get started. Share your requirement and we will
            contact you about the next steps.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className="service-cta">
            <div>
              <h2>Not sure what you need?</h2>
              <p>
                Tell us what is happening and we will help direct your enquiry.
              </p>
            </div>
            <Link className="btn btn-dark" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
