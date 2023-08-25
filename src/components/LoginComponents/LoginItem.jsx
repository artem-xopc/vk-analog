import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import Loader from "../UI/Loader";
import { useDispatch } from "react-redux";
import { login } from "../../store/slice/auth.slice";

import l from "./Login.module.css";

const LoginItem = ({ loading, error }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
      <div className={l.box}>
        <div className={l.login_card}>
          <p className={l.error}>{error}</p>
          <a href="/login">
            <Button danger>Попробовать снова</Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <Form>
        <div className={l.login_item}>
          <div className={l.input}>
            <Input
              type="email"
              placeholder="Введите электронную почту"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={l.input}>
            <Input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            {loading ? <Button loading>Подождите</Button> : <Button onClick={handleLogin}>Авторизоваться</Button>}
              

          </div>
        </div>
    </Form>
  );
};

export default LoginItem;
