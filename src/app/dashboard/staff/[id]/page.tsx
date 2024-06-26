"use client";
import PageHeader from "@/components/layout/PageHeader";

import { Roles } from "@/utils/enums";
import { EyeOutlined, HomeOutlined } from "@ant-design/icons";
import { Card, Col, Row, Image } from "antd";
import moment from "moment";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import IDCard from "../component/page";

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "Employee List",
  },
];

const EmployeeProfile = () => {
  const { id } = useParams();

  // Dummy data
  const empData = {
    name: "John Doe",
    profile_picture: "",
    user: {
      username: "johndoe",
      email: "johndoe@example.com",
    },
    joined_date: "2022-01-15",
    designation: {
      name: "MD MBBS Doctor",
    },
    qualifications: {
      degree: "MBBS",
      college: "Harvard Medical School",
      percentage: "85%",
      nmc_number: "NMC123456",
    },
    salary: "120,000 USD per annum",
    gender: "Male",
    nationality: {
      nationality: "American",
    },
    phone_number: "+123456789",
    address: "123 Main St, Anytown, USA",
  };

  const leaveData = {
    "Annual Leave": { possibleTotal: 20, totalTaken: 5 },
    "Sick Leave": { possibleTotal: 10, totalTaken: 2 },
  };
  let listItems:
    | string
    | number
    | bigint
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | Promise<React.AwaitedReactNode>
    | React.JSX.Element[]
    | null
    | undefined = [];
  if (leaveData) {
    listItems = Object.entries(leaveData).map(([key, value]) => {
      const { possibleTotal, totalTaken } = value;
      const Balance = possibleTotal - totalTaken;
      return (
        <Row key={key} className="mb-2">
          <Col xs={8} className="font-medium text-gray-600">
            {key}
          </Col>
          <Col xs={8} className="font-bold">
            {Balance}
          </Col>
          <Col xs={8} className="font-bold">
            {totalTaken}
          </Col>
        </Row>
      );
    });
  }

  return (
    <>
      <PageHeader items={HeaderItems} titleContent="Employee List" />
      <div className="p-6">
        <Row gutter={16}>
          <Col lg={6} sm={24}>
            <Card className="mb-6">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <Image
                    className={`w-full h-full object-cover ${
                      !empData.profile_picture && "p-10"
                    }`}
                    alt="avatar"
                    src={
                      empData.profile_picture ||
                      "/images/default_profile_picture.jpeg"
                    }
                  />
                </div>
                <h2 className="text-lg mb-4">{empData.name}</h2>
              </div>
              <Link href={`${id}/document`}>
                <div className="mt-6 p-4 border rounded text-center cursor-pointer hover:border-primary hover:text-primary">
                  <div className="absolute top-0 right-0 bg-gray-200 p-2 rounded">
                    <EyeOutlined className="text-gray-500 hover:text-white" />
                  </div>
                  <h3 className="font-semibold">View Documents</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    You can view the documents here
                  </p>
                </div>
              </Link>
            </Card>
            <IDCard />
          </Col>
          <Col lg={18} sm={24}>
            <Card
              className="mb-6"
              title={
                <h2 className="text-xl font-semibold text-gray-900">
                  Basic Information
                </h2>
              }
            >
              <Row gutter={[16, 16]}>
                <Col xs={8} className="font-medium text-gray-600">
                  Name:
                </Col>
                <Col xs={16} className="font-bold">
                  {empData?.name}
                </Col>
                <Col xs={8} className="font-medium text-gray-600">
                  Username:
                </Col>
                <Col xs={16} className="font-bold">
                  {empData?.user?.username}
                </Col>
                <Col xs={8} className="font-medium text-gray-600">
                  Date of Hiring:
                </Col>
                <Col xs={16} className="font-bold">
                  {empData?.joined_date
                    ? moment(empData?.joined_date).format("D MMM, YYYY")
                    : ""}
                </Col>
                <Col xs={8} className="font-medium text-gray-600">
                  Designation:
                </Col>
                <Col xs={16} className="font-bold">
                  {empData?.designation?.name}
                </Col>
                <Col xs={8} className="font-medium text-gray-600">
                  Email:
                </Col>
                <Col xs={16} className="font-bold text-blue-600">
                  {empData?.user?.email}
                </Col>
                <Col xs={8} className="font-medium text-gray-600">
                  Gender:
                </Col>
                <Col xs={16} className="font-bold">
                  {empData?.gender}
                </Col>
                <Col xs={8} className="font-medium text-gray-600">
                  Nationality:
                </Col>
                <Col xs={16} className="font-bold">
                  {empData?.nationality?.nationality}
                </Col>
                <Col xs={8} className="font-medium text-gray-600">
                  Phone:
                </Col>
                <Col xs={16} className="font-bold">
                  {empData?.phone_number}
                </Col>
                <Col xs={8} className="font-medium text-gray-600">
                  Address:
                </Col>
                <Col xs={16} className="font-bold">
                  {empData?.address}
                </Col>
              </Row>
            </Card>
            <Card
              className="mb-6"
              title={
                <h2 className="text-xl font-semibold text-gray-900">
                  Qualification Information
                </h2>
              }
            >
              <Row gutter={[16, 16]}>
                <Col xs={8} className="font-medium text-gray-600">
                  Degree:
                </Col>
                <Col xs={16} className="font-bold">
                  {empData?.qualifications?.degree}
                </Col>
                <Col xs={8} className="font-medium text-gray-600">
                  College:
                </Col>
                <Col xs={16} className="font-bold">
                  {empData?.qualifications?.college}
                </Col>
                <Col xs={8} className="font-medium text-gray-600">
                  Percentage:
                </Col>
                <Col xs={16} className="font-bold">
                  {empData?.qualifications?.percentage}
                </Col>
                <Col xs={8} className="font-medium text-gray-600">
                  NMC Number:
                </Col>
                <Col xs={16} className="font-bold">
                  {empData?.qualifications?.nmc_number}
                </Col>
              </Row>
            </Card>
            <Card
              className="mb-6"
              title={
                <h2 className="text-xl font-semibold text-gray-900">
                  Salary Information
                </h2>
              }
            >
              <Row gutter={[16, 16]}>
                <Col xs={8} className="font-medium text-gray-600">
                  Salary:
                </Col>
                <Col xs={16} className="font-bold">
                  {empData?.salary}
                </Col>
              </Row>
            </Card>
            <Card
              title={
                <h2 className="text-xl font-semibold text-gray-900">
                  Leaves Information
                </h2>
              }
            >
              <Row className="font-medium text-gray-600 mb-2">
                <Col xs={8}>Leave Type</Col>
                <Col xs={8}>Balance</Col>
                <Col xs={8}>Total Taken</Col>
              </Row>
              {listItems}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default EmployeeProfile;
