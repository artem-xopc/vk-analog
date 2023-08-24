import React from "react";

const ProfileItem = ({id, name, username, website}) => {
  return (
    <div>
      <p>ID пользователя: {id}</p>
      <p>Имя пользователя: {name}</p>
      <p>Username пользователя: {username}</p>
      <p>Сайт пользователя: {website}</p>
    </div>
  );
};

export default ProfileItem;
