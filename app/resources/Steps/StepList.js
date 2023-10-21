import ListItem from "./ListItem";
import { listDataIII } from "@/utils/data";

export default function StepList() {
  return (
    <ol className="list-decimal grid gap-6">
      {listDataIII.map((dataa) => (
        <ListItem key={dataa.heading} {...dataa} />
      ))}
    </ol>
  );
}
