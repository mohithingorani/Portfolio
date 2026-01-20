"use client";
import { useState } from "react";
import { buttons } from "../data";
import { CurrentPage } from "../types";
import AboutPage from "./NavPages/AboutPage";
import ResumePage from "./NavPages/Resume";
import PortfolioPage from "./NavPages/PortfolioPage";
import ContactPage from "./NavPages/ContactPage";

export default function RightSection() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.about);

  return (
    <div className="w-full  overflow-x-hidden relative p-4 md:p-5 lg:p-8 border-[0.2px] border-white/10 rounded-3xl bg-[#1e1e1f] ">
      <div className="hidden lg:block">
      <div className="absolute text-sm flex gap-8 top-0 right-0 border-[0.2px] border-white/10 bg-[#282829] rounded-tr-3xl *:hover:text-yellow-400 *:cursor-pointer rounded-bl-3xl px-8 py-4 ">
        {buttons.map((buttonval, index) => {
          return (
            <button
              className={`${buttonval === currentPage && "text-yellow-400"} select-none`}
              key={index}
              onClick={() => setCurrentPage(buttonval)}
            >
              {buttonval}
            </button>
          );
        })}
      </div>
      </div>
      {currentPage === CurrentPage.about && <AboutPage />}
      {currentPage === CurrentPage.resume && <ResumePage />}
      {currentPage === CurrentPage.portfolio && <PortfolioPage />}
      {currentPage === CurrentPage.contact && <ContactPage />}
    </div>
  );
}
