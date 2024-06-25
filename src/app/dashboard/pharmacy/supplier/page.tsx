"use client";

import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import { HomeOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import { Button, Col, Form, Input, Modal, Row, Select, Table } from "antd";
import "nepali-datepicker-reactjs/dist/index.css";
import { useRouter } from "next/navigation";

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
    title: "Supplier List",
  },
];



const initialSuppliers = [
  {
    key: '1',
    supplier_name: 'Supplier 1',
    contact_person: 'John Doe',
    email: 'john@example.com',
    phone_number: '1234567890',
    pan_vat_number: 'PAN123456',
    address: '123 Main St, City',
  },
  {
    key: '2',
    supplier_name: 'Supplier 2',
    contact_person: 'Jane Smith',
    email: 'jane@example.com',
    phone_number: '0987654321',
    pan_vat_number: 'PAN654321',
    address: '456 Elm St, City',
  },
];

const SupplierList = () => {
  const router = useRouter();
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const handleAddSupplier = () => {
    setIsEdit(false);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEditSupplier = (record : any) => {
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
        setSuppliers(suppliers.map(supplier => supplier.key === values.key ? values : supplier));
      } else {
        setSuppliers([...suppliers, { ...values, key: suppliers.length + 1 }]);
      }
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const columns = [
    {
      title: 'Supplier Name',
      dataIndex: 'supplier_name',
      key: 'supplier_name',
    },
    {
      title: 'Contact Person',
      dataIndex: 'contact_person',
      key: 'contact_person',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number',
    },
    {
      title: 'Pan/Vat Number',
      dataIndex: 'pan_vat_number',
      key: 'pan_vat_number',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_text : string, record : any) => (
        <Button type="primary" onClick={() => handleEditSupplier(record)}>Edit</Button>
      ),
    },
  ];

  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <PageHeader
        items={HeaderItems}
        titleContent="Supplier List"
        buttonLabel="Add New Supplier"
        buttonCb={handleAddSupplier}
      />
      <div className="bg-white h-[auto] p-5 ml-5 mr-10 shadow-lg">
        <Form layout="vertical">
          <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
            <Col span={6} xs={24} sm={12} md={12} lg={6}>
              <Form.Item name="Search">
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col span={6} xs={24} sm={12} md={12} lg={6}>
              <Form.Item className="rounded-md" name="Phone Number">
                <Input placeholder="Phone Number" />
              </Form.Item>
            </Col>
            <Col span={6} xs={24} sm={12} md={12} lg={6}>
              <Form.Item className="rounded-md" name="doctor">
                <Select
                  showSearch
                  placeholder="Select Doctor"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    {
                      value: "Ram Kumar Yadav (Opticals)",
                      label: "Ram Kumar Yadav (Opticals)",
                    },
                    {
                      value: "Rajendra Mouny (Gastro)",
                      label: "Rajendra Mouny (Gastro)",
                    },
                    {
                      value: "Dr shyam bahadur (Clino)",
                      label: "Dr shyam bahadur (Clino)",
                    },
                  ]}
                />
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
            dataSource={suppliers}
            columns={columns}
            scroll={{ x: 1000 }}
          />
        </Col>
      </Row>

      <Modal title={isEdit ? "Edit Supplier" : "Add New Supplier"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="supplier_name" label="Supplier Name" rules={[{ required: true, message: 'Please input the supplier name!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="contact_person" label="Contact Person" rules={[{ required: true, message: 'Please input the contact person!' }]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input the email!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="phone_number" label="Phone Number" rules={[{ required: true, message: 'Please input the phone number!' }]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="pan_vat_number" label="Pan/Vat Number" rules={[{ required: true, message: 'Please input the pan/vat number!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please input the address!' }]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="key" hidden>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </SidebarLayout>
  );
};

export default SupplierList;
