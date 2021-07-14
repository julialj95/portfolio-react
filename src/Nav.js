import { Link } from "react-router-dom";
function Nav() {
  return (
    <ul>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/projects">
        <li>Projects</li>
      </Link>
      <Link to="work-with-me">
        <li>Work with Me</li>
      </Link>
    </ul>
  );
}

export default Nav;
