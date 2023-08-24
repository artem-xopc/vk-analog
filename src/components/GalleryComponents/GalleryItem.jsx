const GalleryItem = ({ id, title, url }) => {
  return (
    <div>
      <h4>Заголовок: {title}</h4>
      <img src={url} />
    </div>
  );
};

export default GalleryItem;
