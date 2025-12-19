import { ArrowRight, Plus, Star } from "lucide-react";
import PrimaryButton from "../components/PrimaryButton";
import {  useState } from "react";

const sectionSeven = [
  {
    url: "/s711.png",
    hoverUrl: "/s712.png",
    title: `Fear of God Essentials Sweat Short 'Light Oatmeal' SS22`,
    noOfSize: 1,
    onSale: true,
    prize: 69.99,
    prevPrize: 79.99,
  },
  {
    url: "/s721.png",
    hoverUrl: "/s722.png",
    title: `Fear of God Essentials Sweatpants 'Stretch Limo' (SS22)`,
    noOfSize: 5,
    starts: 5,
    onSale: false,
    prize: 129.99,
  },
  {
    url: "/s731.png",
    hoverUrl: "/s732.png",
    title: `Fear of God Essentials Sweatpants 'Dark Oatmeal' (SS22)`,
    noOfSize: 4,
    onSale: true,
    prize: 129.99,
  },
  {
    url: "/s711.png",
    hoverUrl: "/s712.png",
    title: `Fear of God Essentials Sweat Short 'Light Oatmeal' SS22`,
    noOfSize: 1,
    onSale: true,
    prize: 69.99,
    prevPrize: 79.99,
  },
  {
    url: "/s721.png",
    hoverUrl: "/s722.png",
    title: `Fear of God Essentials Sweatpants 'Stretch Limo' (SS22)`,
    noOfSize: 5,
    starts: 5,
    onSale: false,
    prize: 129.99,
  },
  {
    url: "/s731.png",
    hoverUrl: "/s732.png",
    title: `Fear of God Essentials Sweatpants 'Dark Oatmeal' (SS22)`,
    noOfSize: 4,
    onSale: true,
    prize: 129.99,
  },
  {
    url: "/s721.png",
    hoverUrl: "/s722.png",
    title: `Fear of God Essentials Sweatpants 'Stretch Limo' (SS22)`,
    noOfSize: 5,
    starts: 5,
    onSale: false,
    prize: 129.99,
  },
  {
    url: "/s731.png",
    hoverUrl: "/s732.png",
    title: `Fear of God Essentials Sweatpants 'Dark Oatmeal' (SS22)`,
    noOfSize: 4,
    onSale: true,
    prize: 129.99,
  },
];

export default function SectionSeven({ screenWidth }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="flex flex-col bg-surface p-4 md:p-8 lg:p-12">
      <div className="justify-between flex items-center h-fit md:py-2">
        <h2 className="uppercase text-xl font-bold tracking-wide">
          hot right now
        </h2>
        {screenWidth > 776 && (
          <PrimaryButton
            varient="black"
            className="gap-2 mt-4 hover:bg-black/70"
            label="shop collection"
          >
            <ArrowRight size={20} />
          </PrimaryButton>
        )}
      </div>

      <div className="flex gap-2 overflow-x-auto sm:grid sm:grid-cols-3 sm:grid-rows-1 sm:gap-2 md:grid md:grid-cols-4 md:grid-rows-1 md:gap-2 lg:grid lg:grid-cols-5 lg:grid-rows-1 lg:gap-2">
        {sectionSeven.map((item, idx) => {
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

              <img src="/brands/essentials.png" alt="" className="w-15" />
              <h2 className="font-semibold line-clamp-2">{item.title}</h2>
              <div className="flex flex-col justify-between grow">
                <p className="py-1 text-sm">
                  Available in {item.noOfSize} sizes
                </p>
                <span className="h-4.5 flex gap-0.5">
                  {Array.from({ length: item.starts || 0 }).map((_, i) => (
                    <Star key={i} size={16} />
                  ))}
                </span>

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
                      <span className="text-black font-bold">
                        £{item.prize}
                      </span>
                    )}
                  </p>

                  <button className="size-7 rounded-full bg-black text-white flex items-center justify-center">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {screenWidth < 776 && (
        <PrimaryButton
          varient="black"
          className="gap-2 mt-4 hover:bg-black/70"
          label="shop collection"
        >
          <ArrowRight size={20} />
        </PrimaryButton>
      )}
    </section>
  );
}
