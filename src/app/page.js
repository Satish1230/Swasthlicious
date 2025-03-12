import React from "react";
import ReviewCard from "./Components/ReviewCard/Reviews";
import styles from "./CardGrid.module.css";
import ProcessSteps from "./Components/ProcessSteps/ProcessSteps";
import AccordionComponent from "./Components/accordion/accordion";
import Header from "./Components/Header/Header";
import Scratch from "./Components/Scratch_Card/Scratch";
import Fireworks from "./Components/Fireworks/Fireworks";
import RippleBackground from "./Components/RippleButton/RippleButton";
import SubscriptionSection from "./Components/SubscriptionSection/SubscriptionSection";
export default function Home() {
  return (
    <main>
      <Header />

      <ReviewCard />
      <SubscriptionSection />

      {/* <ProcessSteps /> */}
      <AccordionComponent />
      <Scratch />
      {/* <Fireworks /> */}
      <RippleBackground />
    </main>
  );
}
