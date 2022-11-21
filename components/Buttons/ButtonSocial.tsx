import React from "react";
import styles from "../../styles/Buttons.module.css";

interface Prop {
  children: JSX.Element[] | JSX.Element;
  rounded?: boolean;
  center?: boolean;
}

const ButtonPrimary = ({ children, rounded, center }: Prop) => {
  return (
    <button
      className={`${styles.btn} ${rounded ? styles.rounded : ""} ${
        center ? styles.textCenter : ""
      }`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
