import { ChevronLeft, ChevronRight } from "lucide-react";
import IconButton from "../components/IconButton";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import { useEffect, useState } from "react";

const images = ["/hero1.png", "/hero2.png"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // auto change every 3s
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);
  return (
    <section className="flex flex-col mt-12">
      <div className="w-full relative h-130">
        <img
          src={images[index]}
          alt=""
          className="h-full object-center w-full z-10 object-cover"
        />
        <div className="flex absolute flex-col z-10 bottom-0 gap-2 p-4 w-full">
          <h1 className="font-bold text-3xl text-surface">SAUCONY</h1>
          <div className="flex flex-col gap-2 md:flex-row md:justify-between w-full">
            <div className="flex flex-col gap-2 md:flex-row">
              <PrimaryButton label={"shop saucony"} />
              <SecondaryButton label="shop all sneakers" />
            </div>
            <div className="flex items-center justify-center gap-4">
              <IconButton>
                <ChevronLeft size={16} onClick={prev} />
              </IconButton>
              <div className="flex items-center gap-1">
                <span
                  className={`h-0.5 w-10 ${
                    index == 0 ? "bg-white" : "bg-black"
                  }`}
                />
                <span
                  className={`h-0.5 w-10 ${
                    index != 0 ? "bg-white" : "bg-black"
                  } `}
                />
              </div>
              <IconButton>
                <ChevronRight size={16} onClick={next} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
