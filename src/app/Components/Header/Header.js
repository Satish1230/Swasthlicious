"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

// Typewriter component for the animated text effect
function Typewriter({
  messages,
  typingSpeed = 150,
  deletingSpeed = 50,
  pause = 1500,
}) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const currentMessage = messages[messageIndex];

    if (!isDeleting && charIndex < currentMessage.length) {
      // Type next character
      timeout = setTimeout(() => {
        setText(currentMessage.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Delete a character
      timeout = setTimeout(() => {
        setText(currentMessage.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === currentMessage.length) {
      // Pause when the message is fully typed, then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && charIndex === 0) {
      // When deletion is complete, move to the next message
      setIsDeleting(false);
      setMessageIndex((messageIndex + 1) % messages.length);
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    messageIndex,
    messages,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  return (
    <span>
      {text}
      <span className={styles.cursor}>|</span>
    </span>
  );
}

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.textContent}>
        <h1 className={styles.heading}>
          <Typewriter
            messages={[
              "Missing Homemade Food",
              "Keto/Gym Diet",
              "Pregnancy Meal",
              "Corporate lunch",
            ]}
          />
        </h1>
        <h1 className={`${styles.postheading} ${styles.gradientText}`}>
          In Bangalore
        </h1>

        <p className={styles.description}>
          Traditional dishes and home-made meals brought to you by mothers
        </p>
        <button className={styles.ctaButton}>Learn More</button>
      </div>
      <div className={styles.bgImageContainer}>
        <Image
          src="https://drive.google.com/uc?export=view&id=1FTyp_7iZLQLLKOulOJTxSty5_Plktyv1"
          alt="Header Background"
          width={800}
          height={100}
          quality={100}
          priority
        />
      </div>
    </div>
  );
}
