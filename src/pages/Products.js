import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import BackgroundPageHeader from "components/Headers/BackgroundPageHeader.js";
import CustomFooter from "components/Footers/CustomFooter.js";

// sections for this page
import ProductDetailElement from "../views/index-sections/ProductDetailElement.js"

function Products() {
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <BackgroundPageHeader titlePage="Products" backgroundImage={"url(" + require("assets/img/flour.jpg") + ")"} />
        <div className="main">
            <ProductDetailElement />
        </div>
        <CustomFooter />
      </div>
    </>
  );
}

export default Products;
