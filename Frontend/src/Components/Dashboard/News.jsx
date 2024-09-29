/** @format */

import React, { useState, useEffect } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Example API for fetching news (Replace with a valid API)
    fetch(
      "https://newsapi.org/v2/everything?q=income+tax+ITR&apiKey=1c8b5b566be0400dbe5e3edba978255c"
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div className="bg-white text-black   p-4 rounded-lg shadow-md shadow-lg hover:shadow-2xl transition-shadow duration-500">
      <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
      <ul>
        {articles.slice(0, 3).map((article, index) => (
          <li key={index} className="mb-4">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {article.title}
            </a>
            <p className="text-sm text-gray-600">{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;