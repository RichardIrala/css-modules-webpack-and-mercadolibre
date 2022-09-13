import React from "react";
import { Outlet } from "react-router-dom";

type ButtonProps = {
  children: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <button style={{ background: "aqua", marginLeft: "10px" }}>
      {props.children}
    </button>
  );
};
