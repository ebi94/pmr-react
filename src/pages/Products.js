import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import BackgroundPageHeader from "components/Headers/BackgroundPageHeader.js";
import CustomFooter from "components/Footers/CustomFooter.js";

// sections for this page
import ProductDetailElement from "../views/index-sections/ProductDetailElement.js"

import { MultiLang, Determinator } from "react-multi-language";

const Products = () => {
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
        <BackgroundPageHeader
          titlePage={
            <Determinator>
              {{ 
                  en: 'Products',
                  id: 'Produk'
              }}
            </Determinator>
          }
          backgroundImage={"url(" + require("assets/img/flour.jpg") + ")"} />
        <div className="main">
            <ProductDetailElement idLang={Language}/>
        </div>
        <CustomFooter onClickEn={() => setLanguage('en')} onClickId={() => setLanguage('id')} idLang={Language}/>
      </div>
      <MultiLang lang={Language}/>
    </>
  );
}

export default Products;
