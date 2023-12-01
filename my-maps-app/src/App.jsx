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
      label: "Phuket full map",
      articleId: 1,
    },
    {
      value:
        "https://www.google.com/maps/d/embed?mid=19UESSqs4lEfrjIGcs1ICBqI6nPA&ehbc=2E312F",
      label: "Phuket beaches",
      articleId: 2,
    },
    // Add more map options here
  ];

  const articles = {
    1: {
      heading: "Phuket full map",
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
      heading: "Phuket beaches",
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
      <TagCarousel options={mapOptions} onChange={handleMapChange} />
      <div className="content-container">
        {selectedMap && <MapDisplay mapUrl={selectedMap} />}
        <Article article={selectedArticle} />
      </div>
    </div>
  );
}

export default App;
