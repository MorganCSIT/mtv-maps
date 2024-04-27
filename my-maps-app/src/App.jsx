import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import MapDisplay from "./components/MapDisplay";
import TagCarousel from "./components/TagCarousel";
import Article from "./components/Article";
import "./App.css";
import mapsData from "./mapsData";
import { HiArrowSmDown } from "react-icons/hi";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/map/:mapId" element={<MapRoute />} />
          <Route
            path="*"
            element={<Navigate replace to={`/map/${mapsData[0].id}`} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

function MapRoute() {
  const { mapId } = useParams();
  const mapData = mapsData.find((data) => data.id.toString() === mapId);

  if (!mapData) {
    return <Navigate replace to="/" />;
  }

  const selectedOption = [
    {
      value: mapId,
      label: mapData.label, // Ensure this label matches exactly one in the options
    },
  ];

  return (
    <div className="pair-container">
      <div className="help-arrows">
        <div className="down-arrow-button">
          <span>Open menu</span>
          <HiArrowSmDown className="down-arrow" />
        </div>
        <div className="down-arrow-button-right"></div>
        <div className="content-container">
          <MapDisplay mapUrl={mapData.mapUrl} />
          <TagCarousel
            options={mapsData.map((map) => ({
              value: map.id.toString(),
              label: map.label,
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
    </div>
  );
}

export default App;
