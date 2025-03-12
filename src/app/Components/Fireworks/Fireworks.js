"use client";
import { useRef, useEffect } from "react";
import "./Fireworks.css";

const Fireworks = ({ data }) => {
  const canvasRef = useRef(null);
  const triggerRef = useRef(null);
  useEffect(() => {
    console.log("data prop:", data);
    if (data !== undefined) {
      console.log("data prop received");
    } else {
      console.log("data prop not provided");
    }
  }, [data]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    let particles = [];

    // Create a particle object
    const createParticle = (x, y) => {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 5 + 2;
      return {
        x,
        y,
        angle,
        speed,
        life: Math.random() * 30 + 30, // lifespan in frames
        size: Math.random() * 3 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      };
    };

    // Function to trigger fireworks from the canvas center
    const triggerFireworks = () => {
      const x = canvas.width / 2;
      const y = canvas.height / 2;
      const count = 100; // number of particles
      for (let i = 0; i < count; i++) {
        particles.push(createParticle(x, y));
      }
    };

    // Expose the trigger function via the ref
    triggerRef.current = triggerFireworks;

    // Animation loop: update and draw particles
    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, index) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.speed *= 0.98;
        p.life -= 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
        if (p.life <= 0) {
          particles.splice(index, 1);
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  // Auto-trigger fireworks when data is true
  useEffect(() => {
    if (data && triggerRef.current) {
      triggerRef.current();
    }
  }, [data]);

  return (
    <div>
      {/* Fullscreen canvas for drawing */}
      <canvas ref={canvasRef} className="fireworks-canvas" />
      {/* Only show the button if data is false */}
      {!data && (
        <button
          onClick={() => triggerRef.current && triggerRef.current()}
          className="fireworks-button"
        >
          Trigger Fireworks
        </button>
      )}
    </div>
  );
};

export default Fireworks;
