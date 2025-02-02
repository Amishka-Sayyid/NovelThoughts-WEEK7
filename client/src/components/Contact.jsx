import "./About.css";

import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <section className="About">
        <div className="AboutImg">
          <img
            src="https://media.istockphoto.com/id/949118068/photo/books.jpg?s=612x612&w=0&k=20&c=1vbRHaA_aOl9tLIy6P2UANqQ27KQ_gSF-BH0sUjQ730="
            alt="A stack of books on a table"
          />
        </div>
        <div className="AboutText">
          <h2>Contact Us</h2>
          <ul>
            <ol>Phone Number:+44 7234567891 </ol>
            <ol>Email: novelattic@gmail.com</ol>
            <ol>Address: 12 anywhere street, le1 2mk</ol>
          </ul>
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
