import Image from "next/image";
import React from "react";
import styles from "../styles/MobileFunctions.module.css";
import { MdPets, MdOutlineRecommend, MdPlace } from "react-icons/md";
import ButtonPrimary from "./Buttons/ButtonSocial";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { GrApple } from "react-icons/gr";

const MobileFunctions = () => {
  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
      <section className={styles.mobile}>
        <div className="wrapper">
          <div className={styles.mobileContainer}>
            <div className={styles.gridItem}>
              <div className={styles.content}>
                <div className={styles.boxIcon}>
                  {/* <ImQrcode /> */}
                  <i className="icon-pets"></i>
                </div>
                <h4>¡Reconocimiento facial!</h4>
                <span>powered by Globant</span>
              </div>
            </div>
            <div className={styles.gridItem}>
              <Swiper
                effect={"creative"}
                grabCursor={true}
                style={{ width: 250 }}
                slidePrevClass={"2"}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                modules={[Autoplay, EffectCreative, Pagination]}
                // autoplay={{ disableOnInteraction: true }}
                pagination={true}
                // modules={[EffectCube, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image
                    src="/app.png"
                    alt="Logo de Mi pata"
                    width={250}
                    height={500}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/apphome.jpg"
                    alt="Logo de Mi pata"
                    width={250}
                    height={500}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/apphome_store.jpg"
                    alt="Logo de Mi pata"
                    width={250}
                    height={500}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/appMap.jpg"
                    alt="Logo de Mi pata"
                    width={250}
                    height={500}
                  />
                </SwiperSlide>
              </Swiper>
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
                  y mucho más...
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
                {/* <span>Disponible en el </span> */}
                <span className={styles.text}>Play Store</span>
              </p>
            </ButtonPrimary>
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
                {/* <span>Disponible en el </span> */}
                <span className={styles.text}>App Store</span>
              </p>
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default MobileFunctions;
