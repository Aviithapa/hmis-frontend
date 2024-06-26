"use client";
import { Image, Layout, Menu, Popover } from "antd";
import React, { createElement } from "react";
import urls from "@/config/urls";
import { Roles } from "@/utils/enums";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { Header } from "antd/es/layout/layout";
import DropdownMenu from "./DropdownMenu";
import TranslationText from "../translation/TranslationText";
import LanguageSelector from "../translation/LanguageSelector";

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
      <Sider className="bg-green-400 opacity-75" style={{ position: "fixed" }}>
        <div className="bg-green-400" style={{ marginBottom: "-10px" }}>
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
            color: "black !important",
            justifyContent: "center",
            marginTop: "10px",
            paddingTop: "40px",
          }}
        />
      </Sider>
      <Layout className="bg-green-100" style={{ marginLeft: 200 }}>
        <Header
          style={{
            position: "fixed",
            width: "90%",
            zIndex: 1000,
            display: "flex",
            justifyContent: "flex-end",
            height: "75px", // Ensure header appears above other content
          }}
        >
          <div className="pr-10">
            <DropdownMenu />
            <LanguageSelector />
          </div>
        </Header>

        <Content style={{ minHeight: `calc(100vh - 50px)`, marginTop: "50px" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SidebarLayout;
