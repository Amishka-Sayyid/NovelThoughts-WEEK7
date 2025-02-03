import { useParams } from "react-router-dom";
import "./BookDetails.css";
import { Link } from "react-router-dom";
import "./Books.css";

export default function BookDetails() {
  let { bookId } = useParams();

  console.log("Book ID from URL:", bookId);
  return (
    <>
      <div className="bookdetailpage">
        <h1>Hello suprise!!!</h1>

        <h2>book clicked id number {bookId}</h2>

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
      </div>
    </>
  );
}
