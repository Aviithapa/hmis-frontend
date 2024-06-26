"use client";

import PageHeader from "@/components/layout/PageHeader";
import { HomeOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Steps,
  message,
} from "antd";
import { useRouter } from "next/navigation";

const { Option } = Select;

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "/dashboard/in-patient",
    title: "In Patient List",
  },
  {
    href: "#",
    title: "Add New In Patient",
  },
];

const dummyPatientData = {
  "123": {
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    type: "Re-visit",
    age: "30",
    sex: "Male",
    religion: "Christian",
    address: "123 Main St",
    doctor: "Ram Kumar Yadav (Opticals)",
    department: "Opticals",
    case_type: "Routine Checkup",
    ward_allocation: "Ward 1",
    contact_personal_details: "Jane Doe, 987-654-3210",
  },
  // Add more dummy data here if needed
};

const wards = [
  {
    name: "Ward General - 201",
    beds: [
      { bedNumber: 201 },
      { bedNumber: 202 },
      { bedNumber: 203 },
      { bedNumber: 205 },
    ],
  },
  {
    name: "Ward Emergency - 301",
    beds: [{ bedNumber: 301 }, { bedNumber: 302 }, { bedNumber: 303 }],
  },
  {
    name: "Dulex - 402",
  },
  {
    name: "Dulex - 404",
  },
];

