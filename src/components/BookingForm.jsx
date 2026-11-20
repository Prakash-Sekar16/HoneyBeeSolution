import { useState } from "react";
import { submitBooking } from "../services/bookingService";
import { uploadServicePhoto } from "../services/storageService";
import { openWhatsApp } from "../services/whatsappService";
import { services } from "../data";
import { Send, MessageCircle } from "lucide-react";
const initial = {
  customerName: "",
  phone: "",
  email: "",
  service: "Electrical",
  address: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};
export default function BookingForm() {
  const [form, setForm] = useState(initial);
  const [photo, setPhoto] = useState(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setNotice("");
    try {
      const imageUrl = photo ? await uploadServicePhoto(photo) : "";
      const id = await submitBooking({ ...form, imageUrl });
      setNotice(
        `Booking request submitted! Reference: ${id.slice(0, 8)}. We will contact you soon.`,
      );
      setForm(initial);
      setPhoto(null);
      e.target.reset();
    } catch (err) {
      console.error(err);
      setNotice(
        err.message || "Unable to submit. Please try WhatsApp instead.",
      );
    } finally {
      setBusy(false);
    }
  }
  const whatsapp = () =>
    openWhatsApp(
      `Hello HoneyBee Solution, I need ${form.service} service. Name: ${form.customerName}. Phone: ${form.phone}. Address: ${form.address}. Preferred date: ${form.preferredDate}. Details: ${form.message}`,
    );
  return (
    <form className="booking-form" onSubmit={submit}>
      <div className="form-heading">
        <span className="eyebrow">LET'S GET IT FIXED</span>
        <h2>Book a home service</h2>
        <p>Share a few details and our team will get back to you.</p>
      </div>
      <div className="form-grid">
        <label>
          Full name *
          <input
            name="customerName"
            value={form.customerName}
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
            placeholder="Your contact number"
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={change}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Service required *
          <select name="service" value={form.service} onChange={change}>
            {services.map((s) => (
              <option key={s.id}>{s.name.replace(" Services", "")}</option>
            ))}
          </select>
        </label>
        <label className="full-field">
          Service address *
          <input
            name="address"
            value={form.address}
            onChange={change}
            required
            placeholder="House number, street, area, city"
          />
        </label>
        <label>
          Preferred date
          <input
            name="preferredDate"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={form.preferredDate}
            onChange={change}
          />
        </label>
        <label>
          Preferred time
          <select
            name="preferredTime"
            value={form.preferredTime}
            onChange={change}
          >
            <option value="">Flexible</option>
            <option>Morning (9 AM - 12 PM)</option>
            <option>Afternoon (12 PM - 4 PM)</option>
            <option>Evening (4 PM - 7 PM)</option>
          </select>
        </label>
        <label className="full-field">
          Tell us what you need
          <textarea
            name="message"
            value={form.message}
            onChange={change}
            rows="3"
            placeholder="Describe the issue or work required"
          />
        </label>
        <label className="full-field">
          Attach a photo (optional, max 5 MB)
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files?.[0] || null)}
          />
        </label>
      </div>
      <div className="form-actions">
        <button className="btn btn-dark" disabled={busy}>
          {busy ? "Submitting..." : "Submit booking"} <Send size={17} />
        </button>
        <button type="button" className="btn btn-whatsapp" onClick={whatsapp}>
          <MessageCircle size={17} /> WhatsApp instead
        </button>
      </div>
      {notice && (
        <p className="form-notice" role="status">
          {notice}
        </p>
      )}
      <small className="form-privacy">
        Your details are used only to respond to this service request.
      </small>
    </form>
  );
}
