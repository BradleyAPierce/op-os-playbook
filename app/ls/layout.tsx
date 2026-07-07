import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../../ls.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Layered Security Certification",
  description:
    "A static certification splash page for the Layered Security initiative."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101820"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className="ls-site">{children}</div>;
}
