"use client";
import StatsCards from "@/components/card/StatsCard";
import SidebarLayout from "@/components/layout/Sidebar";
import { Roles } from "@/utils/enums";

const Dashboard = () => {
  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <div className="w-full h-full pl-[2%] pr-[2%]">
        <div className="w-full h-full mt-8">
          <div className="rounded-md">
            <h1 className="text-center text-3xl font-bold">
              Hospital Management Information System
            </h1>
            <h2 className="text-center text-2xl font-bold">Stats</h2>
            <div className="mt-5">
              <StatsCards />
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Dashboard;
