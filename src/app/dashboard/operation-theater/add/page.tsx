"use client";

import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import { HomeOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import { Button, Col, DatePicker, Form, Input, Row, Select, Modal, TimePicker } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormInstance } from "antd/lib/form";

const { Option } = Select;

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "OT Patient",
  },
];

const columns = [
  {
    title: 'Surgery ID',
    dataIndex: 'surgery_id',
    key: 'surgery_id',
  },
  {
    title: 'Patient',
    dataIndex: 'patient_name',
    key: 'patient_name',
  },
  {
    title: 'Surgery Type',
    dataIndex: 'surgery_type',
    key: 'surgery_type',
  },
  {
    title: 'Surgeon',
    dataIndex: 'surgeon_name',
    key: 'surgeon_name',
  },
  {
    title: 'Anesthetist',
    dataIndex: 'anesthetist_name',
    key: 'anesthetist_name',
  },
  {
    title: 'Operating Room',
    dataIndex: 'operating_room',
    key: 'operating_room',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record : any) => (
      <Button type="primary">Edit</Button>
    ),
  },
];

const AddOtPatient = () => {
  const [form] = Form.useForm<FormInstance>();
  const [patientForm] = Form.useForm<FormInstance>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [patients, setPatients] = useState([
    { value: 'John Doe', label: 'John Doe' },
    { value: 'Jane Smith', label: 'Jane Smith' },
  ]);
  
  const router = useRouter();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    patientForm.validateFields().then(values => {
      const newPatient = { value: `${values.first_name} ${values.last_name}`, label: `${values.first_name} ${values.last_name}` };
      setPatients([...patients, newPatient]);
      setIsModalVisible(false);
      patientForm.resetFields();
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    const newSurgery = {
      ...values,
      surgery_date: values.surgery_date.format('YYYY-MM-DD'),
    };
    console.log('Surgery data:', newSurgery);
    router.push('/'); // Redirect after submission
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <PageHeader
        items={HeaderItems}
        titleContent="Ot Patient List"
        buttonLabel="Book New OT"
        buttonCb={showModal}
      />
      <div className="bg-white h-[auto] p-5 ml-5 mr-10 shadow-lg">
        <Form
          form={form}
          layout="vertical"
          name="surgery_form"
          onFinish={onFinish}
          initialValues={{
            modifier: 'public',
          }}
        >
          <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
            <Col span={12} xs={24} sm={12} md={12} lg={12}>
              <Form.Item
                name="patient_name"
                label="Patient Name"
                rules={[{ required: true, message: 'Please select a patient' }]}
              >
                <Select
                  showSearch
                  placeholder="Select Patient"
                  optionFilterProp="children"
                  dropdownRender={menu => (
                    <>
                      {menu}
                      <Button type="link" onClick={showModal}>
                        Add new patient
                      </Button>
                    </>
                  )}
                >
                  {patients.map(patient => (
                    <Option key={patient.value} value={patient.value}>
                      {patient.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12} xs={24} sm={12} md={12} lg={12}>
              <Form.Item
                name="surgery_type"
                label="Surgery Type"
                rules={[{ required: true, message: 'Please enter surgery type' }]}
              >
                <Select
                  showSearch
                  placeholder="Select Surgery Type"
                  optionFilterProp="children"
                >
                  <Option value="Appendectomy">Appendectomy</Option>
                  <Option value="Knee Replacement">Knee Replacement</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12} xs={24} sm={12} md={12} lg={12}>
              <Form.Item
                name="surgery_date"
                label="Surgery Date"
                rules={[{ required: true, message: 'Please select surgery date' }]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12} xs={24} sm={12} md={12} lg={12}>
              <Form.Item
                name="surgery_time"
                label="Surgery Time"
                rules={[{ required: true, message: 'Please select surgery date' }]}
              >
                <TimePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
            <Col span={12} xs={24} sm={12} md={12} lg={12}>
              <Form.Item
                name="surgeon_name"
                label="Surgeon"
                rules={[{ required: true, message: 'Please select a surgeon' }]}
              >
                <Select
                  showSearch
                  placeholder="Select Surgeon"
                  optionFilterProp="children"
                >
                  <Option value="Dr. Smith">Dr. Smith</Option>
                  <Option value="Dr. Johnson">Dr. Johnson</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12} xs={24} sm={12} md={12} lg={12}>
              <Form.Item
                name="anesthetist_name"
                label="Anesthetist"
                rules={[{ required: true, message: 'Please select an anesthetist' }]}
              >
                <Select
                  showSearch
                  placeholder="Select Anesthetist"
                  optionFilterProp="children"
                >
                  <Option value="Dr. Brown">Dr. Brown</Option>
                  <Option value="Dr. White">Dr. White</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12} xs={24} sm={12} md={12} lg={12}>
              <Form.Item
                name="operating_room"
                label="Operating Room"
                rules={[{ required: true, message: 'Please select an operating room' }]}
              >
                <Select
                  showSearch
                  placeholder="Select Operating Room"
                  optionFilterProp="children"
                >
                  <Option value="OR-1">OR-1</Option>
                  <Option value="OR-2">OR-2</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
            <Col span={24} xs={24} sm={12} md={12} lg={24}>
              <Form.Item
                name="notes"
                label="Notes"
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          
          <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
            <Col span={24} md={24} sm={24} xs={24}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
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

      <Modal
        title="Add New Patient"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={patientForm}
          layout="vertical"
          name="patient_form"
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
              <Form.Item className="rounded-md" label="Type" name="type">
                <Select
                  showSearch
                  placeholder="Select Type"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    { value: "New", label: "New" },
                    { value: "Re-visit", label: "Re-Visit" },
                    { value: "Emergency", label: "Emergency" },
                  ]}
                />
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

            <Col span={24} xs={24}>
              <Form.Item
                className="rounded-md"
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please input your address!" },
                ]}
              >
                <Input className="rounded-8" />
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
          </Row>
        </Form>
      </Modal>
    </SidebarLayout>
  );
};

export default AddOtPatient;
