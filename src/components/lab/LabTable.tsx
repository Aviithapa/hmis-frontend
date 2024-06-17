import React from "react";
import { Table, Input } from "antd";

interface DataType {
  key: number;
  name: string;
  unit: string;
  reference: string;
  finding: string;
}

interface LabTestTableProps {
  formData: DataType[];
  handleInputChange: (index: number, key: string, value: string) => void;
}

const LabTestTable: React.FC<LabTestTableProps> = ({
  formData,
  handleInputChange,
}) => {
  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "sn",
    },
    {
      title: "Test Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Finding",
      dataIndex: "finding",
      key: "finding",
      render: (text: string, record: DataType, index: number) => (
        <Input
          placeholder="Enter finding"
          value={formData[index].finding}
          onChange={(e) => handleInputChange(index, "finding", e.target.value)}
        />
      ),
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Reference",
      dataIndex: "reference",
      key: "reference",
    },
  ];

  return (
    <Table
      dataSource={formData}
      columns={columns}
      pagination={false}
      rowKey="key"
    />
  );
};

export default LabTestTable;
