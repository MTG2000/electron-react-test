import React from "react";
import "./styles/news-card.scss";
import date from "date-and-time";

const NewsCard = props => {
  const { title, details, image_path, created_at } = props.data;
  const newDate = date.format(new Date(created_at), "DD MMM");

  return (
    <div className="my-5 col-lg-8 bg-white p-0 news-card">
      <div className="img-wrap w-100 overflow-hidden">
        <img src={image_path} alt={title} className="w-100" />
      </div>
      <h2 className="text-primary mt-5 mb-3 px-4 py-3">{title}</h2>
      <p className="text-dark px-5 my-4 mb-5">{details}</p>
      <h3 className="date text-white p-2">
        <span className="h2 text-center">{newDate.split(" ")[0]}</span>
        <br />
        {newDate.split(" ")[1]}
      </h3>
    </div>
  );
};

export default NewsCard;
