import Banner from "../components/Banner";
import FormSection from "../components/Main/FormSection";
import Features from "../components/Main/Features/Features";
import StepList from "./Steps/StepList";
import FAQ from "./FAQ/FAQ";

export const metadata = {
  title: "Resources - 112 Realty",
};

export default function page() {
  return (
    <>
      <Banner>Resources</Banner>
      <div className="text-myBlue p-4 grid gap-6 mb-[3em]">
        <h3 className="text-2xl uppercase">
          Navigating the Real Estate Transaction Journey
        </h3>
        <StepList />
      </div>
      <Features />
      <FAQ />
      <FormSection />
    </>
  );
}
