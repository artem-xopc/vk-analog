import g from "./Gallery.module.css";

const GalleryItem = ({ id, title, url }) => {
  return (
    <div className={g.gallery_item}>
      <h5 className={g.title}>Заголовок: {title}</h5>
      <img src={url} style={{borderRadius: '15px', maxWidth: '400px'}} />
    </div>
  );
};

export default GalleryItem;
