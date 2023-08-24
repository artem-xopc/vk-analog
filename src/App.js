import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './routes/AppRouter';
import { AuthContext } from './contex';

function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
      console.log(isAuth)
    }
    setLoading(false)
  }, [])

  return (
    <div className="App">
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}>
      <NavBar />
      <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
