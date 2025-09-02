import React, { useState } from "react";
import styles from "../styles/SignUpForm.module.css";
import logoImage from "../assets/images/Logo-transparent.png";
import LoginForm from "./LoginForm";

const SignUpForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [showLogin, setShowLogin] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    id: "",
    dob: "",
    email: "",
    contact: "",
    password: ""
  });

  // Autofill DOB when ID is entered
  const handleIdChange = (e) => {
    const id = e.target.value;
    let dob = "";
    if (id.length >= 6) {
      const year = id.substring(0, 2);
      const month = id.substring(2, 4);
      const day = id.substring(4, 6);
      dob = `19${year}-${month}-${day}`; // assumes 1900s, can expand later
    }
    setFormData({ ...formData, id, dob });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignUp Data:", formData);
    alert("Registered Successfully!");
    onClose();
  };

  if (showLogin) {
    return <LoginForm onClose={() => setShowLogin(false)} />;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>✖</button>
            <div className={styles.logoContainer}>
                <img src={logoImage} alt="BoThabi EduCare Logo" className={styles.logoImage} />
            </div>
        <h2 className={styles.title}>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className={styles.formGroup}>
              <input type="text" name="name" placeholder="First Name" value={formData.name} onChange={handleChange} required />
              <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} required />
              <input type="text" name="id" placeholder="ID Number" value={formData.id} onChange={handleIdChange} required />
              <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} required />
              <button type="button" className={styles.nextBtn} onClick={() => setStep(2)}>Next</button>
            </div>
          )}

          {step === 2 && (
            <div className={styles.formGroup}>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="text" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />
              <input type="password" name="password" placeholder="Create Password" value={formData.password} onChange={handleChange} required />
              <div className={styles.actions}>
                <button type="button" className={styles.backBtn} onClick={() => setStep(1)}>Back</button>
                <button type="submit" className={styles.submitBtn}>Register</button>
              </div>
            </div>
          )}
        </form>

        <p className={styles.switch}>
          Already have an account?{" "}
          <span onClick={() => setShowLogin(true)}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
