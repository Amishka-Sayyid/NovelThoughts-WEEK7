import "./About.css";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="About">
        <div className="AboutImg">
          <img
            src="https://www.editorialdepartment.com/wp-content/uploads/2022/01/41878497_-Series-licensed-min.jpg"
            alt="A collection of books in a shelf"
          />
        </div>
        <div className="AboutText">
          <h2>About Us</h2>
          <p>
            Welcome to <em>Novel Attic</em>, the ultimate space for book lovers
            to connect, share, and discuss their favorite novels! Here, you can
            read and post thoughtful comments on the novels we've added, or
            contribute your own titles to the ever-growing collection. Join the
            community, explore new books, and dive into engaging discussions
            with fellow readers. Whether you're looking to share your thoughts
            or discover fresh perspectives,<em> Novel Attic </em>is your go-to
            platform for all things literary!
          </p>
          <div>
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
      </section>
    </>
  );
}
