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
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useGlobalContext } from "@/context";
import Modal from "@/components/Davolash/modal";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["register", "account"])),
    },
  };
}

function Davolash() {
  const { t } = useTranslation();
  const { showModal, setShowModal } = useGlobalContext();

  const router = useRouter();

  const handleDavohistoryBtn = () => {
    router.push("/account/patsient/davolash/history");
  };
  const GoToBackBtn = () => {
    router.push("/account/patsient");
  };
  const handleExit = () => {
    window.location.pathname = "";
  };
  const showFormBtn = () => {
    setShowModal(true);
  };

  const addNewBtn = () => {
    router.push("/account/patsient/davolash/add");
  };
  const ChangeLangBtn = (e) => {
    let lang = e.target.value;
    if (lang === "ru") {
      router.push("/ru/account/patsient/davolash");
    } else {
      window.location.pathname = "/account/patsient/davoalsh";
    }
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
            <div className="flex w-[111px] h-[36px] dark:text-[#1B3B3C] items-center relative justify-between border border-[#D7E6E7] px-2 rounded-[12px]">
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
                {t("account:davo")}
              </h3>
            </div>
            <div className="mr-10 flex items-center">
              <button
                className="px-[30px] bg-[#F8FCFC] dark:text-[#1B3B3C] font-[500] py-2 rounded-[12px] flex items-center"
                onClick={handleDavohistoryBtn}
              >
                <RxCounterClockwiseClock className="mr-[13px]" />{" "}
                {t("account:history")}
              </button>
              <button
                className="bg-[#1BB7B5] py-2 rounded-[12px] ml-5 flex items-center text-white px-[30px] "
                onClick={addNewBtn}
              >
                <AiOutlinePlus className="font-[500] mr-4" />{" "}
                {t("account:add_new")}
              </button>
            </div>
          </div>
          <div className=" text-center  mx-10">
            <h2 className="davolash-line w-[875px] dark:text-[#1B3B3C] mx-10">
              {t("account:today")}
            </h2>
          </div>

          <div className="flex mx-10 mt-5 mb-20">
            {showModal ? <Modal /> : ""}
            <div
              className="border rounded-[12px] p-3 flex shadow-[0px_6px_16px] shadow-[#EFF4F4] flex-col w-[305px] cursor-pointer "
              onClick={showFormBtn}
            >
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
                <del className="dark:text-[#1B3B3C]">8:00</del>
                <del className="text-[#86BC8E]  ">
                  2 {t("account:num_drug")}
                </del>
                <RxDotFilled className="text-[#1BB7B5]" />
                <del className="text-[#86BC8E] ">{t("account:belly")} </del>
              </div>
              <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px] justify-between  bg-[#E8FCEB] text-[12px]">
                <p className="bg-[url('../images/davolash/correct.png')] bg-no-repeat w-3 h-2 text-[#0CBB26]"></p>
                <BsClock className="text-[#1BB7B5] ml-2" />
                <del className="dark:text-[#1B3B3C]">8:00</del>
                <del className="text-[#86BC8E]  ">
                  2 {t("account:num_drug")}{" "}
                </del>
                <RxDotFilled className="text-[#1BB7B5]" />
                <del className="text-[#86BC8E] ">{t("account:belly")} </del>
              </div>

              <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px] justify-between  bg-[#FFF1F1] text-[12px]">
                <p className="text-[10px] text-[#DE0C0C] font-[900]">╳</p>
                <BsClock className="text-[#B48C8C] ml-2" />
                <p className="dark:text-[#1B3B3C]">12:00</p>
                <p className="text-[#B48C8C] ">2 {t("account:num_drug")}</p>
                <RxDotFilled className="text-[#B48C8C]" />
                <p className="text-[#B48C8C] ">{t("account:belly")}</p>
              </div>

              <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px] justify-between  bg-[#E8FCEB] text-[12px]">
                <p className="bg-[url('../images/davolash/sand-clock.png')] bg-no-repeat w-[16px] h-5"></p>
                <BsClock className="text-[#1BB7B5] " />
                <p className="dark:text-[#1B3B3C]">12:00</p>
                <p className="text-[#86BC8E]  ">2 {t("account:num_drug")}</p>
                <RxDotFilled className="text-[#1BB7B5]" />
                <p className="text-[#86BC8E] ">{t("account:belly")}</p>
              </div>
            </div>

            <div
              className="border rounded-[12px] shadow-[0px_6px_16px] shadow-[#EFF4F4] p-3 flex flex-col w-[305px] ml-4 cursor-pointer"
              onClick={showFormBtn}
            >
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
                <del className="dark:text-[#1B3B3C]">8:00</del>
                <del className="text-[#86BC8E]  ">
                  2 {t("account:num_drug")}
                </del>
                <RxDotFilled className="text-[#1BB7B5]" />
                <del className="text-[#86BC8E] ">{t("account:belly")}</del>
              </div>

              <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px] justify-between  bg-[#E8FCEB] text-[12px]">
                <p className="bg-[url('../images/davolash/sand-clock.png')] bg-no-repeat w-[16px] h-5"></p>
                <BsClock className="text-[#1BB7B5] " />
                <p className="dark:text-[#1B3B3C]">12:00</p>
                <p className="text-[#86BC8E]  ">2 {t("account:num_drug")}</p>
                <RxDotFilled className="text-[#1BB7B5]" />
                <p className="text-[#86BC8E] ">{t("account:belly")}</p>
              </div>
            </div>

            <div
              className="border  shadow-[0px_6px_16px] shadow-[#EFF4F4] rounded-[12px] p-3 flex flex-col w-[305px] ml-4 cursor-pointer"
              onClick={showFormBtn}
            >
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
                <p className="dark:text-[#1B3B3C]">12:00</p>
                <p className="text-[#B48C8C]  ">2 {t("account:num_drug")}</p>
                <RxDotFilled className="text-[#B48C8C]" />
                <p className="text-[#B48C8C] ">{t("account:belly")}</p>
              </div>

              <div className="flex items-center mb-3 rounded-[8px] px-2 h-[42px] justify-between  bg-[#E8FCEB] text-[12px]">
                <p className="bg-[url('../images/davolash/sand-clock.png')] bg-no-repeat w-[16px] h-5"></p>
                <BsClock className="text-[#1BB7B5] " />
                <p className="dark:text-[#1B3B3C]">12:00</p>
                <p className="text-[#86BC8E]  ">2 {t("account:num_drug")}</p>
                <RxDotFilled className="text-[#1BB7B5]" />
                <p className="text-[#86BC8E] ">{t("account:belly")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Davolash;
