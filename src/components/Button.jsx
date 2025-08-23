import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Button.module.css";

const Button = ({ text, link, primary }) => {
    return(
        <Link to={link} className={`${styles.button} ${primary ? styles.primary : ""}`}>
            {text}
        </Link>
    )
};

export default Button;