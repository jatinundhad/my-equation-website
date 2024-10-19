import React from 'react';
import TypingEffect from './TypingEffect';
import Waves from './Waves';
import EnrollNowButton from './EnrollNowButton';

const Hero = () => {
  return (
    <>
      <div className="hero text-3xl mx-32 h-screen max-h-[708px] flex justify-between px-16">
        <section className="mt-20 text-[1.7em] font-semibold leading-[70px]">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <span className="whitespace-nowrap mr-4">Find Your Own</span>
            <span className="whitespace-nowrap">
              <img
                src="images/sigma.svg"
                className="inline-block w-14 align-baseline"
                alt="sigma"
              />
              quation
            </span>
            <br />
            <span className="whitespace-nowrap">
              for <TypingEffect />
            </span>
          </p>

          <p className="mt-8 text-[30px]">
            <span className="mr-2">Boost your career with our courses</span>
            <img src="images/rocket.gif" className="inline-block h-[75px]" alt="rocket" />
          </p>

          <div className="leading-[25px]">
            <p className="mt-2 text-[20px]">
              Platform for Vocational Training with 5x Better Experience!
            </p>
            <p className="mt-2 text-[15px] text-gray-600">
              Expanding the learning horizon for CORE branches of Engineering
            </p>
          </div>

          <EnrollNowButton />
        </section>
        <section className="hero-img h-full max-h-[450px] mt-8">
          <dotlottie-player
            src="https://lottie.host/7a86c80e-8f2b-419c-948f-f0c4d43c4776/xXUZTECrHj.json"
            background="transparent"
            speed="1"
            style={{ width: '450px', height: '450px' }}
            loop
            autoplay
          ></dotlottie-player>
        </section>
      </div>
      <Waves />
    </>
  );
};

export default Hero;
