import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const SearchForm = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const search = e.target["search"].value;
          if (search) {
            navigate(`/search/${search}`);
          }
          e.target["search"].value = "";
        }}
      >
        <input type="text" name="search" autoComplete="off" />
        <Button>Buscar</Button>
      </form>
    </div>
  );
};
