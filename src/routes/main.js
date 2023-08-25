import React from "react";
import Profile from "../pages/Profile";
import News from "../pages/News";
import Login from "../pages/Login";
import Gallery from "../pages/Gallery";

export const publicRoutes = [
  { path: "/vk-analog/login", element: Login },
];

export const privateRoutes = [
  { path: "/vk-analog/login", element: Login },
  { path: "/vk-analog/profile", element: Profile },
  { path: "/vk-analog/news", element: News },
  { path: "/vk-analog/gallery", element: Gallery },
]
