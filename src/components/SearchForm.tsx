import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import styles from "./SearchForm.css";

export const SearchForm = (props) => {
  const navigate = useNavigate();
  const buscar = (e) => {
    e.preventDefault();
    const search = e.target["search"].value;
    if (search) {
      navigate(`/search/${search}`);
    }
    e.target["search"].value = "";
  };

  return (
    <div>
      <form
        className={styles.form}
        onSubmit={(e) => {
          buscar(e);
        }}
      >
        <a
          className={styles.mlLogo}
          href="https://www.mercadolibre.com.ar/"
          target="_blank"
        ></a>
        <input
          className={styles.input}
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Buscar productos marcas y más..."
        />
        <Button>Buscar</Button>
      </form>
    </div>
  );
};
