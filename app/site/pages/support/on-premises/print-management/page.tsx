import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesSupportOnPremisesPrintManagement } from "@/data/site/legacy-pages";

export default function PagesSupportOnPremisesPrintManagementPage() {
  return <LegacyPage bodyClass={pagesSupportOnPremisesPrintManagement.bodyClass} html={pagesSupportOnPremisesPrintManagement.html} />;
}
