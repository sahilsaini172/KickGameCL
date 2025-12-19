import { ArrowRight, Plus } from "lucide-react";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

const sectionThree = [
  {
    url: "/s511.png",
    hoverUrl: "/s512.png",
    title: "SB Star Tee",
    noOfSize: 4,
    onSale: true,
    prize: 30.0,
    prevPrize: 40.0,
  },
  {
    url: "/s521.png",
    hoverUrl: "/s522.png",
    title: "Signature Sweater",
    noOfSize: 5,
    onSale: false,
    prize: 75.0,
  },
  {
    url: "/s531.png",
    hoverUrl: "/s532.png",
    title: "Double Knee SB Jorts",
    noOfSize: 4,
    onSale: true,
    prize: 30.0,
    prevPrize: 60.0,
  },
];

export default function SectionFive() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="flex flex-col bg-surface p-4">
      <h2 className="uppercase text-xl font-bold tracking-wide mb-4">
        just dropped
      </h2>

      <div className="flex gap-2 overflow-x-auto sm:grid sm:grid-cols-3 sm:grid-rows-1 sm:gap-2">
        {sectionThree.map((item, idx) => {
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={idx}
              className="relative flex flex-col gap-1 shrink-0 w-45 sm:w-auto"
            >
              {item.onSale && (
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-sm uppercase font-medium text-sm bg-red-600 text-white">
                  sale
                </span>
              )}

              <img
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                src={isHovered ? item.hoverUrl : item.url}
                alt={item.title}
                className="rounded-sm aspect-square w-full object-cover"
              />

              <img src="/brands/samuel-bailey.png" alt="" className="w-15" />
              <h2 className="font-semibold">{item.title}</h2>
              <p className="py-1 text-sm">Available in {item.noOfSize} sizes</p>

              <div className="flex items-end justify-between">
                <p className="text-xs text-secondary">
                  From{" "}
                  {item.onSale ? (
                    <span className="text-red-600 font-bold">
                      £{item.prize}{" "}
                      <span className="line-through text-secondary/25 font-normal ml-1">
                        £{item.prevPrize}
                      </span>
                    </span>
                  ) : (
                    <span className="text-black font-bold">£{item.prize}</span>
                  )}
                </p>

                <button className="size-7 rounded-full bg-black text-white flex items-center justify-center">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <PrimaryButton
        varient="black"
        className="gap-2 mt-4 hover:bg-black/70"
        label="shop collection"
      >
        <ArrowRight size={20} />
      </PrimaryButton>
    </section>
  );
}
