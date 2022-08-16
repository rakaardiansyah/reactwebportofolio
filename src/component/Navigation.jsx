import React from "react";
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="img/jamob.png" className="img-responsive" alt="" />{" "}
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#welcome" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About Me
              </a>
            </li>
            <li>
              <a href="#certificate" className="page-scroll">
                Portofolio
              </a>
            </li>
            <li>
              <a href="#portofolio" className="page-scroll">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact-us" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <a href="https://infogabut.blogspot.com/" target="blank"
              rel="noopener noreferrer">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
