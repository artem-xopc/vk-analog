import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../store/slice/auth.slice";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { AuthContext } from "../contex";

const NavBar = () => {
  const dispatch = useDispatch();
  const {isAuth, setIsAuth} = React.useContext(AuthContext)

  const handleLogout = () => {
    dispatch(logout());
    setIsAuth(false)
    localStorage.removeItem('auth')
  };

  return (
    <header>
      <div>
        <Link to={"/login"}>Авторизоваться</Link>
        <Link to={"/profile"}>Профиль</Link>
        <Link to={"/news"}>Новости</Link>
        <Link to={"/gallery"}>Галерея</Link>
        <Button onClick={handleLogout}>Выйти</Button>
      </div>
    </header>
  );
};

export default NavBar;
