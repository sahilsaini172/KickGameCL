import PrimaryButton from "../components/PrimaryButton";

const sectionSix = [
  {
    url: "/s61.png",
    title: "timberland",
  },
  {
    url: "/s62.png",
    title: "samuel bailey",
  },
  {
    url: "/s63.png",
    title: "kick game",
  },
];

export default function SectionSix() {
  return (
    <section className="flex flex-col bg-surface p-4 md:p-8 lg:p-12">
      <h2 className="uppercase text-xl font-bold tracking-wide mb-4">
        spotlight
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 grid-rows-3 gap-4">
        {sectionSix.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <img
              src={item.url}
              alt=""
              className="aspect-video rounded-md object-cover"
            />
            <h3 className="uppercase text-lg font-bold tracking-wide">
              {item.title}
            </h3>
            <PrimaryButton
              label="shop the collection"
              className={"border w-fit"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
