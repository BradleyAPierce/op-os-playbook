import { LegacyPage } from "@/components/site/LegacyPage";
import { pagesOtherSolutionAssessmentQuestions } from "@/data/site/legacy-pages";

export default function PagesOtherSolutionAssessmentQuestionsPage() {
  return <LegacyPage bodyClass={pagesOtherSolutionAssessmentQuestions.bodyClass} html={pagesOtherSolutionAssessmentQuestions.html} />;
}
