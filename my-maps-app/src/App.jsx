import React, { useState } from "react";
import MapDisplay from "./components/MapDisplay";
import TagCarousel from "./components/TagCarousel";
import Article from "./components/Article";
import "./App.css";

function App() {
  const [selectedMap, setSelectedMap] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const mapOptions = [
    {
      value:
        "https://www.google.com/maps/d/embed?mid=1yEadiJSV3W_90XMluZyERkIEXRE&hl=en&ehbc=2E312F",
      label: "Phuket Full Map",
      articleId: 1,
    },
    {
      value:
        "https://www.google.com/maps/d/embed?mid=19UESSqs4lEfrjIGcs1ICBqI6nPA&ehbc=2E312F",
      label: "Phuket Beaches",
      articleId: 2,
    },
    {
      value:
        "https://www.google.com/maps/d/embed?mid=1NVyHmS2XKonHZXVaDPKQd9RSIkZCF4bO&ehbc=2E312F",
      label: "Piers and Marinas",
      articleId: 3,
    },
    // Add more map options here
  ];

  const articles = {
    1: {
      heading: "Phuket Full Map",
      dateUpdated: "2023-12-01",
      content: "Content about New York...",
      links: [
        {
          url: "https://www.google.com/maps/d/embed?mid=1yEadiJSV3W_90XMluZyERkIEXRE&hl=en&ehbc=2E312F",
          text: "Read more",
        },
      ],
    },
    2: {
      heading: "Phuket Beaches",
      dateUpdated: "2023-12-01",
      content:
        " Patong is Phuket's most famous beach, known for its vibrant nightlife, shopping, and wide beachfront. It's a great spot for those looking for entertainment and a lively atmosphere.Kata Beach is popular for its picturesque scenery, clear waters, and palm-lined beach. It's a family-friendly location with a relaxed vibe, suitable for swimming and surfing.Surin Beach is a stylish and upscale destination known for its fine white sand and turquoise waters. It's surrounded by high-end resorts, restaurants, and shops, making it a hotspot for luxury travelers.",
      links: [
        {
          url: "https://www.google.com/maps/d/embed?mid=19UESSqs4lEfrjIGcs1ICBqI6nPA&ehbc=2E312F",
          text: "Read more",
        },
      ],
    },
    3: {
      heading: "Piers and Marinas",
      dateUpdated: "2023-12-01",
      content: "Content about London...",
      links: [
        {
          url: "https://www.google.com/maps/d/embed?mid=19UESSqs4lEfrjIGcs1ICBqI6nPA&ehbc=2E312F",
          text: "Read more",
        },
      ],
    },
    // Add more articles here
  };

  const handleMapChange = (option) => {
    setSelectedMap(option.value);
    setSelectedArticle(articles[option.articleId]);
  };

  return (
    <div className="App">
      <div className="pair-container">
        <TagCarousel options={mapOptions} onChange={handleMapChange} />
        <div className="content-container">
          {selectedMap && <MapDisplay mapUrl={selectedMap} />}
          <Article article={selectedArticle} />
        </div>
      </div>
    </div>
  );
}

export default App;
