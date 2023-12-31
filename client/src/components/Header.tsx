import { Link, Navigate } from "react-router-dom";
import "./Header.scss";
import "../common.scss";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

const Header = () => {
  const { setUserInfo, userInfo }: any = useContext(UserContext);
  const username = userInfo?.username;
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    // fetch logout url from backend, include credentials, use post method
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    return <Navigate to={"/"} />;
  }

  return (
    <header className="header">
      <Link className="header-link color-primary" to={"/"}>
        Derek Noel Torres
      </Link>
      <span>
        {username && (
          <>
            <Link
              className="header-link color-accent-green"
              to={"/create-post"}
            >
              New Post
            </Link>
            <a
              onClick={logout}
              className="header-link color-accent-green cursor-pointer"
            >
              Log Out
            </a>
          </>
        )}
      </span>
    </header>
  );
};

export default Header;
