"use client";

import PageHeader from "@/components/layout/PageHeader";

import { HomeOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import { Button, Col, Form, Input, Modal, Row, Select, Table } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "Ward List",
  },
];

const dataSource = [
  {
    key: 1,
    name: "Ward A",
    type: "General",
    department: "Cardiology",
    bed: 10,
    floor: 1,
    room_number: 101,
    available: 5,
    occupied_beds: 5,
    total_beds: 10,
    price_per_day: 100,
  },
  {
    key: 2,
    name: "Ward B",
    type: "ICU",
    department: "Neurology",
    bed: 8,
    floor: 2,
    room_number: 202,
    available: 3,
    occupied_beds: 5,
    total_beds: 8,
    price_per_day: 200,
  },
  {
    key: 3,
    name: "Ward C",
    type: "General",
    department: "Pediatrics",
    bed: 6,
    floor: 1,
    room_number: 103,
    available: 2,
    occupied_beds: 4,
    total_beds: 6,
    price_per_day: 80,
  },
  {
    key: 4,
    name: "Deluxe Room 1",
    type: "Deluxe",
    department: "VIP",
    bed: 1,
    floor: 3,
    room_number: 301,
    available: 0,
    occupied_beds: 1,
    total_beds: 1,
    price_per_day: 500,
    patient: {
      name: "John Doe",
      age: 45,
      admission_date: "2024-06-15",
    },
    doctor: {
      name: "Dr. Smith",
      specialty: "Internal Medicine",
    },
  },
];

const WardManagementList = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const showModal = (patient: any) => {
    setSelectedPatient(patient);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setSelectedPatient(null);
  };

  const onChange = (value: any) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: any) => {
    console.log("search:", value);
  };

  const filterOption = (input: any, option: any) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const handleWardRegistration = () => {
    router.push("ward/add");
  };

  const redirectToWardDetail = (wardKey: string) => {
    router.push(`/dashboard/ward/${wardKey}`);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "sn",
    },
    {
      title: "Ward Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ward Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Beds",
      dataIndex: "bed",
      key: "bed",
    },
    {
      title: "Floor",
      dataIndex: "floor",
      key: "floor",
    },
    {
      title: "Room No",
      dataIndex: "room_number",
      key: "room_number",
    },
    {
      title: "Available",
      dataIndex: "available",
      key: "available",
    },
    {
      title: "Occupied Beds",
      dataIndex: "occupied_beds",
      key: "occupied_beds",
    },
    {
      title: "Total Beds",
      dataIndex: "total_beds",
      key: "total_beds",
    },
    {
      title: "Price Per Day",
      dataIndex: "price_per_day",
      key: "price_per_day",
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: any) => (
        <span>
          <Button>Edit</Button>
          <Button>Delete</Button>
          {record.total_beds === 1 && record.available === 0 ? (
            <Button onClick={() => showModal(record.patient)}>View</Button>
          ) : (
            <Button onClick={() => redirectToWardDetail(record.key)}>
              View
            </Button>
          )}
        </span>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        items={HeaderItems}
        titleContent="Ward List"
        buttonLabel="Add New Ward"
        buttonCb={handleWardRegistration}
      />
      <div className="bg-white h-[auto] p-5  shadow-lg">
        <Form layout="vertical">
          <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
            <Col span={6} xs={24} sm={12} md={12} lg={6}>
              <Form.Item name="Search by name">
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col span={6} xs={24} sm={12} md={12} lg={6}>
              <Form.Item className="rounded-md" name="status">
                <Select
                  showSearch
                  placeholder="Status"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    {
                      value: "Available",
                      label: "Available",
                    },
                    {
                      value: "Booked",
                      label: "Booked",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={6} xs={24} sm={12} md={12} lg={6}>
              <Form.Item className="rounded-md" name="ward_type">
                <Select
                  showSearch
                  placeholder="Ward Type"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    {
                      value: "general",
                      label: "General",
                    },
                    {
                      value: "Deluxe",
                      label: "Deluxe",
                    },
                    {
                      value: "ICU",
                      label: "ICU",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={5} xs={24} sm={24} lg={4}>
              <Form.Item>
                <Button
                  type="default"
                  className="w-[100%]"
                  style={{
                    height: "100%",
                    borderRadius: "0",
                    padding: "6px",
                  }}
                >
                  Reset Filter
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <Row className=" mt-5">
        <Col lg={24} md={24} xs={24} sm={24} className="bg-white p-5">
          <Table
            dataSource={dataSource}
            columns={columns}
            scroll={{ x: 1000 }}
          />
        </Col>
      </Row>
      <Modal
        title="Patient Details"
        open={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        {selectedPatient && (
          <div>
            <p>
              <strong>Patient Name:</strong> {selectedPatient.name}
            </p>
            <p>
              <strong>Age:</strong> {selectedPatient.age}
            </p>
            <p>
              <strong>Admission Date:</strong> {selectedPatient.admission_date}
            </p>
            <p>
              <strong>Doctor In Charge:</strong>{" "}
              {
                dataSource.find((ward) => ward.patient === selectedPatient)
                  .doctor.name
              }
            </p>
            <p>
              <strong>Doctor Specialty:</strong>{" "}
              {
                dataSource.find((ward) => ward.patient === selectedPatient)
                  .doctor.specialty
              }
            </p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default WardManagementList;
