import React from 'react';
import styles from "../styles/Navbar.module.css";
import Button from "./Button";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <nav className = {styles.navbar}>
            <div className= {styles.left}>
                <Logo />
                <h1 className= {styles.systemName}>BoThabi EduCare</h1>
            </div>
            <div className = {styles.right}>
                <Button text="Login" link="/login" />
                <Button text="Sign Up" link="/register" primary />
                <a href="/about" className={styles.about}>About Us</a>
            </div>

        </nav>
    )
};

export default Navbar;