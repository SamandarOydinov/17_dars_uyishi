import React from 'react';
import { HomePageWrapper } from '../styles/homePage.styles';

function HomePage() {
  return (
    <HomePageWrapper>
      <div className="div-1 container">
        <h1 className="home-h1">
          Скидка 15% <br /> на все подвесные светильники <br />{' '}
          <span>до 5 февраля</span>
        </h1>
        <img className="lamp" src="/lamp.png" alt="not found" />
      </div>
    </HomePageWrapper>
  );
}

export default HomePage;