import React, { useState, useEffect } from "react";
import Navbar from "../components/Navabar";
import Footer from "../components/Footer";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.home}>
      {/* Navbar (Login button inside triggers setShowLogin) */}
      <Navbar 
       onLoginClick={() => setShowLogin(true)} 
       onSignUpClick={() => setShowSignUp(true)} 
      />

      {/* Hero Section */}
      <main className={styles.main}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          {/* Left Section */}
          <div className={styles.left}>
            <h1 className={styles.title}>
              Welcome to{" "}
              <span className={styles.highlight}>BoThabi EduCare</span>
            </h1>
            <p className={styles.subtitle}>
              Empowering people with Computer Fundamentals & Java coding skills.
              Join us to build a brighter future through technology education.
            </p>
            <div className={styles.cta}>
              <a href="/register" className={styles.primaryBtn}>
                Get Started
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="/about" className={styles.secondaryBtn}>
                Learn More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16L16 12L12 8M8 12H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className={styles.right}>
            <div className={styles.imageContainer}>
              {/* Optional hero image can go here */}
              <div className={styles.floatingElement}></div>
              <div className={styles.floatingElement}></div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Login Form Popup */}
      {showSignUp && <SignUpForm onClose={() => setShowSignUp(false)} />}
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Home;
