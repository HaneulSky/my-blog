import React, { useEffect, useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState();
  const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=db51281e856f4bd5b2f64ff4ffac0659";

  const result = fetch(url, {
    method: "GET",
  });

  useEffect(() => {
    result
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка запроса");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  }, []);

  console.log(articles);

  return (
    <>
      <h2>Статьи</h2> <p>Скоро здесь будут статьи</p>
    </>
  );
};

export default Articles;
