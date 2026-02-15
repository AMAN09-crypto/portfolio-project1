import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setStatus("✅ Message Sent Successfully");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to Send");
      }

    } catch {
      setStatus("❌ Server Not Reachable");
    }
  };

  return (
    <div
      style={{
        padding: "80px 20px",
        minHeight: "100vh",
        background: "#f5f7fb",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", fontSize: "48px", color: "#ff6b35" }}>
          Contact Me
        </h1>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.10)",
            marginTop: "30px"
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
            />

            <button
              type="submit"
              style={{
                background: "#ff6b35",
                color: "white",
                padding: "12px",
                width: "100%",
                border: "none",
                borderRadius: "10px"
              }}
            >
              Send Message
            </button>
          </form>

          <p style={{ marginTop: "15px" }}>{status}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
