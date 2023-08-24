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
    <Header>
      <div className={n.links_wrapper}>
        <Link to={"/login"} className={n.link_item}>Авторизоваться</Link>
        <Link to={"/profile"} className={n.link_item}>Профиль</Link>
        <Link to={"/news"} className={n.link_item}>Новости</Link>
        <Link to={"/gallery"} className={n.link_item}>Галерея</Link>
        <Button onClick={handleLogout} className={n.logout_button}>Выйти</Button>
      </div>
    </Header>
  );
};

export default NavBar;
