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

const Index = () =>  {
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
        <IndexHeader idLang={Language}/>
        <div className="main">
          <AboutUsElements idLang={Language}/>
          <ProductListElements idLang={Language}/>
          <ClientListElements idLang={Language}/>
          <ContactUsElements idLang={Language}/>
        </div>
        <CustomFooter onClickEn={() => setLanguage('en')} onClickId={() => setLanguage('id')} idLang={Language}/>
      </div>
    </>
  );
}

export default Index;
