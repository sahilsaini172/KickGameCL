import {
  ArrowRight,
  FacebookIcon,
  IndentIcon,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import Accordian from "../components/Accordian";
import { useState } from "react";

const information = [
  "Videos",
  "Reviews",
  "Authenticity",
  "Discount Codes",
  "Gift Cards",
];

const topCollection = [
  "Air Jordan 4",
  "ASICS",
  "Cleens",
  "Fear of God Essentials",
  "Nike",
  "Reprimo",
  "Saucony",
];

const customerService = [
  "My Account",
  "Create a Return",
  "Track Your Order",
  "FAQs",
  "Contact Us",
  "Refund Policy",
  "Privacy Policy",
  "Shipping Policy",
  "Terms of Service",
];

export default function Footer({ screenWidth }) {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Email submitted:", email);
  }
  return (
    <section className="flex relative flex-col lg:flex-row lg:gap-12 p-4 md:p-8 lg:p-12 bg-primary">
      <div className="flex flex-col lg:w-1/2">
        <h2 className="uppercase text-xl font-bold tracking-wide mb-4 lg:text-3xl">
          GET 10% OFF YOUR FIRST ORDER WHEN SIGNING UP TO OUR NEWSLETTER
        </h2>
        <div className="outline-secondary/50 outline rounded-md text-black  p-3 flex  items-center focus:outline-black group w-full justify-between max-w-150">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="outline-0 placeholder:text-secondary/50 flex-1 bg-transparent"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            <ArrowRight
              size={20}
              className="text-secondary/50 hover:text-secondary transition-colors"
            />
          </button>
        </div>
        <div className="flex items-center py-6 gap-4 *:cursor-pointer">
          <FacebookIcon />
          <Instagram />
          <Twitter />
          <Youtube />
          <Linkedin />
          <Mail />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-4 xl:gap-8">
        {screenWidth < 1023 ? (
          <>
            <Accordian array={information} title="information" />
            <Accordian array={topCollection} title="Top collections" />
            <Accordian
              array={customerService}
              title="customer service"
              className="border-y border-y-secondary/75"
            />
          </>
        ) : (
          <>
            <div className="flex flex-col">
              <div
                className={`flex z-10 bg-primary overflow-hidden pb-4 justify-between  cursor-pointer`}
              >
                <p className="uppercase text-sm font-semibold">information</p>
              </div>
              <div
                className={`flex overflow-hidden z-9 flex-col duration-200 ease-in text-sm text-secondary font-thin *:py-3 ${
                  open ? "translate-y-0" : "-translate-y-full h-0"
                }`}
              >
                {information.map((item, idx) => {
                  return <span key={idx}>{item}</span>;
                })}
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className={`flex z-10 bg-primary overflow-hidden pb-4 justify-between  cursor-pointer`}
              >
                <p className="uppercase text-sm font-semibold">
                  top collection
                </p>
              </div>
              <div
                className={`flex overflow-hidden z-9 flex-col duration-200 ease-in text-sm text-secondary font-thin *:py-3 ${
                  open ? "translate-y-0" : "-translate-y-full h-0"
                }`}
              >
                {topCollection.map((item, idx) => {
                  return <span key={idx}>{item}</span>;
                })}
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className={`flex z-10 bg-primary overflow-hidden pb-4 justify-between  cursor-pointer`}
              >
                <p className="uppercase text-sm font-semibold">
                  customer services
                </p>
              </div>
              <div
                className={`flex overflow-hidden z-9 flex-col duration-200 ease-in text-sm text-secondary font-thin *:py-3 ${
                  open ? "translate-y-0" : "-translate-y-full h-0"
                }`}
              >
                {customerService.map((item, idx) => {
                  return <span key={idx}>{item}</span>;
                })}
              </div>
            </div>
          </>
        )}
      </div>
      <p className="text-xs py-4 text-secondary lg:absolute lg:bottom-4 lg:left-12">
        Kick Game Limited | Company No. 08761997 VAT No. GB179081090
      </p>
    </section>
  );
}
