import React from "react";

const ProfileItem = ({ name, username, website}) => {
  return (
    <div>
      <p>Имя пользователя: {name}</p>
      <p>Username пользователя: {username}</p>
      <p>Сайт пользователя: {website}</p>
    </div>
  );
};

export default ProfileItem;
