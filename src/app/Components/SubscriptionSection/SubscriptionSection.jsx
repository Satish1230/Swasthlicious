import React from "react";
import Image from "next/image"; // If you’re using Next.js
import styles from "./SubscriptionSection.module.css";

export default function SubscriptionSection() {
  return (
    <section className={styles.subscriptionSection}>
      <h2 className={styles.sectionTitle}>Types of Subscription</h2>

      <div className={styles.cardsContainer}>
        {/* Monthly Subscription Card */}
        <div className={`${styles.card} ${styles.monthly}`}>
          <h3 className={styles.cardTitle}>Monthly Subscription Plan</h3>
          <p className={styles.cardSubtitle}>Most Valuable – Min 25% OFF</p>

          {/* Example Next.js <Image /> usage */}
          <div className={styles.imageWrapper}>
            <Image
              src="https://drive.google.com/uc?export=view&id=1CWSlU-Hlav4KUZchcjcqpZ_toePjhneQ"
              alt="Monthly Calendar"
              width={300}
              height={250}
            />
          </div>

          <button className={styles.subscribeBtn}>Subscribe Now</button>
        </div>

        <div className={styles.sidemeals}>
          <div className={`${styles.card} ${styles.biWeekly}`}>
            <h3 className={styles.cardTitle}>Bi-Weekly Subscription Plan</h3>
            <p className={styles.cardSubtitle}>Hot Seller Package!</p>

            <div className={styles.imageWrapper}>
              <Image
                src="https://drive.google.com/uc?export=view&id=1LHLfNa9UuFxyj1Byv8xiw4gBUCSOmxFb"
                alt="Bi-Weekly Calendar"
                width={200}
                height={200}
                quality={100}
                loading="lazy" // Optional: lazy load the image
              />
            </div>

            <button className={styles.subscribeBtn}>Subscribe Now</button>
          </div>

          {/* Weekly Subscription Card */}
          <div className={`${styles.card} ${styles.weekly}`}>
            <h3 className={styles.cardTitle}>Weekly Meal Plan</h3>
            <p className={styles.cardSubtitle}>Convenient in Small Package!</p>

            <div className={styles.imageWrapper}>
              <Image
                src="https://drive.google.com/uc?export=view&id=1kU1lTktNBoJ9kqNgsysbhD1RTOfKIaO1"
                alt="Weekly Calendar"
                width={200}
                height={200}
                quality={100}
                loading="lazy" // Optional: lazy load the image
              />
            </div>

            <button className={styles.subscribeBtn}>Subscribe Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
