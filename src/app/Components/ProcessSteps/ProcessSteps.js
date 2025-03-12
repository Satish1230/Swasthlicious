"use client";
import React, { useState } from "react";
import styles from "./ProcessSteps.module.css";
import Image from "next/image";

// Separate array for images
const images = [
  "/card/1st.png", // Image for the first group of 3 steps
  "/card/2nd.png", // Image for the second group of 3 steps
  "/card/3rd.png", // Image for the third group of 3 steps
];

// Array for step content
const stepsData = [
  {
    title: "Career Counselling",
    description:
      "Speak to expert counsellors who will guide you towards the ideal program for your career aspirations.",
  },
  {
    title: "University Admission",
    description:
      "Get expert support every step of the way to ease the stress of the University’s admission process.",
  },
  {
    title: "Flexible Payment Plans",
    description:
      "Say goodbye to hefty student loans. Get assistance in finding the best, personalised payment plans.",
  },
  {
    title: "Post-Admission Support",
    description:
      "Get personalized post-admission support to help you settle down in the University.",
  },
  {
    title: "Visa Application Support",
    description:
      "Receive expert help in securing your student visa without any hassle.",
  },
  {
    title: "Accommodation Guidance",
    description:
      "Find the perfect student housing with personalized assistance.",
  },
  {
    title: "Language Support",
    description:
      "Get help with learning the local language to make your transition easier.",
  },
  {
    title: "Career Development",
    description:
      "Receive post-graduation support in finding jobs or internships.",
  },
  {
    title: "Alumni Networking",
    description:
      "Stay connected with the alumni network to help build your career.",
  },
];

const ProcessSteps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next steps
  const handleNext = () => {
    if (currentIndex + 3 < stepsData.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  // Handle previous steps
  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  // Determine which image to render (based on the group of 3 content items)
  const currentImageIndex = Math.floor(currentIndex / 3);

  // Counter logic
  const totalPages = Math.ceil(stepsData.length / 3);
  const currentPage = currentImageIndex + 1;

  return (
    <div className={styles.processContainer}>
      <div className={styles.radiobtns}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="stepGroup"
            value="1"
            checked={currentIndex === 0}
            onChange={() => setCurrentIndex(0)}
          />
          Enrolment Assistance
        </label>
        <span className={styles.separator}></span>{" "}
        {/* Separator between radio buttons */}
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="stepGroup"
            value="2"
            checked={currentIndex === 3}
            onChange={() => setCurrentIndex(3)}
          />
          Course Completion
        </label>
        <span className={styles.separator}></span>{" "}
        {/* Separator between radio buttons */}
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="stepGroup"
            value="3"
            checked={currentIndex === 6}
            onChange={() => setCurrentIndex(6)}
          />
          Career Acceleration
        </label>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={images[currentImageIndex]} // Dynamically render the image
          alt="Step Image"
          width={300}
          height={300}
        />
      </div>

      <div className={styles.details}>
        {/* First Step Box */}
        <div className={styles.stepleftCard}>
          <div className={styles.stepNumber}>01</div>
          <h3 className={styles.stepTitle}>{stepsData[currentIndex]?.title}</h3>
          <p className={styles.stepDescription}>
            {stepsData[currentIndex]?.description}
          </p>
        </div>

        {/* Second Step Box */}
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>02</div>
          <h3 className={styles.stepTitle}>
            {stepsData[currentIndex + 1]?.title}
          </h3>
          <p className={styles.stepDescription}>
            {stepsData[currentIndex + 1]?.description}
          </p>
        </div>

        {/* Third Step Box */}
        <div className={styles.steplastCard}>
          <div className={styles.stepNumber}>03</div>
          <h3 className={styles.stepTitle}>
            {stepsData[currentIndex + 2]?.title}
          </h3>
          <p className={styles.stepDescription}>
            {stepsData[currentIndex + 2]?.description}
          </p>
        </div>
      </div>

      {/* Counter and Navigation */}
      <div className={styles.navigationContainer}>
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={styles.navButton}
        >
          &lt;
        </button>
        <span className={styles.counter}>
          {currentPage}/{totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentIndex + 3 >= stepsData.length}
          className={styles.navButton}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProcessSteps;
