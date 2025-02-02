import "./Section.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Books from "./Books";
import Contact from "./Contact";
export default function Section() {
  return (
    <>
      <section>
        <div>
          <h1>Welcome to Novel Attic</h1>
          <h4>Where Books Meet Conversation</h4>
        </div>
        {/* Navigation Links */}
        <nav>
          <Link to="/">
            <button>About</button>
          </Link>

          <Link to="/book">
            <button>Books</button>
          </Link>

          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </nav>
        {/* dynamic content area */}
        <div className="contentSection">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/book" element={<Books />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </section>
    </>
  );
}
