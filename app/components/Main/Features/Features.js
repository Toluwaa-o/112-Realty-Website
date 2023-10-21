import { listData } from "@/utils/data";
import ListedData from "../../ListedData";

export default function Features() {
  return (
    <div className="p-4 text-center md:p-6 md:mb-[20vh]">
      <ul className="flex flex-col justify-center items-center gap-[8vh] md:grid md:grid-cols-4">
        {listData.map((data) => (
          <ListedData key={data.pic} {...data} />
        ))}
      </ul>
    </div>
  );
}
