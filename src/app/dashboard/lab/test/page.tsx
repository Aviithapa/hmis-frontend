"use client";

import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import { HomeOutlined, CalendarOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import { Button, Card, Col, Form, Input, Row, Select, Table, Tag } from "antd";
import { useState } from "react";
import { BiWallet } from "react-icons/bi";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { useRouter } from "next/navigation";
import AddTestModal from "@/components/modal/AddTestModal";

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "Lab",
  },
];

const dataSource = [
  {
    key: 1,
    name: "Complete Blood Count",
    shortcut: "CBC",
    price: "Rs 350",
    sample_type: "Blood",
    category: "Hematology",
  },
  {
    key: 2,
    name: "Basic Metabolic Panel",
    shortcut: "BMP",
    price: "Rs 370",
    sample_type: "Blood",
    category: "Chemistry",
  },
  {
    key: 3,
    name: "Liver Function Test",
    shortcut: "LFT",
    price: "Rs 360",
    sample_type: "Blood",
    category: "Chemistry",
  },
  {
    key: 4,
    name: "Thyroid Stimulating Hormone",
    shortcut: "TSH",
    price: "Rs 340",
    sample_type: "Blood",
    category: "Endocrinology",
  },
  {
    key: 5,
    name: "Urinalysis",
    shortcut: "UA",
    price: "Rs 330",
    sample_type: "Urine",
    category: "General",
  },
  {
    key: 6,
    name: "Lipid Panel",
    shortcut: "LP",
    price: "Rs 355",
    sample_type: "Blood",
    category: "Cardiology",
  },
  {
    key: 7,
    name: "Prothrombin Time",
    shortcut: "PT",
    price: "Rs 345",
    sample_type: "Blood",
    category: "Coagulation",
  },
  {
    key: 8,
    name: "Comprehensive Metabolic Panel",
    shortcut: "CMP",
    price: "Rs 380",
    sample_type: "Blood",
    category: "Chemistry",
  },
  {
    key: 9,
    name: "C-Reactive Protein",
    shortcut: "CRP",
    price: "Rs 365",
    sample_type: "Blood",
    category: "Immunology",
  },
  {
    key: 10,
    name: "Hemoglobin A1c",
    shortcut: "HbA1c",
    price: "Rs 350",
    sample_type: "Blood",
    category: "Diabetes",
  },
  {
    key: 11,
    name: "Salivary Cortisol",
    shortcut: "SC",
    price: "Rs 355",
    sample_type: "Saliva",
    category: "Endocrinology",
  },
  {
    key: 12,
    name: "Stool Occult Blood",
    shortcut: "SOB",
    price: "Rs 345",
    sample_type: "Stool",
    category: "Gastroenterology",
  },
  {
    key: 13,
    name: "Sputum Culture",
    shortcut: "SPC",
    price: "Rs 360",
    sample_type: "Sputum",
    category: "Microbiology",
  },
  {
    key: 14,
    name: "Nasopharyngeal Swab PCR",
    shortcut: "NS-PCR",
    price: "Rs 3100",
    sample_type: "Swab",
    category: "Virology",
  },
  {
    key: 15,
    name: "Vitamin D, 25-Hydroxy",
    shortcut: "VitD",
    price: "Rs 375",
    sample_type: "Blood",
    category: "Nutrition",
  },
  {
    key: 16,
    name: "Urine Culture",
    shortcut: "UC",
    price: "Rs 340",
    sample_type: "Urine",
    category: "Microbiology",
  },
  {
    key: 17,
    name: "H. Pylori Antigen",
    shortcut: "HPA",
    price: "Rs 365",
    sample_type: "Stool",
    category: "Gastroenterology",
  },
  {
    key: 18,
    name: "Salivary Alpha-Amylase",
    shortcut: "SAA",
    price: "Rs 350",
    sample_type: "Saliva",
    category: "Endocrinology",
  },
  {
    key: 19,
    name: "Throat Swab Culture",
    shortcut: "TSC",
    price: "Rs 355",
    sample_type: "Swab",
    category: "Microbiology",
  },
  {
    key: 20,
    name: "Blood Urea Nitrogen",
    shortcut: "BUN",
    price: "Rs 345",
    sample_type: "Blood",
    category: "Renal",
  },
];

const columns = [
  {
    title: "#",
    dataIndex: "key",
    key: "sn",
  },
  {
    title: "Test Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Shortcut",
    dataIndex: "shortcut",
    key: "age",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Sample Type",
    dataIndex: "sample_type",
    key: "sample_type",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (text: string) => <Tag color="green">{text}</Tag>,
  },
];

const TestList = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpenClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePatientRegistration = () => {
    router.push("opd-patient/add");
  };

  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <PageHeader
        items={HeaderItems}
        titleContent="Test List"
        buttonLabel="Add New Test"
        buttonCb={handleModalOpenClose}
      />

      <Row className="ml-5 mr-10 mt-5">
        <Col span={24}>
          <Table
            dataSource={dataSource}
            columns={columns}
            scroll={{ x: 1000 }}
          />
        </Col>
      </Row>
      <AddTestModal
        isModalOpen={isModalOpen}
        handleCancel={handleModalOpenClose}
      />
    </SidebarLayout>
  );
};

export default TestList;
