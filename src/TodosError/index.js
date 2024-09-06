import React from "react";
import "./TodosError.css"; // Ensure your styles are imported

function TodosError() {
  return (
    <div className="error-overlay">
      <div className="error-message">
        <div className="error-circle"></div>
        <p className="error-text">404 - Page Not Found</p>
      </div>
    </div>
  );
}

export { TodosError };
