import React, { useState } from "react";
import Image from "next/image";
import img from "../../../../images/cite-logo.png";
import { FiChevronDown } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import ReactDatePicker from "react-datepicker";
import { BiChevronDown } from "react-icons/bi";
import "react-datepicker/dist/react-datepicker.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["add", "account"])),
    },
  };
}

function Analiz() {
  const { t } = useTranslation();
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [showDrugList, setShowDrgList] = useState(false);
  const [btnBorder, setBtnBorder] = useState("8px");
  const [hideBtnBorder, setHideBtnBorder] = useState("1px");

  const handleExit = () => {
    router.pathname = "";
  };

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

  const GoToBackBtn = () => {
    router.push("/account/patsient/tavsiyanoma");
  };

  const ChangeLangBtn = (e) => {
    let lang = e.target.value;
    if (lang === "ru") {
      router.push("/ru/account/patsient/tavsiyanoma/analiz");
    } else {
      window.location.pathname = "/account/patsient/tavsiyanoma/analiz";
    }
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
            <div className="flex w-[111px] dark:text-[#1B3B3C] h-[36px] items-center relative justify-between border border-[#D7E6E7] px-2 rounded-[12px]">
              <CiGlobe className="text-[#1BB7B5] text-xl" />
              <select
                onChange={ChangeLangBtn}
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
              <RxExit className="mx-2 my-auto" /> {t("account:exit_account")}
            </button>
          </div>
        </div>

        {/* body  */}
        <form action="" method="post" onClick={(e) => e.preventDefault()}>
          <div className="bg-white border border-[#D7E6E7] rounded-[24px] mt-6">
            <div className="flex justify-between mt-7 mb-3">
              <div className="flex items-center">
                <button
                  className="flex items-center dark:text-[#1B3B3C] ml-[40px] py-1 bg-[#F8FCFC] border rounded-[12px] w-[188px] font-[500]"
                  onClick={GoToBackBtn}
                >
                  <BsArrowLeft className="mx-3" /> {t("account:go_back_btn")}
                </button>
                <h3 className="text-[24px] ml-[18px] text-[#1B3B3C]">
                  {t("account:check_blood")}
                </h3>
              </div>
              <div className="mr-10 flex items-center">
                <button
                  type="submit"
                  className="px-[30px] bg-[#1BB7B5] py-2 text-white rounded-[12px] flex items-center"
                >
                  <BsCheck2 className="mr-3" />
                  {t("add:save")}
                </button>
              </div>
            </div>

            <div className="mx-6 mt-10 rounded-[18px] border border-[#D7E6E7] relative">
              <div className="flex">
                <div className="text-[14px] text-[#759495] pl-5 font-[400] border rounded-tl-[18px] border-[#D7E6E7] w-[300px] flex items-center p-2">
                  {t("add:check_rengen")}
                </div>
                <div className="text-[14px] text-[#759495] font-[400] border border-[#D7E6E7] w-[200px] flex items-center p-2">
                  <p className="ml-4"> {t("add:num_come")} </p>
                </div>
                <div className="text-[14px] text-[#759495] font-[400] border w-[200px]  border-[#D7E6E7]  flex items-center p-2">
                  <p className="ml-4 "> {t("add:when")} </p>
                </div>
                <div className="text-[14px] text-[#759495] font-[400] border w-[350px] rounded-tr-[18px] border-[#D7E6E7]  flex items-center p-2">
                  <p className="ml-4 "> {t("add:additional_info")} </p>
                </div>
              </div>
              <div className="flex bg-[#F8FCFC] rounded-b-[18px] min-h-[300px]">
                <div className="flex flex-col text-[14px] text-[#759495] font-[400] border rounded-bl-[18px] border-[#D7E6E7] w-[300px] pl-5 p-2">
                  <button
                    className={`flex items-center ml-[2px] w-[100%] border border-[#D7E6E7] rounded-b-[${btnBorder}]  border-b-[${hideBtnBorder}] px-2  py-1 rounded-[8px] `}
                    onClick={handleShowDregBtn}
                    type="button"
                  >
                    <BiChevronDown className="mr-2 text-[18px]" />
                    {t("add:choose")}
                  </button>
                  {showDrugList ? (
                    <div>
                      <ul
                        className="border border-t-0 rounded-b-[8px] mx-1 px-1  mr-[1px]"
                        onClick={(e) => console.log(e.target.textContent)}
                      >
                        <li
                          className="parasetamol flex py-2"
                          value={"parasetomol"}
                        >
                          {t("add:analiz")}
                        </li>
                        <li className="aspirin flex py-2">{t("add:rengen")}</li>
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-[14px]  font-[400] w-[200px] px-2 border border-[#D7E6E7]">
                  <fieldset>
                    <div className="border mt-4 bg-white border-[#D7E6E7] p-2 flex items-center  rounded-xl">
                      <input
                        type="radio"
                        id="radio1"
                        name="value-radio"
                        className="ml-2 mr-1 brightness-150 active:brightness-150  hover:brightness-150 "
                      />
                      <label
                        htmlFor="radio1"
                        className="ml-1 dark:text-[#1B3B3C]"
                      >
                        {t("add:before_eat")}
                      </label>
                    </div>
                    <div className="border bg-white border-[#D7E6E7] mt-3 p-2 flex items-center rounded-xl">
                      <input
                        type="radio"
                        id="radio2"
                        name="value-radio"
                        className="ml-2 mr-1 brightness-150 active:brightness-150   hover:brightness-150"
                      />
                      <label
                        htmlFor="radio2"
                        className="ml-1 dark:text-[#1B3B3C]"
                      >
                        {t("add:after_eat")}
                      </label>
                    </div>
                  </fieldset>
                </div>
                <div className="border w-[200px] border-[#D7E6E7] ">
                  <div className="flex border border-[#D7E6E7] bg-white mx-2 mt-4 rounded-[12px] p-2">
                    <span className="bg-[url('../images/calendar.png')] bg-no-repeat mx-2 w-[25px] h-[19px] inline-block"></span>
                    <ReactDatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="w-[80px] dark:text-black bg-transparent outline-none"
                    />
                  </div>
                  <div className="border border-[#D7E6E7] bg-white rounded-[12px] mx-2 mt-3 w-[170px]  p-[10px] flex   items-center">
                    <BsClock className="text-[#1BB7B5]  mx-4 ml-3" />
                    <input
                      type="text"
                      placeholder="00:00"
                      className="w-14 h-3  dark:bg-white dark:text-[#1B3B3C] outline-none placeholder:text-[#C5D7D8]"
                    />
                  </div>
                </div>
                <div className="border border-[#D7E6E7] w-[350px] rounded-br-[18px]">
                  <textarea
                    name="addition-info"
                    rows={3}
                    className="border dark:bg-white dark:text-[#1B3B3C] w-[300px] ml-4 px-2 mt-4  rounded-xl p-1 border-[#D7E6E7] resize-none outline-none "
                    placeholder={t("add:add_info_input")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Analiz;
