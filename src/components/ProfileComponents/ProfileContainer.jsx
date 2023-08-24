import React from "react";
import ProfileItem from "./ProfileItem";
import UserService from "../../API/UserService";
import { Button } from "antd";
import { Link } from "react-router-dom";
import UserModal from "./ModalUpdateUserInfo";

const ProfileContainer = () => {
  const [user, setUser] = React.useState({});
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await UserService.getUserById(1);
        setUser(response.data);
      } catch (error) {
        console.log("Ошибка при загрузке профиля:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleSaveProfile = async (values) => {
    try {
      // Отправка данных на сервер
      await UserService.updateUserInfo(values);
      setUser(values);
      setModalVisible(false);
    } catch (error) {
      console.log("Ошибка при сохранении профиля:", error);
    }
  };

  return (
    <div>
      <ProfileItem
        name={user.name}
        username={user.username}
        website={user.website}
      />
      <Button onClick={() => setModalVisible(true)}>Редактировать</Button>
      <UserModal
        visible={modalVisible}
        onSave={handleSaveProfile}
        onCancel={() => setModalVisible(false)}
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
