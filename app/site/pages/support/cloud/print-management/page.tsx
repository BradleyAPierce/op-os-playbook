import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesSupportCloudPrintManagement } from "@/data/site/legacy-pages";

export default function PagesSupportCloudPrintManagementPage() {
  return <LegacyPage bodyClass={pagesSupportCloudPrintManagement.bodyClass} html={pagesSupportCloudPrintManagement.html} />;
}
