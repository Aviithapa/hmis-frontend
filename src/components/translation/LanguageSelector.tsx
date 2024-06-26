"use clients";
import { useLocale } from "@/provider/LocalProvider";
import { Avatar, Button, Dropdown, Menu, Space, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const LanguageSelector = () => {
  const { changeLanguage, language } = useLocale();

  const items = [
    {
      key: "1",
      label: (
        <Text strong>
          <Button type="link" onClick={() => changeLanguage("np")}>
            <span
              role="img"
              aria-label="Nepal Flag"
              style={{ fontSize: "50px" }}
            >
              🇳🇵
            </span>{" "}
          </Button>
        </Text>
      ),
    },
    {
      key: "2",
      label: (
        <Text strong>
          <Button type="link" onClick={() => changeLanguage("en")}>
            <span role="img" aria-label="UK Flag" style={{ fontSize: "50px" }}>
              🇬🇧
            </span>{" "}
          </Button>
        </Text>
      ),
    },
  ];

  const contentStyle = {
    backgroundColor: "#FFFFFF", // Replace with your token.colorBgElevated
    borderRadius: "8px", // Replace with your token.borderRadiusLG
    boxShadow:
      "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)", // Replace with your token.boxShadowSecondary
    padding: "8px",
  };

  const menuStyle = {
    boxShadow: "none",
    fontWeight: 600,
    fontSize: "14px",
    justifyContent: "space-between",
  };

  const renderMenu = (menu: React.ReactElement) => {
    return (
      <div style={contentStyle}>
        {React.cloneElement(menu, { style: menuStyle })}
      </div>
    );
  };

  return (
    <Dropdown
      overlay={
        <Menu>
          {items.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      }
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
            {language === "en" ? (
              <span style={{ fontSize: "50px" }}> 🇬🇧</span>
            ) : (
              <span style={{ fontSize: "50px" }}>🇳🇵</span>
            )}
          </Avatar>
        </Space>
      </Typography.Text>
    </Dropdown>
  );
};

export default LanguageSelector;
