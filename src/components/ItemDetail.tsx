import React from "react";
import Slider from "react-slick";
export const ItemDetail = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div
      style={{
        boxSizing: "border-box",
        flexWrap: "wrap",
        background: "#817d81",
        padding: "40px",
        margin: "auto",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "20px",
        gap: "40px",
        overflow: "hidden",
        width: "400px",
      }}
    >
      <Slider {...settings}>
        {props.pictures.map((imagen, index) => (
          <img
            key={index}
            src={imagen.url}
            alt="producto"
            style={{ width: "70vw", height: "auto" }}
          />
        ))}
      </Slider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          marginTop: 50,
        }}
      >
        <h1>{props.title}</h1>
        <span>$ {props.price}</span>
      </div>
    </div>
  );
};
