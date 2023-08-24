const NewsItem = ({ title, body }) => {
  return (
    <div>
      <h4 style={{color: 'black'}}>{title}</h4>
      <p style={{color: 'black'}}>{body}</p>
    </div>
  );
};

export default NewsItem; 
