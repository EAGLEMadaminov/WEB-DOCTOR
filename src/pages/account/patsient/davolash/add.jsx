import React, { useState } from "react";
import Image from "next/image";
import img from "../../../../images/cite-logo.png";
import { FiChevronDown } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { addClock } from "../../../../components/Davolash/addClock.jsx";

function Add() {
  const router = useRouter();
  const [showDrugList, setShowDrgList] = useState(false);
  const [btnBorder, setBtnBorder] = useState("8px");
  const [hideBtnBorder, setHideBtnBorder] = useState("1px");

  const handleShowDregBtn = () => {
    if (showDrugList) {
      setShowDrgList(false);
      setBtnBorder("8px");
      setHideBtnBorder("1px");
    } else {
      setShowDrgList(true);
      setBtnBorder("0px");
      setHideBtnBorder("0px");
    }
  };
  const handleExit = () => {
    router.pathname = "";
  };

  const addClock = () => {};

  const GoToBackBtn = () => {};
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
                Vosita qo&apos;shish
              </h3>
            </div>
            <div className="mr-10 flex items-center">
              <button className="px-[30px] bg-[#1BB7B5] py-2 text-white rounded-[12px] flex items-center">
                <BsCheck2 className="mr-3" />
                Saqlash
              </button>
            </div>
          </div>

          <div className="mx-10 rounded-[18px] border border-[#D7E6E7] ">
            <div className="text-left flex ">
              <div className="text-[14px] pl-5 text-[#759495] rounded-tl-[18px]  font-[400] w-[200px] border border-[#D7E6E7] p-2 ">
                Vosita
              </div>
              <div className="text-[14px] text-[#759495] font-[400] border border-[#D7E6E7] w-[200px] flex items-center p-2">
                Necha maxal ichiladi
                <button
                  className=" w-7 h-7 bg-[#1BB7B5] rounded-[8px] ml-3 flex items-center justify-center"
                  onClick={addClock}
                >
                  <GoPlus className=" text-white " />
                </button>
              </div>
              
              <div className="text-[14px] text-[#759495] font-[400] w-[150px] p-2 border border-[#D7E6E7]">
                Nechtadan ichiladi?
              </div>
              <div className="text-[14px] text-[#759495] font-[400] w-[150px] p-2 border border-[#D7E6E7]">
                Ichish tartibi
              </div>
              <div className="text-[14px] text-[#759495] font-[400] w-[100px] p-2 border border-[#D7E6E7]">
                Muddat{" "}
              </div>
              <div className="text-[14px] text-[#759495] font-[400] w-[180px] rounded-tr-[18px] p-2 border border-[#D7E6E7]">
                Qo&apos;shimcha ma'lumot
              </div>
            </div>

            <div className="text-left flex">
              <div className="text-[14px] text-[#759495] rounded-bl-[18px]  font-[400] w-[200px] border border-[#D7E6E7] p-2 ">
                <button
                  className={`flex  items-center ml-1 border border-[#D7E6E7] rounded-b-[${btnBorder}]  border-b-[${hideBtnBorder}] px-2  py-1 rounded-[8px] `}
                  onClick={handleShowDregBtn}
                >
                  <BiChevronDown className="mr-2 text-[18px]" /> Parasetomol 500
                  mg
                </button>
                {showDrugList ? (
                  <div>
                    <div className="flex  items-center justify-between ml-1 pt-2 mr-[1px]  border border-t-0">
                      <AiOutlineSearch className=" text-[20px]" />
                      <input
                        type="search"
                        placeholder="Qidiruv "
                        className="outline-none  w-[140px]"
                        onClick={() => console.log("sales")}
                      />
                    </div>
                    <ul className="border border-t-0 rounded-b-[8px] mx-1 px-1  mr-[1px]">
                      <li className="parasetamol flex py-2">
                        <div className="bg-[url('../images/davolash/davolash-dori.png')] bg-no-repeat w-8 h-8"></div>
                        Parasetomol 500mg
                      </li>
                      <li className="aspirin flex py-2">
                        <div className="bg-[url('../images/davolash/davolash-dori.png')] bg-no-repeat w-8 h-8"></div>
                        Aspirin 500mg
                      </li>
                      <li className="Kyupen flex py-2">
                        <div className="bg-[url('../images/davolash/davolash-dori.png')] bg-no-repeat w-8 h-8"></div>
                        Kyupen 500mg
                      </li>
                      <li className="Kyupen flex py-2">
                        <div className="bg-[url('../images/davolash/davolash-dori.png')] bg-no-repeat w-8 h-8"></div>
                        Kyupen 500mg
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="text-[14px] text-[#759495] font-[400] border border-[#D7E6E7] w-[200px] flex items-center p-2">
                <addClock />
                <div className="flex items-center">
                  <p className="mr-[2px]">1-mahal</p>
                  <div className="border border-[#D7E6E7] rounded-[12px] w-[97px] h-[44px] flex  justify-around items-center">
                    <BsClock className="text-[#1BB7B5]" />
                    <input
                      type="text"
                      placeholder="00:00"
                      className="w-10 h-3 outline-none placeholder:text-[#C5D7D8]"
                    />
                  </div>
                  <IoIosClose className="text-[20px] ml-1"/>
                </div>
              </div>
              <div className="text-[14px] text-[#759495] font-[400] w-[150px] p-2 border border-[#D7E6E7]">
                Nechtadan ichiladi?
              </div>
              <div className="text-[14px] text-[#759495] font-[400] w-[150px] p-2 border border-[#D7E6E7]">
                <fieldset>
                  <input type="radio" id="radio1" />
                  <label htmlFor="radio1">Ovqatdan oldin</label>
                  <input type="text" name="value-radio" />
                  <input type="radio" id="radio2" name="value-radio" />
                  <label htmlFor="radio2">Ovqatdan keyin</label>
                </fieldset>
              </div>
              <div className="text-[14px] text-[#759495] font-[400] w-[100px] p-2 border border-[#D7E6E7]">
                Muddat
              </div>
              <div className="text-[14px] text-[#759495] font-[400] w-[180px] rounded-br-[18px] p-2 border border-[#D7E6E7]">
                Qo&apos;shimcha ma'lumot
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
