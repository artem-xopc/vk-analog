import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout} from "../../store/slice/auth.slice";
import LoginItem from "./LoginItem";
import { Button } from "antd";

// const mapStateToProps = ({auth}) => {
//     return {
//         isAuth: auth.user.isAuth,
//         email: auth.user.email,
//         password: auth.user.password,
//         error: auth.error
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setisAuth: (auth) => dispatch(setIsAuth(auth)),
//     setEmail: (email) => dispatch(setEmail(email)),
//     setPassword: (password) => dispatch(setPassword(password)),
//   }
// }

// const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(LoginItem)
// export default AuthContainer;

const LoginContainer = () => {
  // const [isAuth, setIsAuth] = useState(false)
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => !!state.auth.token);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <a href="/login">
          <Button>Попробовать снова</Button>
        </a>
      </div>
    );
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div>
        {isAuth ? (
          <>
            <p>Вы авторизованы!</p>
            <span>
              <Button onClick={handleLogout}>Выйти</Button>
              <a href="/profile">
                <Button>Посмотреть профиль</Button>
              </a>
            </span>
          </>
        ) : (
          <>
            <LoginItem
              loading={loading}
              error={error}
              // handleLogin={handleLogin}
              // handleLogout={handleLogout}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default LoginContainer;
