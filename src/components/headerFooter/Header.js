import React from "react";

import Logo from "../../img/logo.png";

const Header = (props) => (
  <div className="header">
    <img className="header__logo" src={Logo} alt="logo" />
    <h1 className="header__title">{props.appTitle}</h1>
  </div>
);

export default Header;
