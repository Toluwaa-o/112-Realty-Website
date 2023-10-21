import { listDataIV } from "@/utils/data";
import ListItemUnordered from "./ListItemUnordered";

export default function FAQList() {
  return (
    <ul className="grid gap-6">
      {listDataIV.map((dataa) => (
        <ListItemUnordered key={dataa.heading} {...dataa} />
      ))}
    </ul>
  );
}
