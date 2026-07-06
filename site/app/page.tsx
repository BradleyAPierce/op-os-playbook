import { LegacyPage } from "../components/LegacyPage";
import { pagesIndex } from "../data/legacy-pages";

export default function SiteHome() {
  return <LegacyPage bodyClass={pagesIndex.bodyClass} html={pagesIndex.html} />;
}
