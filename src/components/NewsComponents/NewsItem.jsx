const NewsItem = ({ title, body }) => {
  return (
    <div>
      <p>{title}</p>
      <p style={{borderBottom: '1px solid black'}}>{body}</p>
    </div>
  );
};

export default NewsItem;
