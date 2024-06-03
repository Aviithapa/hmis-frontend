"use client";
import DashboardCard from "@/components/DashboardCard";
import SidebarLayout from "@/components/layout/Sidebar";
import { Roles } from "@/utils/enums";
import { Avatar, Card, Col, Row, Tooltip } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  HomeOutlined,
  LogoutOutlined,
  ManOutlined,
  ReadOutlined,
  SettingOutlined,
  UserOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { MdOutlineAppRegistration } from "react-icons/md";

const Dashboard = () => {
  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <div style={{ marginTop: "20px", marginLeft: "20px" }}>
        <h1
          style={{ textAlign: "center", fontWeight: "600", fontSize: "26px" }}
        >
          Hospital Management Information System
        </h1>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <DashboardCard />
        </div>
      </div>
      <Card
        title="Shortcut"
        style={{
          background: "white",
          margin: "20px",
        }}
      >
        <div className="flex w-[100%]">
          <div className="w-full">
            <Row gutter={[16, 16]} className="gap-6">
              <Col
                xs={12}
                sm={8}
                md={5}
                style={{ background: "orange", color: "white" }}
              >
                <Link href="#">
                  <Tooltip title={"Dashboard"}>
                    <div className="flex flex-col items-center justify-center">
                      <Avatar
                        size={94}
                        shape="square"
                        icon={<HomeOutlined />}
                        style={{ backgroundColor: "orange" }}
                      />
                      <span
                        className="text-center"
                        style={{ fontSize: "22px" }}
                      >
                        Dashboard
                      </span>
                    </div>
                  </Tooltip>
                </Link>
              </Col>
              <Col
                xs={12}
                sm={8}
                md={5}
                style={{ background: "#4DABF7", color: "white" }}
              >
                <Link href="/dashboard/patientOpd">
                  <Tooltip title={"Dashboard"}>
                    <div className="flex flex-col items-center justify-center">
                      <Avatar
                        size={94}
                        shape="square"
                        icon={<MdOutlineAppRegistration fontSize={"60px"} />}
                        style={{ backgroundColor: "#4DABF7" }}
                      />
                      <span
                        className="text-center"
                        style={{ fontSize: "22px", marginTop: "-10px" }}
                      >
                        Patient Opd
                      </span>
                    </div>
                  </Tooltip>
                </Link>
              </Col>
              <Col
                xs={12}
                sm={8}
                md={5}
                style={{ background: "#34d399", color: "white" }}
              >
                <Link href="/dashboard/patientList">
                  <Tooltip title={"Dashboard"}>
                    <div className="flex flex-col items-center justify-center">
                      <Avatar
                        size={94}
                        shape="square"
                        icon={<UserOutlined />}
                        style={{ backgroundColor: "#34d399" }}
                      />
                      <span
                        className="text-center"
                        style={{ fontSize: "22px", marginTop: "-10px" }}
                      >
                        Patient List
                      </span>
                    </div>
                  </Tooltip>
                </Link>
              </Col>
              <Col
                xs={12}
                sm={8}
                md={5}
                style={{ background: "#0bc5ea", color: "white" }}
              >
                <Link href="/dashboard/patientRegister">
                  <Tooltip title={"Dashboard"}>
                    <div className="flex flex-col items-center justify-center">
                      <Avatar
                        size={94}
                        shape="square"
                        icon={<UserOutlined />}
                        style={{ backgroundColor: "#0bc5ea" }}
                      />
                      <span
                        className="text-center"
                        style={{ fontSize: "22px", marginTop: "-10px" }}
                      >
                        Patient Registration
                      </span>
                    </div>
                  </Tooltip>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </SidebarLayout>
  );
};

export default Dashboard;
