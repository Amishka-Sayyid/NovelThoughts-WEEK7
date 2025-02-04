import { useParams } from "react-router-dom";
import "./BookDetails.css";
import { Link } from "react-router-dom";
import "./Books.css";

import { useEffect, useState } from "react";

export default function BookDetails() {
  let { bookId } = useParams();

  let [singleBook, setsingleBook] = useState(null);
  useEffect(() => {
    async function fetchBookDetails() {
      const response = await fetch(
        `https://novelatticserver.onrender.com/novels/${bookId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch book details");
      }

      const bookData = await response.json();
      setsingleBook(bookData[0]);
    }
    fetchBookDetails();
  }, [bookId]);

  console.log("Book ID from URL:", bookId);
  console.log(singleBook);
  return (
    <>
      <div className="bookdetailpage">
        <h1>Hello suprise!!!</h1>

        <h1>Book Details of book Id: {bookId}</h1>
        <br />
        {singleBook ? (
          <div>
            <h5>{singleBook.title}</h5>
            <br />
            <p>{singleBook.synopsis}</p>
            <br />
            <p>Author: {singleBook.author}</p>
            <img src={singleBook.src} alt={singleBook.title} />
          </div>
        ) : (
          <div>No book data found!</div>
        )}

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
