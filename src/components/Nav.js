import React from "react";
import Logo from "../assets/got-header.svg";

const Nav = () => {
  return (
    <header>
      <nav className="nav-bar">
        <i className="fas fa-align-left icon burger"></i>
        <img src={Logo} alt="got-header" className="logo" />
      </nav>
    </header>
  );
};

export default Nav;
