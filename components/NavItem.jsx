import Link from "next/link";
import React from "react";

const NavItem = ({ href, text, active }) => {
  return (
    <Link href={href}>
      <p className={`nav__link ${active ? "active" : ""}`}>{text}</p>
    </Link>
  );
};

export default NavItem;
