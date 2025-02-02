import { Routes, Route, Link } from "react-router-dom";
import AllBooks from "./AllBooks";
import BookDetails from "./BookDetails";
export default function Books() {
  return (
    <>
      <section>
        {/* dynamic content area to display all books */}
        <div className="ViewSection">
          <Routes>
            <Route path="/" element={<AllBooks />} />
            <Route path="/book/:bookId" element={<BookDetails />} />
          </Routes>
        </div>
        <nav className="BookNavLinks">
          <Link to="/book">
            <button>All Books</button>
          </Link>
        </nav>
      </section>
    </>
  );
}
