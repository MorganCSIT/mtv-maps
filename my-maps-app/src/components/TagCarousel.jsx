import React from "react";
import Select from "react-select";

const TagCarousel = ({ options, onChange }) => {
  return <Select className="carousel" options={options} onChange={onChange} />;
};

export default TagCarousel;