"use client";

import PageHeader from "@/components/layout/PageHeader";

import {
  HomeOutlined,
  SendOutlined,
  EyeOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  List,
  Row,
  Select,
  Table,
  Tag,
} from "antd";
import LabTestTable from "@/components/lab/LabTable";

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "Lab Result ",
  },
];

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
    phone_number: "9867739191",
    status: "New",
    amount_paid: "Rs 30",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
    phone_number: "9867739191",
    status: "Sample Collected",
    amount_paid: "Rs 20",
  },
  {
    key: "3",
    name: "John",
    age: 23,
    address: "10 Downing Street",
    phone_number: "9867739191",
    status: "Sample Collected",
    amount_paid: "Rs 20",
  },
];

const columns = [
  {
    title: "#",
    dataIndex: "key",
    key: "sn",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Phone Number",
    dataIndex: "phone_number",
    key: "phone_number",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text: string) => <Tag color="green">{text}</Tag>,
  },
  {
    title: "Amount Paid",
    dataIndex: "amount_paid",
    key: "amount_paid",
  },
];

const LabResultList = () => {
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

  return (
    <>
      <PageHeader items={HeaderItems} titleContent="Lab Result List" />
      <div className="bg-white h-[auto] p-5   shadow-lg">
        <Form layout="vertical">
          <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
            <Col span={5} xs={24} sm={12} md={12} lg={5}>
              <Form.Item name="Search">
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col span={5} xs={24} sm={12} md={12} lg={5}>
              <Form.Item className="rounded-md" name="Phone Number">
                <Input placeholder="Phone Number" />
              </Form.Item>
            </Col>
            <Col span={5} xs={24} sm={12} md={12} lg={5}>
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
        <Row className=" mt-5">
          <Col span={24}>
            <Table
              dataSource={dataSource}
              columns={[
                ...columns,
                {
                  title: "Actions",
                  key: "actions",
                  render: (_, record) => (
                    <div style={{ alignItems: "center" }}>
                      <a
                        href={`/dashboard/lab/result/${record?.key}`}
                        rel="noreferrer"
                      >
                        <EyeOutlined size={30} />
                      </a>
                    </div>
                  ),
                  align: "center",
                },
              ]}
              scroll={{ x: 1000 }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LabResultList;
