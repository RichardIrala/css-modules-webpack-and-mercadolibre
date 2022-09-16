import React from "react";
import styles from "./Button.css";

type ButtonProps = {
  children: string;
};

export const Button = (props: ButtonProps) => {
  return <button className={styles.button}>{props.children}</button>;
};
