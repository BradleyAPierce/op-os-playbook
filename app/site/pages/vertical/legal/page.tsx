import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesVerticalLegal } from "@/data/site/legacy-pages";

export default function PagesVerticalLegalPage() {
  return <LegacyPage bodyClass={pagesVerticalLegal.bodyClass} html={pagesVerticalLegal.html} />;
}
