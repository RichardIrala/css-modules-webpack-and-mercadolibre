import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchResultItem.css";

export const SearchResultItem = (props) => {
  const navigate = useNavigate();
  return (
    <button
      className={styles.container}
      onClick={() => {
        navigate("/items/" + props.id);
      }}
    >
      <div className={styles.secundaryContainer}>
        <img className={styles.image} src={props.thumbnail} alt="producto" />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{props.title}</h1>
          <span className={styles.textContent}>$ {props.price}</span>
        </div>
      </div>
    </button>
  );
};
