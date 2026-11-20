import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Headset,
  House,
  BadgeCheck,
} from "lucide-react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import BookingForm from "../components/BookingForm";
import { services } from "../data";
export default function Home() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <div className="section-top">
            <div>
              <span className="eyebrow">WHAT WE CAN HELP WITH</span>
              <h2>Reliable help for every corner of your home.</h2>
            </div>
            <Link to="/services" className="text-link">
              View all services <ArrowRight size={17} />
            </Link>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>
      <section className="why-section">
        <div className="container why-grid">
          <div>
            <span className="eyebrow">THE HONEYBEE DIFFERENCE</span>
            <h2>
              Less searching.
              <br />
              <em>More living.</em>
            </h2>
            <p>
              Finding the right person for home repairs should feel
              straightforward. Tell us what you need and we will help you take
              the next step.
            </p>
            <Link className="btn btn-dark" to="/about">
              Get to know us <ArrowRight size={17} />
            </Link>
          </div>
          <div className="benefit-list">
            <div>
              <CheckCircle2 />
              <span>
                <b>Multiple services, one place</b>
                <small>Electrical, plumbing, CCTV and AC support.</small>
              </span>
            </div>
            <div>
              <Headset />
              <span>
                <b>Easy ways to reach us</b>
                <small>Send a booking request or start a WhatsApp chat.</small>
              </span>
            </div>
            <div>
              <BadgeCheck />
              <span>
                <b>Service-focused approach</b>
                <small>
                  We aim to make every enquiry clear and convenient.
                </small>
              </span>
            </div>
            <div>
              <House />
              <span>
                <b>Made for homes</b>
                <small>Designed around residential service needs.</small>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section booking-section" id="booking">
        <div className="container booking-layout">
          <div className="booking-intro">
            <span className="eyebrow">BOOK IN A FEW STEPS</span>
            <h2>Tell us what your home needs.</h2>
            <p>
              Fill in the form and our team can follow up with you to discuss
              the service, timing and next steps.
            </p>
            <div className="mini-note">
              Prefer a quick conversation? Use the WhatsApp option in the form.
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
