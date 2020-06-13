import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import CustomFooter from "components/Footers/CustomFooter.js";

// sections for this page
import ContactUsElements from "../views/index-sections/ContactUsElements.js";

function ContactUs() {
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <ContactUsElements />
        </div>
        <CustomFooter />
      </div>
    </>
  );
}

export default ContactUs;
