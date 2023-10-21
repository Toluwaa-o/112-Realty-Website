import Paragraph from "./Components/About Paragraph/Paragraph";
import Grid from "./Components/Grid";
import FormSection from "../components/Main/FormSection";
import Banner from "../components/Banner";

export const metadata = {
  title: "About - 112 Realty",
};

export default function page() {
  return (
    <>
      <Banner>About us</Banner>
      <Paragraph />
      <Grid />
      <FormSection />
    </>
  );
}
