import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./form.css";

export default function Update() {
  const { bookId } = useParams();
  console.log(bookId);
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    src: "",
    title: "",
    author: "",
    synopsis: "",
  });

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch(
        `https://novelatticserver.onrender.com/novels/${bookId}`
      );
      const data = await response.json();
      setBookData(data[0]);
    }
    fetchBook();
  }, [bookId]);

  function handleChange(e) {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  }

  async function handleUpdate(e) {
    e.preventDefault();
    console.log(bookData);
    const response = await fetch(
      `https://novelatticserver.onrender.com/update-book/${bookId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      }
    );

    if (response.ok) {
      alert("Book updated successfully!");
      navigate("/book");
    } else {
      alert("Failed to update book.");
    }
  }

  return (
    <section className="section">
      <h2>Update Book</h2>

      <form onSubmit={handleUpdate} className="bookform">
        <label>Book Title:</label>
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={handleChange}
          placeholder="Title"
        />

        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleChange}
          placeholder="Author"
        />

        <label>Image URL:</label>
        <input
          type="text"
          name="src"
          value={bookData.src}
          onChange={handleChange}
          placeholder="Image URL"
        />

        <label>Synopsis:</label>
        <textarea
          name="synopsis"
          value={bookData.synopsis}
          onChange={handleChange}
          placeholder="Synopsis"
        ></textarea>
        <button type="submit">Update Book</button>
      </form>
    </section>
  );
}
