import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { submitContact } from "../services/contactService";
import { openWhatsApp } from "../services/whatsappService";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setNotice("");
    try {
      await submitContact(form);
      setNotice(
        "Thank you! Your message has been sent. We will get back to you.",
      );
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setNotice(
        err.message || "Unable to send your message. Please try WhatsApp.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">CONTACT US</span>
          <h1>
            We're here to <em>help.</em>
          </h1>
          <p>
            Have a question or need help choosing a service? Send us a message.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Let's talk about what you need.</h2>
            <p>
              Reach out using the form or WhatsApp. We will follow up using the
              contact details you provide.
            </p>
            <div className="contact-method">
              <Phone />
              <span>
                <b>Phone</b>
                <small>Add your business phone number</small>
              </span>
            </div>
            <div className="contact-method">
              <Mail />
              <span>
                <b>Email</b>
                <small>Add your business email address</small>
              </span>
            </div>
            <div className="contact-method">
              <MapPin />
              <span>
                <b>Service area</b>
                <small>Update with your operating locations</small>
              </span>
            </div>
            <button
              className="btn btn-whatsapp"
              onClick={() =>
                openWhatsApp("Hello HoneyBee Solution, I have an enquiry.")
              }
            >
              <MessageCircle /> Chat on WhatsApp
            </button>
          </div>
          <form className="booking-form contact-form" onSubmit={submit}>
            <h2>Send an enquiry</h2>
            <label>
              Your name *
              <input
                name="name"
                value={form.name}
                onChange={change}
                required
                minLength="2"
                placeholder="Your name"
              />
            </label>
            <label>
              Phone number *
              <input
                name="phone"
                value={form.phone}
                onChange={change}
                required
                minLength="8"
                maxLength="20"
                placeholder="Your phone number"
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={change}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Message *
              <textarea
                name="message"
                value={form.message}
                onChange={change}
                required
                rows="5"
                placeholder="How can we help?"
              />
            </label>
            <button className="btn btn-dark" disabled={busy}>
              {busy ? "Sending..." : "Send message"} <Send size={17} />
            </button>
            {notice && (
              <p className="form-notice" role="status">
                {notice}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
