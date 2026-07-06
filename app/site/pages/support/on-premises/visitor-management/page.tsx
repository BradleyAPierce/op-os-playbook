import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesSupportOnPremisesVisitorManagement } from "@/data/site/legacy-pages";

export default function PagesSupportOnPremisesVisitorManagementPage() {
  return <LegacyPage bodyClass={pagesSupportOnPremisesVisitorManagement.bodyClass} html={pagesSupportOnPremisesVisitorManagement.html} />;
}
