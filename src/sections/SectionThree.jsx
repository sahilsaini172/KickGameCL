import { ArrowRight } from "lucide-react";
import SecondaryButton from "../components/SecondaryButton";

const sectionThree = [
  {
    url: "/s31.png",
  },
  {
    url: "/s32.png",
  },
  {
    url: "/s33.png",
  },
  {
    url: "/s34.png",
  },
];

export default function SectionThree() {
  return (
    <section className="flex flex-col bg-surface p-4">
      <h2 className="uppercase text-xl font-bold tracking-wide mb-4">
        greatest brands
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 md:grid-rows-1 md:grid-cols-4 xl:flex">
        {sectionThree.map((item, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg aspect-square md:aspect-2/3 xl:aspect-auto xl:w-130 xl:h-130 xl:hover:w-2/5"
          >
            <img
              src={item.url}
              alt="Brand"
              className=" inset-0 xl:size-140 object-center h-full w-full object-cover"
            />

            <SecondaryButton
              label="shop now"
              className="text-xs w-fit z-10 absolute bottom-0 left-0 m-2 gap-2"
            >
              <ArrowRight size={16} />
            </SecondaryButton>
          </div>
        ))}
      </div>
    </section>
  );
}
