"use client";
import { Button, Image, Layout, Menu, Popover } from "antd";
import React, { createElement, useState } from "react";
import urls from "@/config/urls";
import { Roles } from "@/utils/enums";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { Header } from "antd/es/layout/layout";
import DropdownMenu from "./DropdownMenu";
import TranslationText from "../translation/TranslationText";
import LanguageSelector from "../translation/LanguageSelector";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;

type Props = {
  role: string | null | undefined;
  children: React.ReactNode;
};

type routeItemProp = {
  title: string;
  path?: string;
  icon?: any;
  key?: string;
  children?: routeItemProp[];
  color?: string;
};

type MenuItem = Required<MenuProps>["items"][number];

const itemMenu = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `Dashboard ${index + 1}`,
}));

const items: (
  router: any,
  navItems: routeItemProp[],
  isChild?: boolean
) => MenuItem[] = (router, navItems, isChild = false) =>
  navItems.map((ni) => {
    const key = ni.title;
    const hasChildren = !!ni?.children;
    const iconElement = ni.icon
      ? createElement(ni.icon, {
          style: { width: 25, fontSize: 22 },
        })
      : null;

    const iconWithPopover =
      !hasChildren && iconElement ? (
        <Popover content={ni.title}>{iconElement}</Popover>
      ) : (
        iconElement
      );
    return {
      label: <TranslationText namespace="general:menu" text={ni.title} />,
      ...(ni.path && { onClick: () => ni.path && router.push(ni.path) }),
      icon: iconWithPopover,
      key,
      className: `text-black`,
      ...(hasChildren && {
        children: ni.children && items(router, ni?.children, true),
      }),
    };
  });

const SidebarLayout: React.FC<Props> = ({ role, children }) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const navItems: routeItemProp[] = role
    ? [
        ...(urls?.commonNavItems || []).filter(
          (item) => item.title !== "Holiday"
        ),
        ...(role === Roles.ADMIN || role === Roles.SUPERADMIN
          ? urls.adminNavitems
          : role === Roles.RECEPTION
          ? urls.receptionNavItems
          : urls.employeeNavitems),
        ...(urls?.commonNavItems?.filter((item) => item.title === "Holiday") ||
          []),
      ]
    : [];

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          height: "75px", // Ensure header appears above other content
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
            marginLeft: "-50px",
          }}
        />
        <div className="pr-10">
          <DropdownMenu />
          <LanguageSelector />
        </div>
      </Header>
      <Sider
        style={{ position: "fixed", height: "100vh", background: "white" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div style={{ marginBottom: "-10px", background: "white" }}>
          <Image
            src="/img/logo.svg"
            width="150px"
            height="60px"
            alt="HMIS"
            className="ml-3"
            preview={false}
          />
        </div>
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["2"]}
          items={items(router, navItems)}
          style={{
            flex: 1,
            minWidth: 0,
            color: "white !important",
            justifyContent: "center",
            marginTop: "10px",
            paddingTop: "40px",
          }}
        />
      </Sider>

      <Content
        style={{
          minHeight: `calc(100vh - 50px)`,
          marginTop: "50px",
          marginLeft: collapsed ? "70px" : "200px",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default SidebarLayout;