const AddInPatients = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [patientId, setPatientId] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);
  const [availableBeds, setAvailableBeds] = useState([]);

  const handleWardChange = (ward: any) => {
    setSelectedWard(ward);
    const selectedWardData: any = wards.find((w) => w.name === ward);
    setAvailableBeds(selectedWardData ? selectedWardData.beds : []);
  };

  const onChange = (value: any) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: any) => {
    console.log("search:", value);
  };

  const filterOption = (input: any, option: any) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  useEffect(() => {
    if (patientId) {
      const patientData = dummyPatientData[patientId];
      if (patientData) {
        form.setFieldsValue(patientData);
      } else {
        message.error("No patient found with this ID");
        form.resetFields();
      }
    }
  }, [patientId, form]);

  const onFinish = (values: any) => {};

  const handlePatientIdChange = (e: any) => {
    setPatientId(e.target.value);
  };

  return (
    <>
      <PageHeader items={HeaderItems} titleContent="Add New In Patient" />
      <div className="bg-white h-[auto] p-5  shadow-lg">
        <Form
          form={form}
          name="patient_registration"
          autoComplete="true"
          layout="vertical"
          onFinish={onFinish}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={24} xs={24} md={24} sm={24}>
              <Form.Item
                className="rounded-md"
                label="Patient Id"
                name="patient_id"
              >
                <Input onBlur={handlePatientIdChange} />
              </Form.Item>
            </Col>

            <Col span={12} xs={24} md={12} sm={12}>
              <Form.Item
                className="rounded-md"
                label="First Name"
                name="first_name"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12} xs={24} md={12} sm={12}>
              <Form.Item
                className="rounded-md"
                label="Last Name"
                name="last_name"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={12} xs={24} md={12} sm={12}>
              <Form.Item className="rounded-md" label="Email" name="email">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12} xs={24} md={12} sm={12}>
              <Form.Item
                className="rounded-md"
                label="Phone Number"
                name="phone"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12} xs={24} md={12} sm={12}>
              <Form.Item className="rounded-md" label="Age" name="age">
                <Input />
              </Form.Item>
            </Col>

            <Col span={12} xs={24} md={12} sm={12}>
              <Form.Item className="rounded-md" label="Sex" name="sex">
                <Select
                  showSearch
                  placeholder="Select sex"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                    { value: "Other", label: "Other" },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={12} xs={24} md={12} sm={12}>
              <Form.Item
                className="rounded-md"
                label="Marital Status"
                name="martial_status"
              >
                <Select
                  showSearch
                  placeholder="Select Marital Status"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    { value: "Married", label: "Married" },
                    { value: "Un Married", label: "Un Married" },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={12} xs={24} md={12} sm={12}>
              <Form.Item
                className="rounded-md"
                label="Blood Group"
                name="blood_group"
              >
                <Select
                  showSearch
                  placeholder="Select Blood Group"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    { value: "A+", label: "A+" },
                    { value: "A-", label: "A-" },
                    { value: "B+", label: "B+" },
                    { value: "B-", label: "B-" },
                    { value: "AB+", label: "AB+" },
                    { value: "AB-", label: "AB-" },
                    { value: "O+", label: "O+" },
                    { value: "O-", label: "O-" },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={12} xs={24} md={12} sm={12}>
              <Form.Item
                className="rounded-md"
                label="Case Type"
                name="case_type"
              >
                <Select
                  showSearch
                  placeholder="Select Type"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    { value: "Emergency", label: "Emergency" },
                    { value: "Accident", label: "Accident" },
                    { value: "Normal", label: "Normal" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12} xs={24} md={12} sm={12}>
              <Form.Item className="rounded-md mt-8" name="call_police">
                <Checkbox> Call Police</Checkbox>
              </Form.Item>
            </Col>

            <Col span={12} xs={24} md={12} sm={12}>
              <Form.Item
                className="rounded-md"
                label="Religion"
                name="religion"
              >
                <Select
                  showSearch
                  placeholder="Select Religion"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    { value: "Hindu", label: "Hindu" },
                    { value: "Muslim", label: "Muslim" },
                    { value: "Christian", label: "Christian" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12} xs={24} md={12} sm={12}>
              <Form.Item
                className="rounded-md"
                label="Ward Allocation"
                name="ward_allocation"
              >
                <Select onChange={handleWardChange} placeholder="Select Ward">
                  {wards.map((ward) => (
                    <Option key={ward.name} value={ward.name}>
                      {ward.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            {availableBeds?.length > 0 && (
              <Col span={12} xs={24} md={24} sm={24}>
                <Form.Item
                  className="rounded-md"
                  label="Select Available Bed"
                  name="available_bed"
                >
                  <Select placeholder="Select Bed">
                    {availableBeds.map((bed: any) => (
                      <Option key={bed.bedNumber} value={bed.bedNumber}>
                        {`${selectedWard} - Bed Number ${bed.bedNumber}`}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            )}

            <Col span={24} xs={24}>
              <Form.Item
                className="rounded-md"
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please input your address!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12} xs={24} md={12} sm={12}>
              <Form.Item className="rounded-md" label="Doctor" name="doctor">
                <Select
                  showSearch
                  placeholder="Select Doctor"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    {
                      value: "Ram Kumar Yadav (Opticals)",
                      label: "Ram Kumar Yadav (Opticals)",
                    },
                    {
                      value: "Rajendra Mouny (Gastro)",
                      label: "Rajendra Mouny (Gastro)",
                    },
                    {
                      value: "Dr Shyam Bahadur (Clino)",
                      label: "Dr Shyam Bahadur (Clino)",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12} xs={24} md={12} sm={12}>
              <Form.Item label="Department" name="department">
                <Select
                  showSearch
                  placeholder="Select Department"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    { value: "Gyano", label: "Gyano" },
                    { value: "Opticals", label: "Opticals" },
                    { value: "Gastro", label: "Gastro" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={24} xs={24}>
              <Form.Item
                className="rounded-md"
                label="Detail Description"
                name="detail_description"
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </Col>

            <Steps
              current={1}
              status="error"
              items={[
                {
                  title: "Contact Personal Details",
                },
              ]}
            />
            <Space />
            <Col span={12} xs={24} md={6} sm={6}>
              <Form.Item
                className="rounded-md"
                label="First Name"
                name="first_name"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12} xs={24} md={6} sm={6}>
              <Form.Item
                className="rounded-md"
                label="Last Name"
                name="last_name"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12} xs={24} md={6} sm={6}>
              <Form.Item
                className="rounded-md"
                label="Contact Number"
                name="contact_number"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12} xs={24} md={6} sm={6}>
              <Form.Item
                className="rounded-md"
                label="Relationship"
                name="relationship"
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={24} md={24} sm={24} xs={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                }}
              >
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-[100%] bg-green-700"
                    style={{ borderRadius: "0px", height: "40px" }}
                  >
                    Add Now
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="default"
                    onClick={() => router.back()}
                    className="w-[100%] border border-[rgba(247,122,88,0.75)]"
                    style={{ borderRadius: "0px", height: "40px" }}
                  >
                    Cancel
                  </Button>
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default AddInPatients;
