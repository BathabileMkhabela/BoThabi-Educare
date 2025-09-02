// Logo.js (updated)
import React from "react";
import styles from "../styles/Logo.module.css";
import logoImage from "../assets/images/Logo-transparent.png";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logoImage} alt="BoThabi EduCare Logo" className={styles.logoImage} />
        </div>
    );
};

export default Logo;