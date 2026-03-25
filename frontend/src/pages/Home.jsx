import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        padding: "60px 20px",
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "#ffffff",
          borderRadius: "0px",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "56px", color: "#0c2b33", marginBottom: "10px" }}>Hi, I'm Aman Kumar 👋</h1>
        <p style={{ fontSize: "20px", color: "#555", marginBottom: "40px" }}>Full Stack Developer | Problem Solver | Tech Enthusiast</p>

        <Link to="/projects">
          <button style={{ padding: "12px 30px", fontSize: "16px", background: "#0c2b33", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>View My Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
