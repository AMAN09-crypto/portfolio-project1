import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hi, I'm Aman Kumar 👋</h1>
      <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>

      <Link to="/work">
        <button>View My Work</button>
      </Link>
    </div>
  );
}

export default Home;
