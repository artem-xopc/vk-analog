import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import Loader from "../UI/Loader";
import { useDispatch } from "react-redux";
import { login, setEmail, setIsAuth, setPassword } from "../../store/slice/auth.slice";

const LoginItem = ({
  // setIsAuth,
  // setEmail,
  // setPassword,
  // email,
  // password,
  loading,
  error,
  // handleLogin,
  // handleLogout,
}) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  // const newEmail = React.createRef();
  // const newPassword = React.createRef();
  // const [auth, setAuth] = React.useState(false);

  // const onInputChange = () => {
  //   let email = newEmail.current.value;
  //   let password = newPassword.current.value;
  //   setEmail(email);
  //   setPassword(password);
  // };

  // const onAuthButtonClick = () => {
  //   setAuth(true);
  //   setIsAuth(auth);
  // };

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
            // ref={newEmail}
            // onChange={onInputChange}
          />
          <Input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // ref={newPassword}
            // onChange={onInputChange}
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
