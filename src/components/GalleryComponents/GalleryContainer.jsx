import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import GalleryService from "../../API/GalleryService";
import GalleryItem from "./GalleryItem";

const GalleryContainer = () => {
  const [photos, setPhotos] = React.useState([]);

  const setPhotosInfo = async () => {
    const response = await GalleryService.getAllPhotos();
    setPhotos(response.data);
  };

  React.useMemo(() => {
    setPhotosInfo();
  }, {});

  return (
    <div>
      {photos.map((item) => (
        <GalleryItem key={item.id} albumId={item.albumId} id={item.id} title={item.title} url={item.url} />
      ))}
      <Link to={"/profile"}>
        <Button>В профиль</Button>
      </Link>
      <Link to={"/news"}>
        <Button>Посмотреть новости</Button>
      </Link>
    </div>
  );
};

export default GalleryContainer;
