import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.css";
import ButtonPrimary from "./Buttons/ButtonSocial";
import { IoIosAppstore } from "react-icons/io";
import { AiFillAndroid } from "react-icons/ai";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.headerContainer}>
          <div className={styles.logoSection}>
            <Image
              src="/logo.png"
              alt="Logo de Mi pata"
              width={80}
              height={80}
            />
          </div>
          <div className={styles.socialButtons}>
            <ButtonPrimary>
              <IoIosAppstore />
              <span>IOS</span>
            </ButtonPrimary>
            <ButtonPrimary>
              <AiFillAndroid />
              <span>Android</span>
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
