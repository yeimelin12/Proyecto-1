import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <img src={data.urlToImage}class="news__img" width={"100%"} ></img>
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
      <a className="news__href" href={data.url}>Ver mas...</a>
    </div>
  );
}

export default NewsArticle;
