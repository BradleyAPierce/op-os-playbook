import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesOtherGlossaryOfTerms } from "@/data/site/legacy-pages";

export default function PagesOtherGlossaryOfTermsPage() {
  return <LegacyPage bodyClass={pagesOtherGlossaryOfTerms.bodyClass} html={pagesOtherGlossaryOfTerms.html} />;
}
