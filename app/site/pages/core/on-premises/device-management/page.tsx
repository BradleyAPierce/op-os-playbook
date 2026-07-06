import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesCoreOnPremisesDeviceManagement } from "@/data/site/legacy-pages";

export default function PagesCoreOnPremisesDeviceManagementPage() {
  return <LegacyPage bodyClass={pagesCoreOnPremisesDeviceManagement.bodyClass} html={pagesCoreOnPremisesDeviceManagement.html} />;
}
