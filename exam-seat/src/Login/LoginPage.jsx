import { useState } from "react";
import styles from "./LoginPage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import LoginModal from "./LoginModal.jsx";

export default function LoginPage({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState(null); // "admin" | "student" | "invigilator"
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (role) => {
    setSelectedRole(role);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedRole(null);
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.head}>
          <FontAwesomeIcon icon={faGraduationCap} className={styles.logo} />
          <h1>EXAM SEATING ARRANGEMENT SYSTEM</h1>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.entryCard}>
            <h2>LOG IN AS</h2>

            <button onClick={() => openModal("admin")}>ADMIN</button>
            <button onClick={() => openModal("invigilator")}>INVIGILATOR</button>
            <button onClick={() => openModal("student")}>STUDENT</button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <LoginModal
          role={selectedRole}
          onClose={closeModal}
          onLogin={onLogin}
        />
      )}
    </>
  );
}