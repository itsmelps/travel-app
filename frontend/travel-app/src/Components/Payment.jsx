import React from "react";
import "../assets/Payment.css"; // Import the CSS file

export default function Payment() {
  return (
    <div className="payment-card">
      {/* Pricing Section */}
      <div className="pricing-section">
        <div className="price">
            <span className="old-price">₹84,490</span>
            <span className="new-price">₹64,212</span>
        </div>
        <span className="nights-info">for 5 nights</span>
      </div>

      <div className="divider"></div>

      {/* Date Selection */}
      <div className="date-selection">
        <div>
          <span className="date-label">START-DATE</span>
          <div className="date-value">4/4/2025</div>
        </div>
        <div>
          <span className="date-label">END-DATE</span>
          <div className="date-value">4/9/2025</div>
        </div>
      </div>

      {/* <div className="divider"></div> */}

      {/* Guests Selection */}
      <div className="guest-selection">
        <span className="date-label">GUESTS</span>
        <select>
          <option>1 guest</option>
          <option>2 guests</option>
          <option>3 guests</option>
        </select>
      </div>

      {/* Reserve Button */}
      <button className="reserve-button">Reserve</button>

      <div className="payment-footer">You won't be charged yet</div>
    </div>
  );
}
