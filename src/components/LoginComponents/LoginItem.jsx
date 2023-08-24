import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import Loader from "../UI/Loader";
import { useDispatch } from "react-redux";
import { login } from "../../store/slice/auth.slice";

const LoginItem = ({
  loading,
  error,
}) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {})
      .catch((error) => {
        console.log("Ошибка при входе:", error.message);
      });
  };

  if (error) {
    return (
      <>
        <p>{error}</p>
        <a href="/login">
          <Button>Попробовать снова</Button>
        </a>
      </>
    );
  }

  return (
    <Form>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h3>Войдите в аккаунт</h3>
          <Input
            type="email"
            placeholder="Введите электронную почту"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={"/profile"}>
            <Button onClick={handleLogin}>Авторизоваться</Button>
          </Link>
        </div>
      )}
    </Form>
  );
};

export default LoginItem;
