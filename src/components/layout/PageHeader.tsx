import { LeftCircleOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Space } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface BreadcrumbItem {
  name: string;
  link: string;
}

interface Props {
  items: BreadcrumbItemType[];
  titleContent: string;
  buttonLabel?: string;
  buttonCb?: () => void;
  icon?: ReactNode;
  secondButtonLabel?: string;
  secondButtonCb?: () => void;
  secondButtonIcon?: ReactNode;
  buttonRoleConstraint?: boolean;
  role?: string;
  goBack?: boolean;
  buttonLeaveLabel?: string;
  buttonLeaveCb?: () => void;
  buttonLeaveIcon?: ReactNode;
}

const PageHeader = ({
  buttonLabel,
  titleContent,
  buttonCb,
  icon,
  secondButtonCb,
  secondButtonIcon,
  secondButtonLabel,
  goBack,
  buttonLeaveCb,
  buttonLeaveLabel,
  buttonLeaveIcon,
  items,
}: Props) => {
  const getButton = () => (
    <Button
      type="primary"
      className="bg-primary-bg text-white shadow-none"
      icon={icon || ""}
      onClick={() => buttonCb && buttonCb()}
    >
      {buttonLabel}
    </Button>
  );

  return (
    <div className="bg-gray p-5 pb-2">
      <Breadcrumb items={items}></Breadcrumb>
      <div className="flex justify-between items-center">
        <h2 className="text-xl">
          {goBack && (
            <LeftCircleOutlined className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          )}{" "}
          {titleContent}
        </h2>
        <Space>
          {buttonLabel && getButton()}
          {secondButtonLabel && (
            <Button
              className="bg-primary-bg text-white shadow-none"
              icon={secondButtonIcon || ""}
              onClick={() => secondButtonCb && secondButtonCb()}
            >
              {secondButtonLabel}
            </Button>
          )}
          {buttonLeaveLabel && (
            <Button
              className="bg-primary-bg text-white shadow-none"
              icon={buttonLeaveIcon || ""}
              type="primary"
              onClick={() => buttonLeaveCb && buttonLeaveCb()}
            >
              {buttonLeaveLabel}
            </Button>
          )}
        </Space>
      </div>
    </div>
  );
};

export default PageHeader;
