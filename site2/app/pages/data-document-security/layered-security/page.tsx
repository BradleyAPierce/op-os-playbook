import { LegacyPage } from "../../../../components/LegacyPage";
import { layeredSecurity } from "../../../../data/legacy-pages";

export default function LayeredSecurityPage() {
  return <LegacyPage bodyClass={layeredSecurity.bodyClass} html={layeredSecurity.html} />;
}
