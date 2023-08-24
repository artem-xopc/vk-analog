import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AppRouter from "./routes/AppRouter";
import { AuthContext } from "./contex";
import { ConfigProvider, theme } from "antd";

function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
      console.log(isAuth);
    }
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth,
          isLoading,
        }}
      >
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
          <NavBar />
          <AppRouter />
        </ConfigProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
