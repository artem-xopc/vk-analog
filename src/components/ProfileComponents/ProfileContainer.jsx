import React from "react";
import ProfileItem from "./ProfileItem";
import UserService from "../../API/UserService";
import { Button } from "antd";
import { Link } from "react-router-dom";
import UserModal from "./ModalUpdateUserInfo";

import p from "./Profile.module.css";

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
    <div className={p.card_wrapper}>
      <h1 className={p.title}>Ваш профиль</h1>
      <div className={p.card}>
        <div className={p.card_info}>
          <ProfileItem
            name={user.name}
            username={user.username}
            website={user.website}
          />
        </div>
        <div className={p.edit}>
          <Button onClick={() => setModalVisible(true)}>Редактировать</Button>
        </div>
        <UserModal
          visible={modalVisible}
          onSave={handleSaveProfile}
          onCancel={() => setModalVisible(false)}
        />
        <div className={p.links_wrapper}>
          <span className={p.link_button}>
            <Link to={"/vk-analog/news"}>
              <Button>Новости</Button>
            </Link>
          </span>
          <span className={p.link_button}>
            <Link to={"/vk-analog/gallery"}>
              <Button>Галерея</Button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
