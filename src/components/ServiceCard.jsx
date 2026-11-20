
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-image">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
        />
      </div>

      <span className="service-tag">{service.tag}</span>

      <h3>{service.name}</h3>

      <p>{service.short}</p>

      <Link to="/contact" className="text-link">
        Book this service
        <ArrowUpRight size={17} />
      </Link>
    </article>
  );
}
