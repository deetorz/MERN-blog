import { Link } from "react-router-dom";
import "./Header.scss";
import "../common.scss";

const Header = () => {
  return (
    <header className="header">
      <Link className="header-link color-primary" to={"/"}>
        Derek Noel Torres
      </Link>
    </header>
  );
};

export default Header;
