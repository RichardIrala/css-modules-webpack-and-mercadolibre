import React from "react";
import Slider from "react-slick";

import styles from "./ItemDetail.css";

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
    <div className={styles.container}>
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
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{props.title}</h1>
        <span className={styles.generalText}>$ {props.price}</span>
      </div>
    </div>
  );
};
