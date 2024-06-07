"use client";

import DropdownMenu from "@/components/layout/DropdownMenu";
import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import PrintPatientRegistration, {
  PatientData,
} from "@/components/print/PrintPatientRegistration";
import { HomeOutlined } from "@ant-design/icons";
import {
  Affix,
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Layout,
  Row,
  Select,
} from "antd";
import { useRef, useState, useEffect } from "react";
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
  const [data, setData] = useState<PatientData>({
    id: 1230,
    first_name: "Abhishek",
    last_name: "Thapa",
    age: 25,
    sex: "M",
    phone: "9867739191",
    address: "Lalitpur Imadol",
    type: "new",
  });
  const [shouldPrint, setShouldPrint] = useState(false);
  const [patientCount, setPatientCount] = useState<number>(0);

  useEffect(() => {
    if (shouldPrint) {
      handlePrint();
      setShouldPrint(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, shouldPrint]);

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
    setData(values);
    setShouldPrint(true);
    setPatientCount((prevCount) => prevCount + 1); // Increment the patient count
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

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <Layout className="site-layout">
        <Affix offsetTop={0}>
          <div
            style={{
              padding: 0,
              background: "#cefad0",
              top: 0,
              paddingRight: "25px",
              paddingLeft: "25px",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              boxShadow: " 0px 0px 4px rgba(0, 0, 0, 0.2)",
              height: "56px",
            }}
          >
            <div />
            <div style={{ right: 0, textAlign: "right" }}>
              <span
                style={{
                  marginRight: "20px",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              ></span>
              <DropdownMenu />
            </div>
          </div>
        </Affix>
      </Layout>
      <PageHeader items={HeaderItems} titleContent="Patient Registration" />
      <div className="bg-white h-[auto] p-5 ml-5 mr-10 rounded-md shadow-lg">
        <div className="mb-4">
          <span className="text-lg font-bold">
            Total Patients Registered Today: {patientCount}
          </span>
        </div>
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
            <Col span={12}>
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
            <Col span={12}>
              <Form.Item className="rounded-md" label="Email" name="email">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                className="rounded-md"
                label="Phone Number"
                name="phone"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
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
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item className="rounded-md" label="Age" name="age">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
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
            <Col span={12}>
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

            <Col span={24}>
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
            <Col span={12}>
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
            <Col span={12}>
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
            <Col span={4}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-[90%] bg-gradient-to-r from-cyan-500 to-blue-500"
                  style={{ borderRadius: "10px", height: "40px" }}
                >
                  Add Now
                </Button>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item>
                <Button
                  type="dashed"
                  htmlType="submit"
                  className="w-[70%] border border-[rgba(247,122,88,0.75)]"
                  style={{ borderRadius: "10px", height: "40px" }}
                >
                  Cancel
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <PrintPatientRegistration ref={printRef} patientData={data} />
      </div>
    </>
  );
};

export default PatientRegister;
