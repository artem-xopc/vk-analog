import React from "react";
import NewsService from "../../API/NewsService";
import NewsItem from "./NewsItem";
import { Button } from "antd";
import { Link } from "react-router-dom";

const NewsContainer = () => {
  const [news, setNews] = React.useState([]);
  const count = 1;
  const limit = 12;

  React.useEffect(() => {
    const setNewsInfo = async () => {
      const response = await NewsService.getAllNews(count, limit);
      setNews(response.data);
    };
    setNewsInfo();
  }, {});

  return (
    <div>
      {news.map((item) => (
        <NewsItem key={item.id} title={item.title} body={item.body} />
      ))}
      <Link to={"/profile"}>
        <Button>В профиль</Button>
      </Link>
      <Link to={"/gallery"}>
        <Button>Посмотреть фото</Button>
      </Link>
    </div>
  );
};

export default NewsContainer;
