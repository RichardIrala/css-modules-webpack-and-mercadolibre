import React from "react";

export const ItemDetail = (props) => {
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
      {props.pictures.map((imagen, index) => (
        <img
          key={index}
          src={imagen.url}
          alt="producto"
          style={{ width: "90px", height: "90px" }}
        />
      ))}
      <div
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        <h1>{props.title}</h1>
        <span>$ {props.price}</span>
      </div>
    </div>
  );
};
