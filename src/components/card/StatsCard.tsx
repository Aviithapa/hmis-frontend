import { Card } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  MedicineBoxOutlined,
  UsergroupAddOutlined,
  ClockCircleOutlined,
  ShopOutlined,
  WalletOutlined,
  FundProjectionScreenOutlined,
  UserSwitchOutlined,
  ExperimentOutlined,
  ExportOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import TranslationText from "../translation/TranslationText";

const stats = [
  {
    icon: <UserOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 100,
    label: "totalPatients",
    bgColor: "bg-blue-500",
  },
  {
    icon: <TeamOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 25,
    label: "opdVisitsPerDay",
    bgColor: "bg-green-500",
  },
  {
    icon: <UsergroupAddOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 10,
    label: "doctors",
    bgColor: "bg-yellow-500",
  },
  {
    icon: (
      <FundProjectionScreenOutlined
        style={{ fontSize: "40px", color: "gray" }}
      />
    ),
    count: 10,
    label: "admittedPatient",
    bgColor: "bg-yellow-500",
  },
  {
    icon: <MedicineBoxOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 5,
    label: "treatmentsSurgeries",
    bgColor: "bg-red-500",
  },
  {
    icon: <UserSwitchOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 200,
    label: "totalDischarged",
    bgColor: "bg-red-500",
  },
  {
    icon: <ClockCircleOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 120,
    label: "avgTreatmentTime",
    bgColor: "bg-purple-500",
  },
  {
    icon: <ShopOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 1,
    label: "pharmacyOutlets",
    bgColor: "bg-pink-500",
  },
  {
    icon: <WalletOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 1500,
    label: "totalRevenueToday",
    bgColor: "bg-teal-500",
  },
  {
    icon: <WalletOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 1500,
    label: "totalRevenue",
    bgColor: "bg-teal-500",
  },
  {
    icon: <ExperimentOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 2,
    label: "totalLabToday",
    bgColor: "bg-teal-500",
  },
  {
    icon: <ExperimentOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 150,
    label: "totalLab",
    bgColor: "bg-teal-500",
  },
  {
    icon: <WalletOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 1500,
    label: "labRevenue",
    bgColor: "bg-teal-500",
  },
  {
    icon: <ExportOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 1500,
    label: "refundedAmount",
    bgColor: "bg-teal-500",
  },
  {
    icon: <BarsOutlined style={{ fontSize: "40px", color: "gray" }} />,
    count: 15,
    label: "refundedBillList",
    bgColor: "bg-teal-500",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className={`p-2 bg-white flex flex-col items-center justify-center text-center`}
        >
          <div className="text-4xl mb-2">{stat.icon}</div>
          <div className="text-3xl font-bold">{stat.count}</div>
          <div className="text-sm text-gray-400 font-bold">
            <TranslationText namespace="general:stats" text={stat.label} />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
