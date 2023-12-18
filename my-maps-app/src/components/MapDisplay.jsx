import React from "react";

const MapDisplay = ({ mapUrl }) => {
  return (
    <div className="map-container" style={{ height: "60vh", width: "100%" }}>
      <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?v=3.53&client=google-maps-pro&language=en&region=TH&libraries=places,visualization,geometry,search&callback=initMap"
      ></script>
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
