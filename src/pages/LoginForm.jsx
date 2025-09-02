import React, {useState} from "react";
import logoImage from "../assets/images/Logo-transparent.png";
import SignUpForm from "./SignUpForm";
import styles from "../styles/LoginForm.module.css";

const LoginForm = ({onClose}) => {
    const [showSignUp, setShowSignUp] = useState(false);

    if (showSignUp) {
        return <SignUpForm onClose={() => setShowSignUp(false)} />;
      }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose}>✖</button>
                <div className={styles.logoContainer}>
                    <img src={logoImage} alt="BoThabi EduCare Logo" className={styles.logoImage} />
                </div>
                <h2 className={styles.title}>Welcome Back</h2>

                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required/>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required/>   
                    </div>
                    <button type="submit" className={styles.loginBtn}>Login</button>
                </form>

                <div className={styles.links}>
                    <a href="/forgot-password">Forgot Password?</a>
                    <p>
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
