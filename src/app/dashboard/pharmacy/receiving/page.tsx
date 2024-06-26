"use client";

import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";

import { HomeOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Table,
  DatePicker,
} from "antd";
import { useRouter } from "next/navigation";
import TextArea from "antd/es/input/TextArea";

interface Receiving {
  key: string;
  ref_id: string;
  supplier_name: string;
  received_date: string;
  total_buying_amount: number;
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
    title: "Receiving List",
  },
];

const initialReceivings: Receiving[] = [
  {
    key: "1",
    ref_id: "REF123",
    supplier_name: "Supplier A",
    received_date: "2024-06-01",
    total_buying_amount: 1000,
  },
  {
    key: "2",
    ref_id: "REF124",
    supplier_name: "Supplier B",
    received_date: "2024-06-02",
    total_buying_amount: 2000,
  },
];

const ReceivingList = () => {
  const router = useRouter();
  const [receivings, setReceivings] = useState<Receiving[]>(initialReceivings);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();

  const handleAddReceiving = () => {
    router.push("/dashboard/pharmacy/receiving/add");
  };

  const handleEditReceiving = (record: Receiving) => {
    setIsEdit(true);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (isEdit) {
        setReceivings(
          receivings.map((receiving) =>
            receiving.key === values.key ? values : receiving
          )
        );
      } else {
        setReceivings([
          ...receivings,
          { ...values, key: (receivings.length + 1).toString() },
        ]);
      }
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const columns = [
    {
      title: "Ref Id",
      dataIndex: "ref_id",
      key: "ref_id",
    },
    {
      title: "Supplier Name",
      dataIndex: "supplier_name",
      key: "supplier_name",
    },
    {
      title: "Received Date",
      dataIndex: "received_date",
      key: "received_date",
    },
    {
      title: "Total Buying Amount",
      dataIndex: "total_buying_amount",
      key: "total_buying_amount",
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: Receiving) => (
        <Button type="primary" onClick={() => handleEditReceiving(record)}>
          Edit
        </Button>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        items={HeaderItems}
        titleContent="Receiving List"
        buttonLabel="Add New Receiving"
        buttonCb={handleAddReceiving}
      />
      <div className="bg-white h-[auto] p-5  shadow-lg">
        <Form layout="vertical">
          <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
            <Col span={20} xs={24} sm={12} md={12} lg={20}>
              <Form.Item name="Search">
                <Input placeholder="Search by Supplier Name" />
              </Form.Item>
            </Col>
            <Col span={4} xs={24} sm={24} lg={4}>
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

      <Row className=" mt-5">
        <Col lg={24} md={24} xs={24} sm={24} className="bg-white p-5 ">
          <Table
            dataSource={receivings}
            columns={columns}
            scroll={{ x: 1000 }}
          />
        </Col>
      </Row>

      <Modal
        title={isEdit ? "Edit Receiving" : "Add New Receiving"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="ref_id"
                label="Ref Id"
                rules={[
                  { required: true, message: "Please input the Ref Id!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="supplier_name"
                label="Supplier Name"
                rules={[
                  {
                    required: true,
                    message: "Please input the Supplier Name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="received_date"
                label="Received Date"
                rules={[
                  {
                    required: true,
                    message: "Please input the Received Date!",
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="total_buying_amount"
                label="Total Buying Amount"
                rules={[
                  {
                    required: true,
                    message: "Please input the Total Buying Amount!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="classification_name"
                label="Classification Name"
                rules={[
                  {
                    required: true,
                    message: "Please input the Classification Name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="label" label="Label">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: "Please select the type!" }]}
              >
                <Select>
                  <Select.Option value="type">Type</Select.Option>
                  <Select.Option value="category">Category</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="description" label="Description">
                <TextArea />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default ReceivingList;
