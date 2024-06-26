// Employee.tsx
"use client";
import { useState } from "react";

import Link from "next/link";
import { Button, Input, Table, Image, Breadcrumb } from "antd";
import type { ColumnsType } from "antd/es/table";
import { UserAddOutlined, HomeOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

import { Roles } from "@/utils/enums";
import PageHeader from "@/components/layout/PageHeader";

interface Employee {
  id: number;
  name: string;
  profile_picture: string;
  designation: { name: string };
  user: { email: string };
  phone_number: string;
  joined_date: string;
}

const HeaderItems = [
  {
    href: "/dashboard",
    title: <HomeOutlined />,
  },
  {
    href: "#",
    title: "Employee List",
  },
];

const dummyEmployees: Employee[] = [
  {
    id: 1,
    name: "John Doe",
    profile_picture: "/images/default_profile_picture.jpeg",
    designation: { name: "Software Engineer" },
    user: { email: "john.doe@example.com" },
    phone_number: "123-456-7890",
    joined_date: "2021-01-01",
  },
  // Add more dummy employee data as needed
];

const EmployeePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [employeeList, setEmployeeList] = useState(dummyEmployees);
  const [filteredEmployees, setFilteredEmployees] = useState(dummyEmployees);

  const router = useRouter();
  const [createUserModalOpen, setCreateUserModalOpen] = useState(false);

  const openCloseModal = () => {
    setCreateUserModalOpen(!createUserModalOpen);
  };

  const employeeListColumns: ColumnsType<Employee> = [
    {
      title: "Name",
      key: "name",
      render: (employee) => (
        <div className="flex items-center capitalize">
          <Image
            width={32}
            alt="avatar"
            src={employee.profile_picture}
            style={{ borderRadius: "50%" }}
            preview={false}
          />
          <span className="pl-4 cursor-pointer">
            <strong>
              <Link href={`employee/${employee.id}`}>{employee.name}</Link>
            </strong>
            <p className="text-xs">{employee.designation.name}</p>
          </span>
        </div>
      ),
      responsive: ["sm", "md", "lg"],
    },
    {
      title: "Email",
      dataIndex: ["user", "email"],
      render: (text) => <p>{text || "N/A"}</p>,
      responsive: ["sm", "md", "lg"],
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
      render: (text) => <p>{text || "N/A"}</p>,
      responsive: ["sm", "md", "lg"],
    },
    {
      title: "Joined date",
      dataIndex: "joined_date",
      key: "joined_date",
      render: (text) => <p>{text || "N/A"}</p>,
      responsive: ["sm", "md", "lg"],
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <div>
          <Link href={"/dashboard/staff/1"}>View</Link>
        </div>
      ),
      responsive: ["sm", "md", "lg"],
    },
  ];

  const handleSearch = () => {
    const filtered = employeeList.filter((employee) =>
      employee.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  const resetSearch = () => {
    setSearchValue("");
    setFilteredEmployees(employeeList);
  };

  return (
    <>
      <PageHeader
        items={HeaderItems}
        titleContent="Employee List"
        buttonLabel="Add New Employee"
        buttonCb={openCloseModal}
      />
      <div className="bg-white h-[auto] p-5  shadow-lg">
        <div className="mb-4">
          <div className="flex gap-4">
            <Input
              name="search"
              id="search"
              type="text"
              placeholder="Search By Name"
              autoComplete="off"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-1"
            />
            <Button type="default" onClick={resetSearch}>
              Reset
            </Button>
            <Button type="primary" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
        <Table
          columns={employeeListColumns}
          dataSource={filteredEmployees}
          pagination={{
            defaultPageSize: 10,
            total: filteredEmployees.length,
            showSizeChanger: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
          }}
          scroll={{ x: 1000 }}
        />
      </div>
    </>
  );
};

export default EmployeePage;
