"use client";

import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import { HomeOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import { Button, Col, Form, Input, Row, Select, Table } from "antd";
import { Black_And_White_Picture } from "next/font/google";

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
    Phone_Number: "325850195"
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "3",
    name: "Sophia",
    age: 39,
    address: "14 Oak Lane"
  },
  {
    key: "4",
    name: "Sophia",
    age: 39,
    address: "14 Oak Lane"
  },
  {
    key: "5",
    name: "Ava",
    age: 25,
    address: "9 Cedar Court"
  },

  {
    key: "6",
    name: "James",
    age: 56,
    address: "11 Birch Street"
  },
  {
    key: "7",
    name: "Olivia",
    age: 31,
    address: "16 Maple Avenue"
  },
  {
    key: "8",
    name: "Jacob",
    age: 43,
    address: "5 Elm Lane"
  },
  {
    key: "9",
    name: "Emma",
    age: 38,
    address: "22 Oak Road"
  },
  {
    key: "10",
    name: "Michael",
    age: 29,
    address: "8 Pine Court"
  },

  {
    key: "11",
    name: "William",
    age: 27,
    address: "10 Downing Street"
  },

  {
    key: "12",
    name: "Mia",
    age: 45,
    address: "10 Downing Street"
  },
  {
    key: "13",
    name: "Charlotte",
    age: 33,
    address: "10 Downing Street"
  },
  {
    key: "14",
    name: "Sophia",
    age: 42,
    address: "11 Birch Street"
  },
  {
    key: "15",
    name: "Ethan",
    age: 35,
    address: "11 Birch Street"
  },
  {
    key: "16",
    name: "Isabella",
    age: 28,
    address: "11 Birch Street"
  },
  {
    key: "17",
    name: "Charlotte",
    age: 47,
    address: "11 Birch Street"
  },


  {
    key: "18",
    name: "William",
    age: 25,
    address: "11 Birch Street"
  },
  {
    key: "19",
    name: "Michael",
    age: 48,
    address: "11 Birch Street"
  },
  {
    key: "20",
    name: "James",
    age: 46,
    address: "11 Birch Street"
  },

  {
    key: "21",
    name: "Sophia",
    age: 27,
    address: "11 Birch Street"
  }






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
      <div className="bg-white ml-5 mr-5 p-4 rounded-md shadow-lg ">
        <Form layout="vertical">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={7}>

              <Form.Item className="rounded-md" name="Search" label="First Name">
                <Input className="rounded-8" />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item className="rounded-md" name="Search" label="Contact Number">

                <Input className="rounded-8" />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item className="rounded-md" label="Doctor" name="doctor">
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
                    {
                      value: "Dr shyam bahadur (Clino)",
                      label: "Dr shyam bahadur (Clino)",
                    },
                    {
                      value: "Dr shyam bahadur (Clino)",
                      label: "Dr shyam bahadur (Clino)",
                    },
                    {
                      value: "Dr shyam bahadur (Clino)",
                      label: "Dr shyam bahadur (Clino)",
                    },
                    {
                      value: "Dr shyam bahadur (Clino)",
                      label: "Dr shyam bahadur (Clino)",
                    },
                    {
                      value: "Dr shyam bahadur (Clino)",
                      label: "Dr shyam bahadur (Clino)",
                    },
                    {
                      value: "Dr shyam bahadur (Clino)",
                      label: "Dr shyam bahadur (Clino)",
                    },
                    {
                      value: "Dr shyam bahadur (Clino)",
                      label: "Dr shyam bahadur (Clino)",
                    },
                    {
                      value: "Dr shyam bahadur (Clino)",
                      label: "Dr shyam bahadur (Clino)",
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
                    borderRadius: "10px",
                    height: "35px",
                    marginTop: "30px",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center"

                  }}
                >
                  Reset Filter
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="bg-white p-4 ml-5 mr-5 mt-5 rounded-md shadow-lg">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </SidebarLayout>
  );
};

export default PatientList;
