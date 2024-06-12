"use client";

import React, { useRef, useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import { HomeOutlined, PrinterOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Table, Tag } from "antd";
import PrintPatientReportRegistration from "@/components/print/PrintPatientReport";
import { useReactToPrint } from "react-to-print";
import { ColumnType } from "antd/es/table";

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "Patient Lab",
  },
];

const initialDataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
    phone_number: "9867739191",
    referred_by: "Dr. Rajendra",
    status: "Printed",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
    phone_number: "9867739192",
    referred_by: "Dr. Ramesh",
    status: "Sample Collected",
  },
  {
    key: "3",
    name: "Sarah",
    age: 29,
    address: "15 Elm Street",
    phone_number: "9867739193",
    referred_by: "Dr. Sita",
    status: "Printed",
  },
  {
    key: "4",
    name: "Emma",
    age: 35,
    address: "22 Oak Avenue",
    phone_number: "9867739194",
    referred_by: "Dr. Mohan",
    status: "Sample Collected",
  },
  {
    key: "5",
    name: "James",
    age: 50,
    address: "5 Pine Lane",
    phone_number: "9867739195",
    referred_by: "Dr. Lakshmi",
    status: "Pending",
  },
  {
    key: "6",
    name: "Olivia",
    age: 27,
    address: "7 Maple Street",
    phone_number: "9867739196",
    referred_by: "Dr. Anil",
    status: "Printed",
  },
  {
    key: "7",
    name: "Liam",
    age: 31,
    address: "9 Birch Road",
    phone_number: "9867739197",
    referred_by: "Dr. Nisha",
    status: "Sample Collected",
  },
  {
    key: "8",
    name: "Sophia",
    age: 40,
    address: "11 Cedar Drive",
    phone_number: "9867739198",
    referred_by: "Dr. Raj",
    status: "Printed",
  },
  {
    key: "9",
    name: "Mason",
    age: 45,
    address: "13 Willow Way",
    phone_number: "9867739199",
    referred_by: "Dr. Meena",
    status: "Pending",
  },
  {
    key: "10",
    name: "Isabella",
    age: 30,
    address: "17 Poplar Street",
    phone_number: "9867739200",
    referred_by: "Dr. Ravi",
    status: "Sample Collected",
  },
  {
    key: "11",
    name: "Ethan",
    age: 37,
    address: "19 Chestnut Road",
    phone_number: "9867739201",
    referred_by: "Dr. Kiran",
    status: "Printed",
  },
  {
    key: "12",
    name: "Mia",
    age: 28,
    address: "21 Spruce Avenue",
    phone_number: "9867739202",
    referred_by: "Dr. Sunita",
    status: "Pending",
  },
  {
    key: "13",
    name: "Aiden",
    age: 36,
    address: "23 Aspen Lane",
    phone_number: "9867739203",
    referred_by: "Dr. Raju",
    status: "Sample Collected",
  },
  {
    key: "14",
    name: "Harper",
    age: 33,
    address: "25 Hickory Street",
    phone_number: "9867739204",
    referred_by: "Dr. Geeta",
    status: "Printed",
  },
  {
    key: "15",
    name: "Alexander",
    age: 41,
    address: "27 Fir Court",
    phone_number: "9867739205",
    referred_by: "Dr. Manoj",
    status: "Sample Collected",
  },
];
type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;
const PatientList = () => {
  const [dataSource, setDataSource] = useState(initialDataSource);
  const [searchValue, setSearchValue] = useState("");

  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Patient Report",
    pageStyle: `
      @page {
        background-color: #fff;
        margin: 20mm;
        size: portrait;
      }
      body {
        background-color: #fff;
        font-family: 'Arial', sans-serif;
      }
    `,
  });

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
      title: "Referred By",
      dataIndex: "referred_by",
      key: "referred_by",
    },
    {
      title: "Status",
      key: "status",
      render: (text: string, record: any) => (
        <Tag color={record.status === "Printed" ? "green" : "blue"}>
          {record.status}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text: string, record: any) => (
        <span>
          <Button
            type="link"
            icon={<PrinterOutlined />}
            onClick={handlePrint}
          />
          <Button type="link" href={"/lab/1"} icon={<EyeOutlined />} />
        </span>
      ),
      align: "center",
    },
  ];

  const handleSearch = (e: any) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
    const filteredData = initialDataSource.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.address.toLowerCase().includes(value) ||
        item.phone_number.includes(value) ||
        item.referred_by.toLowerCase().includes(value) ||
        item.status.toLowerCase().includes(value)
    );
    setDataSource(filteredData);
  };

  return (
    <>
      <PageHeader items={HeaderItems} titleContent="Patient Lab" />
      <div className="bg-white ml-5 mr-5 p-4 shadow-sm">
        <Form layout="vertical">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={22}>
              <Form.Item name="Search" label="Enter patient id">
                <Input value={searchValue} onChange={handleSearch} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="bg-white p-4 ml-5 mr-5 mt-5 rounded-md shadow-lg">
        <Table dataSource={dataSource} columns={columns as ColumnTypes} />
      </div>
      <PrintPatientReportRegistration
        ref={printRef}
        patientData={{ first_name: "abhishek" }}
      />
    </>
  );
};

export default PatientList;
