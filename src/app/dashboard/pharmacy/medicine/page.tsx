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
  Switch,
  Table,
} from "antd";
import { useRouter } from "next/navigation";
import TextArea from "antd/es/input/TextArea";

interface Medicine {
  key: string;
  name: string;
  generic_name: string;
  sku: string;
  power_measurement: string;
  needed_doctor_prescription: boolean;
  type: string;
  category: string;
  description: string;
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
    title: "Medicine List",
  },
];

const initialMedicines: Medicine[] = [
  {
    key: "1",
    name: "Paracetamol",
    generic_name: "Acetaminophen",
    sku: "MED123",
    power_measurement: "500mg",
    needed_doctor_prescription: false,
    type: "Tablet",
    category: "Painkiller",
    description: "Used to treat pain and fever",
  },
  {
    key: "2",
    name: "Amoxicillin",
    generic_name: "Amoxicillin",
    sku: "MED124",
    power_measurement: "250mg",
    needed_doctor_prescription: true,
    type: "Capsule",
    category: "Antibiotic",
    description: "Used to treat bacterial infections",
  },
];

const MedicineList = () => {
  const router = useRouter();
  const [medicines, setMedicines] = useState<Medicine[]>(initialMedicines);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();

  const handleAddMedicine = () => {
    setIsEdit(false);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEditMedicine = (record: Medicine) => {
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
        setMedicines(
          medicines.map((medicine) =>
            medicine.key === values.key ? values : medicine
          )
        );
      } else {
        setMedicines([
          ...medicines,
          { ...values, key: (medicines.length + 1).toString() },
        ]);
      }
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Generic Name",
      dataIndex: "generic_name",
      key: "generic_name",
    },
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Power Measurement",
      dataIndex: "power_measurement",
      key: "power_measurement",
    },
    {
      title: "Needed Doctor Prescription",
      dataIndex: "needed_doctor_prescription",
      key: "needed_doctor_prescription",
      render: (text: string) => (text ? "Yes" : "No"),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: Medicine) => (
        <Button type="primary" onClick={() => handleEditMedicine(record)}>
          Edit
        </Button>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        items={HeaderItems}
        titleContent="Medicine List"
        buttonLabel="Add New Medicine"
        buttonCb={handleAddMedicine}
      />
      <div className="bg-white h-[auto] p-5  shadow-lg">
        <Form layout="vertical">
          <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
            <Col span={6} xs={24} sm={12} md={12} lg={6}>
              <Form.Item name="Search">
                <Input placeholder="Medicine Name" />
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

      <Row className=" mt-5">
        <Col lg={24} md={24} xs={24} sm={24} className="bg-white p-5 ">
          <Table
            dataSource={medicines}
            columns={columns}
            scroll={{ x: 1000 }}
          />
        </Col>
      </Row>

      <Modal
        title={isEdit ? "Edit Medicine" : "Add New Medicine"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please input the medicine name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="generic_name"
                label="Generic Name"
                rules={[
                  { required: true, message: "Please input the generic name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="sku"
                label="SKU"
                rules={[{ required: true, message: "Please input the SKU!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="power_measurement"
                label="Power Measurement"
                rules={[
                  {
                    required: true,
                    message: "Please input the power measurement!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="needed_doctor_prescription"
                label="Needed Doctor Prescription"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: "Please select the type!" }]}
              >
                <Select>
                  <Select.Option value="Tablet">Tablet</Select.Option>
                  <Select.Option value="Syrup">Syrup</Select.Option>
                  <Select.Option value="Capsule">Capsule</Select.Option>
                  <Select.Option value="Injection">Injection</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="category"
                label="Category"
                rules={[
                  { required: true, message: "Please select the category!" },
                ]}
              >
                <Select>
                  <Select.Option value="Painkiller">Painkiller</Select.Option>
                  <Select.Option value="Antibiotic">Antibiotic</Select.Option>
                  <Select.Option value="Anti-inflammatory">
                    Anti-inflammatory
                  </Select.Option>
                  <Select.Option value="Antipyretic">Antipyretic</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  { required: true, message: "Please input the description!" },
                ]}
              >
                <TextArea />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default MedicineList;
