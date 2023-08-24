import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./main";
import { AuthContext } from "../contex";

const AppRouter = () => {
  const {isAuth, isLoading} = React.useContext(AuthContext);
  
  return (
    <div>
        {isAuth ? (
        <Routes>
          {privateRoutes.map(route => <Route path={route.path} element={<route.element />} key={route.path} />)}
          <Route path="/*" element={<Navigate to="/profile" replace />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(route => <Route path={route.path} element={<route.element />} key={route.path} /> )}
          <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRouter;
