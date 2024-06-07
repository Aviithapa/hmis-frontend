"use client";

import { login } from "@/api/auth";
import { Button, Form, Input, message } from "antd";
import { redirect, useRouter } from "next/navigation";
import React from "react";

interface LoginPayload {
  staff_id: string;
  password: string;
}
const LoginForm = () => {
  const router = useRouter();
  const onFinish = async (value: LoginPayload) => {
    try {
      // const res = await login(value);
      if (value?.staff_id === "1234" && value?.password === "Nepal@123") {
        router.push("/dashboard");
      } else if (
        value?.staff_id === "reception" &&
        value?.password === "Nepal@123"
      ) {
        router.push("/reception");
      } else if (
        value?.staff_id === "doctor" &&
        value?.password === "Nepal@123"
      ) {
        router.push("/doctor");
      } else {
        message.error("Invalid Username or Password");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form
      name="basic"
      autoComplete="true"
      className="bg-[rgb(255,255,255)] px-5 py-5 max-w-[400px] shadow-lg rounded-md w-[100%]"
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Staff Id"
        name="staff_id"
        className="rounded-md "
        rules={[{ required: true, message: "Please input your staff id!" }]}
      >
        <Input className="rounded-8" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        className="rounded-md"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-[100%] rounded-md "
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
