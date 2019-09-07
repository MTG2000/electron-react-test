import React, { useState, useEffect } from "react";
import NewsCard from "../NewsCard";
import Loading from "./Loading";
import "./styles/news.scss";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await fetch("/Api/News");
      const data = await result.json();
      setNews(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loading />;

  return (
    <React.Fragment>
      <div
        className="newsImage"
        style={{
          backgroundImage:
            'url("https://www.reedexpoafrica.co.za/wp-content/uploads/2014/01/Mediatech-Floor-960x300_c.jpg")'
        }}
      >
        <h1 className="text-center  text-white" data-aos="zoom-in">
          News & Exhibitions
        </h1>
      </div>
      <div
        style={{ minHeight: "100vh" }}
        className="container row mx-auto align-items-start justify-content-start py-5"
      >
        {news.map((item, index) => (
          <NewsCard key={index} data={item} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default NewsPage;
