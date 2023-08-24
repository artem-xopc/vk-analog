import React from "react";
import { Button, Select } from "antd";
import { Link } from "react-router-dom";
import GalleryService from "../../API/GalleryService";
import GalleryItem from "./GalleryItem";
import axios from "axios";

import g from "./Gallery.module.css";

const GalleryContainer = () => {
  const [photos, setPhotos] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [isPhotoLoading, setIsPhotoLoading] = React.useState(false);

  // Загрузка фотографий с сервера при изменении страницы и монтировании компонента
  React.useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos",
          {
            params: {
              _page: page,
              _limit: limit,
            },
          }
        );
        setIsPhotoLoading(true);
        setPhotos([...photos, ...response.data]);
      } catch (error) {
        console.log("Ошибка при загрузке постов:", error);
      }
    };

    setIsPhotoLoading(false);
    fetchPhotos();
  }, [page]);

  const changePage = () => {
    setPage(page + 1);
  };

  return (
    <div className={g.gallery_wrapper}>
      <h1 className={g.title}>Галерея фотографий</h1>
      <div>
        <div className={g.gallery_items}>
          {photos.map((item) => (
            <GalleryItem
              key={item.id}
              albumId={item.albumId}
              id={item.id}
              title={item.title}
              url={item.url}
            />
          ))}
        </div>
      </div>
      <div className={g.change_button}>
        <Button onClick={changePage}>Показать ещё</Button>
      </div>
      <div className={g.links_button_wrapper}>
        <Link to={"/profile"}>
          <Button className={g.link_button}>Перейти в профиль</Button>
        </Link>
        <Link to={"/news"}>
          <Button>Посмотреть новости</Button>
        </Link>
      </div>
    </div>
  );
};

export default GalleryContainer;
