const GalleryItem = ({ albumId, id, title, url }) => {
  return (
    <div>
      <p>
        Номер альбома: {albumId}, номер фотографии: {id}
      </p>
      <p>Название фотографии: {title}</p>
      <img src={url} />
    </div>
  );
};

export default GalleryItem;
