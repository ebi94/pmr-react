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

const ContactUs = () => {
  const [Language, setLanguage] = React.useState('en');
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
      <IndexNavbar idLang={Language}/>
      <div className="wrapper">
        <BackgroundPageHeader titlePage="Contact Us" backgroundImage={"url(" + require("assets/img/rice.jpg") + ")"} />
        <div className="main">
          <ContactUsElements />
        </div>
        <CustomFooter onClickEn={() => setLanguage('en')} onClickId={() => setLanguage('id')} idLang={Language}/>
      </div>
    </>
  );
}

export default ContactUs;
