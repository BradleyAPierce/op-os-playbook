import { BodyClass } from "./BodyClass";
import { footerHtml, headerHtml, navHtml } from "../data/legacy-components";

type LegacyPageProps = {
  bodyClass: string;
  html: string;
};

const site2Base = process.env.GITHUB_PAGES === "true" ? "/op-os-playbook/site2" : "";
const siteBase = process.env.GITHUB_PAGES === "true" ? "/op-os-playbook/site" : "/site";

const pilotRoutes: Record<string, string> = {
  "pages/index.html": "/pages/index/",
  "pages/core/cloud/device-management.html": "/pages/core/cloud/device-management/",
  "pages/data-document-security/layered-security.html":
    "/pages/data-document-security/layered-security/"
};

function rewriteHtml(html: string) {
  return html
    .replaceAll('href="./"', `href="${site2Base}/pages/index/"`)
    .replaceAll('href="assets/', `href="${site2Base}/assets/`)
    .replaceAll('src="assets/', `src="${site2Base}/assets/`)
    .replace(/href="pages\/([^"]+?\.html)"/g, (_match, route: string) => {
      const legacyRoute = `pages/${route}`;
      const pilotRoute = pilotRoutes[legacyRoute];

      if (pilotRoute) {
        return `href="${site2Base}${pilotRoute}"`;
      }

      return `href="${siteBase}/${legacyRoute}"`;
    });
}

export function LegacyPage({ bodyClass, html }: LegacyPageProps) {
  return (
    <>
      <BodyClass className={bodyClass} />
      <div className="site2-pilot-banner">
        Next.js static pilot. Non-converted nav links open the legacy /site microsite.
      </div>
      <div dangerouslySetInnerHTML={{ __html: rewriteHtml(headerHtml) }} />
      <div dangerouslySetInnerHTML={{ __html: rewriteHtml(navHtml) }} />
      <div dangerouslySetInnerHTML={{ __html: rewriteHtml(html) }} />
      <div dangerouslySetInnerHTML={{ __html: rewriteHtml(footerHtml) }} />
    </>
  );
}
