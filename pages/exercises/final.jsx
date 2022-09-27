import { LayoutExercise } from "../../components/pageLayouts/LayoutExercise.jsx";
import Page from "../../exercises/final.jsx";

export default Page;

Page.getLayout = function getLayout(page) {
  return <LayoutExercise title="All together now">{page}</LayoutExercise>;
};
