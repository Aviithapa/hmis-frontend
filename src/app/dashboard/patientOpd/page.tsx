"use client";

import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import PrintPatientRegistration from "@/components/print/PrintPatientRegistration";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import {
  Avatar,
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  List,
  Row,
  Select,
} from "antd";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Editor from "@/components/editor/Editor";

const HeaderItems = [
  {
    href: "/",
    title: <HomeOutlined />,
  },
  {
    href: "/",
    title: "Add New Patient",
  },
];

const PatientOpd = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Patient Detail",
    pageStyle: `
      @page {
        size: landscape;
      }
    `,
  });

  const onFinish = (values: any) => {
    console.log("Success:", values);
    handlePrint();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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

  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <PageHeader items={HeaderItems} titleContent="Patient Opd" />

      <div className="grid grid-cols-4 gap-6">
        <div className="p-6 ml-4 bg-white shadow-box rounded-sm ">
          <div className="flex justify-center">
            <Avatar size={114} icon={<UserOutlined />} />
          </div>
          <List className="mt-10">
            <List.Item>
              <span className="font-semibold">Patient Id : </span>
              <span>1234</span>
            </List.Item>
            <List.Item>
              <span className="font-semibold">Name :</span>
              <span>Abhishek Thapa</span>
            </List.Item>
            <List.Item>
              <span className="font-semibold">Age / Gender :</span>
              <span>25Y / M</span>
            </List.Item>
            <List.Item>
              <span className="font-semibold">Religion :</span>
              <span>Hindu</span>
            </List.Item>
          </List>
        </div>
        <Form
          name="patient_registration"
          autoComplete="true"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="col-span-3 h-[100vh] bg-white p-10"
        >
          <Editor />
        </Form>

        <PrintPatientRegistration ref={printRef} />
      </div>
    </SidebarLayout>
  );
};

export default PatientOpd;
