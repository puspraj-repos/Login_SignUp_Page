// NotFound.js
import React from "react";
import { GO_BACK, PAGE_NOT_FOUND } from "../../constants/string"
import "./NotFound.css"; // Import the CSS file
import { NOT_FOUND } from "../../constants/codes";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-title">{NOT_FOUND}</div>
      <div className="not-found-message">{PAGE_NOT_FOUND}</div>
      <a href="/" className="not-found-link">
        {GO_BACK}
      </a>
    </div>
  );
}

export default NotFound;
