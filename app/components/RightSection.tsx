"use client";
import { useState } from "react";
import { buttons } from "../data";
import { CurrentPage } from "../types";
import AboutPage from "./NavPages/AboutPage";
import ResumePage from "./NavPages/Resume";
import PortfolioPage from "./NavPages/PortfolioPage";
import ContactPage from "./NavPages/ContactPage";

export default function RightSection() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(
    CurrentPage.about,
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePageChange = (page: CurrentPage) => {
    if (page === currentPage) return;
    setIsAnimating(true);
    setCurrentPage(page);
    setTimeout(() => setIsAnimating(false), 200);
  };

  return (
    <div className="w-full relative p-4 md:p-5 lg:p-8 border-[0.2px] border-white/10 rounded-3xl bg-[#1e1e1f]">
      <div className="block lg:hidden fixed w-full bottom-0 left-0 z-50">
        <div
          className="flex rounded-t-xl poppins-light border-white/20 backdrop-blur-[15px] bg-[rgba(43,43,44,0.75)] border text-xs md:text-lg justify-between items-center px-10 sm:px-20 py-5"
        >
          {buttons.map((buttonval, index) => (
            <button
              className={`${buttonval === currentPage && "text-yellow-200"} select-none transition-none`}
              key={index}
              onClick={() => handlePageChange(buttonval)}
            >
              {buttonval}
            </button>
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="absolute w-lg text-lg flex justify-around top-0 right-0 border-[0.2px] border-white/10 bg-[#282829] rounded-tr-3xl *:hover:text-yellow-200 *:cursor-pointer *:transition-none rounded-bl-3xl px-8 py-4">
          {buttons.map((buttonval, index) => (
            <button
              className={`${buttonval === currentPage && "text-yellow-200"} select-none transition-none`}
              key={index}
              onClick={() => handlePageChange(buttonval)}
            >
              {buttonval}
            </button>
          ))}
        </div>
      </div>
      <div className={`lg:pb-0 pb-10 ${isAnimating ? "content-fade-in" : ""}`}>
        {currentPage === CurrentPage.about && <AboutPage />}
        {currentPage === CurrentPage.resume && <ResumePage />}
        {currentPage === CurrentPage.portfolio && <PortfolioPage />}
        {currentPage === CurrentPage.contact && <ContactPage />}
      </div>
    </div>
  );
}
