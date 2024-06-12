"use client";

import PageHeader from "@/components/layout/PageHeader";
import { HomeOutlined, SendOutlined, PrinterOutlined } from "@ant-design/icons";
import { Button, Card, List, Tag } from "antd";
import LabTestTable from "@/components/lab/LabTable";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PrintPatientReportRegistration from "@/components/print/PrintPatientReport";

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

const PatientList = () => {
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
  return (
    <>
      <PageHeader items={HeaderItems} titleContent="Patient Lab" />

      <div className="bg-white ml-5 mr-5 mt-5  p-4">
        <Card
          extra={
            <>
              <Button
                type="primary"
                className="bg-primary-bg text-white shadow-none"
                icon={<SendOutlined />}
              >
                SEND SMS/MAIL
              </Button>
              <Button
                type="default"
                className="bg-primary-bg text-black shadow-none ml-2"
                icon={<PrinterOutlined />}
                onClick={handlePrint}
              >
                Print Report
              </Button>
            </>
          }
        >
          <div className=" p-4 grid grid-cols-1 md:grid-cols-3 gap-5">
            <List>
              <List.Item>
                <span className="font-semibold">Patient Id: </span>
                <span>1234</span>
              </List.Item>
              <List.Item>
                <span className="font-semibold">Name: </span>
                <span>Abhishek Thapa</span>
              </List.Item>
              <List.Item>
                <span className="font-semibold">Age / Gender: </span>
                <span>25Y / M</span>
              </List.Item>
              <List.Item>
                <span className="font-semibold">Prescription: </span>
                <span>SELF / DOCTOR</span>
              </List.Item>
            </List>
            <div />
            <List>
              <List.Item>
                <span className="font-semibold">Collection Date: </span>
                <span>2024-01-03 7:50</span>
              </List.Item>
              <List.Item>
                <span className="font-semibold">Reporting Date: </span>
                <span>2024-01-03 7:50</span>
              </List.Item>
              <List.Item>
                <span className="font-semibold">Status: </span>
                <span>
                  <Tag color="green">Sample Collected</Tag>
                  <Tag color="blue">Report Printed</Tag>
                </span>
              </List.Item>
              <List.Item>
                <span className="font-semibold">Reference: </span>
                <span className="font-semibold">Dr. Ramesh</span>
              </List.Item>
            </List>
          </div>
        </Card>
      </div>

      <div className="bg-white p-4 ml-5 mr-5 mt-5  shadow-lg">
        <LabTestTable />
      </div>

      <PrintPatientReportRegistration
        ref={printRef}
        patientData={{ first_name: "abhishek" }}
      />
    </>
  );
};

export default PatientList;
