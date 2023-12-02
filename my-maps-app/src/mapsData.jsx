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

export default mapsData;
