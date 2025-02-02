import { useParams } from "react-router-dom";
import "./BookDetails.css";
import { useEffect, useState } from "react";

export default function BookDetails() {
  const { bookId } = useParams();

  const [singleBook, setsingleBook] = useState(null);

  useEffect(() => {
    async function fetchBookDetails() {
      const response = await fetch(
        `https://novelatticserver.onrender.com/novels/${bookId}`
      );
      const bookData = await response.json();
      setsingleBook(bookData);
    }
    fetchBookDetails();
  }, [bookId]);

  return (
    <>
      <h2>book id number {bookId}</h2>

      <div className="book-details">
        <h2>{singleBook.title}</h2>
        <h4>{singleBook.author}</h4>
        <img src={singleBook.src} alt={singleBook.title} />
        <p>{singleBook.synopsis}</p>
      </div>
    </>
  );
}
