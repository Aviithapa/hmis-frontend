"use client";
import { Image, Layout, Menu } from "antd";
import React, { Children, createElement, useState } from "react";
import urls from "@/config/urls";
import { Roles } from "@/utils/enums";

import type { MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { Header } from "antd/es/layout/layout";
import DropdownMenu from "./DropdownMenu";

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
    const isSelected = ni.path === router.pathname;
    const hasChildren = !!ni?.children;
    const className = isChild ? "navbar-child-item" : "navbar-parent-item";
    return {
      label: ni.title,
      ...(ni.path && { onClick: () => ni.path && router.push(ni.path) }),
      icon:
        ni.icon &&
        createElement(ni.icon, {
          style: { width: 25, fontSize: 18 },
        }),
      key,
      // eslint-disable-next-line no-nested-ternary
      className: `${className} text-black${
        isSelected
          ? isChild
            ? "navbar-item-selected-child"
            : "navbar-item-selected"
          : ""
      }`,
      ...(hasChildren && {
        children: ni.children && items(router, ni?.children, true),
      }),
    };
  });

const SidebarLayout: React.FC<Props> = ({ role, children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter();

  const navItems: routeItemProp[] = role
    ? [
        ...(urls?.commonNavItems || []).filter(
          (item) => item.title !== "Holiday"
        ), // filter out Holiday item
        ...(role === Roles.ADMIN || role === Roles.SUPERADMIN
          ? urls.adminNavitems
          : role === Roles.RECEPTION
          ? urls.receptionNavItems
          : urls.employeeNavitems),
        ...(urls?.commonNavItems?.filter((item) => item.title === "Holiday") ||
          []),
      ]
    : [];

  const pathName = usePathname();

  return (
    <Layout className="bg-gradient-to-t from-green-400 to-white-100 opacity-75">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#e0ece4 !important",
          justifyItems: "center",
          position: "sticky",
        }}
      >
        <Image
          src="img/logo.svg"
          width="150px"
          height="50px"
          alt="HMIS"
          preview={false}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items(router, navItems)}
          style={{
            flex: 1,
            minWidth: 0,
            color: "black !important",
            background: "#e0ece4 !important",
            justifyContent: "center",
          }}
        />
        <div className="sticky top-0 flex items-center justify-between p-0 h-14 px-6">
          <div />
          <div className="text-right">
            <span className="mr-5 text-lg font-semibold"></span>
            <DropdownMenu />
          </div>
        </div>
      </Header>

      <Content style={{ minHeight: "100vh" }}>{children}</Content>
    </Layout>
  );
};

export default SidebarLayout;
