import { useState, useEffect } from "react";
import "./Books.css";

export default function Comments() {
  const [newUserComment, setnewUserComment] = useState({
    username: "",
    email: "",
    comment: "",
    booksId: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", newUserComment);

    fetch("https://novelatticserver.onrender.com/commentdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserComment),
    });
    alert("comment added successfully");
    console.log(newUserComment);
  }

  function handleInputChange(event) {
    setnewUserComment({
      ...newUserComment,
      [event.target.name]: event.target.value,
    });
  }

  const [comments, setcomments] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://novelatticserver.onrender.com/userComments"
        );
        const data = await response.json();
        console.log("data fetched successfully!");

        setcomments(data);
      } catch {
        console.log(" Failed to fetch items!");
      }
    }
    fetchData();
  }, []);

  async function handleDelete(id) {
    const response = await fetch(
      `https://novelatticserver.onrender.com/delete-comment/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      setcomments(comments.filter((comment) => comment.id !== id));
      alert("Comment deleted successfully");
    } else {
      alert("Failed to delete comment");
    }
  }

  return (
    <>
      <section className="section">
        <h2>ADD COMMENT</h2>
        <div className="bookform">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">username: </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Write your username"
              required
              value={newUserComment.username}
              onChange={handleInputChange}
            />
            <label htmlFor="name"> email: </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Write your  email"
              required
              value={newUserComment.email}
              onChange={handleInputChange}
            />

            <label htmlFor="name"> booksId: </label>
            <input
              type="number"
              id="booksId"
              name="booksId"
              placeholder="Write booksId number of the book you wish to comment please"
              required
              value={newUserComment.booksId}
              onChange={handleInputChange}
            />

            <label htmlFor="name"> comment: </label>
            <input
              type="text"
              id="comment"
              name="comment"
              placeholder="Write comment here"
              required
              value={newUserComment.comment}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <h2>ALL Comments</h2>
        <div className="Allbooks">
          {comments.length === 0 ? (
            <p>loading data ...</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="usercomment">
                <h4>{comment.username}</h4>
                <h5>book Id:{comment.booksid}</h5>
                {/* <h6>{comment.email}</h6> */}
                <p>"{comment.comment}"</p>

                {/* adding delete button to each */}
                <button onClick={() => handleDelete(comment.id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
