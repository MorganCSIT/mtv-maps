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
      value: "https://maps.google.com/?q=New York",
      label: "New York",
      articleId: 1,
    },
    {
      value: "https://maps.google.com/?q=London",
      label: "London",
      articleId: 2,
    },
    // Add more map options here
  ];

  const articles = {
    1: {
      heading: "New York",
      dateUpdated: "2023-12-01",
      content: "Content about New York...",
      links: [{ url: "#", text: "Read more" }],
    },
    2: {
      heading: "London",
      dateUpdated: "2023-12-01",
      content: "Content about London...",
      links: [{ url: "#", text: "Read more" }],
    },
    // Add more articles here
  };

  const handleMapChange = (option) => {
    setSelectedMap(option.value);
    setSelectedArticle(articles[option.articleId]);
  };

  return (
    <div className="App">
      <TagCarousel options={mapOptions} onChange={handleMapChange} />
      <div className="content-container">
        {selectedMap && <MapDisplay mapUrl={selectedMap} />}
        <Article article={selectedArticle} />
      </div>
    </div>
  );
}

export default App;
