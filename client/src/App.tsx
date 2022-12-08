import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout';
import { Home } from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
