import "./Section.css";
import "./media.css";
import { Routes, Route, Link } from "react-router-dom";
import BookDetails from "./BookDetails";
import About from "./About";
import Books from "./Books";
import Contact from "./Contact";
export default function Section() {
  return (
    <>
      <section className="center">
        <div className="MainSection">
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
        </div>
        {/* dynamic content area */}
        <div className="linkViewSection">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/book" element={<Books />} />
            <Route path="/contact" element={<Contact />} />

            {/* here i realised i was tyring to place this route in allbooks and when i clicked
            on the link yes it went to dedicated route but the content in bookdetails wasn't showing
            after i swiched the route and linked it here instead of allbooks the page rendered the contents i saved
             */}
            <Route path="/book/:bookId" element={<BookDetails />} />
          </Routes>
        </div>
      </section>
    </>
  );
}
