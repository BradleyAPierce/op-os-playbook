import { LegacyPage } from "../../../components/LegacyPage";
import { pagesIndex } from "../../../data/legacy-pages";

export default function PagesIndexPage() {
  return <LegacyPage bodyClass={pagesIndex.bodyClass} html={pagesIndex.html} />;
}
