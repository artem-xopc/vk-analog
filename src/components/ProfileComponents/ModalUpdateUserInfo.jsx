import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";

const UserModal = ({ visible, onSave, onCancel }) => {
  const [form] = Form.useForm();

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      onSave(values);
      form.resetFields();
    } catch (error) {
      console.log("Ошибка при сохранении данных:", error);
    }
  };

  return (
    <Modal
      title="Редактировать профиль"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Отмена
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Сохранить
        </Button>
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Имя"
          rules={[{ required: true, message: "Пожалуйста, введите имя" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Пожалуйста, введите username" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="website"
          label="Website"
          rules={[{ required: true, message: "Пожалуйста, введите website" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;