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
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Editor from "@/components/editor/Editor";
import AddPrescriptionModal from "@/components/modal/AddPrescriptionModal";
import AddLabRequestModal from "@/components/modal/AddLabRequestModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLabModalOpen, setIsLabModalOpen] = useState(false);

  const handleModalOpenClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLabModalOpenClose = () => {
    setIsLabModalOpen(!isLabModalOpen);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <PageHeader items={HeaderItems} titleContent="Patient Opd" />

      <div className="grid grid-cols-4 gap-6">
        <div className="p-6 ml-4 bg-white shadow-lg rounded-md ">
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
            <List.Item>
              <span className="font-semibold">
                <Button onClick={handleModalOpenClose}>Add Medicine </Button>
              </span>
            </List.Item>

            <List.Item>
              <span className="font-semibold rounded-md">
                <Button type="primary" onClick={handleLabModalOpenClose}>
                  Add Lab
                </Button>
              </span>
            </List.Item>
          </List>
        </div>
        <Form
          name="patient_registration"
          autoComplete="true"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="col-span-3 h-[100vh] bg-white p-10 rounded-md shadow-lg"
        >
          <Editor />
        </Form>

        <AddPrescriptionModal
          handleCancel={handleModalOpenClose}
          isModalOpen={isModalOpen}
        />
        <AddLabRequestModal
          handleCancel={handleLabModalOpenClose}
          isModalOpen={isLabModalOpen}
        />
      </div>
    </SidebarLayout>
  );
};

export default PatientOpd;
