import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesIndex } from "@/data/site/legacy-pages";

export default function PagesIndexPage() {
  return <LegacyPage bodyClass={pagesIndex.bodyClass} html={pagesIndex.html} />;
}
