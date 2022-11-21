import Image from "next/image";
import React from "react";
import styles from "../styles/MobileFunctions.module.css";
import { ImQrcode } from "react-icons/im";
import { MdPets, MdOutlineRecommend, MdPlace } from "react-icons/md";
import ButtonPrimary from "./Buttons/ButtonSocial";
import { IoIosAppstore } from "react-icons/io";
import { AiFillAndroid } from "react-icons/ai";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, EffectCreative, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

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
                <h4>¡Encuentra a tu mascota! </h4>
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
    </AnimationOnScroll>
  );
};

export default MobileFunctions;
