"use client";

import React, { useState } from "react";
import { Button, Table, Modal } from "antd";
import SidebarLayout from "@/components/layout/Sidebar";
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
}

// Sample dummy data for medications
const initialMedications: Medication[] = [
  {
    key: '1',
    medication_name: 'Medication 1',
    mfg_date: '2023-01-01',
    expire_date: '2024-01-01',
    quantity: 100,
    remaining_quantity: 80,
    supplier: 'Supplier A',
  },
  {
    key: '2',
    medication_name: 'Medication 2',
    mfg_date: '2023-02-01',
    expire_date: '2024-02-01',
    quantity: 50,
    remaining_quantity: 50,
    supplier: 'Supplier B',
  },
  {
    key: '3',
    medication_name: 'Medication 3',
    mfg_date: '2023-03-01',
    expire_date: '2024-03-01',
    quantity: 200,
    remaining_quantity: 150,
    supplier: 'Supplier C',
  },
  {
    key: '4',
    medication_name: 'Medication 4',
    mfg_date: '2023-04-01',
    expire_date: '2024-04-01',
    quantity: 75,
    remaining_quantity: 60,
    supplier: 'Supplier D',
  },
  {
    key: '5',
    medication_name: 'Medication 5',
    mfg_date: '2023-05-01',
    expire_date: '2024-05-01',
    quantity: 120,
    remaining_quantity: 100,
    supplier: 'Supplier E',
  },
  {
    key: '6',
    medication_name: 'Medication 6',
    mfg_date: '2023-06-01',
    expire_date: '2024-06-01',
    quantity: 60,
    remaining_quantity: 50,
    supplier: 'Supplier F',
  },
  {
    key: '7',
    medication_name: 'Medication 7',
    mfg_date: '2023-07-01',
    expire_date: '2024-07-01',
    quantity: 90,
    remaining_quantity: 70,
    supplier: 'Supplier G',
  },
  {
    key: '8',
    medication_name: 'Medication 8',
    mfg_date: '2023-08-01',
    expire_date: '2024-08-01',
    quantity: 130,
    remaining_quantity: 110,
    supplier: 'Supplier H',
  },
  {
    key: '9',
    medication_name: 'Medication 9',
    mfg_date: '2023-09-01',
    expire_date: '2024-09-01',
    quantity: 80,
    remaining_quantity: 65,
    supplier: 'Supplier I',
  },
  {
    key: '10',
    medication_name: 'Medication 10',
    mfg_date: '2023-10-01',
    expire_date: '2024-10-01',
    quantity: 140,
    remaining_quantity: 120,
    supplier: 'Supplier J',
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
    href: "#",
    title: "Inventory List",
  },
];

// InventoryList component
const InventoryList = () => {
  const [medications, setMedications] = useState<Medication[]>(initialMedications);

  const handleDestroy = (key: string) => {
    Modal.confirm({
      title: 'Are you sure you want to destroy this record?',
      onOk: () => {
        setMedications(prevMedications => prevMedications.filter(med => med.key !== key));
      },
    });
  };

  const columns = [
    {
      title: 'Medicine Name',
      dataIndex: 'medication_name',
      key: 'medicine_name',
    },
    {
      title: 'Mfg Date',
      dataIndex: 'mfg_date',
      key: 'mfg_date',
    },
    {
      title: 'Expire Date',
      dataIndex: 'expire_date',
      key: 'expire_date',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Remaining Quantity',
      dataIndex: 'remaining_quantity',
      key: 'remaining_quantity',
    },
    {
      title: 'Supplier',
      dataIndex: 'supplier',
      key: 'supplier',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: Medication) => {
        const  isExpired = moment(record.expire_date).isBefore(moment(), 'day');
        return isExpired ?  <Button type="link"  onClick={() => handleDestroy(record.key)} icon={<BiTrashAlt color="white" fontSize="18px"/>}/> : ''
      },
    },
  ];

  const rowClassName = (record: Medication) => {
    const isExpired = moment(record.expire_date).isBefore(moment(), 'day');
    const isLessInAmount = record.remaining_quantity > 100;
    return isExpired ? 'expired-row' : isLessInAmount ? 'less-amount' : '';
  };

  return (
    <SidebarLayout role={Roles.RECEPTION}>
      <PageHeader items={HeaderItems} titleContent="Inventory List" />
      <div className="bg-white p-5 ml-5 mr-10 shadow-lg">
      <div className="flex items-center mt-5 space-x-4">
          <div className="w-4 h-4 bg-red-500"></div>
          <span className="text-red-500 font-semibold">Expired Medicine</span>
          <div className="w-4 h-4 bg-yellow-200"></div>
          <span className="text-yellow-500 font-semibold">Low Quantity Medicine</span>
        </div>
        <Table
          columns={columns}
          dataSource={medications}
          rowClassName={rowClassName}
        />
      </div>
    </SidebarLayout>
  );
};

export default InventoryList;
