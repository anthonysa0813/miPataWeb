import Image from "next/image";
import React from "react";
import styles from "../styles/MobileFunctions.module.css";
import { ImQrcode } from "react-icons/im";
import { MdPets, MdOutlineRecommend, MdPlace } from "react-icons/md";
import ButtonPrimary from "./Buttons/ButtonSocial";
import { IoIosAppstore } from "react-icons/io";
import { AiFillAndroid } from "react-icons/ai";

const MobileFunctions = () => {
  return (
    <>
      <section className={styles.mobile}>
        <div className="wrapper">
          <div className={styles.mobileContainer}>
            <div className={styles.gridItem}>
              <div className={styles.content}>
                <div className={styles.boxIcon}>
                  <ImQrcode />
                </div>
                <h4>¡Encuentra a tu mascota! </h4>
              </div>
            </div>
            <div className={styles.gridItem}>
              <Image
                src="/app.png"
                alt="Logo de Mi pata"
                width={250}
                height={500}
              />
            </div>
            <div className={styles.gridItem}>
              <div className={styles.content}>
                <div className={styles.boxIcon}>
                  <MdPets />
                </div>
                <h4>Adopta una mascota de manera responsable</h4>
              </div>
            </div>
            <div className={styles.gridItem}>
              <div className={styles.content}>
                <div className={styles.boxIcon}>
                  <MdOutlineRecommend />
                </div>
                <h4>Recomendaciones sobre cuidados, alimentos, etc</h4>
              </div>
            </div>
            <div className={styles.gridItem}>
              <div className={styles.content}>
                <div className={styles.boxIcon}>
                  <MdPlace />
                </div>
                <h4>
                  Encuentra los mejores lugares para visitar o pasear con ell@s
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="callAction">
        <div className="wrapper">
          <div className={styles.callActionContainer}>
            <h4>Disponible ahora:</h4>
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
    </>
  );
};

export default MobileFunctions;
