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
  AlertOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";
import { ImLab } from "react-icons/im";

const urls = {
  login: "/auth/login",
  forgotPassword: "/auth/forgot-pw",
  register: "/auth/register",
  changePassword: "auth/change-password",
  commonNavItems: [
    {
      title: "dashboard",
      path: "/dashboard",
      icon: HomeOutlined,
      color: "bg-purple",
    },
  ],
  receptionNavItems: [
    {
      title: "outPatient",
      icon: UserOutlined,
      children: [
        {
          title: "outPatientList",
          path: "/dashboard/opd-patient",
          key: "opd-patient",
        },
        {
          title: "addNewOutPatient",
          path: "/dashboard/opd-patient/add",
          key: "opd-patient-add",
        },
      ],
    },
    {
      title: "inPatient",
      icon: UserAddOutlined,
      children: [
        {
          title: "inPatientList",
          path: "/dashboard/in-patient",
          key: "in-patient",
        },
        {
          title: "admitNewPatient",
          path: "/dashboard/in-patient/add",
          key: "opd-patient-add",
        },
        {
          title: "discharge",
          path: "/dashboard/opd-patient/add",
          key: "opd-patient-add",
        },
        {
          title: "wardManagement",
          path: "/dashboard/ward",
          key: "ward",
        },
      ],
    },
    {
      title: "ot",
      icon: AlertOutlined,
      path: "/dashboard/operation-theater",
    },
    {
      title: "patientOpd",
      path: "/dashboard/patientOpd",
      icon: FileTextOutlined,
      color: "bg-green",
    },
    {
      title: "lab",
      icon: ImLab,
      children: [
        {
          title: "testList",
          path: "/dashboard/lab/test",
          key: "test",
        },
        {
          title: "lab",
          path: "/dashboard/lab",
          key: "lab",
        },
        {
          title: "labReport",
          path: "/dashboard/lab/result",
          key: "lab-result",
        },
      ],
    },
    {
      title: "pharmacy",
      icon: MedicineBoxOutlined,
      children: [
        {
          title: "supplier",
          path: "/dashboard/pharmacy/supplier",
          key: "supplier",
        },
        {
          title: "medicineClassification",
          path: "/dashboard/pharmacy/medicine-classification",
          key: "medicine-classification",
        },
        {
          title: "receiving",
          key: "medicine",
          children: [
            {
              title: "receivingList",
              path: "/dashboard/pharmacy/receiving",
              key: "receiving",
            },
            {
              title: "addNewReceiving",
              path: "/dashboard/pharmacy/receiving/add",
              key: "receiving-add",
            },
          ],
        },
        {
          title: "inventory",
          key: "inventory",
          children: [
            {
              title: "inventoryList",
              path: "/dashboard/pharmacy/inventory",
              key: "receiving",
            },
            {
              title: "expiredMedicineList",
              path: "/dashboard/pharmacy/inventory/expired",
              key: "expired",
            },
            {
              title: "lowQuantityMedicine",
              path: "/dashboard/pharmacy/inventory/low-quantity-medicine",
              key: "low-quantity-medicine",
            },
          ],
        },
        {
          title: "sales",
          key: "sales",
          children: [
            {
              title: "salesList",
              path: "/dashboard/pharmacy/sales",
              key: "sales",
            },
          ],
        },
      ],
    },
    {
      title: "staff",
      key: "staff",
      icon: MedicineBoxOutlined,
      path: "/dashboard/staff",
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
