"use client";

import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import PrintPatientRegistration from "@/components/print/PrintPatientRegistration";
import { HomeOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "Add New Patient",
  },
];

const PatientRegister = () => {
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
      <PageHeader items={HeaderItems} titleContent="Patient Registration" />
      <div className="bg-white h-[auto] p-5 ml-5 mr-10">
        <Form
          name="patient_registration"
          autoComplete="true"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="first_name"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
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
            <Col span={12}>
              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Phone Number" name="phone">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Date of Birth"
                name="dob"
                rules={[
                  {
                    required: true,
                    message: "Please select your date of birth!",
                  },
                ]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Age" name="age">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Sex" name="sex">
                <Select
                  showSearch
                  placeholder="Select sex"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    {
                      value: "Male",
                      label: "male",
                    },
                    {
                      value: "Female",
                      label: "Female",
                    },
                    {
                      value: "Other",
                      label: "other",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Religion" name="religion">
                <Select
                  showSearch
                  placeholder="Select Religion"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    {
                      value: "hindu",
                      label: "Hindu",
                    },
                    {
                      value: "Muslim",
                      label: "muslim",
                    },
                    {
                      value: "Christian",
                      label: "christian",
                    },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please input your address!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Doctor" name="doctor">
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
                      value: "Dr shyam bahadur (Clino)",
                      label: "Dr shyam bahadur (Clino)",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Department" name="department">
                <Select
                  showSearch
                  placeholder="Select Department"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  style={{ borderRadius: "0px" }}
                  options={[
                    {
                      value: "Gyano",
                      label: "Gyano",
                    },
                    {
                      value: "Opticals",
                      label: "Opticals",
                    },
                    {
                      value: "Gastro",
                      label: "Gastro",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={2}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-[100%]"
                  style={{ borderRadius: "0px", height: "40px" }}
                >
                  Add Now
                </Button>
              </Form.Item>
            </Col>
            <Col span={2}>
              <Form.Item>
                <Button
                  type="dashed"
                  htmlType="submit"
                  className="w-[100%]"
                  style={{ borderRadius: "0px", height: "40px" }}
                >
                  Cancel
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <PrintPatientRegistration ref={printRef} />
      </div>
    </SidebarLayout>
  );
};

export default PatientRegister;
