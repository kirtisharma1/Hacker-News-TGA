import React, { useContext } from "react";
// import logo from "../../static/logo.gif";
import { GlobalContext } from "../../store/context";
import {
  HEADER_NEW_LABEL,
  HEADER_TOP_LABEL,
  HEADER_TITLE,
} from "../../constants";
import { updateSortType } from "../../store/action";

export default function Header() {
  const { state, dispatch } = useContext(GlobalContext);
  const { sortType } = state;

  return (
    <header className="header container-wrapper">
      {/* <img src={logo} className="header__logo" alt="logo" /> */}
      <h1>{HEADER_TITLE}</h1>
      <nav className="header__navigation">
        <ul className="header__menu-list">
          <li className="header__list-item">
            <button
              type="button"
              className={`btn-empty header__list-item--${
                sortType === HEADER_TOP_LABEL ? "active" : "deactive"
              }`}
              onClick={() => updateSortType(HEADER_TOP_LABEL, dispatch)}
            >
              {HEADER_TOP_LABEL}
            </button>
          </li>
          <li className="header__list-item"> | </li>
          <li className="header__list-item">
            <button
              type="button"
              className={`btn-empty header__list-item--${
                sortType === HEADER_NEW_LABEL ? "active" : "deactive"
              }`}
              onClick={() => updateSortType(HEADER_NEW_LABEL, dispatch)}
            >
              {HEADER_NEW_LABEL}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
