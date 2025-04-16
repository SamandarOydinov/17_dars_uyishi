import React from "react";
import { CatalogSectionWrapper } from "../styles/homePage.styles";

function Catalog(props) {
  return (
    <CatalogSectionWrapper>
      <div className="div1">
        <p className="p1">{props.name}</p>
        <div className="div2">
          <p>От 540₽</p>
          <img className="vector" src="/catalog/vector.png" alt="" />
        </div>
      </div>
      <div>
        <img className="main_img" src={`/catalog/${props.path}.png`} alt="" />
      </div>
    </CatalogSectionWrapper>
  );
}

export default Catalog;
