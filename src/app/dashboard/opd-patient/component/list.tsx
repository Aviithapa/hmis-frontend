"use client";
import { Table, Tag } from "antd";
import React from "react";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
    phone_number: "9867739191",
    ticket_type: "New",
    amount_paid: "Rs 30",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
    phone_number: "9867739191",
    ticket_type: "Re-Visit",
    amount_paid: "Rs 20",
  },
  {
    key: "3",
    name: "John",
    age: 23,
    address: "10 Downing Street",
    phone_number: "9867739191",
    ticket_type: "Emergency",
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
    title: "Ticket Type",
    dataIndex: "ticket_type",
    key: "ticket_type",
    render: (text: string) => <Tag color="green">{text}</Tag>,
  },
  {
    title: "Amount Paid",
    dataIndex: "amount_paid",
    key: "amount_paid",
  },
];

const OpdPatientList = () => {
  return (
    <Table dataSource={dataSource} columns={columns} scroll={{ x: 1000 }} />
  );
};

export default OpdPatientList;
