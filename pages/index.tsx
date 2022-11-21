import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileFunctions from "../components/MobileFunctions";
import styles from "../styles/Home.module.css";

const MyPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <MobileFunctions />
      <Footer />
    </>
  );
};

export default MyPage;
