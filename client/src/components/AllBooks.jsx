import "./Books.css";
import { useState } from "react";

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

    fetch("http://localhost:8080/noveldata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    console.log(newData);
  }

  function handleInputChange(event) {
    setnewData({
      ...newData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <section>
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
      </section>
    </>
  );
}
