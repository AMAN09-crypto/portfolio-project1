function Coding() {
  const profiles = [
    {
      name: "GitHub",
      desc: "Check out my projects and code repositories",
      link: "https://github.com/",
    },
    {
      name: "LinkedIn",
      desc: "Connect with me professionally",
      link: "https://linkedin.com/",
    },
    {
      name: "Coding Practice",
      desc: "Learning and improving programming skills daily",
      link: "#",
    },
  ];

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
        <h1 style={{ textAlign: "center", color: "#0c2b33", fontSize: "46px" }}>
          Coding Profiles
        </h1>

        <p style={{ textAlign: "center", color: "#666", marginTop: "10px", marginBottom: "40px" }}>
          Where you can find my coding work and progress
        </p>

        <div
          style={{
            marginTop: "0px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {profiles.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#f8f9fa",
                borderRadius: "8px",
                padding: "26px",
                textAlign: "center",
                border: "1px solid #e0e0e0",
              }}
            >
              <h2 style={{ color: "#0c2b33" }}>{p.name}</h2>
              <p style={{ marginTop: "10px", color: "#555" }}>{p.desc}</p>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "16px",
                  color: "#0c2b33",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Visit →
              </a>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: "60px", color: "#888" }}>
          © 2026 Aman Kumar. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Coding;
