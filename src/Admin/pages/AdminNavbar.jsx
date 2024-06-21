import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/footerlogoimg.svg"
export default function AdminNavbar() {
  return (
    <React.Fragment>
      <div className="admin-navbar">
        <img
          className="admin-navbar__img"
          src={logo}
          alt="Right finance's logo"
          width={150}
          height={80}
        />
        <ul className="admin-navbar__list">
          <li className="admin-navbar__item">
            <Link className="admin-navbar__link" to="/admin">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
