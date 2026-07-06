import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesSupportOnPremisesDeviceManagement } from "@/data/site/legacy-pages";

export default function PagesSupportOnPremisesDeviceManagementPage() {
  return <LegacyPage bodyClass={pagesSupportOnPremisesDeviceManagement.bodyClass} html={pagesSupportOnPremisesDeviceManagement.html} />;
}
