import { sectiontwo } from "../data/sectiontwo";
export default function SectionTwo() {
  return (
    <section className="flex bg-surface gap-0.5 overflow-x-scroll lg:justify-between ">
      {sectiontwo.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-4 text-xs text-center p-4 shrink-0 w-28 lg:w-40"
          >
            <img src={"/" + item.url} alt="" className="object-contain" />
            <p className="line-clamp-4 w-full">{item.title.toUpperCase()}</p>
          </div>
        );
      })}
    </section>
  );
}
