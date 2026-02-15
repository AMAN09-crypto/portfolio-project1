function Work() {
  const experiences = [
    {
      title: "Student (BCA - Pursuing)",
      place: "Your College Name",
      time: "Current",
      points: [
        "Learning programming and building projects",
        "Improving problem solving and coding skills",
      ],
    },
    {
      title: "Academic Projects",
      place: "College / Self Projects",
      time: "2025 — Present",
      points: [
        "Built portfolio website using React",
        "Created small apps while learning Java / C++ / Python",
      ],
    },
    {
      title: "Coding Practice",
      place: "Self Learning",
      time: "Daily / Weekly",
      points: [
        "Practicing DSA basics and programming logic",
        "Solving problems to improve speed and accuracy",
      ],
    },
  ];

  return (
    <div style={{ padding: "70px 20px", minHeight: "100vh", background: "#f5f7fb" }}>
      <h1 style={{ textAlign: "center", color: "#ff6b35", fontSize: "46px" }}>
        Experience
      </h1>

      <p style={{ textAlign: "center", color: "#666", marginTop: "10px" }}>
        I am a student currently building skills through learning and projects.
      </p>

      <div style={{ maxWidth: "900px", margin: "40px auto", position: "relative" }}>
        {/* vertical line */}
        <div
          style={{
            position: "absolute",
            left: "22px",
            top: "10px",
            bottom: "10px",
            width: "4px",
            background: "#ff6b35",
            borderRadius: "10px",
            opacity: 0.7,
          }}
        />

        {experiences.map((item, idx) => (
          <div key={idx} style={{ display: "flex", gap: "16px", marginBottom: "22px" }}>
            {/* dot */}
            <div style={{ width: "48px", display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  height: "38px",
                  width: "38px",
                  borderRadius: "50%",
                  background: "#ff6b35",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "800",
                }}
              >
                🎓
              </div>
            </div>

            {/* card */}
            <div
              style={{
                flex: 1,
                background: "white",
                borderRadius: "14px",
                padding: "22px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                borderLeft: "5px solid #ff6b35",
              }}
            >
              <h2 style={{ margin: 0, color: "#ff6b35" }}>{item.title}</h2>
              <div style={{ marginTop: "6px", color: "#444", fontWeight: "600" }}>
                {item.place}
              </div>
              <div style={{ marginTop: "4px", color: "#777" }}>{item.time}</div>

              <ul style={{ marginTop: "14px", color: "#444", lineHeight: "1.6" }}>
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <p style={{ textAlign: "center", marginTop: "60px", color: "#888" }}>
        © 2026 Aman Kumar. All rights reserved.
      </p>
    </div>
  );
}

export default Work;
