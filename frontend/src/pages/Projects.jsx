function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "My personal portfolio built with React. Includes pages, routing, and a contact form connected to backend + MongoDB.",
      tech: ["React", "React Router", "Node", "MongoDB"],
      link: "https://github.com/", // change later
    },
    {
      title: "Python Mini Project",
      desc: "A Python project that helps solve a real problem (update later with your exact project).",
      tech: ["Python"],
      link: "https://github.com/", // change later
    },
    {
      title: "Java / C++ Practice Project",
      desc: "A project where I practiced core concepts and improved problem solving skills.",
      tech: ["Java", "C++"],
      link: "https://github.com/", // change later
    },
  ];

  return (
    <div
      style={{
        padding: "80px 20px",
        minHeight: "100vh",
        background: "#f5f7fb",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", fontSize: "48px", marginBottom: "10px", color: "#ff6b35" }}>
          My Projects
        </h1>

        <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
          Here are some projects I have built while learning and improving my skills.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "22px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.10)",
                border: "1px solid rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div>
                <h2 style={{ margin: 0, color: "#111" }}>{p.title}</h2>
                <p style={{ marginTop: "10px", color: "#444", lineHeight: "1.6" }}>
                  {p.desc}
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: "6px 10px",
                      borderRadius: "999px",
                      background: "#fff3ee",
                      color: "#ff6b35",
                      fontWeight: 700,
                      fontSize: "12px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: "6px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  background: "#ff6b35",
                  color: "white",
                  fontWeight: 800,
                  width: "fit-content",
                }}
              >
                View Project →
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

export default Projects;
