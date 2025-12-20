import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function Accordian({
  title = "title",
  className = "border-t border-t-secondary/75",
  array,
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col overflow-hidden h-fit lg:w-fit shrink-0">
      <div
        className={`${className} flex items-center z-10 bg-primary overflow-hidden py-4 justify-between  cursor-pointer`}
        onClick={() => setOpen(!open)}
      >
        <p className="uppercase text-sm font-semibold">{title}</p>
        {open ? <Minus size={20} /> : <Plus size={20} />}
      </div>
      <div
        className={`flex overflow-hidden z-9 flex-col duration-200 ease-in text-sm text-secondary font-thin *:py-3 ${
          open ? "translate-y-0" : "-translate-y-full h-0"
        }`}
      >
        {array.map((item, idx) => {
          return <span key={idx}>{item}</span>;
        })}
      </div>
    </div>
  );
}
