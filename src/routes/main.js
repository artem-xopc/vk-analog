import React from "react";
import Profile from "../pages/Profile";
import News from "../pages/News";
import Login from "../pages/Login";
import Gallery from "../pages/Gallery";

export const publicRoutes = [
  { path: "/login", element: Login },
];

export const privateRoutes = [
  { path: "/profile", element: Profile },
  { path: "/news", element: News },
  { path: "/gallery", element: Gallery },
]
