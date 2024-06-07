"use client";
import Image from "next/image";
import { redirect, usePathname, useRouter } from "next/navigation";

import { useEffect } from "react";

export default function Home() {
  const router = usePathname();
  useEffect(() => {
    // Redirect to auth/login if the URL is "/"
    if (router === "/") {
      redirect("/auth/login");
    }
  }, [router]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
