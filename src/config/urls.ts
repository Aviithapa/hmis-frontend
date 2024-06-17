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
  UserAddOutlined,
} from "@ant-design/icons";
import { ImLab } from "react-icons/im";

const urls = {
  login: "/auth/login",
  forgotPassword: "/auth/forgot-pw",
  register: "/auth/register",
  changePassword: "auth/change-password",
  commonNavItems: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: HomeOutlined,
      color: "bg-purple",
    },
  ],
  receptionNavItems: [
    {
      title: "Out Patient",
      icon: UserOutlined,
      children: [
        {
          title: "Out Patient List",
          path: "/dashboard/opd-patient",
          key: "opd-patient",
        },
        {
          title: "Add New Out Patient",
          path: "/dashboard/opd-patient/add",
          key: "opd-patient-add",
        },
      ],
    },
    {
      title: "In Patient",
      icon: UserAddOutlined,
      children: [
        {
          title: "In Patient List",
          path: "/dashboard/in-patient",
          key: "in-patient",
        },
        {
          title: "Admit New Patient",
          path: "/dashboard/opd-patient/add",
          key: "opd-patient-add",
        },
        {
          title: "Discharge",
          path: "/dashboard/opd-patient/add",
          key: "opd-patient-add",
        },
      ],
    },
    {
      title: "Patient Opd",
      path: "/dashboard/patientOpd",
      icon: FileTextOutlined,
      color: "bg-green",
    },
    {
      title: "Lab",
      icon: ImLab,
      children: [
        {
          title: "Test List",
          path: "/dashboard/lab/test",
          key: "test",
        },
        {
          title: "Lab ",
          path: "/dashboard/lab",
          key: "lab",
        },
        {
          title: "Lab Report",
          path: "/dashboard/lab/result",
          key: "lab-result",
        },
      ],
    },
  ],
  employeeNavitems: [
    {
      title: "My Profile",
      path: "/employee/my-profile",
      icon: ManOutlined,
    },
    {
      title: "Attendance",
      icon: ClockCircleOutlined,
      children: [
        {
          title: "My Attendance",
          path: "/employee/attendance",
          key: "attendance-list",
        },
        {
          title: "Team Attendance",
          path: "/employee/attendance/list",
          key: "summary",
        },
      ],
    },
    {
      title: "Leaves",
      path: "/employee/leaves",
      icon: LogoutOutlined,
    },
    {
      title: "Holiday",
      path: "/holiday",
      icon: CalendarOutlined,
    },
  ],
  adminNavitems: [
    {
      title: "Attendance",
      icon: ClockCircleOutlined,
      children: [
        {
          title: "List",
          path: "/admin/attendance/list",
          key: "attendance-list",
        },
        {
          title: "Summary",
          path: "/admin/attendance",
          key: "summary",
        },
      ],
    },
    {
      title: "Employee",
      path: "/admin/employee",
      icon: UserOutlined,
    },
    {
      title: "Payroll",
      icon: ReadOutlined,
      children: [
        {
          title: "Go Payroll",
          path: "/admin/payroll/go-payroll",
          key: "go-payroll",
        },
        {
          title: "Payslip",
          path: "/admin/payroll/payslip",
          key: "payslip",
        },
        {
          title: "Salary Reports",
          path: "/admin/payroll/salary/salary-report",
          key: "salary-report",
        },
      ],
    },

    {
      title: "Leaves",
      path: "/admin/leaves",
      icon: LogoutOutlined,
    },

    {
      title: "Holiday",
      path: "/holiday",
      icon: CalendarOutlined,
    },
    {
      title: "Settings",
      path: "/admin/settings",
      icon: SettingOutlined,
    },
  ],
};

export default urls;
