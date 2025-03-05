"use client";
import React from "react";
import "@ant-design/v5-patch-for-react-19";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Albert_Sans } from "next/font/google";
import "@/styles/globals.scss";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const AlbertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <html lang="es" className={AlbertSans.className}>
      <body>
        <QueryClientProvider client={queryClient}>
          <AntdRegistry>
            <ConfigProvider theme={{ hashed: false }}>
              {children}
            </ConfigProvider>
          </AntdRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
