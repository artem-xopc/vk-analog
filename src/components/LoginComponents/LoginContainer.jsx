import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slice/auth.slice";
import LoginItem from "./LoginItem";
import { Button } from "antd";

import l from "./Login.module.css";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => !!state.auth.token);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={l.login_wrapper}>
      <div className={l.box}>
        {isAuth ? (
          <div className={l.login_card}>
            <h3 className={l.title}>Вы авторизованы!</h3>
            <span>
              <span className={l.login_button}>
                <Button onClick={handleLogout}>Выйти</Button>
              </span>
              <span>
                <a href="/profile">
                  <Button>Посмотреть профиль</Button>
                </a>
              </span>
            </span>
          </div>
        ) : (
          <div>
            <h1 className={l.title}>Авторизуйтесь</h1>
            <LoginItem loading={loading} error={error} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginContainer;
