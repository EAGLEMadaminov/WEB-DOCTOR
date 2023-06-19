import React, { useState } from "react";
import Image from "next/image";
import img from "../../../../images/cite-logo.png";
import { FiChevronDown } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import DatePicker from "react-datepicker";
import { BiChevronDown } from "react-icons/bi";
import "react-datepicker/dist/react-datepicker.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useGlobalContext } from "@/context";
import KonsultatsiyaModal from "@/components/Konsultatsiya/modal";
import LiveSearch from "@/components/Davolash/LiveSearch";
import { useForm } from "react-hook-form";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["add", "account"])),
    },
  };
}

function Add() {
  const { konModal, setKonModal } = useGlobalContext();
  const { t } = useTranslation();
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [showDrugList, setShowDrgList] = useState(false);
  const [btnBorder, setBtnBorder] = useState("8px");
  const [hideBtnBorder, setHideBtnBorder] = useState("1px");
  const { register, handleSubmit } = useForm();

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
  const onSubmit = (data) => {
    console.log(data);
  };
  const GoToBackBtn = () => {
    router.push("/account/patsient/konsultatsiya");
  };
  const ChangeLangBtn = (e) => {
    let lang = e.target.value;
    if (lang === "ru") {
      router.push("/ru/account/patsient/konsultatsiya/add");
    } else {
      window.location.pathname = "/account/patsient/konsultatsiya/add";
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
            <div className="flex dark:text-[#1B3B3C] w-[111px] h-[36px] items-center relative justify-between border border-[#D7E6E7] px-2 rounded-[12px]">
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
        <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
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
                  {t("add:new_advice")}
                </h3>
              </div>
              <div className="mr-10 flex items-center">
                <button
                  type="submit"
                  className="px-[30px] bg-[#1BB7B5] py-2 text-white rounded-[12px] flex items-center"
                  onClick={() => setKonModal(true)}
                >
                  <BsCheck2 className="mr-3" />
                  {t("add:save")}
                </button>
              </div>
            </div>
            {konModal ? (
              <div className=" z-[3] absolute top-0 left-0 right-0 bottom-0 bg-[#809291]">
                <div className="relative bg-white w-full  md:w-[400px] lg:w-[500px] p-3 lg:p-10 mx-auto mt-[100px] rounded-[18px]">
                  <span className="bg-[url('../images/konsultatsiya/books.png')] bg-no-repeat bg-center mx-auto block w-[100px] h-[100px] rounded-[100px] bg-[#F6FDFE]"></span>
                  <h1 className="text-[32px] font-[500] text-black text-center">
                    Haqiqatan ham ushbu soʻrovni yubormoqchimisiz?
                  </h1>
                  <div className="flex flex-wrap justify-between mt-6">
                    <button
                      className="w-[180px] rounded-[12px] bg-[#F5FEFE] font-[500] text-[#1B3B3C] h-12"
                      onClick={() => setKonModal(false)}
                    >
                      Yo’q
                    </button>
                    <button
                      className="w-[180px] rounded-[12px] font-[500] text-white bg-[#1BB7B5]"
                      onClick={() => setKonModal(false)}
                    >
                      Xa
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="mx-6 mt-10 rounded-[18px] border border-[#D7E6E7] relative">
              <div className="flex">
                <div className="text-[14px] text-[#759495] pl-5 font-[400] border rounded-tl-[18px] border-[#D7E6E7] w-[285px] flex items-center p-2">
                  Doctor turi
                </div>
                <div className="text-[14px] text-[#759495] pl-5 font-[400] border  border-[#D7E6E7] w-[285px] flex items-center p-2">
                  Doctorni tanlang
                </div>
                <div className="text-[14px] text-[#759495] font-[400] border w-[355px]  border-[#D7E6E7]  flex items-center p-2">
                  <p className="ml-4 "> {t("add:when")} </p>
                </div>
                <div className="text-[14px] text-[#759495] font-[400] border w-[380px] rounded-tr-[18px] border-[#D7E6E7]  flex items-center p-2">
                  <p className="ml-4 "> {t("add:additional_info")} </p>
                </div>
              </div>
              <div className="flex bg-[#F8FCFC] rounded-b-[18px] min-h-[300px]">
                <div className="flex flex-col text-[14px] text-[#759495] font-[400] border rounded-bl-[18px] border-[#D7E6E7] w-[300px] pl-5 p-2">
                  <LiveSearch />{" "}
                </div>
                <div className="flex flex-col text-[14px] text-[#759495] font-[400] border rounded-bl-[18px] border-[#D7E6E7] w-[300px] pl-5 p-2">
                  <LiveSearch />{" "}
                </div>

                <div className="border w-[380px] flex items-start justify-center border-[#D7E6E7] ">
                  <div className="flex border border-[#D7E6E7] bg-white mx-2 mt-4 rounded-[12px] p-2">
                    <span className="bg-[url('../images/calendar.png')] bg-no-repeat mx-2 w-[25px] h-[19px] inline-block"></span>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd.MM.yyyy"
                      className="outline-none"
                      {...register("time")}
                    />
                  </div>
                </div>
                <div className="border border-[#D7E6E7] w-[400px] rounded-br-[18px]">
                  <textarea
                    name="addition-info"
                    rows={3}
                    {...register("description")}
                    className="placeholder:text-[#C5D7D8] dark:bg-white dark:text-[#1B3B3C] border w-[250px] mx-4 px-2 mt-4  rounded-xl p-1 border-[#D7E6E7] resize-none outline-none "
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

export default Add;
