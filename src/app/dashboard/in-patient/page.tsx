"use client";

import PageHeader from "@/components/layout/PageHeader";
import { HomeOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Table, Tag } from "antd";
import { useRouter } from "next/navigation";

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "In Patient",
  },
];

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: "32 / M",
    address: "10 Downing Street",
    phone_number: "9867739191",
    ticket_type: "New",
    amount_paid: "Rs 30",
  },
  {
    key: "2",
    name: "John",
    age: "42 / M",
    address: "10 Downing Street",
    phone_number: "9867739191",
    ticket_type: "Re-Visit",
    amount_paid: "Rs 20",
  },
  {
    key: "3",
    name: "John",
    age: "23 / M",
    address: "10 Downing Street",
    phone_number: "9867739191",
    ticket_type: "Emergency",
    amount_paid: "Rs 20",
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
    title: "Age / Gender",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Admit Date",
    dataIndex: "admit_date",
    key: "admit_date",
  },
  {
    title: "Phone Number",
    dataIndex: "phone_number",
    key: "phone_number",
  },
  {
    title: "Ticket Type",
    dataIndex: "ticket_type",
    key: "ticket_type",
    render: (text: string) => <Tag color="green">{text}</Tag>,
  },
  {
    title: "Doctor In-charge",
    dataIndex: "doctor_in_charge",
    key: "doctor_in_charge",
  },
  {
    title: "Advance Amount",
    dataIndex: "advance_paid",
    key: "advance_paid",
  },
  {
    title: "Amount Paid",
    dataIndex: "amount_paid",
    key: "amount_paid",
  },
];

const InPatientList = () => {
  const router = useRouter();

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

  const handlePatientRegistration = () => {
    router.push("in-patient/add");
  };

  return (
    <>
      <PageHeader
        items={HeaderItems}
        titleContent="In Patient List"
        buttonLabel="Admit New Patient"
        buttonCb={handlePatientRegistration}
      />
      <div className="bg-white h-[auto] p-5   shadow-lg">
        <Form layout="vertical">
          <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
            <Col span={6} xs={24} sm={12} md={12} lg={6}>
              <Form.Item name="Search">
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col span={6} xs={24} sm={12} md={12} lg={6}>
              <Form.Item className="rounded-md" name="Phone Number">
                <Input placeholder="Phone Number" />
              </Form.Item>
            </Col>
            <Col span={6} xs={24} sm={12} md={12} lg={6}>
              <Form.Item className="rounded-md" name="doctor">
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

      <Row className="mt-5">
        <Col lg={24} md={24} xs={24} sm={24} className="bg-white p-5 ">
          <Table
            dataSource={dataSource}
            columns={columns}
            scroll={{ x: 1000 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default InPatientList;
