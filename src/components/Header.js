import React from "react";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <nav>
      <img src={logo} alt="logo airB&B" className="header--logo" />
    </nav>
  );
}
