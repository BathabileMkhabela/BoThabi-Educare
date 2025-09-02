import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Button.module.css";

const Button = ({ text, link, primary, onClick, className }) => {
  if (link) {
    // If link is provided → render a router link
    return (
      <Link
        to={link}
        className={`${styles.button} ${primary ? styles.primary : styles.secondary} ${className || ""}`}
      >
        {text}
      </Link>
    );
  }

  // Otherwise → render a normal button (useful for modals like login)
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${primary ? styles.primary : styles.secondary} ${className || ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
