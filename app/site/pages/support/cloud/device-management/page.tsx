import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesSupportCloudDeviceManagement } from "@/data/site/legacy-pages";

export default function PagesSupportCloudDeviceManagementPage() {
  return <LegacyPage bodyClass={pagesSupportCloudDeviceManagement.bodyClass} html={pagesSupportCloudDeviceManagement.html} />;
}
