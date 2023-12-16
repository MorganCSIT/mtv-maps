import React, { useState } from "react";

const BookTaxiForm = () => {
  const [pickupPoint, setPickupPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Pickup Point: ${pickupPoint}, Destination: ${destination}, Pickup Time: ${pickupTime}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/1234567890?text=${encodedMessage}`; // replace 1234567890 with the actual number
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="book-taxi-form">
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
      <button type="submit" className="book-taxi-button">
        Book Taxi
      </button>
    </form>
  );
};

export default BookTaxiForm;
