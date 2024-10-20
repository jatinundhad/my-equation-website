import React from 'react';
import { Carousel, IconButton } from '@material-tailwind/react';
import WorkshopCard from './WorkshopCard';
import { useEffect, useState } from 'react';
import WorkshopCardMobile from './WorkshopCardMobile';

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function Workshops() {
  const [paused, setPaused] = useState(false);
  const [showArrowNavigation, setShowArrowNavigation] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 750) {
      setShowArrowNavigation(false);
    } else {
      setShowArrowNavigation(true);
    }
  }, [windowWidth]);

  const handleMouseEnter = () => {
    setPaused(true);
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  return (
    <section className=" h-full ">
      <div className="bg-[url('/src/assets/curve-bg.svg')]  bg-no-repeat bg-contain py-[60px]">
        {' '}
        {/* Background color applied */}
        <Carousel
          transition={{ duration: 1 }}
          className="rounded-xl w-[100%] sm:w-[85%] mx-auto"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#4e46e5"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#4e46e5"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-0 flex -translate-x-2/4 gap-2">
              {new Array(length).fill('').map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? 'w-8 bg-primary-default' : 'w-4 bg-neutral-light'
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          autoplay={!paused}
          interval={3000}
          loop={true}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {showArrowNavigation ? <WorkshopCard /> : <WorkshopCardMobile />}
          {showArrowNavigation ? <WorkshopCard /> : <WorkshopCardMobile />}
          {showArrowNavigation ? <WorkshopCard /> : <WorkshopCardMobile />}
        </Carousel>
      </div>
    </section>
  );
}

export default Workshops;
