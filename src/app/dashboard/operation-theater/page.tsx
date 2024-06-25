"use client";

import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import { HomeOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import { Button, Col, Form, Input, Row, Select, Table, Tag } from "antd";
import "nepali-datepicker-reactjs/dist/index.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "OT Patient",
  },
];

 

const columns = [
    {
      title: 'Surgery ID',
      dataIndex: 'surgery_id',
      key: 'surgery_id',
    },
    {
      title: 'Patient',
      dataIndex: 'patient_name',
      key: 'patient_name',
    },
    {
      title: 'Surgery Type',
      dataIndex: 'surgery_type',
      key: 'surgery_type',
    },
    {
      title: 'Surgeon',
      dataIndex: 'surgeon_name',
      key: 'surgeon_name',
    },
    {
      title: 'Anesthetist',
      dataIndex: 'anesthetist_name',
      key: 'anesthetist_name',
    },
    {
      title: 'Operating Room',
      dataIndex: 'operating_room',
      key: 'operating_room',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button type="primary">Edit</Button>
      ),
    },
  ];

const OtPatientList = () => {
    const [surgeries, setSurgeries] = useState([
        { surgery_id: 1, patient_name: 'John Doe', surgery_type: 'Appendectomy', surgeon_name: 'Dr. Smith', anesthetist_name: 'Dr. Brown', operating_room: 'OR-1' },
        { surgery_id: 2, patient_name: 'Jane Smith', surgery_type: 'Knee Replacement', surgeon_name: 'Dr. Johnson', anesthetist_name: 'Dr. White', operating_room: 'OR-2' },
      ]);
    
  const router = useRouter();

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

  const handlePatientRegistration = () => {
    router.push("operation-theater/add");
  };

  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <PageHeader
        items={HeaderItems}
        titleContent="Ot Patient List"
        buttonLabel="Book New OT"
        buttonCb={handlePatientRegistration}
      />
      <div className="bg-white h-[auto] p-5 ml-5 mr-10  shadow-lg">
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
        dataSource={surgeries}
            columns={columns}
            scroll={{ x: 1000 }}
          />
        </Col>
      </Row>
    </SidebarLayout>
  );
};

export default OtPatientList;
