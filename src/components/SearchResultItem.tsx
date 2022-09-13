import React from "react";

import { useNavigate } from "react-router-dom";

export const SearchResultItem = (props) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "wrap",
        background: "#817d81",
        padding: "20px",
        width: "fit-content",
        margin: "auto",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "20px",
        gap: "10px",
      }}
    >
      <button
        onClick={() => {
          navigate("/items/" + props.id);
        }}
      >
        Ver más...
      </button>
      <img
        src={props.thumbnail}
        alt="producto"
        style={{ width: "90px", height: "90px" }}
      />
      <div
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        <h1>{props.title}</h1>
        <span>$ {props.price}</span>
      </div>
    </div>
  );
};
