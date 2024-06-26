import { getInitials } from "@/utils/helper";
import { DownOutlined, ManOutlined, PoweroffOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps, Space, theme, Typography } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const { useToken } = theme;

const items: MenuProps["items"] = [
  {
    key: "2",
    label: (
      <Link href="/auth/login">
        <PoweroffOutlined /> Logout
      </Link>
    ),
  },
];

const DropdownMenu = () => {
  const { token } = useToken();

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
    padding: "8px",
  };

  const menuStyle = {
    boxShadow: "none",
    fontWeight: "600",
    fontSize: "14px",
    justifyContent: "space-between",
  };

  const [name, setName] = useState<string | undefined>();

  useEffect(() => {
    setName(getInitials());
  }, []);

  const renderMenu = (menu: React.ReactElement) => {
    return (
      <div style={contentStyle}>
        {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
      </div>
    );
  };
  return (
    <Dropdown
      menu={{ items }}
      overlayStyle={{ padding: "10px" }}
      dropdownRender={(menu) => renderMenu(menu as React.ReactElement)}
    >
      <Typography.Text>
        <Space>
          <Avatar
            size="large"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#000000",
              fontWeight: "600",
              fontSize: "18px",
              marginLeft: "10px",
            }}
          >
            {name}
          </Avatar>
        </Space>
      </Typography.Text>
    </Dropdown>
  );
};

export default DropdownMenu;
