import { LegacyPage } from "../../../../../components/LegacyPage";
import { deviceManagement } from "../../../../../data/legacy-pages";

export default function DeviceManagementPage() {
  return <LegacyPage bodyClass={deviceManagement.bodyClass} html={deviceManagement.html} />;
}
