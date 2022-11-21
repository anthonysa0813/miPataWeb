import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiBook } from "react-icons/bi";
import ButtonPrimary from "./Buttons/ButtonSocial";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["custom-shape-divider-top"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className={styles["shape-fill"]}
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className={styles["shape-fill"]}
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className={styles["shape-fill"]}
          ></path>
        </svg>
        <div className="wrapper">
          <div className={styles.footerContainer}>
            <div className="socials">
              <div className={styles.logoSection}>
                <Image
                  src="/logo.png"
                  alt="Logo de Mi pata"
                  width={50}
                  height={50}
                />
              </div>
              <div className="socialsMedia">
                <div className={styles.boxSocial}>
                  <div className={styles.box}>
                    <FaFacebookF />
                  </div>
                  <div className={styles.box}>
                    <AiFillInstagram />
                  </div>
                  <div className={styles.box}>
                    <AiFillYoutube />
                  </div>
                </div>
              </div>
            </div>
            <div className="contacts">
              <div className={styles.titleBox}>
                <p>CONTACT</p>
              </div>
              <p className={styles.contactItem}>
                <MdEmail />
                mipata-contact@gmail.com
              </p>
              {/* <div className={styles.titleBox}>
                <p>Powered by</p>
              </div>
              <Image
                src="/globant.png"
                alt="Logo de Mi pata"
                width={150}
                height={50}
              /> */}
              <div className={styles.titleBox}>
                <p>Quick Links</p>
              </div>
              <p className={styles.contactItem}>
                <BiBook />
                Términos y Condiciones
              </p>
            </div>
            <div className={styles.subscribe}>
              <div className={styles.titleBox}>
                <p>SUBSCRIBE US</p>
              </div>
              <form className={styles.form}>
                <input type="email" />
                <ButtonPrimary center>
                  <span>SUSCRIBE</span>
                </ButtonPrimary>
              </form>
            </div>
          </div>
          <div className={styles.poweredContainer}>
            <p>Powered by: </p>
            <Image
              src="/globant.png"
              alt="Logo de Globant"
              width={200}
              height={50}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

{
  /* <div className={styles.powerBy}>
                <span>powered by</span>
               
              </div> */
}

export default Footer;
