import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../store/slice/auth.slice";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { AuthContext } from "../contex";
import { Header } from "antd/es/layout/layout";

import n from "./Navbar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  const handleLogout = () => {
    dispatch(logout());
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <Header className={n.header_wrapper}>
      <div className={n.links_wrapper}>
        <Link to={"/vk-analog/login"} className={n.link_item}>
          Авторизоваться
        </Link>
        <Link to={"/vk-analog/profile"} className={n.link_item}>
          Профиль
        </Link>
        <Link to={"/vk-analog/news"} className={n.link_item}>
          Новости
        </Link>
        <Link to={"/vk-analog/gallery"} className={n.link_item}>
          Галерея
        </Link>
        {isAuth ? (
          <Button
            type="primary"
            onClick={handleLogout}
            className={n.log_button}
          >
            Выйти
          </Button>
        ) : (
          <Link to={'/login'}>
            <Button type="primary" className={n.log_button}>
              Войти
            </Button>
          </Link>
        )}
      </div>
    </Header>
  );
};

export default NavBar;
