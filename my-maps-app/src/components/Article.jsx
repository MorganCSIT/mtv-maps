import React from "react";
import BookTaxiButton from "./BookTaxiButton";

const Article = ({ article }) => {
  if (!article) return null;

  return (
    <div className="article">
      <h2>{article.heading}</h2>
      <BookTaxiButton />
      <p>
        <em>Updated on: {article.dateUpdated}</em>
      </p>
      <div>{article.content}</div>
      <BookTaxiButton />
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
    </div>
  );
};

export default Article;
