import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.css";
import ButtonPrimary from "./Buttons/ButtonSocial";
import { GrApple } from "react-icons/gr";
// import { IoIosAppstore } from "react-icons/io";
// import { AiFillAndroid } from "react-icons/ai";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.headerContainer}>
          <div className={styles.logoSection}>
            <h2>miPata</h2>
          </div>
          <div className={styles.socialButtons}>
            <ButtonPrimary>
              <GrApple />
              {/* <Image
                src="/applestore.png"
                alt="Logo de apple store"
                width={20}
                height={20}
              /> */}
              <p
                className={styles.buttonText}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: ".25rem",
                }}
              >
                <span>Disponible en el </span>
                <span className={styles.text}>App Store</span>
              </p>
            </ButtonPrimary>
            <ButtonPrimary>
              {/* <AiFillAndroid /> */}
              <Image
                src="/googleplay.png"
                alt="Logo de apple store"
                width={20}
                height={20}
              />
              <p
                className={styles.buttonText}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: ".25rem",
                }}
              >
                <span>Disponible en el </span>
                <span className={styles.text}>Play Store</span>
              </p>
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
