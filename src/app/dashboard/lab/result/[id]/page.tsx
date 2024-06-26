"use client";

import React, { useRef, useState } from "react";
import PageHeader from "@/components/layout/PageHeader";

import { HomeOutlined, SendOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import { Button, Card, List, Tag, message } from "antd";
import LabTestTable from "@/components/lab/LabTable";
import { useRouter } from "next/navigation";
import PrintPatientLabReport from "@/components/print/PrintPatientLabReport";
import { useReactToPrint } from "react-to-print";

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
  const router = useRouter();

  const initialData = [
    {
      key: 1,
      name: "Total WBC Count",
      finding: "",
      unit: "/cumm",
      reference: "4000 - 11000",
    },
    {
      key: 2,
      name: "Neutrophilis",
      finding: "",
      unit: "%",
      reference: "Adult 40-70",
    },
    {
      key: 3,
      name: "Lymphocytes",
      finding: "",
      unit: "%",
      reference: "20-40",
    },
  ];

  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (index: number, key: string, value: string) => {
    const newFormData: any = [...formData];
    newFormData[index][key] = value;
    setFormData(newFormData);
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

  const handleSubmit = () => {
    try {
      console.log("Form data:", formData);
      handlePrint();
      message.success("Lab test data submitted successfully");
    } catch (error) {
      console.error("Submission failed:", error);
      message.error("Failed to submit lab test data");
    }
  };

  const data = {
    patient: {
      name: "Kishore Kumar",
      age: 41,
      gender: "M",
      patientID: "012007110363",
      barcodeID: "A2207046",
      referredBy: "Self",
      sampleType: "WB EDTA",
    },
    report: {
      orderID: "1807334",
      registrationDate: "11/Jul/2020 02:31PM",
      collectionDate: "11/Jul/2020 06:41AM",
      sampleReceiveDate: "12/Jul/2020 10:44AM",
      reportStatus: "Final",
      reportDate: "12/Jul/2020 01:34PM",
    },
    testResults: [
      {
        name: "CBC",
        group: [
          {
            name: "COMPLETE BLOOD CELLS",
            attributes: [
              {
                name: "TOTAL WBC COUNT",
                finding: "5,200",
                unit: "/cumm",
                refernce: "4000 - 11000",
              },
            ],
          },
          {
            name: "DIFFERENTIAL COUNT",
            attributes: [
              {
                name: "TNEUTROPHILS",
                finding: "5,200",
                unit: "/cumm",
                refernce: "4000 - 11000",
              },
              {
                name: "LYMPHOCYTES",
                finding: "5,200",
                unit: "/cumm",
                refernce: "4000 - 11000",
              },
            ],
          },
        ],
      },
      {
        name: "Hemoglobin",
        finding: "16.3",
        unit: "g/dL",
        refernce: "13.0-17.0",
        method: "Cyanide-free SLS-Hemoglobin",
      },
      {
        name: "RBC",
        finding: "5.69",
        unit: "mil/cu.mm",
        refernce: "4.5 - 5.5",
        method: "DC Impedence Method",
      },
      {
        name: "PCV",
        finding: "51.2",
        unit: "%",
        refernce: "40 - 50",
        method: "Calculated",
      },
      {
        name: "MCV",
        finding: "90.0",
        unit: "FL",
        refernce: "80 - 100",
        method: "Calculated",
      },
      {
        name: "MCH",
        finding: "28.6",
        unit: "pg",
        refernce: "27 - 32",
        method: "Calculated",
      },
      {
        name: "TOTAL WBC COUNT",
        finding: "5,200",
        unit: "/cumm",
        refernce: "4000 - 11000",
        method: "",
      },
      {
        name: "DIFFERENTIAL COUNT",
        attributes: [
          {
            name: "TNEUTROPHILS",
            finding: "5,200",
            unit: "/cumm",
            refernce: "4000 - 11000",
            method: "",
          },
          {
            name: "LYMPHOCYTES",
            finding: "5,200",
            unit: "/cumm",
            refernce: "4000 - 11000",
            method: "",
          },
        ],
      },
    ],
  };

  return (
    <>
      <PageHeader items={HeaderItems} titleContent="Patient Result" />
      <div className="bg-white ml-5 mr-5 mt-5 p-4">
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
                type="primary"
                className="bg-primary-bg text-white shadow-none ml-3"
                icon={<SendOutlined />}
                onClick={() => handlePrint()}
              >
                PRINT
              </Button>
            </>
          }
        >
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-5">
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

      <div className="bg-white p-4 ml-5 mr-5 mt-5 shadow-lg">
        <LabTestTable
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <div className="flex justify-end gap-5 mt-5 h-20 bg-white ml-5 mr-5 mt-5 p-4">
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
            className="bg-green-700"
            style={{ borderRadius: "0px", height: "40px", width: "200px" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
        <div style={{ display: "none" }}>
          <PrintPatientLabReport ref={printRef} data={data} />
        </div>
      </div>
    </>
  );
};

export default PatientList;
