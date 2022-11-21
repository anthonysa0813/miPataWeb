import Image from "next/image";
import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="wrapper">
        <div className={styles.heroContainer}>
          <div className={styles.imageContent}>
            <Image
              src="/hero5.png"
              alt="Imagen de mujer besando a su mascota"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.heroInfo}>
            <h1>La comunidad más grande de mascotas y quienes los amamos.</h1>
            <div className="text">
              <p>
                Ayudemos a encontrar su regreso a casa o encontrar una nueva si
                nunca tuvo una. Además, administra a tu mascota, encuentra los
                mejores lugares pet friendly y mucho más
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
