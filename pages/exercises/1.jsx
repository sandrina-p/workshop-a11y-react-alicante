import { LayoutExercise } from "../../components/pageLayouts/LayoutExercise.jsx";
import Page from "../../exercises/1.jsx";

export default Page;

Page.getLayout = function getLayout(page) {
  return <LayoutExercise title="Routing">{page}</LayoutExercise>;
};
