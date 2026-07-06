const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: {
    root: process.cwd()
  },
  images: {
    unoptimized: true
  },
  basePath: isGithubPages ? "/op-os-playbook/ls" : "",
  assetPrefix: isGithubPages ? "/op-os-playbook/ls/" : ""
};

export default nextConfig;
