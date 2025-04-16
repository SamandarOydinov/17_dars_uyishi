import React from "react";
import {
  CatalogPageWrapper,
  ContentSideWrapper,
  TopSideWrapper,
} from "../styles/homePage.styles";
import Catalog from "../components/catalog";

function CatalogPage() {
  return (
    <CatalogPageWrapper className="container">
      <TopSideWrapper>
        <h2 className="catalogTitle">Каталог</h2>
        <button className="button1">
          Весь каталог <img src="/arrowIcon.svg" alt="Arrow Icon" />
        </button>
      </TopSideWrapper>
      <ContentSideWrapper>
        <Catalog path="cat1" name="Люстры" />
        <Catalog path="cat2" name="Светильники" />
        <Catalog path="cat3" name="Бра" />
        <Catalog path="cat4" name="Торшеры" />
        <Catalog path="cat5" name="Настольные лампы" />
        <Catalog path="cat6" name="Споты" />
      </ContentSideWrapper>
    </CatalogPageWrapper>
  );
}

export default CatalogPage;
