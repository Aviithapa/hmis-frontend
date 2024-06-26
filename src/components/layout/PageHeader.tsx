"use client";
import { LeftCircleOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Space } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { redirect, useRouter } from "next/navigation";
import React, { ReactNode } from "react";
interface Props {
  items: BreadcrumbItemType[];
  titleContent: string;
  buttonLabel?: string;
  buttonCb?: () => void;
  icon?: ReactNode;
  buttonRoleConstraint?: boolean;
  role?: string;
  goBack?: boolean;
  link?: string;
}

const PageHeader = ({
  buttonLabel,
  titleContent,
  buttonCb,
  icon,
  goBack,
  items,
  link,
}: Props) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (link) router.push(link);
    else buttonCb && buttonCb();
  };
  const getButton = () => (
    <Button
      type="primary"
      className="text-white shadow-none  bg-green-300 hover:bg-green-200  hover:text-green-300 "
      icon={icon || ""}
      onClick={handleButtonClick}
      style={{ borderRadius: "0px", marginTop: "-10px", paddingTop: "-10px" }}
    >
      {buttonLabel}
    </Button>
  );

  return (
    <div className="bg-gray">
      <Breadcrumb items={items}></Breadcrumb>
      <div className="flex justify-between items-center">
        <h2 className="text-xl">
          {goBack && (
            <LeftCircleOutlined className="text-gray-500 hover:text-green-700 cursor-pointer" />
          )}
          {titleContent}
        </h2>
        <Space style={{ marginTop: "-20px" }}>
          {buttonLabel && getButton()}
        </Space>
      </div>
    </div>
  );
};

export default PageHeader;
