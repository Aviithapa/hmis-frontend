// src/pages/PatientLabAdd.tsx
"use client";
import React, { useRef, useState } from "react";

import { useReactToPrint } from "react-to-print";
import {
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
  Table,
  DatePicker,
  Button,
} from "antd";
import SidebarLayout from "@/components/layout/Sidebar";
import PageHeader from "@/components/layout/PageHeader";
import { HomeOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import PrintPatientLabBill from "@/components/print/PrintPatientLabBill";
import { useRouter } from "next/navigation";

const { Option } = Select;

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

const labTests = [
  { id: 1, name: "Blood Test", priceRange: "$50 - $100" },
  { id: 2, name: "X-Ray", priceRange: "$100 - $200" },
  { id: 3, name: "MRI", priceRange: "$500 - $1000" },
  { id: 4, name: "CT Scan", priceRange: "$300 - $600" },
];

const patients = [
  {
    id: "1234",
    name: "Abhishek Thapa",
    ageGender: "25Y / M",
    prescription: "SELF",
    collectionDate: "2024-01-03 07:50",
    reportingDate: "2024-01-03 07:50",
    status: ["Sample Collected", "Report Printed"],
    reference: "Dr. Ramesh",
  },
  // Add more patient data as needed
];

const columns = [
  {
    title: "Test Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price Range",
    dataIndex: "priceRange",
    key: "priceRange",
  },
];

const PatientLabAdd: React.FC = () => {
  const [selectedTests, setSelectedTests] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const [patientData, setPatientData] = useState<any>({
    name: "",
    ageGender: "",
    prescription: "",
    collectionDate: "",
    reportingDate: "",
    status: [],
    reference: "",
  });

  const handleCheckboxChange = (checkedValues: any) => {
    const selected = labTests.filter((test) => checkedValues.includes(test.id));
    setSelectedTests(selected);
  };

  const handlePatientIdChange = (e: any) => {
    const patientId = e.target.value;
    const patient = patients.find((p) => p.id === patientId);
    if (patient) {
      setPatientData(patient);
    } else {
      setPatientData({
        name: "",
        ageGender: "",
        prescription: "",
        collectionDate: "",
        reportingDate: "",
        status: [],
        reference: "",
      });
    }
  };

  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Patient Lab",
    pageStyle: `
    @page{
     background: #fff;
     margin: 0;
    }
    `,
  });

  const filteredTests = labTests.filter((test) =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const invoiceData = {
    address: "Church Street Bengaluru",
    phone: "+91-1075314648 +91-8029924749",
    partyName: patientData.name,
    partyAddress: "1234 Example Address",
    gstin: "03EDPPA1456C2ZM",
    items: selectedTests.map((test: any) => ({
      name: test.name,
      description: `Description for ${test.name}`,
      hsn: "HSN001",
      rate: "$50",
      mrp: "$60",
      tax: "10%",
      amount: "$55",
    })),
    subTotal: "$500",
    amountInWords: "Five Hundred Dollars",
    termsAndConditions: "Please make the payment by the due date.",
  };

  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <PageHeader items={HeaderItems} titleContent="Patient Lab" />
      <div className="ml-5 mr-5 mt-5">
        <div className="bg-white p-4 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Form layout="horizontal" className="w-full">
            <Form.Item label="Patient Id">
              <Input onChange={handlePatientIdChange} />
            </Form.Item>
            <Form.Item label="Name">
              <Input value={patientData.name} />
            </Form.Item>
            <Form.Item label="Age / Gender">
              <Input value={patientData.ageGender} />
            </Form.Item>
            <Form.Item label="Prescription">
              <Select value={patientData.prescription}>
                <Option value="SELF">SELF</Option>
                <Option value="DOCTOR">DOCTOR</Option>
              </Select>
            </Form.Item>
          </Form>
          <div />
          <Form layout="horizontal" className="w-full">
            <Form.Item label="Collection Date">
              <DatePicker />
            </Form.Item>
            <Form.Item label="Reporting Date">
              <DatePicker />
            </Form.Item>
            <Form.Item label="Status">
              <Select value={patientData.status.join(", ")}>
                <Option value="Sample Collected">Sample Collected</Option>
                <Option value="Report Printed">Report Printed</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Reference">
              <Input value={patientData.reference} />
            </Form.Item>
          </Form>
        </div>
        <div className="bg-gray-100 mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 p-3">
          <div className="bg-gray-100 p-5 md:col-span-1">
            <Form layout="vertical">
              <Form.Item label="Search Lab Tests">
                <Input
                  placeholder="Search tests"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Checkbox.Group
                  style={{ width: "100%" }}
                  onChange={handleCheckboxChange}
                >
                  <Row>
                    {filteredTests.map((test) => (
                      <Col span={24} key={test.id}>
                        <Checkbox value={test.id}>{test.name}</Checkbox>
                      </Col>
                    ))}
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Form>
          </div>

          <div className="bg-gray-100 p-2 md:col-span-2">
            <Table
              columns={columns}
              dataSource={selectedTests}
              rowKey="id"
              className="mt-5"
            />
          </div>
        </div>
        <div className="flex justify-end gap-5 mt-5 h-20">
          <Button
            type="default"
            onClick={() => router.back()}
            className="border border-[rgba(247,122,88,0.75)]"
            style={{ borderRadius: "0px", height: "40px", width: "200px" }}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={handlePrint}
            className="bg-green-700"
            style={{ borderRadius: "0px", height: "40px", width: "200px" }}
          >
            Submit
          </Button>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <PrintPatientLabBill ref={printRef} invoiceData={invoiceData} />
      </div>
    </SidebarLayout>
  );
};

export default PatientLabAdd;
