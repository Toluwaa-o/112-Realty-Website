import Banner from "../components/Banner";
import FormSection from "../components/Main/FormSection";
import ContactUsParagraph from "./ContactUsParagraph";

export const metadata = {
  title: "Contact Us - 112 Realty",
};

export default function page() {
  return (
    <>
      <Banner>Contact us</Banner>
      <ContactUsParagraph />
      <FormSection />
    </>
  );
}
