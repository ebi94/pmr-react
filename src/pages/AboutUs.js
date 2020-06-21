import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import BackgroundPageHeader from "components/Headers/BackgroundPageHeader.js";
import CustomFooter from "components/Footers/CustomFooter.js";

// sections for this page
import AboutUsElements from "views/index-sections/AboutUsElements.js"
import AboutUsImageElements from "views/index-sections/AboutUsImageElements.js"

function AboutUs() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <BackgroundPageHeader titlePage="About Us" backgroundImage={"url(" + require("assets/img/sugar.jpg") + ")"}/>
        <div className="main">
            <AboutUsElements />
            <AboutUsImageElements />
        </div>
        <CustomFooter />
      </div>
    </>
  );
}

export default AboutUs;
