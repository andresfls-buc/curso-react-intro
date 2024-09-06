import React from "react";
import "./LoadingSpinner.scss"; // Ensure you're importing the correct SCSS file

function LoadingSpinner() {
  // Create the particles dynamically
  const particles = Array.from({ length: 100 }, (_, index) => {
    return (
      <i key={index}>
        <b
          style={{
            animationDelay: `${index * (3 / 100)}s`, // Adjust delay based on index
          }}
        ></b>
      </i>
    );
  });

  return (
    <div className="loading-spinner">
      <div className="spinner">{particles}</div>
    </div>
  );
}

export { LoadingSpinner };
