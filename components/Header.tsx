import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import ButtonPrimary from "./Buttons/ButtonSocial";
import { GrApple } from "react-icons/gr";
// import { IoIosAppstore } from "react-icons/io";
// import { AiFillAndroid } from "react-icons/ai";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((event: any) => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${scrollY ? styles.backgroundWhite : ""}`}
    >
      <div className="wrapper">
        <div className={styles.headerContainer}>
          <div className={styles.logoSection}>
            <h2 className={`${scrollY ? styles.textOrange : styles.textWhite}`}>
              miPata
            </h2>
          </div>
          <div className={styles.menuLinks}>
            <ul>
              <li>App mobile</li>
              <li>About Us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className={styles.socialButtons}>
            <ButtonPrimary>
              <GrApple />
              <p
                className={styles.buttonText}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: ".25rem",
                }}
              >
                {/* <span>Disponible en el </span> */}
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
