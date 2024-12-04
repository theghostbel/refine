import type { Metadata } from "next";
import React, { Suspense } from "react";
import { RefineContext } from "./_refine_context";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Refine",
  description: "Generated by create refine app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");

  return (
    <html lang="en">
      <body>
        <Suspense>
          <AntdRegistry>
            <RefineContext defaultMode={theme?.value}>{children}</RefineContext>
          </AntdRegistry>
        </Suspense>
      </body>
    </html>
  );
}
