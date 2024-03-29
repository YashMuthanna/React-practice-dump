import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  
  return (
    <div>
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      aria-label="Eleventh navbar example"
      
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {" "}
          {props.title}{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
          <div className={`m-3 form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="toggle"/>
        <label className="form-check-label" htmlFor="toggle">Enable Dark Mode</label>
      </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};
