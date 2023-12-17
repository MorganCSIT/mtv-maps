import React, { useState } from "react";

const BookTaxiButton = () => {
  const [pickupPoint, setPickupPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Pickup Point: ${pickupPoint}
Destination: ${destination}
Pickup Time: ${pickupTime}

How much would this cost?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+66810851211?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="form-container">
      <div className="button-container">
        <button
          className="inquiry-form-button"
          style={{ marginBottom: 10 }}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Inquiry Form" : "Open Inquiry Form"}
        </button>
      </div>

      {showForm && (
        <form
          className={`book-taxi-form ${showForm ? "form-visible" : ""}`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={pickupPoint}
            onChange={(e) => setPickupPoint(e.target.value)}
            placeholder="Pickup Point"
            required
            className="book-taxi-input"
          />
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Destination"
            required
            className="book-taxi-input"
          />
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            required
            className="book-taxi-input"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <button type="submit" className="book-taxi-button">
              Send Inquiry
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookTaxiButton;
