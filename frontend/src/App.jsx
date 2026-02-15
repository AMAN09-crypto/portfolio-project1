import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Coding from "./pages/Coding";
import Education from "./pages/Education";

function App() {
  return (
    <>
      <Sidebar />

      <div style={{ marginTop: "80px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
