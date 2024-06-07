"use client";

import PageHeader from "@/components/layout/PageHeader";
import SidebarLayout from "@/components/layout/Sidebar";
import { HomeOutlined, SendOutlined } from "@ant-design/icons";
import { Roles } from "@/utils/enums";
import { Button, Card, Col, Form, Input, List, Row, Tag } from "antd";
import LabTestTable from "@/components/lab/LabTable";

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "Patient Lab",
  },
];

const PatientList = () => {
  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <PageHeader items={HeaderItems} titleContent="Patient Lab" />
      <div className="bg-white ml-5 mr-5 p-4  shadow-sm ">
        <Form layout="vertical">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={22}>
              <Form.Item name="Search" label="Enter patient id">
                <Input />
              </Form.Item>
            </Col>

            <Col span={2}>
              <Form.Item>
                <Button
                  type="default"
                  htmlType="submit"
                  className="w-[100%]"
                  style={{
                    height: "35px",
                    marginTop: "30px",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Reset Filter
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="bg-white ml-5 mr-5 mt-5  p-4">
        <Card
          extra={
            <Button
              type="primary"
              className="bg-primary-bg text-white shadow-none"
              icon={<SendOutlined />}
            >
              SEND SMS/MAIL
            </Button>
          }
        >
          <div className=" p-4 grid grid-cols-1 md:grid-cols-3 gap-5">
            <List>
              <List.Item>
                <span className="font-semibold">Patient Id: </span>
                <span>1234</span>
              </List.Item>
              <List.Item>
                <span className="font-semibold">Name: </span>
                <span>Abhishek Thapa</span>
              </List.Item>
              <List.Item>
                <span className="font-semibold">Age / Gender: </span>
                <span>25Y / M</span>
              </List.Item>
              <List.Item>
                <span className="font-semibold">Prescription: </span>
                <span>SELF / DOCTOR</span>
              </List.Item>
            </List>
            <div />
            <List>
              <List.Item>
                <span className="font-semibold">Collection Date: </span>
                <span>2024-01-03 7:50</span>
              </List.Item>
              <List.Item>
                <span className="font-semibold">Reporting Date: </span>
                <span>2024-01-03 7:50</span>
              </List.Item>
              <List.Item>
                <span className="font-semibold">Status: </span>
                <span>
                  <Tag color="green">Sample Collected</Tag>
                  <Tag color="blue">Report Printed</Tag>
                </span>
              </List.Item>
              <List.Item>
                <span className="font-semibold">Reference: </span>
                <span className="font-semibold">Dr. Ramesh</span>
              </List.Item>
            </List>
          </div>
        </Card>
      </div>

      <div className="bg-white p-4 ml-5 mr-5 mt-5  shadow-lg">
        <LabTestTable />
      </div>
    </SidebarLayout>
  );
};

export default PatientList;
