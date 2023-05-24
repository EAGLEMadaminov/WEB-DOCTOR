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
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { BiChevronRight } from "react-icons/bi";

function Tavsiyanoma() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);

  const handleTavsiyahistoryBtn = () => {
    router.push("/account/patsient/tavsiyanoma/history");
  };
  const GoToBackBtn = () => {
    router.push("/account/patsient");
  };
  const handleExit = () => {
    window.location.pathname = "";
  };
  const GoToDavleniyaBtn = () => {
    router.push("/account/patsient/tavsiyanoma/davleniya");
  };
  const addNewBtn = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };
  const GoToAnalizBtn = () => {
    router.push("/account/patsient/tavsiyanoma/analiz");
  };
  const GoToRentGentBtn = () => {
    router.push("/account/patsient/tavsiyanoma/rengen");
  };
  return (
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
              <button
                className="flex items-center ml-[40px] py-1 bg-[#F8FCFC] border rounded-[12px] w-[188px] font-[500]"
                onClick={GoToBackBtn}
              >
                <BsArrowLeft className="mx-3" /> Orqaga qaytish
              </button>
              <h3 className="text-[24px] ml-[18px] text-[#1B3B3C]">
                Tavsiyanoma
              </h3>
            </div>
            <div className="mr-10 flex items-center">
              <button
                className="px-[30px] bg-[#F8FCFC] py-2 rounded-[12px] flex items-center"
                onClick={handleTavsiyahistoryBtn}
              >
                <RxCounterClockwiseClock className="mr-[13px]" /> Tarix
              </button>
              <button
                className="bg-[#1BB7B5] py-2 rounded-[12px] ml-5 flex items-center text-white px-[30px] "
                onClick={addNewBtn}
              >
                <AiOutlinePlus className="font-[500] mr-4" /> Yangi qo’shish
              </button>
            </div>
            {showForm ? (
              <div className="absolute w-[334px] h-[224px] z-[2] right-[70px] mt-14 rounded-xl bg-white border border-[#D7E6E7] ">
                <div className="bg-white border shadow-[0px_6px_16px] shadow-[#EFF4F4] border-[#E9F6F6] w-[304px] h-[200px] mt-2 rounded-[18px] mx-auto flex flex-col">
                  <button
                    className="bg-white border shadow-[0px_6px_16px] items-center flex shadow-[#EFF4F4] border-[#E9F6F6] rounded-[18px] mx-auto mt-3 p-2 w-[270px]"
                    onClick={GoToDavleniyaBtn}
                  >
                    <span className="bg-[url('../images/tavsiyanoma/davleniya.png')] bg-center  rounded-[32px] bg-[#EAF9FB] inline-block bg-no-repeat w-8 h-8"></span>
                    <p className="text-[#1B3B3C]  ml-2 font-[500] flex">
                      Davleniyani tekshirish
                    </p>
                    <BiChevronRight className="ml-auto text-[#759495]" />
                  </button>
                  <button
                    className="bg-white border shadow-[0px_6px_16px] items-center flex shadow-[#EFF4F4] border-[#E9F6F6] rounded-[18px] mx-auto mt-3 p-2 w-[270px]"
                    onClick={GoToRentGentBtn}
                  >
                    <span className="bg-[url('../images/tavsiyanoma/yurak.png')] bg-center  rounded-[32px] bg-[#EAF9FB] inline-block bg-no-repeat w-8 h-8"></span>
                    <p className="text-[#1B3B3C]  ml-2 font-[500] flex">
                      Yurak urishini tekshirish
                    </p>
                    <BiChevronRight className="ml-auto text-[#759495]" />
                  </button>
                  <button
                    className="bg-white border shadow-[0px_6px_16px]  items-center flex shadow-[#EFF4F4] border-[#E9F6F6] rounded-[18px] mx-auto mt-3 p-2 w-[270px]"
                    onClick={GoToAnalizBtn}
                  >
                    <span className="bg-[url('../images/tavsiyanoma/analiz.png')] bg-center  rounded-[32px] bg-[#EAF9FB] bg-no-repeat w-8 h-8"></span>
                    <p className="text-[#1B3B3C]  ml-2 font-[500] flex">
                      Analiz va rengenlar
                    </p>
                    <BiChevronRight className="ml-auto text-[#759495]" />
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className=" text-center  mx-10">
            <h2 className="davolash-line w-[875px] mx-10">Bugun</h2>
          </div>

          <div className="flex mx-10 mt-5 mb-20">
            <div className="border rounded-[12px] p-3 flex  shadow-[0px_6px_16px] shadow-[#EFF4F4] flex-col w-[305px]  ">
              <div className="flex items-center mb-2">
                <span className="bg-[url('../images/tavsiyanoma/davleniya.png')]  bg-center  rounded-[32px] bg-[#EAF9FB] bg-no-repeat w-8 h-8"></span>
                <p className="text-[#1B3B3C]  ml-2 font-[500] flex">
                  Davleniyani tekshirish
                </p>
              </div>
              <div className="flex items-center rounded-[8px] mb-3 px-2 h-[42px]   bg-[#E8FCEB] text-[12px]">
                <p className="bg-[url('../images/davolash/correct.png')] bg-no-repeat w-3 h-2 text-[#0CBB26]"></p>
                <BsClock className="text-[#1BB7B5] mx-2 ml-[14px]" />
                <del>8:00</del>
              </div>
              <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px]   bg-[#E8FCEB] text-[12px]">
                <p className="bg-[url('../images/davolash/correct.png')] bg-no-repeat w-3 h-2 text-[#0CBB26]"></p>
                <BsClock className="text-[#1BB7B5] mx-2 ml-[14px]" />
                <del>8:00</del>
              </div>

              <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px] bg-[#FFF1F1] text-[12px]">
                <p className="text-[10px] text-[#DE0C0C] font-[900]">╳</p>
                <BsClock className="text-[#B48C8C] mx-2 ml-[14px]" />
                <p>12:00</p>
              </div>

              <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px]  bg-[#E8FCEB] text-[12px]">
                <p className="bg-[url('../images/davolash/sand-clock.png')] bg-no-repeat w-4 h-5"></p>
                <BsClock className="text-[#1BB7B5] mx-2" />
                <p>12:00</p>
              </div>
            </div>

            <div className="border rounded-[12px] shadow-[0px_6px_16px] shadow-[#EFF4F4] p-3 flex flex-col w-[305px] ml-4 ">
              <div className="flex items-center mb-2">
                <span className="bg-[url('../images/tavsiyanoma/analiz.png')] bg-center  rounded-[32px] bg-[#EAF9FB] bg-no-repeat w-8 h-8"></span>
                <p className="text-[#1B3B3C]  ml-2 font-[500] flex items-center">
                  Qon analizi
                  <AiOutlineExclamationCircle className="rotate-180 text-[#1BB7B5] text-[18px] ml-3" />
                </p>
              </div>
              <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px]  bg-[#E8FCEB] text-[12px]">
                <p className="bg-[url('../images/davolash/correct.png')] bg-no-repeat w-3 h-2 text-[#0CBB26]"></p>
                <BsClock className="text-[#1BB7B5] mx-2 ml-3" />
                <p>12:00</p>

                <p className="text-[#86BC8E] ml-auto">Och qoringa</p>
              </div>
            </div>

            <div className="border  shadow-[0px_6px_16px] shadow-[#EFF4F4] rounded-[12px] p-3 flex flex-col w-[305px] ml-4 ">
              <div className="flex items-center mb-2">
                <span className="bg-[url('../images/tavsiyanoma/rentgen.png')] bg-no-repeat w-8 h-8"></span>
                <p className="text-[#1B3B3C]  ml-2 font-[500] flex items-center">
                  MTR rengen
                  <AiOutlineExclamationCircle className="rotate-180 text-[#1BB7B5] text-[18px] ml-3" />
                </p>
              </div>

              <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px]  bg-[#E8FCEB] text-[12px]">
                <p className="bg-[url('../images/davolash/sand-clock.png')] bg-no-repeat w-[16px] h-5"></p>
                <BsClock className="text-[#1BB7B5] mx-2 ml-3 " />
                <p>12:00</p>

                <p className="text-[#86BC8E] ml-auto ">Och qoringa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tavsiyanoma;
