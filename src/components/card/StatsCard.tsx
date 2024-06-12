import { Card } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  MedicineBoxOutlined,
  UsergroupAddOutlined,
  ClockCircleOutlined,
  ShopOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const stats = [
  {
    icon: <UserOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 100, // Total number of patients
    label: "Total Patients",
    bgColor: "bg-blue-500",
  },
  {
    icon: <TeamOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 25, // Number of OPD visits per day
    label: "OPD Visits/Day",
    bgColor: "bg-green-500",
  },
  {
    icon: <UsergroupAddOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 10, // Total number of doctors
    label: "Doctors",
    bgColor: "bg-yellow-500",
  },
  {
    icon: <MedicineBoxOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 5, // Number of available treatments or surgeries performed
    label: "Treatments/Surgeries",
    bgColor: "bg-red-500",
  },
  {
    icon: <ClockCircleOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 120, // Average treatment time in minutes
    label: "Avg. Treatment Time",
    bgColor: "bg-purple-500",
  },
  {
    icon: <ShopOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 1, // Number of pharmacy outlets in the hospital
    label: "Pharmacy Outlets",
    bgColor: "bg-pink-500",
  },
  {
    icon: <WalletOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 1500, // Revenue generated
    label: "Total Revenue",
    bgColor: "bg-teal-500",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className={`p-2 bg-white flex flex-col items-center justify-center text-center`}
        >
          <div className="text-4xl mb-2">{stat.icon}</div>
          <div className="text-3xl font-bold">{stat.count}</div>
          <div className="text-sm text-gray-400 font-bold">{stat.label}</div>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
