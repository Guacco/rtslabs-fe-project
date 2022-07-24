import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex flex-row justify-between py-10">
      <span className="text-4xl font-bold pl-10">Hacker News Search</span>
      <ul className="flex flex-row gap-4 text-lg pr-16">
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
