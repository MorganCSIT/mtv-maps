import React, { useState } from "react";
import MapDisplay from "./components/MapDisplay";
import TagCarousel from "./components/TagCarousel";
import Article from "./components/Article";
import "./App.css";
import mapsData from "./mapsData";
import "./components/BookTaxiButton";

function App() {
  const [selectedMap, setSelectedMap] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleMapChange = (options) => {
    if (options.length > 0) {
      const selectedOption = options[0];
      const selectedData = mapsData.find(
        (map) => map.label === selectedOption.label
      );
      if (selectedData) {
        setSelectedMap(selectedData.mapUrl);
        setSelectedArticle(selectedData.article);
      }
    }
  };

  return (
    <div className="App">
      <div className="pair-container">
        <div className="content-container">
          {selectedMap && <MapDisplay mapUrl={selectedMap} />}
          <TagCarousel
            options={mapsData.map((map) => ({
              value: map.mapUrl,
              label: map.label,
            }))}
            onChange={handleMapChange}
          />
          <Article article={selectedArticle} />
        </div>
      </div>
    </div>
  );
}

export default App;
