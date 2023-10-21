const ListData = [
  "Assisting in formulating an effective exit strategy to achieve your desired returns.",
  "Offering impartial, comprehensive guidance tailored to your preferences on the most suitable location, property type, and rationale for purchase.",
  "Ensuring a profitable return on your investments within a 6-month timeframe.",
  "Creating a diversified portfolio to generate a stable passive income",
];

export default function List() {
  return (
    <ul className="list-disc px-4 font-light text-base md:text-[1.1rem] tracking-normal">
      {ListData.map((data) => (
        <li key={data}>
          <p>{data}</p>
        </li>
      ))}
    </ul>
  );
}
