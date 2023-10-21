import FAQList from "./FAQList";

export default function FAQ() {
  return (
    <div className="text-myBlue p-4 grid gap-6 mb-[3em]">
      <h3 className="text-2xl uppercase">Frequently asked questions</h3>
      <FAQList />
    </div>
  );
}
