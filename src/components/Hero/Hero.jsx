import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: "images/tv.jpg" },
    { url: "images/fjall.jpg" },
    { url: "images/jewelry.jpg" },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  return (
    <section>
      <div className="max-w-[1600px] h-[840px] w-full m-auto py-12 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {currentIndex === 0 && (
          <p className="absolute text-[20px] md:text-[40px] lg:text-[60px] text-white bottom-[20%] right-[10%]">
            ANYTHING THAT YOU WANT
          </p>
        )}

        {currentIndex === 1 && (
          <p className="absolute text-[20px] md:text-[40px] lg:text-[60px] text-darkBlue top-[20%] left-[10%]">
            ALL IN ONE PLACE
          </p>
        )}

        {currentIndex === 2 && (
          <p className="absolute text-[20px] md:text-[40px] lg:text-[60px] text-orange bottom-[10%] left-[20%]">
            CHOOSE WHAT YOU LIKE
          </p>
        )}

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-orange cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-orange cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              onClick={() => goToSlide(idx)}
              className="text-xl cursor-pointer text-darkBlue active:text-orange"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
