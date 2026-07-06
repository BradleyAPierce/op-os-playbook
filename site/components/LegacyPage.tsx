import { BodyClass } from "./BodyClass";
import { footerHtml, headerHtml, navHtml } from "../data/legacy-components";
import { migratedRoutes } from "../data/legacy-routes";

type LegacyPageProps = {
  bodyClass: string;
  html: string;
};

const siteBase = process.env.GITHUB_PAGES === "true" ? "/op-os-playbook/site" : "";
const legacyArchiveBase =
  process.env.GITHUB_PAGES === "true"
    ? "/op-os-playbook/archive/site-legacy-static"
    : "/archive/site-legacy-static";

function rewriteHtml(html: string) {
  return html
    .replaceAll('href="./"', `href="${siteBase}/pages/index/"`)
    .replaceAll('href="assets/', `href="${siteBase}/assets/`)
    .replaceAll('src="assets/', `src="${siteBase}/assets/`)
    .replace(/href="pages\/([^"]+?\.html)"/g, (_match, route: string) => {
      const legacyRoute = `pages/${route}`;
      const migratedRoute = migratedRoutes[legacyRoute];

      if (migratedRoute) {
        return `href="${siteBase}${migratedRoute}"`;
      }

      return `href="${legacyArchiveBase}/${legacyRoute}"`;
    });
}

export function LegacyPage({ bodyClass, html }: LegacyPageProps) {
  return (
    <>
      <BodyClass className={bodyClass} />
      <div dangerouslySetInnerHTML={{ __html: rewriteHtml(headerHtml) }} />
      <div dangerouslySetInnerHTML={{ __html: rewriteHtml(navHtml) }} />
      <div dangerouslySetInnerHTML={{ __html: rewriteHtml(html) }} />
      <div dangerouslySetInnerHTML={{ __html: rewriteHtml(footerHtml) }} />
    </>
  );
}
