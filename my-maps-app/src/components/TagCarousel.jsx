import React from "react";
import Dropdown from "react-dropdown-select";

const TagCarousel = ({ options, onChange, selectedValue }) => {
  console.log("Options:", options); // Check what options you are getting
  console.log("Selected Value:", selectedValue); // Check what selectedValue you are getting

  return (
    <Dropdown
      className="carousel"
      options={options}
      values={selectedValue}
      searchable={false}
      onChange={(selectedOptions) => onChange(selectedOptions)}
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
