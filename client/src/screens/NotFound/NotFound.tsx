// NotFound.js
import React from "react";
import { GO_BACK } from "../../constants/string"
import "./NotFound.css"; // Import the CSS file

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-title">404</div>
      <div className="not-found-message">Oops! Page not found.</div>
      <a href="/" className="not-found-link">
        {GO_BACK}
      </a>
    </div>
  );
}

export default NotFound;
