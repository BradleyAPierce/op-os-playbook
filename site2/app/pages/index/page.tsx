import { LegacyPage } from "../../../components/LegacyPage";
import { portfolioIndex } from "../../../data/legacy-pages";

export default function PortfolioIndexPage() {
  return <LegacyPage bodyClass={portfolioIndex.bodyClass} html={portfolioIndex.html} />;
}
