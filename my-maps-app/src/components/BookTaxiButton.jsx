import React, { useState } from "react";

const BookTaxiButton = () => {
  const [pickupPoint, setPickupPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Pickup Point: ${pickupPoint}, Destination: ${destination}, Pickup Time: ${pickupTime}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/1234567890?text=${encodedMessage}`; // replace 1234567890 with the actual number
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <button
        style={{ marginBottom: 10 }}
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Hide Form" : "Show Form"}
      </button>

      {showForm && (
        <form className="book-taxi-form">
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
        </form>
      )}
    </div>
  );
};

export default BookTaxiButton;
