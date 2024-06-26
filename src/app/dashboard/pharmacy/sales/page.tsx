"use client";

import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import { HomeOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Table } from "antd";
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
    title: "Sales",
  },
];

const initialSuppliers = [
  {
    key: "1",
    customer_name: "Ram Gopal",
    phone_number: "1234567890",
    address: "123 Main St, City",
    patient_type: "in-patient",
    total_amount: "500",
    status: "Paid",
    payment_mode: "cash",
  },
  {
    key: "2",
    customer_name: "Ramesh",
    phone_number: "1234567890",
    address: "123 Main St, City",
    patient_type: "out-patient",
    total_amount: "500",
    status: "Paid",
    payment_mode: "esewa",
  },
];

const SalesList = () => {
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
    router.push("/dashboard/pharmacy/sales/add");
  };

  const handleEditSupplier = (record: any) => {
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
        setSuppliers(
          suppliers.map((supplier) =>
            supplier.key === values.key ? values : supplier
          )
        );
      } else {
        setSuppliers([...suppliers, { ...values, key: suppliers.length + 1 }]);
      }
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "customer_name",
      key: "customer_name",
    },

    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Patient Type",
      dataIndex: "patient_type",
      key: "patient_type",
    },
    {
      title: "Total Amount",
      dataIndex: "total_amount",
      key: "total_amount",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Payment Mode",
      dataIndex: "payment_mode",
      key: "payment_mode",
    },
    {
      title: "Action",
      key: "action",
      render: (_text: string, record: any) => (
        <Button type="primary" onClick={() => handleEditSupplier(record)}>
          Edit
        </Button>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        items={HeaderItems}
        titleContent="Sales List"
        buttonLabel="Add New Sale"
        buttonCb={handleAddSupplier}
      />
      <div className="bg-white h-[auto] p-5  shadow-lg">
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

      <Row className=" mt-5">
        <Col lg={24} md={24} xs={24} sm={24} className="bg-white p-5 ">
          <Table
            dataSource={suppliers}
            columns={columns}
            scroll={{ x: 1000 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SalesList;
