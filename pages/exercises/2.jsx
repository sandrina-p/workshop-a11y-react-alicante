import { LayoutExercise } from "../../components/pageLayouts/LayoutExercise.jsx";
import Page from "../../exercises/2.jsx";

export default Page;

Page.getLayout = function getLayout(page) {
  return <LayoutExercise title="Toggleable interfaces">{page}</LayoutExercise>;
};
