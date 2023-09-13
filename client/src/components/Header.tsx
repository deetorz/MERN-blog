import { Link } from "react-router-dom";
import "./Header.scss";
import "../common.scss";

const Header = () => {
  return (
    <header className="header">
      <Link className="header-link color-primary" to={"/"}>
        Derek Noel Torres
      </Link>
      <span>
        <Link className="header-link color-secondary" to={"/login"}>
          Login
        </Link>
        <Link className="header-link color-secondary" to={"/register"}>
          Register
        </Link>
      </span>
    </header>
  );
};

export default Header;
