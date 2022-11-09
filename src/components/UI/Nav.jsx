import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";

const Nav = () => {
  const [isNavOpen, setNavIsOpen] = useState(false);

  const onToggleNav = (e) => {
    setNavIsOpen((openNav) => !openNav);
  };

  return (
    <nav className="navbar nav-masthead mb-5 border-bottom border-2 navbar-expand-lg">
      <div className="container-fluid py-1 px-5">
        <NavLink className="navbar-brand" to="/">
          TMA
        </NavLink>
        <button
          type="button"
          className="navbar-toggler"
          onClick={onToggleNav}
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fs-3 align-middle">
            {isNavOpen ? <VscChromeClose /> : <TbMenu />}
          </span>
        </button>
        <div
          className={`navbar-collapse collapse text-center ${
            isNavOpen ? " show" : ""
          }`}
          id="navbarScroll"
        >
          <ul
            className="navbar-nav my-lg-0 mx-auto pe-lg-5 navbar-nav-scroll fs-5"
            style={{ "--bs-scroll-height": "100%" }}
          >
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link fw-bold mx-2 ms-lg-5"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold mx-2" to="/team-members">
                Teams
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold mx-2" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
