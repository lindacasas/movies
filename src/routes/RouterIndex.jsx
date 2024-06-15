import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import MovieDetail from "../pages/MovieDetail";

const RouterIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movieDetail/:id/:title' element={<MovieDetail />} />
    </Routes>
  );
};

export default RouterIndex;