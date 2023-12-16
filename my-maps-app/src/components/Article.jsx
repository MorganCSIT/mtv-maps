import React from "react";
import BookTaxiButton from "./BookTaxiButton";

const Article = ({ article }) => {
  if (!article) return null;

  return (
    <div className="article">
      <h2>Book a taxi with Mr. A</h2>
      <p>Fill in your form and to send a whatsapp message to Mr. A</p>
      <BookTaxiButton />
      <p>
        <em>Updated on: {article.dateUpdated}</em>
      </p>
      <div>{article.content}</div>
      {article.links &&
        article.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookTaxiButton />
            {link.text}
          </a>
        ))}
    </div>
  );
};

export default Article;
