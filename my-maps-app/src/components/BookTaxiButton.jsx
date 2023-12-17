import React, { useState } from "react";

const BookTaxiButton = () => {
  const [pickupPoint, setPickupPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [note, setNote] = useState(""); // Added state for request

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Pickup Date: ${pickupDate}
Pickup Time: ${pickupTime}
Pickup Point: ${pickupPoint}
Destination: ${destination}
Request: ${note} // Added request to the message

How much would this cost?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+66810851211?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="form-container">
      <form className="book-taxi-form" onSubmit={handleSubmit}>
        <label className="input-label">
          Pickup Date:
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="book-taxi-input"
          />
        </label>

        <label className="input-label">
          Pickup Time:
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            className="book-taxi-input"
          />
        </label>

        <label className="input-label">
          Pickup Point:
          <input
            type="text"
            value={pickupPoint}
            onChange={(e) => setPickupPoint(e.target.value)}
            className="book-taxi-input"
          />
        </label>

        <label className="input-label">
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="book-taxi-input"
          />
        </label>

        <label className="input-label">
          Note
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="oneway or return? More than 4 passengers? etc."
            className="book-taxi-input"
          />
        </label>

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
    </div>
  );
};

export default BookTaxiButton;
