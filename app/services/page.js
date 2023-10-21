import Banner from "../components/Banner";
import Services from "../components/Main/Features/Services";
import FormSection from "../components/Main/FormSection";
import FAQ from "../resources/FAQ/FAQ";
import ServicesParagraph from "./ServicesParagraph";

export const metadata = {
  title: "Services - 112 Realty",
};

export default function page() {
  return (
    <>
      <Banner>Services</Banner>
      <ServicesParagraph />
      <Services />
      <FAQ />
      <FormSection />
    </>
  );
}
