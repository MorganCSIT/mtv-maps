import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams
} from "react-router-dom";
import MapDisplay from "./components/MapDisplay";
import TagCarousel from "./components/TagCarousel";
import Article from "./components/Article";
import "./App.css";
import mapsData from "./mapsData";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/map/:mapId" element={<MapRoute />} />
          <Route path="*" element={<Navigate replace to={`/map/${mapsData[0].id}`} />} />
        </Routes>
      </div>
    </Router>
  );
}

function MapRoute() {
  const { mapId } = useParams();
  const mapData = mapsData.find(data => data.id.toString() === mapId);

  if (!mapData) {
    return <Navigate replace to="/" />;
  }

  const selectedOption = [{
    value: mapId,
    label: mapData.label // Ensure this label matches exactly one in the options
  }];

  return (
    <div className="pair-container">
      <div style={{ textAlign: "center" }}>
        <h2><em>Explore Phuket!</em></h2>
        <p><em>"Using a categorized list of locally curated maps"</em></p>
      </div>
      <div className="content-container">
        <MapDisplay mapUrl={mapData.mapUrl} />
        <TagCarousel
          options={mapsData.map(map => ({
            value: map.id.toString(),
            label: map.label
          }))}
          selectedValue={selectedOption}
          onChange={(selectedOptions) => {
            if (selectedOptions.length > 0) {
              window.location.href = `/map/${selectedOptions[0].value}`;
            }
          }}
        />
        <Article article={mapData.article} />
      </div>
      <br></br>
    </div>
  );
}

export default App;
