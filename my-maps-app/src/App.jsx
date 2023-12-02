import React, { useState } from "react";
import MapDisplay from "./components/MapDisplay";
import TagCarousel from "./components/TagCarousel";
import Article from "./components/Article";
import "./App.css";
import mapsData from "./mapsData";

function App() {
  const [selectedMap, setSelectedMap] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

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
