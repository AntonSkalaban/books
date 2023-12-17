import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About, Main } from 'pages';
import { Layout } from './Layout/Layout';
import './App.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="about/:id" element={<About />} />
      </Route>
    </Routes>
  );
};
