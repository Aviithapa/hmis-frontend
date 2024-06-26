import React from "react";
import type { Metadata } from "next";
import SidebarProvider from "@/provider/SidebarProvider";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";

export const metadata: Metadata = {
  title: "Dashboard Admin",
  description: "HMIS: Add more details later.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ConfigProvider>
        <SidebarProvider>
          <main className="p-8 min-h-[calc(100vh-90px)] overflow-hidden overflow-y-auto">
            {children}
          </main>
        </SidebarProvider>
      </ConfigProvider>
    </>
  );
}
