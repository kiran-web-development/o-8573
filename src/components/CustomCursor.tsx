
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverText, setIsOverText] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null;
      
      setIsPointer(isClickable);
      
      // Check if cursor is over welcome text
      const isWelcomeText = target.classList.contains('hover-text') || 
                            target.closest('.hover-text') !== null;
      setIsOverText(isWelcomeText);
    };

    const showCursor = () => setIsVisible(true);
    const hideCursor = () => setIsVisible(false);
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseenter", showCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseenter", showCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer circle */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full transition-all duration-300 ${
          isClicking 
            ? "scale-75 opacity-70" 
            : isOverText 
              ? "scale-[2.5] bg-white/30 w-6 h-6 mix-blend-difference" 
              : isPointer 
                ? "scale-150 bg-red-500/20 w-6 h-6" 
                : "bg-neutral-600/20 w-8 h-8"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)"
        }}
      ></div>
      
      {/* Inner dot */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full transition-transform duration-200 ${
          isClicking 
            ? "scale-75" 
            : isOverText 
              ? "bg-white w-2 h-2" 
              : isPointer 
                ? "bg-red-500 w-2 h-2" 
                : "bg-neutral-600 w-2 h-2"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)"
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
