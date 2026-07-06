import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesVerticalPublicSector } from "@/data/site/legacy-pages";

export default function PagesVerticalPublicSectorPage() {
  return <LegacyPage bodyClass={pagesVerticalPublicSector.bodyClass} html={pagesVerticalPublicSector.html} />;
}
