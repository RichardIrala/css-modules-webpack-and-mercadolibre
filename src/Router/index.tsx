import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout";
import { SearchInML } from "../pages/SearchInML";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="search/:query" element={<SearchInML />} />
        <Route path="items/:id" element={<SearchInML />} />
      </Route>
      <Route path="*" element={<h1>No existe la page bro</h1>} />
    </Routes>
  );
};
