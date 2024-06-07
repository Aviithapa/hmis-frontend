"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { AutoComplete, Avatar, Button, Form, Input, List } from "antd";
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
    title: "Patient Opd",
  },
];

const patientData = [
  {
    patientId: "1234",
    name: "Abhishek Thapa",
    age: "25Y",
    gender: "M",
    religion: "Hindu",
  },
  {
    patientId: "5678",
    name: "John Doe",
    age: "30Y",
    gender: "M",
    religion: "Christian",
  },
  {
    patientId: "91011",
    name: "Jane Smith",
    age: "28Y",
    gender: "F",
    religion: "Muslim",
  },
  {
    patientId: "121314",
    name: "Alice Brown",
    age: "32Y",
    gender: "F",
    religion: "Jewish",
  },
];

const PatientOpd = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLabModalOpen, setIsLabModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPatient, setCurrentPatient] = useState<any>(null);
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    // Update the auto-complete options based on the search query
    if (searchQuery.trim() !== "") {
      const filteredPatients = patientData
        .filter((patient) => patient.patientId.startsWith(searchQuery))
        .map((patient) => ({
          value: patient.patientId,
          label: `${patient.patientId} - ${patient.name}`,
        }));
      setAutoCompleteOptions(filteredPatients);
    } else {
      setAutoCompleteOptions([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    // Filter and set the current patient based on search query
    if (searchQuery.trim() !== "") {
      const filteredPatient = patientData.find(
        (patient) => patient.patientId === searchQuery
      );
      setCurrentPatient(filteredPatient || null);
    } else {
      setCurrentPatient(null);
    }
  }, [searchQuery]);

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
    <div className="mr-4">
      <PageHeader items={HeaderItems} titleContent="Patient Opd" />
      <div className="p-6 ml-4 mb-4 bg-white shadow-lg rounded-md">
        <AutoComplete
          options={autoCompleteOptions}
          placeholder="Search By Patient Id"
          value={searchQuery}
          style={{ width: "100%" }}
          onChange={(value) => setSearchQuery(value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-6">
        <div className="p-6 ml-4 bg-white shadow-lg rounded-md ">
          {currentPatient ? (
            <div>
              <div className="flex justify-center">
                <Avatar size={114} icon={<UserOutlined />} />
              </div>
              <List className="mt-10">
                <List.Item>
                  <span className="font-semibold">Patient Id : </span>
                  <span>{currentPatient.patientId}</span>
                </List.Item>
                <List.Item>
                  <span className="font-semibold">Name :</span>
                  <span>{currentPatient.name}</span>
                </List.Item>
                <List.Item>
                  <span className="font-semibold">Age / Gender :</span>
                  <span>
                    {currentPatient.age} / {currentPatient.gender}
                  </span>
                </List.Item>
                <List.Item>
                  <span className="font-semibold">Religion :</span>
                  <span>{currentPatient.religion}</span>
                </List.Item>
                <List.Item>
                  <span className="font-semibold">
                    <Button onClick={handleModalOpenClose}>
                      Add Medicine{" "}
                    </Button>
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
          ) : (
            <p>No patient found</p>
          )}
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
    </div>
  );
};

export default PatientOpd;
