import React from "react";
import BookTaxiButton from "./BookTaxiButton";

const Article = ({ article }) => {
  if (!article) return null;

  return (
    <div className="article">
      <p>
        <em>
          Looking to book a taxi?{" "}
          <a href="#bottom" className="scroll-link">
            {" "}
            Click here!
          </a>
        </em>
      </p>

      <div>{article.content}</div>

      <p>
        <em>Updated on: {article.dateUpdated}</em>
      </p>

      {article.links &&
        article.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        ))}

      <div id="bottom"></div>
      <h2 style={{ textAlign: "center" }}>Inquire Mr.A's Taxi Service</h2>
      <BookTaxiButton />
    </div>
  );
};

export default Article;
