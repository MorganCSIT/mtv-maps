import React from "react";

const MapDisplay = ({ mapUrl }) => {
  return (
    <div className="map-container" style={{ height: "500px", width: "100%" }}>
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        src={mapUrl}
      ></iframe>
    </div>
  );
};

export default MapDisplay;
