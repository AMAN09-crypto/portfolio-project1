export default function PageLayout({ title, subtitle, children }) {
  return (
    <div style={page}>
      <div style={container}>
        <h1 style={heading}>{title}</h1>
        {subtitle ? <p style={sub}>{subtitle}</p> : null}
        <div style={{ marginTop: "22px" }}>{children}</div>
      </div>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  padding: "90px 16px 40px",
  background: "#1f2937",
};

const container = {
  maxWidth: "860px",
  margin: "0 auto",
  background: "#f8fafc",
  borderRadius: "18px",
  padding: "28px 20px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
};

const heading = { margin: 0, fontSize: "54px", color: "#f97316", textAlign: "center" };
const sub = { marginTop: "10px", marginBottom: 0, textAlign: "center", color: "#475569" };
