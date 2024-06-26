"use client";

import React, { useState } from "react";
import { Button, Table, Modal } from "antd";

import PageHeader from "@/components/layout/PageHeader";
import { Roles } from "@/utils/enums";
import moment from "moment";
import { BiTrashAlt } from "react-icons/bi";

// Define interfaces for Medication
interface Medication {
  key: string;
  medication_name: string;
  mfg_date: string;
  expire_date: string;
  quantity: number;
  remaining_quantity: number;
  supplier?: string;
  stock_in_date?: Date | string;
}

// Sample dummy data for medications
const initialMedications: Medication[] = [
  {
    key: "1",
    medication_name: "Medication 1",
    mfg_date: "2023-01-01",
    expire_date: "2024-01-01",
    quantity: 100,
    remaining_quantity: 80,
    supplier: "Supplier A",
    stock_in_date: "2023-01-01",
  },
  {
    key: "2",
    medication_name: "Medication 2",
    mfg_date: "2023-02-01",
    expire_date: "2024-02-01",
    quantity: 50,
    remaining_quantity: 50,
    supplier: "Supplier B",
    stock_in_date: "2023-01-01",
  },
  {
    key: "3",
    medication_name: "Medication 3",
    mfg_date: "2023-03-01",
    expire_date: "2024-03-01",
    quantity: 200,
    remaining_quantity: 150,
    supplier: "Supplier C",
    stock_in_date: "2023-01-01",
  },
  {
    key: "4",
    medication_name: "Medication 4",
    mfg_date: "2023-04-01",
    expire_date: "2024-04-01",
    quantity: 75,
    remaining_quantity: 60,
    supplier: "Supplier D",
    stock_in_date: "2023-01-01",
  },
  {
    key: "5",
    medication_name: "Medication 5",
    mfg_date: "2023-05-01",
    expire_date: "2024-05-01",
    quantity: 120,
    remaining_quantity: 100,
    supplier: "Supplier E",
    stock_in_date: "2023-01-01",
  },
];

// Define header items for navigation
const HeaderItems = [
  {
    href: "/dashboard",
    title: "Dashboard",
  },
  {
    href: "#",
    title: "Pharmacy",
  },
  {
    href: "/dashboard/pharmacy/inventory",
    title: "Inventory List",
  },
  {
    href: "#",
    title: "Expired Medicine List",
  },
];

// InventoryList component
const InventoryList = () => {
  const [medications, setMedications] =
    useState<Medication[]>(initialMedications);

  const columns = [
    {
      title: "Medicine Name",
      dataIndex: "medication_name",
      key: "medicine_name",
    },
    {
      title: "Mfg Date",
      dataIndex: "mfg_date",
      key: "mfg_date",
    },
    {
      title: "Expire Date",
      dataIndex: "expire_date",
      key: "expire_date",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Remaining Quantity",
      dataIndex: "remaining_quantity",
      key: "remaining_quantity",
    },
    {
      title: "Supplier",
      dataIndex: "supplier",
      key: "supplier",
    },
    {
      title: "Stock In Date",
      dataIndex: "stock_in_date",
      key: "stock_in_date",
    },
  ];

  const rowClassName = (record: Medication) => {
    const isExpired = moment(record.expire_date).isBefore(moment(), "day");
    return isExpired ? "expired-row" : "";
  };

  return (
    <>
      <PageHeader items={HeaderItems} titleContent="Expired Medicine List" />
      <div className="bg-white p-5  shadow-lg">
        <Table
          columns={columns}
          dataSource={medications}
          rowClassName={rowClassName}
        />
      </div>
    </>
  );
};

export default InventoryList;
