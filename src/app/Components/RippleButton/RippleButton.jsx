"use client";
import { useRef } from "react";
import "./RippleButton";

export default function RippleBackground({ children, onClick, ...props }) {
  const containerRef = useRef(null);

  const handleClick = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Create a new span element for the ripple
    const ripple = document.createElement("span");

    // Calculate size (largest dimension) and position of the ripple
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple";

    // Append the ripple to the container
    container.appendChild(ripple);

    // Remove the ripple element after the animation is complete
    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });

    // Optionally call the onClick prop if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      ref={containerRef}
      className="ripple-container"
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
}
