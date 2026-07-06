import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesSupportCloudVisitorManagement } from "@/data/site/legacy-pages";

export default function PagesSupportCloudVisitorManagementPage() {
  return <LegacyPage bodyClass={pagesSupportCloudVisitorManagement.bodyClass} html={pagesSupportCloudVisitorManagement.html} />;
}
