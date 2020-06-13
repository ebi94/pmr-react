import React from "react";

// reactstrap components
import {
  Container
} from "reactstrap";

// core components

function AboutUsElements() {
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
          <h2 className="title">About Us</h2>
            <img
                alt="..."
                className="about-logo"
                src={require("assets/img/logo-panin-masinda-raya.png")}
              ></img>
            <div className="space-70"></div>
            <h3 className="text-logo-about">PT. Panin Masinda Raya</h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
            <div className="space-70"></div>
            <h3 className="text-logo-about">Visi & Misi</h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
            <div className="space-70"></div>
            <h3 className="text-logo-about">Who we are</h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
        </Container>
      </div>
    </>
  );
}

export default AboutUsElements;
