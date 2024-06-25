"use client";

import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import { HomeOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import { Button, Col, Form, Input, Modal, Row, Select, Table } from "antd";
import "nepali-datepicker-reactjs/dist/index.css";
import { useRouter } from "next/navigation";
import TextArea from "antd/es/input/TextArea";

interface MedicalClassification {
  key: string;
  classification_name: string;
  description?: string;
  label: string;
  slug: string;
  type: string;
}

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "Pharmacy",
  },
  {
    href: "#",
    title: "Medical Classification",
  },
];



const initialClassifications: MedicalClassification[] = [
  {
    key: '1',
    classification_name: 'Tablet',
    label: 'Tablet',
    slug:'tablet',
    type: 'Type',
  },
  {
    key: '2',
    classification_name: 'Pain Killer',
    label: 'Pain Killer',
    slug:'pain-killer',
    type: 'Category',
  },
  
];

const MedicalClassificationList = () => {
  const router = useRouter();
  const [classifications, setClassifications] = useState<MedicalClassification[]>(initialClassifications);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();

  const handleAddClassification = () => {
    setIsEdit(false);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEditClassification = (record: MedicalClassification) => {
    setIsEdit(true);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      if (isEdit) {
        setClassifications(classifications.map(classification => classification.key === values.key ? values : classification));
      } else {
        setClassifications([...classifications, { ...values, key: (classifications.length + 1).toString() }]);
      }
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const columns = [
    {
      title: 'Classification Name',
      dataIndex: 'classification_name',
      key: 'classification_name',
    },
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      key: 'slug',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text : string, record : MedicalClassification) => (
        <Button type="primary" onClick={() => handleEditClassification(record)}>Edit</Button>
      ),
    },
  ];

  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <PageHeader
        items={HeaderItems}
        titleContent="Medical Classification"
        buttonLabel="Add New Classification"
        buttonCb={handleAddClassification}
      />
      <div className="bg-white h-[auto] p-5 ml-5 mr-10 shadow-lg">
        <Form layout="vertical">
          <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
            <Col span={6} xs={24} sm={12} md={12} lg={20}>
              <Form.Item name="Search">
                <Input placeholder="Classification Name" />
              </Form.Item>
            </Col>
            <Col span={5} xs={24} sm={24} lg={4}>
              <Form.Item>
                <Button
                  type="default"
                  className="w-[100%]"
                  style={{
                    height: "100%",
                    borderRadius: "0",
                    padding: "6px",
                  }}
                >
                  Reset Filter
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>

      <Row className="ml-5 mr-10 mt-5">
        <Col lg={24} md={24} xs={24} sm={24} className="bg-white p-5 ">
          <Table
            dataSource={classifications}
            columns={columns}
            scroll={{ x: 1000 }}
          />
        </Col>
      </Row>

      <Modal title={isEdit ? "Edit Classification" : "Add New Classification"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="classification_name" label="Classification Name" rules={[{ required: true, message: 'Please input the classification name!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="label" label="Label">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="type" label="Type" rules={[{ required: true, message: 'Please select the type!' }]}>
                <Select>
                  <Select.Option value="type">Type</Select.Option>
                  <Select.Option value="category">Category</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please input the description!' }]}>
                <TextArea />
              </Form.Item>
            </Col>
          </Row>
          
        </Form>
      </Modal>
    </SidebarLayout>
  );
};

export default MedicalClassificationList;
