import { Link } from "react-router-dom";
import "./Books.css";
import { useState, useEffect } from "react";
import "./AllBooks.css";

export default function AllBooks() {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://novelatticserver.onrender.com/novels"
        );
        const data = await response.json();
        setbooks(data);
      } catch {
        console.log("Failed to fetch items!");
      }
    }
    fetchData();
  }, []);

  return (
    <section className="section">
      <h2>ALL NOVELS</h2>
      <Link to="/add">
        <button>Add New Book</button>
      </Link>

      <div className="Allbooks">
        {books.length === 0 ? (
          <p>Loading data ...</p>
        ) : (
          books.map((book) => (
            <div key={book.id} className="singleBook">
              <img src={book.src} alt={book.title} />
              <Link to={`/book/${book.id}`}>
                <h2>{book.title}</h2>
              </Link>
              <h5>Book ID: {book.id}</h5>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
