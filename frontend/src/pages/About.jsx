function About() {
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
        <h1 style={{ textAlign: "center", fontSize: "48px", color: "#0c2b33" }}>
          About Me
        </h1>

        <div
          style={{
            background: "#f8f9fa",
            marginTop: "40px",
            padding: "30px",
            borderRadius: "8px",
          }}
        >
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}>
            Hi, I am <b>Aman Kumar</b>, currently pursuing <b>BCA</b>.  
            I am passionate about software development and full stack web development.
          </p>

          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}>
            I have strong fundamentals in <b>Java, C++ and Python</b>.  
            I enjoy building real world projects and improving my problem solving skills.
          </p>

          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}>
            Currently I am focusing on <b>Full Stack Development using React, Node.js and MongoDB</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
