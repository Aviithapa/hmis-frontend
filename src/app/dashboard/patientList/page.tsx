"use client";

import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import { HomeOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import { Button, Col, Form, Input, Row, Select, Table } from "antd";

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "Patient List",
  },
];

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
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
];

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const PatientList = () => {
  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <PageHeader items={HeaderItems} titleContent="Patient List" />
      <div className="bg-white ml-5 mr-5 p-4 ">
        <Form layout="vertical">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={7}>
              <Form.Item name="Search" label="First Name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item name="Search" label="Contact Number">
                <Input />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item label="Doctor" name="doctor">
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

            <Col span={2}>
              <Form.Item>
                <Button
                  type="default"
                  htmlType="submit"
                  className="w-[100%]"
                  style={{
                    borderRadius: "0px",
                    height: "35px",
                    marginTop: "30px",
                  }}
                >
                  Reset Filter
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="bg-white p-4 ml-5 mr-5 mt-5">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </SidebarLayout>
  );
};

export default PatientList;
