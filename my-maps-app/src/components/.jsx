import React from "react";
// import Select from "react-select";
import Dropdown from "react-dropdown-select";

const TagCarousel = ({ options, onChange }) => {
  return (
    <Dropdown
      className="carousel"
      options={options}
      searchable={false}
      onChange={(selectedOption) => onChange(selectedOption)}
    />
  );
};

export default TagCarousel;

// const TagCarousel = ({ options, onChange }) => {
//   return (
//     <Dropdown
//       className="carousel"
//       options={options}
//       searchable={false}
//       onChange={(selectedOption) => onChange(selectedOption)}
//     />
//   );
// };
