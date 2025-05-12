import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BookDetails.css";
import "./Books.css";
import "./form.css";

export default function BookDetails() {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const [singleBook, setSingleBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBookDetails() {
      try {
        const response = await fetch(
          `https://novelatticserver.onrender.com/novels/${bookId}`
        );
        if (!response.ok) throw new Error("Failed to fetch book details");

        const bookData = await response.json();
        setSingleBook(bookData[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
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
      alert("Novel deleted successfully");
      navigate("/book");
    } else {
      alert("Failed to delete novel");
    }
  }

  return (
    <>
      {isLoading ? (
        <div>Loading book...</div>
      ) : singleBook ? (
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

            <Link to={`/update/${singleBook.id}`}>
              <button>Edit</button>
            </Link>

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
