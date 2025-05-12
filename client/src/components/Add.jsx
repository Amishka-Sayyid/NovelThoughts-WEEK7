import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Books.css";

export default function Add() {
  const [newData, setnewData] = useState({
    src: "",
    title: "",
    author: "",
    synopsis: "",
  });

  const navigate = useNavigate();

  function handleInputChange(event) {
    setnewData({
      ...newData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://novelatticserver.onrender.com/noveldata",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newData),
        }
      );

      if (response.ok) {
        alert("Book added successfully");
        navigate("/book"); // Go back to the books list
      } else {
        alert("Failed to add book");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  return (
    <section className="section">
      <h2>ADD BOOK</h2>

      <form onSubmit={handleSubmit} className="bookform">
        <label>Book Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Book title"
          value={newData.title}
          onChange={handleInputChange}
          required
        />
        <label>Author:</label>
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newData.author}
          onChange={handleInputChange}
          required
        />
        <label>Image URL:</label>
        <input
          type="text"
          name="src"
          placeholder="Image URL"
          value={newData.src}
          onChange={handleInputChange}
          required
        />
        <label>Synopsis:</label>
        <textarea
          type="text"
          name="synopsis"
          placeholder="Synopsis"
          value={newData.synopsis}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
