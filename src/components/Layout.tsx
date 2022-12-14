import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { SearchForm } from "./SearchForm";

export const Layout = () => {
  return (
    <div style={{ margin: 0, minHeight: "100vh" }}>
      <SearchForm />
      <Outlet />
    </div>
  );
};
