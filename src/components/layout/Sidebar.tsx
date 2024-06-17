"use client";
import { Image, Layout, Menu, Popover, Slider } from "antd";
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
      label: ni.title,
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
    <Layout className="bg-green-400 to-white-100 opacity-75">
      <Sider className="bg-green-400 to-white-100 opacity-75">
        <Image
          src="/img/logo.svg"
          width="150px"
          height="60px"
          alt="HMIS"
          className="ml-3"
          preview={false}
        />
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["2"]}
          items={items(router, navItems)}
          style={{
            flex: 1,
            minWidth: 0,
            color: "black !important",
            justifyContent: "center",
            marginTop: "10px",
          }}
        />
      </Sider>
      <Layout className="bg-green-100">
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "flex-end",
            position: "sticky",
          }}
        >
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
    </Layout>
  );
};

export default SidebarLayout;
