import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.css";

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
            <button>google</button>
            <button>Ios</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
