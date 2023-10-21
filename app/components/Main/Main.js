import ComfortableProperty from "./ComfortableProperty";
import Features from "./Features/Features";
import Services from "./Features/Services";
import FormSection from "./FormSection";
import ManagingInvestment from "./Managing Investment/ManagingInvestment";
import SlideShowSection from "./SlideShowSection";
import WhoAreWe from "./WhoAreWe";

export default function Main() {
  return (
    <>
      <SlideShowSection />
      <ComfortableProperty />
      <ManagingInvestment />
      <Features />
      <WhoAreWe />
      <Services />
      <FormSection />
    </>
  );
}
