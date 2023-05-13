import React, { useState } from "react";
import Image from "next/image";
import img from "../../../../images/cite-logo.png";
import { FiChevronDown } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import { BsArrowLeft } from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import History from "../../../../components/Davolash/history.jsx";

function Davolash() {
  const [showHistory, setShowHistory] = useState(false);

  const handleDavohistoryBtn = () => {
    setShowHistory(true);
  };
  const handleExit = () => {
    window.location.pathname = "";
  };

  return (
  {
    showHistory ? (
      <History />
    ) : (
      <div className="h-[100vh]  bg-[#F7FEFE]">
        <div className="w-[1035px] mx-auto">
          {/* head */}
          <div className="flex h-[60px] pt-9 justify-between">
            <div className="flex">
              <Image src={img} width={50} height={50} />
              <p className="text-black font-[500]">
                Vita in <span className="text-[#57D0CF]">line</span>
              </p>
            </div>
            <div className="flex">
              <div className="flex w-[111px] h-[36px] items-center relative justify-between border border-[#D7E6E7] px-2 rounded-[12px]">
                <CiGlobe className="text-[#1BB7B5] text-xl" />
                <select
                  name=""
                  id=""
                  style={{ WebkitAppearance: "none" }}
                  className="outline-none  bg-[#F5FAFB] px-2 absolute ml-7 pr-10  bg-transparent font-[500] "
                >
                  <option value="uz">UZ</option>
                  <option value="ru">RU</option>
                </select>
                <FiChevronDown className="text-xl" />
              </div>
              <button
                onClick={handleExit}
                className="w-[200px] ml-[18px] flex py-[5px]  px-[18px]items-center h-[36px] text-[#FF0000] border rounded-[12px] border-[#D7E6E7]"
              >
                <RxExit className="mx-2 my-auto" /> Akkuntdan chiqish
              </button>
            </div>
          </div>

          {/* body  */}
          <div className="bg-white border border-[#D7E6E7] rounded-[24px] mt-6">
            <div className="flex justify-between mt-7 mb-3">
              <div className="flex items-center">
                <button className="flex items-center ml-[40px] py-1 bg-[#F8FCFC] border rounded-[12px] w-[188px] font-[500]">
                  <BsArrowLeft className="mx-3" /> Orqaga qaytish
                </button>
                <h3 className="text-[24px] ml-[18px] text-[#1B3B3C]">
                  Davolash
                </h3>
              </div>
              <div className="mr-10 flex items-center">
                <button
                  className="px-[30px] bg-[#F8FCFC] py-2 rounded-[12px] flex items-center 
          "
                  onClick={handleDavohistoryBtn}
                >
                  <RxCounterClockwiseClock className="mr-[13px]" /> Tarix
                </button>
                <button className="bg-[#1BB7B5] py-2 rounded-[12px] ml-5 flex items-center text-white px-[30px] ">
                  <AiOutlinePlus className="font-[500] mr-4" /> Yangi qo’shish
                </button>
              </div>
            </div>
            <div className=" text-center  mx-10">
              <h2 className="davolash-line w-[875px] mx-10">Bugun</h2>
            </div>

            <div className="flex mx-10 mt-5 mb-20">
              <div className="border rounded-[12px] p-3 flex  flex-col w-[305px] ">
                <div className="flex items-center mb-2">
                  <div className="bg-[url('../images/davolash/davolash-dori.png')] bg-no-repeat w-8 h-8"></div>
                  <p className="text-[#1B3B3C]  ml-2 font-[500]">
                    Parasetomol 500 mg
                  </p>
                  <AiOutlineExclamationCircle className="rotate-180 text-[#1BB7B5] text-[18px] ml-3" />
                </div>
                <div className="flex items-center rounded-[8px] mb-3 px-2 h-[42px] justify-between  bg-[#E8FCEB] text-[12px]">
                  <p className="bg-[url('../images/davolash/correct.png')] bg-no-repeat w-3 h-2 text-[#0CBB26]"></p>
                  <BsClock className="text-[#1BB7B5] ml-2" />
                  <del>8:00</del>
                  <del className="text-[#86BC8E] ml-[30px] ">2ta tabletka</del>
                  <RxDotFilled className="text-[#1BB7B5]" />
                  <del className="text-[#86BC8E] ">Och qoringa</del>
                </div>
                <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px] justify-between  bg-[#E8FCEB] text-[12px]">
                  <p className="bg-[url('../images/davolash/correct.png')] bg-no-repeat w-3 h-2 text-[#0CBB26]"></p>
                  <BsClock className="text-[#1BB7B5] ml-2" />
                  <del>8:00</del>
                  <del className="text-[#86BC8E] ml-[30px] ">2ta tabletka</del>
                  <RxDotFilled className="text-[#1BB7B5]" />
                  <del className="text-[#86BC8E] ">Och qoringa</del>
                </div>

                <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px] justify-between  bg-[#FFF1F1] text-[12px]">
                  <p className="text-[10px] text-[#DE0C0C] font-[900]">╳</p>
                  <BsClock className="text-[#B48C8C] ml-2" />
                  <p>12:00</p>
                  <p className="text-[#B48C8C] ml-[30px] ">2ta tabletka</p>
                  <RxDotFilled className="text-[#B48C8C]" />
                  <p className="text-[#B48C8C] ">Och qoringa</p>
                </div>

                <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px] justify-between  bg-[#E8FCEB] text-[12px]">
                  <p className="bg-[url('../images/davolash/sand-clock.png')] bg-no-repeat w-[16px] h-5"></p>
                  <BsClock className="text-[#1BB7B5] " />
                  <p>12:00</p>
                  <p className="text-[#86BC8E] ml-[30px] ">2ta tabletka</p>
                  <RxDotFilled className="text-[#1BB7B5]" />
                  <p className="text-[#86BC8E] ">Och qoringa</p>
                </div>
              </div>

              <div className="border rounded-[12px] p-3 flex flex-col w-[305px] ml-4">
                <div className="flex items-center mb-2">
                  <div className="bg-[url('../images/davolash/davolash-dori.png')] bg-no-repeat w-8 h-8"></div>
                  <p className="text-[#1B3B3C]  ml-2 font-[500]">
                    Parasetomol 500 mg
                  </p>
                  <AiOutlineExclamationCircle className="rotate-180 text-[#1BB7B5] text-[18px] ml-3" />
                </div>
                <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px] justify-between  bg-[#E8FCEB] text-[12px]">
                  <p className="bg-[url('../images/davolash/correct.png')] bg-no-repeat w-3 h-2 text-[#0CBB26]"></p>
                  <BsClock className="text-[#1BB7B5] ml-2" />
                  <del>8:00</del>
                  <del className="text-[#86BC8E] ml-[30px] ">2ta tabletka</del>
                  <RxDotFilled className="text-[#1BB7B5]" />
                  <del className="text-[#86BC8E] ">Och qoringa</del>
                </div>

                <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px] justify-between  bg-[#E8FCEB] text-[12px]">
                  <p className="bg-[url('../images/davolash/sand-clock.png')] bg-no-repeat w-[16px] h-5"></p>
                  <BsClock className="text-[#1BB7B5] " />
                  <p>12:00</p>
                  <p className="text-[#86BC8E] ml-[30px] ">2ta tabletka</p>
                  <RxDotFilled className="text-[#1BB7B5]" />
                  <p className="text-[#86BC8E] ">Och qoringa</p>
                </div>
              </div>
              <div className="border rounded-[12px] p-3 flex flex-col w-[305px] ml-4">
                <div className="flex items-center mb-2">
                  <div className="bg-[url('../images/davolash/davolash-dori.png')] bg-no-repeat w-8 h-8"></div>
                  <p className="text-[#1B3B3C]  ml-2 font-[500]">
                    Parasetomol 500 mg
                  </p>
                  <AiOutlineExclamationCircle className="rotate-180 text-[#1BB7B5] text-[18px] ml-3" />
                </div>
                <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px] justify-between  bg-[#FFF1F1] text-[12px]">
                  <p className="text-[10px] text-[#DE0C0C] font-[900]">╳</p>
                  <BsClock className="text-[#B48C8C] ml-2" />
                  <p>12:00</p>
                  <p className="text-[#B48C8C] ml-[30px] ">2ta tabletka</p>
                  <RxDotFilled className="text-[#B48C8C]" />
                  <p className="text-[#B48C8C] ">Och qoringa</p>
                </div>

                <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px] justify-between  bg-[#E8FCEB] text-[12px]">
                  <p className="bg-[url('../images/davolash/sand-clock.png')] bg-no-repeat w-[16px] h-5"></p>
                  <BsClock className="text-[#1BB7B5] " />
                  <p>12:00</p>
                  <p className="text-[#86BC8E] ml-[30px] ">2ta tabletka</p>
                  <RxDotFilled className="text-[#1BB7B5]" />
                  <p className="text-[#86BC8E] ">Och qoringa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  )
}

export default Davolash;
