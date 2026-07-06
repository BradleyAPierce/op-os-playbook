import { BodyClass } from "./BodyClass";
import { footerHtml, headerHtml, navHtml } from "../data/legacy-components";
import { migratedRoutes } from "../data/legacy-routes";

type LegacyPageProps = {
  bodyClass: string;
  html: string;
};

const site2Base = process.env.GITHUB_PAGES === "true" ? "/op-os-playbook/site2" : "";
const siteBase = process.env.GITHUB_PAGES === "true" ? "/op-os-playbook/site" : "/site";

function rewriteHtml(html: string) {
  return html
    .replaceAll('href="./"', `href="${site2Base}/pages/index/"`)
    .replaceAll('href="assets/', `href="${site2Base}/assets/`)
    .replaceAll('src="assets/', `src="${site2Base}/assets/`)
    .replace(/href="pages\/([^"]+?\.html)"/g, (_match, route: string) => {
      const legacyRoute = `pages/${route}`;
      const migratedRoute = migratedRoutes[legacyRoute];

      if (migratedRoute) {
        return `href="${site2Base}${migratedRoute}"`;
      }

      return `href="${siteBase}/${legacyRoute}"`;
    });
}

export function LegacyPage({ bodyClass, html }: LegacyPageProps) {
  return (
    <>
      <BodyClass className={bodyClass} />
      <div className="site2-pilot-banner">
        Next.js static migration preview. Legacy visuals are preserved for parity.
      </div>
      <div dangerouslySetInnerHTML={{ __html: rewriteHtml(headerHtml) }} />
      <div dangerouslySetInnerHTML={{ __html: rewriteHtml(navHtml) }} />
      <div dangerouslySetInnerHTML={{ __html: rewriteHtml(html) }} />
      <div dangerouslySetInnerHTML={{ __html: rewriteHtml(footerHtml) }} />
    </>
  );
}
