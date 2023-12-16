import React from "react";

const BookTaxiButton = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // if you want a smooth scrolling effect
    });
  };

  return (
    <button className="book-taxi-button" onClick={scrollToBottom}>
      Book Taxi
    </button>
  );
};

export default BookTaxiButton;
