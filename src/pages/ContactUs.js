import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import BackgroundPageHeader from "components/Headers/BackgroundPageHeader.js";
import CustomFooter from "components/Footers/CustomFooter.js";

// sections for this page
import ContactUsElements from "../views/index-sections/ContactUsElements.js";

function ContactUs() {
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <BackgroundPageHeader titlePage="Contact Us" backgroundImage={"url(" + require("assets/img/rice.jpg") + ")"} />
        <div className="main">
          <ContactUsElements />
        </div>
        <CustomFooter />
      </div>
    </>
  );
}

export default ContactUs;
