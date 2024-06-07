// components/PageLayout.tsx

import React from "react";
import { Layout } from "antd";
import { theme } from "antd";
import DropdownMenu from "./layout/DropdownMenu";

const { Header, Content } = Layout;

type Props = {
  children: React.ReactNode;
};

const PageLayout: React.FC<Props> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          top: 0,
          paddingRight: "25px",
          paddingLeft: "25px",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div style={{ right: 0, textAlign: "right" }}>
          <DropdownMenu />
        </div>
      </Header>
      <Content style={{ minHeight: "100vh", padding: "24px" }}>
        {children}
      </Content>
    </Layout>
  );
};

export default PageLayout;
