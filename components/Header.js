import Lottie from "react-lottie";
import animationData from "../public/lottie/explore-anime.json";

export default function Header() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    <>

      <div className="relative flex flex-wrap-reverse  h-[65rem] md:relative md:flex md:h-[60rem] 2xl:relative 2xl:flex 2xl:h-[42rem]">
        <div className="flex flex-col items-start p-8 md:flex md:flex-col md:w-1/2 md:items-start md:text-left">
          <div className="relative top-[-8rem] md:relative md:left-[10.3rem] md:top-[-5rem] 2xl:top-[3rem]">
            <h2 className="font-sans font-medium text-[2.75rem] text-[#373F41] md:font-sans md:font-normal md:h-[9rem] md:w-[46.25rem] md:text-[3.75rem] md:text-[#373F41] md:leading-[4.5rem]">
              GDSC Explore
              <h3 className="font-sans font-normal text-[1.5rem] text-[#373F41] md:font-sans md:font-normal md:h-[9rem] md:w-[46.25rem] md:text-[2rem] md:text-[#373F41]">
                Explore the Developers from the North-East
              </h3>
              <img src="/clock.svg" alt="" className="relative top-[2rem] md:relative md:top-[-4.5rem]" />
              <span className="relative text-[20px] top-[-1.75rem] left-[3rem] text-[#000000]/[0.68] md:relative md:text-[25px] md:top-[-8.75rem] md:left-[3rem] md:text-[#000000]/[0.68] 2xl:relative 2xl:text-[25px] 2xl:top-[-8.75rem] 2xl:left-[3rem] 2xl:text-[#000000]/[0.68]">4th, 5th and 6th February, 2022</span>
            </h2>
          </div>
          <div className="relative top-[-8rem] md:relative md:left-[10.3rem] md:top-[-2rem] 2xl:top-[6rem]">
            <p className="font-sans font-normal h-[5.25rem] text-base text-[#737B7D] md:font-sans md:font-normal md:h-[5.25rem] md:w-[40.4375rem] md:text-xl md:text-[#737B7D]">
            GDSC Explore is the  largest developers' fest in the North Eastern India, brought to you by GDSC AEC, GDSC NIT Silchar, GDSC IIIT Guwahati, GDSC NIT Agartala. 
            It will provide a platform for developers to engage and learn by participating in various activities and workshops earning badges and certificates along the way.
            </p>
          </div>
          <button className="relative self-center top-[2rem] w-[8.6rem] h-[3rem] bg-[#3C64B1] rounded font-sans text-lg text-white cursor-pointer hover:shadow-xl md:relative md:left-[10.3rem] md:top-[6rem] md:bg-[#3C64B1] md:rounded md:font-sans md:text-lg md:text-white md:cursor-pointer md:self-start 2xl:top-[13rem]">
            Register Now
          </button>
          <a href="#" className="self-center md:self-auto"><button className="relative top-[3rem] w-[14.5rem] h-[3rem] border-2 border-[#1B4996] text-lg text-[#1B4996] rounded cursor-pointer md:left-[21rem] 2xl:top-[10rem] 2xl:left-[21rem]">
            Download Brochure
          </button></a>
        </div>


        <div className="2xl:flex 2xl:w-1/2 2xl:justify-center w-[100%]">
          <div className="relative top-[2rem] h-[20rem] w-[90%] md:relative md:top-[3rem] md:h-[20rem] md:w-[90%] 2xl:relative 2xl:top-[4.0625rem] 2xl:h-[32.75rem] 2xl:w-[90%]">
            <div className="w-full h-full flex justify-center items-center">
              <Lottie options={defaultOptions} />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
