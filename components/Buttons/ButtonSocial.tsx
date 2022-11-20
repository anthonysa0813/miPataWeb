import React from "react";
import styles from "../../styles/Buttons.module.css";

interface Prop {
  children: JSX.Element[] | JSX.Element;
}

const ButtonSocial = ({ children }: Prop) => {
  return <button className={`${styles.btn}`}>{children}</button>;
};

export default ButtonSocial;
