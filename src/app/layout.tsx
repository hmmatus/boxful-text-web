import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Albert_Sans } from "next/font/google";
import React from "react";
import "@/styles/globals.scss";
import { ConfigProvider } from "antd";
const AlbertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={AlbertSans.className}>
      <body>
        <AntdRegistry>
          <ConfigProvider theme={{ hashed: false }}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
