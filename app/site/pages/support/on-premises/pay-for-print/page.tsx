import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesSupportOnPremisesPayForPrint } from "@/data/site/legacy-pages";

export default function PagesSupportOnPremisesPayForPrintPage() {
  return <LegacyPage bodyClass={pagesSupportOnPremisesPayForPrint.bodyClass} html={pagesSupportOnPremisesPayForPrint.html} />;
}
