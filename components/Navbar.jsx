import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const menu_list = [
  {
    text: "RECIPES",
    href: "/",
  },
  {
    text: "ABOUT",
    href: "/about",
  },
  {
    text: "CONTACT",
    href: "/contact",
  },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <header>
      <nav className="nav">
        <Link onClick={() => setActiveIdx(0)} href={"/"}>
          <h1 className="logo">Dish Discoveries</h1>
        </Link>
        <div onClick={() => setNavActive(!navActive)} className="nav__menu-bar">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div
          className={`${navActive ? "active" : ""}
        nav__menu-list`}
        >
          {menu_list.map((menu, idx) => {
            return (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
