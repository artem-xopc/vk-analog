import React from "react";

import p from './Profile.module.css'

const ProfileItem = ({ name, username, website}) => {
  return (
    <div className={p.card}>
      <p>Имя пользователя: {name}</p>
      <p>Username пользователя: {username}</p>
      <p>Сайт пользователя: {website}</p>
    </div>
  );
};

export default ProfileItem;
