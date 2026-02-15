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
        padding: "70px 20px",
        minHeight: "100vh",
        background: "#f5f7fb",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#ff6b35", fontSize: "46px" }}>
        Coding Profiles
      </h1>

      <p style={{ textAlign: "center", color: "#666", marginTop: "10px" }}>
        Where you can find my coding work and progress
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "22px",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {profiles.map((p, i) => (
          <div
            key={i}
            style={{
              background: "white",
              borderRadius: "14px",
              padding: "26px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            }}
          >
            <h2 style={{ color: "#ff6b35" }}>{p.name}</h2>
            <p style={{ marginTop: "10px", color: "#444" }}>{p.desc}</p>

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "16px",
                color: "#ff6b35",
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
  );
}

export default Coding;
