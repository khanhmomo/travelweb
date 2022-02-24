import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
const header = () => {
  return (
    <div className=" h-screen w-full">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/img01.png)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10">
              <div className="h-screen flex flex-col justify-center items-left space-y-6 ml-10">
                <p className="text-7xl text-white"> When packing is</p>
                <p className="text-7xl text-white"> no longer a</p>
                <p className="text-7xl text-white"> problem</p>
                <div className=" grid grid-cols-5">
                  <div className="bg-white rounded-3xl col-span-2">
                    <div className="mb-5 space-y-4 flex flex-col items-center">
                      <p className="text-2xl font-bold mt-4"> Welcome to (the website name)</p>
                      <p className="text-lg"> First-time user</p>
                      <button className=" bg-cyan-500 hover:bg-yellow-500 w-36 text-white font-bold py-2 px-4 rounded-full">
                        Sign up
                      </button>
                      <p className="text-lg"> Already a user</p>
                      <button className=" bg-cyan-500 hover:bg-yellow-500 w-36 text-white font-bold py-2 px-4 rounded-full">
                        Log in
                      </button>
                      <p className="text-lg"> One time user</p>
                      <button className="bg-cyan-500 hover:bg-yellow-500 w-36 text-white font-bold py-2 px-4 rounded-full">
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};
export default header;
