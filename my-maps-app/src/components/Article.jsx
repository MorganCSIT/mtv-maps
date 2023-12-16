import React from "react";
import BookTaxiButton from "./BookTaxiButton";

const Article = ({ article }) => {
  if (!article) return null;

  return (
    <div className="article">
      <p>
        <em>Looking to inquire Mr.A's taxi services?</em>
      </p>
      <BookTaxiButton />
      <div>{article.content}</div>
      <BookTaxiButton />
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
    </div>
  );
};

export default Article;
