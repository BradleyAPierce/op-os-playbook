import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./site.css";

const assetBase = process.env.GITHUB_PAGES === "true" ? "/op-os-playbook/site" : "";

export const metadata: Metadata = {
  title: "MKM Solutions",
  description: "MKM Solutions microsite."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

const stylesheets = [
  "/assets/css/vendor/bootstrap.min.css",
  "/assets/css/vendor/plugin.css",
  "/assets/css/vendor/utilities.css",
  "/assets/css/vendor/vendor.css",
  "/assets/css/vendor/style.css",
  "/assets/css/core/wordpress-extracted.css",
  "/assets/css/core/banner-fix.css"
];

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={`${assetBase}${href}`} />
        ))}
        <link rel="icon" type="image/svg+xml" href={`${assetBase}/assets/images/logos/logo.svg`} />
      </head>
      <body>
        {children}
        <script src={`${assetBase}/assets/js/vendor/jquery.min.js`}></script>
        <script src={`${assetBase}/assets/js/vendor/bootstrap.min.js`}></script>
        <script src={`${assetBase}/assets/js/vendor/plugin.js`}></script>
        <script src={`${assetBase}/assets/js/vendor/vendor.js`}></script>
      </body>
    </html>
  );
}
