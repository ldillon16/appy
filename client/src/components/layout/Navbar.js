import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            appy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {" "}
                  People
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      // <div class="landing">
      //   <div class="dark-overlay landing-inner text-light">
      //     <div class="container">
      //       <div class="row">
      //         <div class="col-md-12 text-center">
      //           <h1 class="display-3 mb-4">Developer Connector
      //           </h1>
      //           <p class="lead"> Create a developer profile/portfolio, share posts and get help from other developers</p>
      //           <hr />
      //           <a href="register.html" class="btn btn-lg btn-info mr-2">Sign Up</a>
      //           <a href="login.html" class="btn btn-lg btn-light">Login</a>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Navbar;
