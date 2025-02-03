import { Routes, Route, Link } from "react-router-dom";
import AllBooks from "./AllBooks";
import Comments from "./Comments";
import "./Books.css";
export default function Books() {
  return (
    <>
      <section>
        {/* dynamic content area to display all books */}
        <div className="ViewSection">
          <Routes>
            <Route path="/" element={<AllBooks />} />
          </Routes>

          <Comments />
        </div>
        <div className="BookNavLinks">
          <Link to="/">
            <button>About</button>
          </Link>

          <Link to="/book">
            <button>Books</button>
          </Link>

          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
      </section>
    </>
  );
}
