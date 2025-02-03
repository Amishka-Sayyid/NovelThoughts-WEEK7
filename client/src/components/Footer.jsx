import "./Section.css";
import "./media.css";
export default function Footer() {
  return (
    <>
      <a className="gotopbtn" href="">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
      <footer className="footer">
        <div className="sociallinks">
          <a href="https://github.com/Amishka-Sayyid" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <h1> © 2025 Novel Attic</h1>
      </footer>
    </>
  );
}
