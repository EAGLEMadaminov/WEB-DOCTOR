import React, { useState } from "react";
import Image from "next/image";
import img from "../../../../images/cite-logo.png";
import { FiChevronDown } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import { BsArrowLeft } from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";

function Tavsiyanoma() {
  const router = useRouter();
  const GoToBackBtn = () => {
    router.push("/account/patsient/tavsiyanoma");
  };
  const handleExit = () => {
    window.location.pathname = "";
  };

  const addNewBtn = () => {
    router.push("/account/patsient/tavsiyanoma/add");
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
              className="w-[200px] ml-[18px] flex py-[5px]  px-[18px]items-center h-[36px] text-[#FF0000] border rounded-[12px] border-[#D7E6E7]"
              onClick={handleExit}
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
              <button className="px-[30px] bg-[#F8FCFC] py-2 rounded-[12px] flex items-center">
                <RxCounterClockwiseClock className="mr-[13px]" /> Tarix
              </button>
              <button
                className="bg-[#1BB7B5] py-2 rounded-[12px] ml-5 flex items-center text-white px-[30px] "
                onClick={addNewBtn}
              >
                <AiOutlinePlus className="font-[500] mr-4" /> Yangi qo’shish
              </button>
            </div>
          </div>

          <div className="w-[194px] text-center mx-auto my-[150px]">
            <span className="block bg-[url('../images/davolash/history.png')] mx-auto w-20 h-20 bg-center rounded-[80px] bg-[#EAF9FB] bg-no-repeat"></span>
            <p className="text-[#759495]">
              Xozircha hech qanday narsa topilmadi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tavsiyanoma;