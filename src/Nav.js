import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-container">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="gugudan" className="link">
            구구단
          </Link>
        </li>
        <li>
          <Link to="baseball" className="link">
            숫자야구
          </Link>
        </li>
        <li>
          <Link to="wordrelay" className="link">
            끝말잇기
          </Link>
        </li>
      </ul>
    </nav>
  );
}
