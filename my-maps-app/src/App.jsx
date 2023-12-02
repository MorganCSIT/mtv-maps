import React, { useState } from "react";
import MapDisplay from "./components/MapDisplay";
import TagCarousel from "./components/TagCarousel";
import Article from "./components/Article";
import "./App.css";

function App() {
  const [selectedMap, setSelectedMap] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const mapsData = [
    {
      id: 1,
      mapUrl:
        "https://www.google.com/maps/d/embed?mid=1yEadiJSV3W_90XMluZyERkIEXRE&hl=en&ehbc=2E312F",
      label: "Phuket Full Map",
      article: {
        heading: "Full Map",
        dateUpdated: "2023-12-01",
        content: (
          <div>
            <p>Information about Phuket...</p>
            <ul>
              <li>Detail 1</li>
              <li>Detail 2</li>
            </ul>
            {/* More JSX content */}
          </div>
        ),
        links: [{ url: "#", text: "Read more" }],
      },
    },
    {
      id: 2,
      mapUrl:
        "https://www.google.com/maps/d/embed?mid=19UESSqs4lEfrjIGcs1ICBqI6nPA&ehbc=2E312F",
      label: "Phuket Beaches",
      article: {
        heading: "Phuket Beaches",
        dateUpdated: "2023-12-01",
        content: (
          <div>
            <p>Our favourite beaches...</p>
            {/* More JSX content */}
          </div>
        ),
        links: [{ url: "#", text: "Read more" }],
      },
    },
    // Add more map data here
  ];

  const handleMapChange = (option) => {
    const selectedData = mapsData.find((map) => map.label === option.label);
    if (selectedData) {
      setSelectedMap(selectedData.mapUrl);
      setSelectedArticle(selectedData.article);
    }
  };

  return (
    <div className="App">
      <div className="pair-container">
        <TagCarousel
          options={mapsData.map((map) => ({
            value: map.mapUrl,
            label: map.label,
          }))}
          onChange={handleMapChange}
        />

        <div className="content-container">
          {selectedMap && <MapDisplay mapUrl={selectedMap} />}
          <Article article={selectedArticle} />
        </div>
      </div>
    </div>
  );
}

export default App;
