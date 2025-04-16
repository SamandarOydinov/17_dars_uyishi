import React from 'react';
import { Route, Routes } from 'react-router';
import { HomePageTag } from './app.style';
import Layout from './layout';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route
            index
            element={
              <HomePageTag>
                <HomePage />
                <CatalogPage />
              </HomePageTag>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
