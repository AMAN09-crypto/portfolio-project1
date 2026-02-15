function About() {
  return (
    <div
      style={{
        padding: "80px 20px",
        minHeight: "100vh",
        background: "#f5f7fb",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", fontSize: "48px", color: "#ff6b35" }}>
          About Me
        </h1>

        <div
          style={{
            background: "white",
            marginTop: "40px",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.10)",
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
