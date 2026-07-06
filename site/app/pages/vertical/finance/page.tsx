import { LegacyPage } from "../../../../components/LegacyPage";
import { pagesVerticalFinance } from "../../../../data/legacy-pages";

export default function PagesVerticalFinancePage() {
  return <LegacyPage bodyClass={pagesVerticalFinance.bodyClass} html={pagesVerticalFinance.html} />;
}
