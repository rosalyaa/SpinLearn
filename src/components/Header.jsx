import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className="hero">

      <h1 className="logo">SpinLearn</h1>

      <a
        className="github-link"
        href="https://github.com/rosalyaa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        <span>@rosalyaa</span>
      </a>

    </div>
  );
}

export default Header;