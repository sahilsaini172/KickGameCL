import { Diamond, Sparkles, UsersRound, Workflow } from "lucide-react";

const sectionFour = [
  {
    icon: <Diamond size={20} />,
    title: "authentic & rare",
    description: "Genuine, exclusive sneakers",
  },
  {
    icon: <Sparkles size={20} />,
    title: "Luxury Focus",
    description: "Premium fashion-meets-culture",
  },
  {
    icon: <Workflow size={20} />,
    title: "Omnichannel",
    description: "Online + retail presence",
  },
  {
    icon: <UsersRound size={20} />,
    title: "Community-First",
    description: "Content & cultural events",
  },
];

export default function SectionFour() {
  return (
    <section className="flex flex-col bg-surface">
      <div className="grid grid-cols-2 grid-rows-2 border lg:grid-cols-4 lg:grid-rows-1 border-primary">
        {sectionFour.map((item, idx) => (
          <div className="flex flex-col gap-1 p-4 border-secondary/15 bg-primary odd:border-r nth-3:border-t nth-4:border-t lg:even:border-x lg:odd:border-0 lg:nth-4:border-t-0">
            {item.icon}
            <h2 className="uppercase text-sm font-medium mt-1">{item.title}</h2>
            <p className="text-sm text-secondary font-extralight">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
