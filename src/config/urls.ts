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
import { MdOutlineAppRegistration } from "react-icons/md";

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
    },
  ],
  receptionNavItems: [
    {
      title: "Patient Registration",
      path: "/dashboard/patientRegister",
      icon: MdOutlineAppRegistration,
    },
    {
      title: "Patient List",
      path: "/dashboard/patientList",
      icon: UserOutlined,
    },
    {
      title: "Patient Opd",
      path: "/dashboard/patientOpd",
      icon: FileTextOutlined,
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
