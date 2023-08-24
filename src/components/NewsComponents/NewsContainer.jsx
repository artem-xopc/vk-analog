import React from "react";
import NewsItem from "./NewsItem";
import { Button, List, Select } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const NewsContainer = () => {
  const [users, setUsers] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [authorFilter, setAuthorFilter] = React.useState(1);
  const [isPostLoading, setIsPostLoading] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(1);
  const [totalUsers, setTotalUsers] = React.useState(10);
  const [limit, setLimit] = React.useState(12);
  const lastElement = React.useRef();

  // Загрузка пользователей из сервера при монтировании компонента
  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data.slice(0, 10));
      } catch (error) {
        console.log("Ошибка при загрузке пользователей:", error);
      }
    };

    fetchUsers();
  }, []);

  // Загрузка постов из сервера при изменении фильтра автора и монтировании компонента
  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              userId: authorFilter,
              _limit: 12,
            },
          }
        );
        setIsPostLoading(true);
        setPosts([...posts, ...response.data]);
      } catch (error) {
        console.log("Ошибка при загрузке постов:", error);
      }
    };

    setIsPostLoading(false);
    fetchPosts();
  }, [authorFilter]);

  const handleAuthorFilterChange = (value) => {
    setAuthorFilter(value);
  };

  const changePage = () => {
    setAuthorFilter(authorFilter + 1);
    console.log(authorFilter)
  };

  return (
    <div>
      <div>
        <Select
          style={{ marginBottom: "16px" }}
          placeholder="Фильтр по автору"
          onChange={handleAuthorFilterChange}
          allowClear
        >
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
        <List
          itemLayout="vertical"
          dataSource={posts}
          renderItem={(post) => (
            <List.Item key={post.id}>
              <NewsItem title={post.title} body={post.body} />
            </List.Item>
          )}
        />
        <Button onClick={changePage}>Показать ещё</Button>
        
      </div>
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