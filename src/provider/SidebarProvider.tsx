"use client";

import SidebarLayout from "@/components/layout/Sidebar";
import { Roles } from "@/utils/enums";

function SidebarProvider({ children }: { children: React.ReactNode }) {
  return <SidebarLayout role={Roles.RECEPTION}>{children}</SidebarLayout>;
}

export default SidebarProvider;
