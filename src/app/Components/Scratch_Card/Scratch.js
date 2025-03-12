"use client";
import React, { useRef, useEffect, useState } from "react";
import "./ScratchToReveal.css";
import Fireworks from "../Fireworks/Fireworks"; // Use default import

export default function ScratchToReveal() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // State to track scratch and zoom status
  const [hasScratched, setHasScratched] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      fillCanvas();
    };

    const fillCanvas = () => {
      ctx.fillStyle = "#aaa"; // Scratchable layer color
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Check how much of the canvas has been scratched away
  const checkScratchCompletion = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let transparentPixels = 0;

    // Each pixel has 4 components (RGBA)
    for (let i = 0; i < data.length; i += 4) {
      // Pixel is "scratched" if its alpha is less than 128
      if (data[i + 3] < 128) {
        transparentPixels++;
      }
    }
    const totalPixels = canvas.width * canvas.height;
    return (transparentPixels / totalPixels) * 100;
  };

  const handlePointerDown = (e) => {
    if (!hasScratched) {
      setHasScratched(true);
    }
    setIsDrawing(true);
    const { offsetX, offsetY } = getPointerPos(e);
    setLastPos({ x: offsetX, y: offsetY });
  };

  const handlePointerMove = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = "rgba(0,0,0,1)";
    ctx.lineWidth = 30;

    const { offsetX, offsetY } = getPointerPos(e);

    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();

    setLastPos({ x: offsetX, y: offsetY });
  };
  const handlePointerUp = () => {
    setIsDrawing(false);
    const percentScratched = checkScratchCompletion();
    if (percentScratched >= 45) {
      setShowFireworks(true);
    }
  };

  // const handlePointerUp = () => {
  //   setIsDrawing(false);
  //   const percentScratched = checkScratchCompletion();
  //   if (percentScratched >= 75) {
  //     // setIsZoomed(true);
  //     setShowFireworks(true); // Now show the Fireworks component

  //     //   // Reset zoom and hide fireworks after animation (1 second)
  //     //   setTimeout(() => {
  //     //     setIsZoomed(false);
  //     //     setShowFireworks(false);
  //     //   }, 1000);
  //     return <Fireworks data={true} />;
  //   }
  // };

  // Helper: Get pointer position from mouse or touch event
  const getPointerPos = (e) => {
    if (e.touches && e.touches.length > 0) {
      const rect = e.target.getBoundingClientRect();
      return {
        offsetX: e.touches[0].clientX - rect.left,
        offsetY: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        offsetX: e.nativeEvent.offsetX,
        offsetY: e.nativeEvent.offsetY,
      };
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scratch-container ${isZoomed ? "zoomed" : ""}`}
    >
      {/* Hidden content revealed as the user scratches */}
      <div className="hidden-content">You won 50% OFF!</div>
      {/* Scratch prompt when untouched */}
      {!hasScratched && <div className="scratch-prompt">Scratch Here</div>}
      {/* Scratchable canvas layer */}
      <canvas
        ref={canvasRef}
        className="scratch-canvas"
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      />
      {showFireworks && <Fireworks data={true} />}
    </div>
  );
}
