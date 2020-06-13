import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import CustomFooter from "components/Footers/CustomFooter.js";

// sections for this page
import AboutUsElements from "./index-sections/AboutUsElements.js";
import ProductListElements from "./index-sections/ProductListElements.js";
import ClientListElements from "./index-sections/ClientListElement.js";
import ContactUsElements from "./index-sections/ContactUsElements.js";
import ContactUs from "pages/ContactUs.js";

function Index() {
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
        <IndexHeader />
        <div className="main">
          <AboutUsElements />
          <ProductListElements />
          <ClientListElements />
          <ContactUsElements />
        </div>
        <CustomFooter />
      </div>
    </>
  );
}

export default Index;
