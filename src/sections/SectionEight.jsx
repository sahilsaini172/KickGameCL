import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "../components/ReviewCard";
import { useEffect,  useState } from "react";

const sectionEight = [
  {
    title: "Great",
    user: "anton lee",
    verified: true,
    review: "Nice products",
    days: 3,
    stars: 4,
  },
  {
    title: "Great",
    user: "John Doe",
    verified: true,
    review: "Great product and delivery",
    days: 1,
    stars: 5,
  },
  {
    title: "Prompt Delivery",
    user: "Sahil Saini",
    verified: true,
    review: "Prompt Delivery",
    days: 2,
    stars: 4,
  },
  {
    title: "Very quick",
    user: "Mani",
    review: "Fast delivery",
    days: 5,
    stars: 3,
  },
  {
    title: "Great",
    user: "anton lee",
    verified: true,
    review: "Nice products",
    days: 3,
  },
];

export default function SectionEight({ screenWidth }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemPerView, setItemPerView] = useState(1);
  const maxIndex = Math.max(0, sectionEight.length - itemPerView);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        // Use window.innerWidth, not screenSize
        setItemPerView(3);
      } else {
        setItemPerView(1); // Add else case
      }
    };

    window.addEventListener("resize", handleResize);
  });

  function handlePrev() {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => Math.max(currentIndex, prev + 1));
  }

  return (
    <section
      className="flex flex-col bg-primary px-4 py-12 gap-4"
      aria-label="Reviews"
    >
      <h2 className="uppercase text-2xl text-center font-bold tracking-wide mb-4">
        Recognized by culture makers
      </h2>
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="overflow-hidden mx-8">
          <div
            className="flex md:gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemPerView)}%)`,
            }}
          >
            {sectionEight.map((item, idx) => (
              <div
                key={idx}
                className="shrink-0"
                style={{ width: `${100 / itemPerView}%` }}
              >
                <ReviewCard
                  title={item.title}
                  user={item.user}
                  verified={item.verified}
                  review={item.review}
                  days={item.days}
                  stars={item.stars}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10  disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
