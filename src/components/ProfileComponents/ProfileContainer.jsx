import React from "react";
import ProfileItem from "./ProfileItem";
import UserService from "../../API/UserService";
import { Button } from "antd";
import { Link } from "react-router-dom";

const ProfileContainer = () => {
  const [user, setUser] = React.useState({});

  const setUserInfo = async () => {
    const response = await UserService.getUserById(1);
    setUser(response.data);
  };

  React.useMemo(() => {
    setUserInfo();
  }, {});

  return (
    <div>
      <ProfileItem
        id={user.id}
        name={user.name}
        username={user.username}
        website={user.website}
      />
      <Link to={"/news"}>
        <Button>Новости</Button>
      </Link>
      <Link to={"/gallery"}>
        <Button>Галерея</Button>
      </Link>
    </div>
  );
};

export default ProfileContainer;
