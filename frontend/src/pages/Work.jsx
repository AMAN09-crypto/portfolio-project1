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
          Experience
        </h1>

        <p style={{ textAlign: "center", color: "#666", marginTop: "10px", marginBottom: "40px" }}>
          I am a student currently building skills through learning and projects.
        </p>

        <div
          style={{
            position: "relative",
          }}
        >
          {/* vertical line */}
          <div
            style={{
              position: "absolute",
              left: "22px",
              top: "10px",
              bottom: "10px",
              width: "4px",
              background: "#0c2b33",
              borderRadius: "10px",
              opacity: 0.3,
            }}
          />

          {experiences.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: "16px",
                marginBottom: "22px",
                flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              {/* dot */}
              <div
                style={{
                  width: "48px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    height: "38px",
                    width: "38px",
                    borderRadius: "50%",
                    background: "#0c2b33",
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
                  background: "#f8f9fa",
                  borderRadius: "8px",
                  padding: "22px",
                  borderLeft: "5px solid #0c2b33",
                }}
              >
                <h2 style={{ margin: 0, color: "#0c2b33" }}>{item.title}</h2>
                <div
                  style={{
                    marginTop: "6px",
                    color: "#555",
                    fontWeight: "600",
                  }}
                >
                  {item.place}
                </div>
                <div style={{ marginTop: "4px", color: "#888" }}>
                  {item.time}
                </div>

                <ul
                  style={{
                    marginTop: "14px",
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "60px",
            color: "#888",
            borderTop: "1px solid #eee",
            paddingTop: "20px",
          }}
        >
          © 2026 Aman Kumar. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Work;
