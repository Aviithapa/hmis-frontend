"use client";
import { Layout, Menu } from "antd";
import React, { createElement, useState } from "react";
import urls from "@/config/urls";
import { Roles } from "@/utils/enums";

import type { MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";

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
};

type MenuItem = Required<MenuProps>["items"][number];

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
      className: `${className} ${
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
    <Layout hasSider style={{ display: "flex" }}>
      <Sider
        className="sider"
        width={246}
        breakpoint="md"
        trigger={null}
        collapsible
        collapsed={collapsed}
        onBreakpoint={(broken) => setCollapsed(true)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          background: "#1976D2",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            marginBottom: "10px",
            placeItems: "center",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
            color: "white",
            height: "60px",
          }}
        >
          {collapsed ? (
            <span
              style={{
                fontSize: "16px",
                fontWeight: "600",
                fontStyle: "italic",
                color: "white",
              }}
            >
              HMIS
            </span>
          ) : (
            <span
              style={{ fontSize: "16px", fontWeight: "600", color: "white" }}
            >
              {" "}
              HMIS
            </span>
          )}
        </div>
        <Menu
          mode="inline"
          style={{ background: "#1976D2" }}
          defaultSelectedKeys={["1"]}
          selectedKeys={navItems
            .filter((it) => it.path === pathName)
            .map((it) => it.title)}
          items={items(router, navItems)}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={
          collapsed
            ? { marginLeft: 80, transition: "margin 0.2s" }
            : { marginLeft: 246, transition: "margin 0.2s" }
        }
      >
        <Content style={{ minHeight: "100vh" }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default SidebarLayout;
