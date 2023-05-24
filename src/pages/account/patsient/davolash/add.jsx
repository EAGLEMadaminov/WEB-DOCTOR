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
import { Formik, Form, FieldArray } from "formik";
import { RxCross2 } from "react-icons/rx";
import { GrSubtract } from "react-icons/gr";

function Add() {
  const router = useRouter();
  const [showDrugList, setShowDrgList] = useState(false);
  const [btnBorder, setBtnBorder] = useState("8px");
  const [hideBtnBorder, setHideBtnBorder] = useState("1px");
  const [drugsNum, setDrugsNum] = useState(4);
  const [numberEatDrug, setNumberEatDrug] = useState([1]);

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

  const AddClock = () => {
    let id = new Date().getTime();
    numberEatDrug.push(id);
    console.log(numberEatDrug);
  };

  const GoToBackBtn = () => {
    router.push("/account/patsient/davolash");
  };

  const subsNumBtn = () => {
    if (drugsNum > 0) {
      setDrugsNum(drugsNum - 1);
    }
  };
  const addNumBtn = () => {
    setDrugsNum(drugsNum + 1);
  };
  const removeElement = (index) => {
    const newA = numberEatDrug.filter((_, i) => i !== index);
    setNumberEatDrug(newA);
  };
  return (
    <div className=" h-[100vh] bg-[#F7FEFE]">
      <div className="w-[1035px] mx-auto">
        {/* head */}
        <div className="flex h-[60px] pt-9 justify-between">
          <div className="flex">
            <Image src={img} width={50} height={50} alt="logo" />
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

        <Formik initialValues={{ drugs: ["paresatomol"] }}>
          {({ values }) => (
            <Form action="https://echo.htmlacademy.ru" method="post">
              <FieldArray
                name="drugs"
                render={(arrayHelpers) => (
                  <div>
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
                          <button
                            type="submit"
                            className="px-[30px] bg-[#1BB7B5] py-2 text-white rounded-[12px] flex items-center"
                          >
                            <BsCheck2 className="mr-3" />
                            Saqlash
                          </button>
                        </div>
                      </div>
                      {values.drugs && values.drugs.length > 0
                        ? values.drugs.map((drug, index) => (
                            <div
                              className="mx-6 mt-10 rounded-[18px] border border-[#D7E6E7] relative"
                              key={index}
                            >
                              <div className="text-left flex ">
                                <div className="text-[14px] pl-5 text-[#759495] rounded-tl-[18px]  font-[400] w-[200px] border border-[#D7E6E7] p-2 ">
                                  Vosita
                                </div>
                                <div
                                  className="text-[14px] text-[#759495] font-[400] border border-[#D7E6E7] w-[200px] flex items-center p-2"
                                  type="button"
                                >
                                  Necha maxal ichiladi
                                  <button
                                    className=" w-7 h-7 bg-[#1BB7B5] rounded-[8px] ml-3 flex items-center justify-center"
                                    onClick={AddClock}
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
                                <div className="text-[14px] text-[#759495] font-[400] w-[120px] p-2 border border-[#D7E6E7]">
                                  Muddat
                                </div>
                                <div className="text-[14px] text-[#759495] font-[400] w-[200px] rounded-tr-[18px] p-2 border border-[#D7E6E7]">
                                  Qo&apos;shimcha ma'lumot
                                </div>
                              </div>
                              <button
                                type="button"
                                className="absolute pl-1  ml-auto w-6 h-6 top-[-7px] right-[-7px] bg-white text-[#759495] rounded-[40px] border border-[#D7E6E7]  "
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              >
                                <RxCross2 />
                              </button>
                              <div className="text-left flex">
                                <div className="text-[14px] text-[#759495] rounded-bl-[18px]  font-[400] w-[200px] border border-[#D7E6E7] p-2 ">
                                  <button
                                    className={`flex  items-center ml-1 w-[100%] border border-[#D7E6E7] rounded-b-[${btnBorder}]  border-b-[${hideBtnBorder}] px-2  py-1 rounded-[8px] `}
                                    onClick={handleShowDregBtn}
                                    type="button"
                                  >
                                    <BiChevronDown className="mr-2 text-[18px]" />
                                    Tanlang
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
                                      <ul
                                        className="border border-t-0 rounded-b-[8px] mx-1 px-1  mr-[1px]"
                                        onClick={(e) =>
                                          console.log(e.target.textContent)
                                        }
                                      >
                                        <li
                                          className="parasetamol flex py-2"
                                          value={"parasetomol"}
                                        >
                                          <span className="bg-[url('../images/davolash/davolash-dori.png')] bg-no-repeat w-8 h-8"></span>
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

                                <div className="flex flex-col text-[14px] text-[#759495] font-[400] border border-[#D7E6E7] w-[200px]   items-center p-2">
                                  {numberEatDrug.map((item, index) => {
                                    return (
                                      <div className="my-3" key={item}>
                                        <div className="flex items-center">
                                          <p className="mr-1">
                                            {index + 1}-mahal
                                          </p>
                                          <div className="border border-[#D7E6E7] rounded-[12px] w-[77px] h-[34px] flex  justify-around items-center">
                                            <BsClock className="text-[#1BB7B5]" />
                                            <input
                                              type="text"
                                              placeholder="00:00"
                                              className="w-9 h-3 outline-none placeholder:text-[#C5D7D8]"
                                            />
                                          </div>
                                          <button
                                            type="button"
                                            onClick={() => removeElement(index)}
                                          >
                                            <IoIosClose className="text-[20px] ml-1" />
                                          </button>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>

                                <div className="text-[14px] text-[#759495]  font-[400] w-[150px] p-2 border border-[#D7E6E7] flex">
                                  <button
                                    className="bg-white border ml-3  border-[#E9F6F6] rounded-[8px] w-8 h-8"
                                    onClick={subsNumBtn}
                                  >
                                    <GrSubtract className="mx-auto" />
                                  </button>
                                  <p className="mx-2 text-[#1B3B3C] mt-1">
                                    {drugsNum}
                                  </p>
                                  <button
                                    className="rounded-[8px] w-8 h-8 bg-[#1BB7B5] pb-1 text-[30px] leading-3 text-white "
                                    onClick={addNumBtn}
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="text-[14px] text-[#759495] font-[400] w-[150px] p-2 border border-[#D7E6E7]">
                                  <fieldset>
                                    <div className="border border-[#D7E6E7] p-1 rounded-xl">
                                      <input
                                        type="radio"
                                        id="radio1"
                                        name="value-radio"
                                        className=" brightness-150 active:brightness-150  hover:brightness-150 "
                                      />
                                      <label htmlFor="radio1" className="ml-1">
                                        Ovqatdan oldin
                                      </label>
                                    </div>
                                    <div className="border border-[#D7E6E7] mt-3 p-1 rounded-xl">
                                      <input
                                        type="radio"
                                        id="radio2"
                                        name="value-radio"
                                        className=" brightness-150 active:brightness-150  hover:brightness-150"
                                      />
                                      <label htmlFor="radio2" className="ml-1">
                                        Ovqatdan keyin
                                      </label>
                                    </div>
                                  </fieldset>
                                </div>
                                <div className="text-[14px] text-[#759495] font-[400] w-[120px] p-2 border border-[#D7E6E7]">
                                  <input
                                    type="text"
                                    placeholder="Necha kun ?"
                                    name="numdays"
                                    className="outline-none p-2 border border-[#D7E6E7] rounded-xl w-[100%]"
                                  />
                                </div>
                                <div className="text-[14px] text-[#759495] font-[400]  p-2 w-[200px] rounded-br-[18px]  border border-[#D7E6E7]">
                                  <textarea
                                    name="addition-info"
                                    rows={4}
                                    className="border w-[170px]  rounded-xl p-1 border-[#D7E6E7] resize-none outline-none "
                                    placeholder="Vosita haqida qo’shimcha ma’lumotni kiriting"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          ))
                        : ""}
                      <button
                        type="button"
                        className="bg-[#1BB7B5] text-white rounded-[12px] w-[160px] ml-5 mb-8 mt-2 p-2"
                        onClick={() => arrayHelpers.push("")}
                      >
                        + Yana qo&apos;shish
                      </button>
                    </div>
                  </div>
                )}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Add;
