import "./Books.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
export default function AllBooks() {
  const [newData, setnewData] = useState({
    src: "",
    title: "",
    author: "",
    synopsis: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", newData);

    fetch("https://novelatticserver.onrender.com/noveldata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    alert("book added successfully");
    console.log(newData);
  }

  function handleInputChange(event) {
    setnewData({
      ...newData,
      [event.target.name]: event.target.value,
    });
  }

  const [books, setbooks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://novelatticserver.onrender.com/novels"
        );
        const data = await response.json();
        console.log("data fetched successfully!");

        setbooks(data);
      } catch {
        console.log(" Failed to fetch items!");
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="section">
        <h2>ADD BOOK</h2>
        <div className="bookform">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">book title: </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Write your the book title"
              required
              value={newData.title}
              onChange={handleInputChange}
            />

            <label htmlFor="name">author: </label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Write author name"
              required
              value={newData.author}
              onChange={handleInputChange}
            />

            <label htmlFor="name">image url: </label>
            <input
              type="text"
              id="src"
              name="src"
              placeholder="Write image url"
              required
              //
              value={newData.src}
              onChange={handleInputChange}
            />

            <label htmlFor="name">synopsis: </label>
            <input
              type="text"
              id="synopsis"
              name="synopsis"
              placeholder="Write synopsis"
              required
              //
              value={newData.synopsis}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="books">
          <h2>ALL NOVELS</h2>

          <div className="Allbooks">
            {books.length === 0 ? (
              <p>loading data ...</p>
            ) : (
              books.map((book) => (
                <div key={book.id} className="singleBook">
                  <img src={`${book.src}`} alt={book.title} />

                  <Link to={`/book/${book.id}`}>
                    <h4>{book.title}</h4>
                  </Link>

                  <h5>book Id:{book.id} </h5>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
