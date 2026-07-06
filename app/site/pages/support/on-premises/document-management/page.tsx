import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesSupportOnPremisesDocumentManagement } from "@/data/site/legacy-pages";

export default function PagesSupportOnPremisesDocumentManagementPage() {
  return <LegacyPage bodyClass={pagesSupportOnPremisesDocumentManagement.bodyClass} html={pagesSupportOnPremisesDocumentManagement.html} />;
}
