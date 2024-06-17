"use client";

import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import { HomeOutlined, EyeOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import { Button, Col, Form, Row, Table, Tag } from "antd";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/navigation";

const testOptions = [
  { label: "Complete Blood Count (CBC)", value: "CBC", price: 50 },
  { label: "Basic Metabolic Panel (BMP)", value: "BMP", price: 70 },
  { label: "Liver Function Test (LFT)", value: "LFT", price: 60 },
  { label: "Thyroid Stimulating Hormone (TSH)", value: "TSH", price: 40 },
  { label: "Urinalysis (UA)", value: "UA", price: 30 },
];

const initialData = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
    phone_number: "9867739191",
    ticket_type: "New",
    amount_paid: "Rs 30",
    lab_tests: ["CBC", "BMP"],
    status: ["Sample Collected"],
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
    phone_number: "9867739191",
    ticket_type: "Re-Visit",
    amount_paid: "Rs 20",
    lab_tests: ["LFT", "TSH"],
    status: ["Sample Collected"],
  },
  {
    key: "3",
    name: "John",
    age: 23,
    address: "10 Downing Street",
    phone_number: "9867739191",
    ticket_type: "Emergency",
    amount_paid: "Rs 20",
    lab_tests: ["UA"],
    status: ["Sample Collected"],
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
    title: "Amount Paid",
    dataIndex: "amount_paid",
    key: "amount_paid",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (tests: any) =>
      tests.map((test: any) => (
        <Tag key={test} color="blue">
          {test}
        </Tag>
      )),
  },
  {
    title: "Lab Tests",
    dataIndex: "lab_tests",
    key: "lab_tests",
    render: (tests: any) =>
      tests.map((test: any) => (
        <Tag key={test} color="blue">
          {test}
        </Tag>
      )),
  },
];

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

const LabList = () => {
  const [data, setData] = useState(initialData);
  const [_isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [_selectedPatient, setSelectedPatient] = useState(null);
  const router = useRouter();
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    const newData = {
      key: (data.length + 1).toString(),
      name: values.name,
      age: values.age,
      address: values.address,
      phone_number: values.phone_number,
      ticket_type: values.ticket_type,
      amount_paid: `Rs ${values.amount_paid}`,
      lab_tests: values.lab_tests,
      status: values.status,
    };
    setData([...data, newData]);
    handleCloseModal();
  };

  const handlePrintBill = (record: any) => {
    setSelectedPatient(record);
    handlePrint();
  };

  const handleOpenLabPage = () => {
    router.push("/dashboard/lab/add");
  };

  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <PageHeader
        items={HeaderItems}
        titleContent="Patient Lab"
        buttonLabel="Add New Patient Lab Test"
        buttonCb={handleOpenLabPage}
      />

      <Row className="ml-5 mr-10 mt-5">
        <Col span={24} className="bg-white p-5 ">
          <Table
            dataSource={data}
            columns={[
              ...columns,
              {
                title: "Actions",
                key: "actions",
                render: (_, record) => (
                  <Button
                    type="link"
                    onClick={() => handleOpenLabPage()}
                    icon={<EyeOutlined />}
                  />
                ),
              },
            ]}
            scroll={{ x: 1000 }}
          />
        </Col>
      </Row>
    </SidebarLayout>
  );
};

export default LabList;
