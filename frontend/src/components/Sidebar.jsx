import { Link } from "react-router-dom";

function Sidebar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginLeft: "18px",
    fontWeight: "600",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "64px",
        background: "#0c2b33",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 26px",
        zIndex: 999,
      }}
    >
      <div style={{ color: "white", fontSize: "22px", fontWeight: "800" }}>
        Aman Kumar
      </div>

      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/work" style={linkStyle}>Work</Link>
        <Link to="/education" style={linkStyle}>Education</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/coding" style={linkStyle}>Coding</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

export default Sidebar;
