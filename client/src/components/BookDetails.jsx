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

  async function handleDelete(id) {
    const response = await fetch(
      `https://novelatticserver.onrender.com/delete-book/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      setbooks(books.filter((book) => book.id !== id));
      alert("novel deleted successfully");
    } else {
      alert("Failed to delete novel");
    }
  }
  console.log("Book ID from URL:", bookId);
  console.log(singleBook);
  return (
    <>
      {singleBook ? (
        <article className="book-container">
          <aside>
            <img src={singleBook.src} alt={`Cover of ${singleBook.title}`} />
          </aside>
          <div>
            <h1>{singleBook.title}</h1>
            <h1>
              <strong>Author:</strong> {singleBook.author}
            </h1>
            <p>{singleBook.synopsis}</p>
            <button onClick={() => handleDelete(singleBook.id)}>Delete</button>
          </div>
        </article>
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
    </>
  );
}
