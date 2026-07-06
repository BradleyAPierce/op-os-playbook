import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesVerticalHealthcare } from "@/data/site/legacy-pages";

export default function PagesVerticalHealthcarePage() {
  return <LegacyPage bodyClass={pagesVerticalHealthcare.bodyClass} html={pagesVerticalHealthcare.html} />;
}
