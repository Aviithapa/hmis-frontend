"use client";
import DashboardCard from "@/components/DashboardCard";
import SidebarLayout from "@/components/layout/Sidebar";
import { Roles } from "@/utils/enums";

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
    </SidebarLayout>
  );
};

export default Dashboard;
