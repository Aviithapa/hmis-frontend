"use client";

import { Button, Col, Form, Input, Row } from "antd";
import { useForm } from "react-hook-form";

const PatientRegister = () => {
  const { control, register } = useForm();

  const onFinish = (event: any) => {};
  return (
    <div className="bg-white w-screen h-screen p-10">
      <Form
        name="basic"
        autoComplete="true"
        layout="vertical"
        onFinish={onFinish}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Form.Item
              label="Staff Id"
              name="staff_id"
              rules={[
                { required: true, message: "Please input your staff id!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Staff Id"
              name="staff_id"
              rules={[
                { required: true, message: "Please input your staff id!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

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
    </div>
  );
};

export default PatientRegister;
