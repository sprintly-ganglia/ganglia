import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '80px' }}>
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#" style={{ fontSize: '1.5rem' }}>
    //       <img
    //         src="src/assets/ganglia-logo.png"
    //         alt="Logo"
    //         width="40"
    //         height="40"
    //         className="d-inline-block align-text-top"
    //       />
    //       <span className="ms-2">Ganglia Technologies</span>
    //     </a>
    //     {/* Toggle button for smaller screens */}
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/about" style={{ fontSize: '1.2rem' }}>
    //             About
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/techvrse" style={{ fontSize: '1.2rem' }}>
    //             Techvrse
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ backgroundColor: "#ffede7" }}
    >
      <div className="container">
        <Link className="nav-link" to="/" style={{ fontSize: "1.2rem" }}>
          <a className="navbar-brand" href="#">
            <img
              src="src/assets/ganglia-logo.png"
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>
        </Link>

        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/" style={{ fontSize: "1.2rem" }}>
                <a className="nav-link px-3" href="">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/techvrse"
                style={{ fontSize: "1.2rem" }}
              >
                <a className="nav-link px-3" href="#!">
                  Techvrse
                </a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link px-3" href="#!">
                about us
              </a>
            </li> */}
            {/* <li className="nav-item active">
              <a className="nav-link px-3" href="#!">
                collaboration
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#!">
                contact us
              </a>
            </li> */}
          </ul>

          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link pe-3" href="#!">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-3" href="#!">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
