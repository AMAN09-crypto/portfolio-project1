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
  minHeight: "calc(100vh - 64px)",
  padding: "60px 20px",
  background: "#ffffff",
};

const container = {
  maxWidth: "900px",
  margin: "0 auto",
};

const heading = { margin: 0, fontSize: "54px", color: "#0c2b33", textAlign: "center" };
const sub = { marginTop: "10px", marginBottom: "30px", textAlign: "center", color: "#666" };
