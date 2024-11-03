import React, { useState, useEffect, useRef } from 'react';

export default function ProgressBar({ initialValue, targetValue,skillName }) {
  const [progress, setProgress] = useState(initialValue);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null); // Ref for the progress bar element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible to true when in view
          observer.unobserve(entry.target); // Stop observing after it's visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentRef = progressRef.current; // Store current ref in a variable
    if (currentRef) {
      observer.observe(currentRef); // Start observing the progress bar
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Clean up on unmount using the stable reference
      }
    };
  }, []); // Only run on mount

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < targetValue) {
            return Math.min(prev + 6, targetValue); // Increment and cap at target value
          } else {
            clearInterval(interval); // Stop when reaching target value
            return targetValue; // Ensure it stays at target value
          }
        });
      }, 100); // Update every 100 milliseconds

      return () => clearInterval(interval); // Clean up on unmount
    }
  }, [isVisible, targetValue]); // Dependency on isVisible

  return (
    <div ref={progressRef}>
      <span>
        <p>{skillName}</p>
        <h5>{progress}%</h5>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </span>
    </div>
  );
}
