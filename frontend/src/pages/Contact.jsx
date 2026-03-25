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
        minHeight: "calc(100vh - 64px)",
        padding: "60px 20px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#0c2b33", marginBottom: "40px" }}>Contact Me</h1>
        <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "0 auto" }}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            style={{ width: "100%", padding: "12px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            style={{ width: "100%", padding: "12px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box" }}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            style={{ width: "100%", padding: "12px", marginBottom: "15px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box", minHeight: "150px" }}
          />
          <button type="submit" style={{ width: "100%", padding: "12px", background: "#0c2b33", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "16px" }}>Send</button>
        </form>
        {status && <p style={{ textAlign: "center", marginTop: "20px", fontSize: "16px" ,"color":"#000000"}}>{status}</p>}
      </div>
    </div>
  );
}

export default Contact;
