import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesVerticalFinance } from "@/data/site/legacy-pages";

export default function PagesVerticalFinancePage() {
  return <LegacyPage bodyClass={pagesVerticalFinance.bodyClass} html={pagesVerticalFinance.html} />;
}
