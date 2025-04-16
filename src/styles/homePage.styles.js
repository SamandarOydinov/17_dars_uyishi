import styled from "styled-components";

export const HomePageWrapper = styled.div`
  max-width: 1714px;
  margin: 0 auto;
  background-color: #f2f2f2;
  border-radius: 50px;
`;

export const CatalogPageWrapper = styled.div`
  color: var(--main-brown);
  max-width: 1316px;
  width: 100%;
  padding: 0 8px;
  margin: 50px auto;
  font-family: "Manrope", sans-serif;
`;

export const TopSideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const ContentSideWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
`;

export const CatalogSectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 420px;
  height: 250px;
  background-color: #f2f2f2;
  border-radius: 20px;
`;
