import React, { useState, useEffect } from "react";
import Navbar from "../components/Navabar";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Image from "../assets/images/Logo-transparent.png"
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.home}>
      <Navbar />
      <main className={styles.main}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              Welcome to <span className={styles.highlight}>BoThabi EduCare</span>
            </h1>
            <p className={styles.subtitle}>
              Empowering communities with Computer Fundamentals & Java coding skills. 
              Join us to build a brighter future through technology education.
            </p>
            <div className={styles.cta}>
              <a href="/register" className={styles.primaryBtn}>
                Get Started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/about" className={styles.secondaryBtn}>
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16L16 12L12 8M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imageContainer}>
              {/* <img 
                src={Image}
                alt="Students learning coding" 
                className={styles.heroImg} 
              /> */}
              <div className={styles.floatingElement}></div>
              <div className={styles.floatingElement}></div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;