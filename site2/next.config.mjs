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
  basePath: isGithubPages ? "/op-os-playbook/site2" : "",
  assetPrefix: isGithubPages ? "/op-os-playbook/site2/" : ""
};

export default nextConfig;
