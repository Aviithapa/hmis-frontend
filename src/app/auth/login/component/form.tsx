"use client";

import { login } from "@/api/auth";
import { Button, Form, Input } from "antd";
import React from "react";

interface LoginPayload {
  staff_id: string;
  password: string;
}
const LoginForm = () => {
  const onFinish = async (value: LoginPayload) => {
    try {
      const res = await login(value);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form
      name="basic"
      autoComplete="true"
      className="bg-[rgb(255,255,255)] px-5 py-5 max-w-[400px] shadow-lg rounded-[15px] w-[100%]"
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Staff Id"
        name="staff_id"
        rules={[{ required: true, message: "Please input your staff id!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-[100%]">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
