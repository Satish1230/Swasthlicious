"use client"; // For Next.js 13+ app router
import React from "react";
import styles from "./Navbar.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Left side: Logo */}
      <div className={styles.logo}>goHomely</div>

      {/* Right side: Navigation links + Contact button */}
      <nav className={styles.nav}>
        <a href="/become-chef" className={styles.link}>
          <span role="img" aria-label="key">
            🔑
          </span>{" "}
          Become a home chef
        </a>
        <a href="/meal-subscription" className={styles.link}>
          <span role="img" aria-label="bookmark">
            🔖
          </span>{" "}
          Meal Subscription
        </a>
        <a href="/login" className={styles.link}>
          <span role="img" aria-label="user">
            👤
          </span>{" "}
          User Login
        </a>
        <button className={styles.contactBtn}>Contact Us</button>
      </nav>
    </header>
  );
}
