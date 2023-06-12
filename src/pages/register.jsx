import React, { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useGlobalContext } from "@/context.jsx";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["register", "home"])),
    },
  };
}

export default function Register() {
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState();
  const [inputType, setInputType] = useState("password");
  const [secondInput, setSecondInput] = useState("password");
  const { registerInfo, setRegisterInfo, show, setFormInfo, setShow } =
    useGlobalContext();

  let allData;
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById("form-data"));
    const data = Object.fromEntries(formData);
    setFormInfo(data);
    setShow(true);
  };

  const EnterAppBtn = async (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector("#form-data"));
    const data = Object.fromEntries(formData);
    allData = Object.assign(formInfo, data);
    setRegisterInfo(allData);

    const response = await fetch(
      "https://vitainline.uz/api/v1/auth/signup/doctor",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allData),
      }
    );

    const info = await response.json();
    if (response.status == 201) {
      localStorage.setItem("id", info.data.id);
      window.location.pathname = "account";
    }
  };

  useEffect(() => {
    setRegisterInfo(allData);
    console.log(registerInfo);
  }, [registerInfo]);

  return (
    <div className="bg-[#F7FEFE] flex justify-center  h-[115vh] dark:bg-[#F7FEFE]">
      <form className="mt-[20px] text-[12px]" id="form-data">
        <div className="w-[300px] md:w-[350px] lg:w-[450px] ">
          <h1 className="text-[24px] text-center font-[500] text-[#1B3B3C] ">
            {t("register:register_list")}
          </h1>
          <p className="text-[#759495] text-center">{t("register:top_info")}</p>
          {show ? (
            <div className="">
              <div className="flex w-10 mx-auto justify-between">
                <span className="rounded-[50px]  border border-[#D7E6E7] w-[16px] h-[16px] "></span>
                <span className="rounded-[50px] bg-[#1BB7B5] border-[#1BB7B5] border w-[16px]  h-[16px]"></span>
              </div>

              <label htmlFor="password" className=" text-[#759495] ">
                {t("home:parol")}
              </label>
              <div className="mb-3 mt-2 border relative border-[#D7E6E7] rounded-[12px]">
                <input
                  name="password"
                  className=" w-full p-2 rounded-[12px] dark:bg-white dark:text-black"
                  type={inputType}
                  placeholder="************"
                  autoComplete="off"
                  required
                />
                <span
                  onClick={() => {
                    inputType === "password"
                      ? setInputType("text")
                      : setInputType("password");
                  }}
                  className="bg-[url('../images/glass.png')] mb-1 w-[22px] bg-no-repeat h-[14px] absolute right-4 top-3"
                ></span>
              </div>
              <label htmlFor="password" className="  mb-2 text-[#759495]">
                {t("register:password_again")}
              </label>
              <div className="mt-2 border relative border-[#D7E6E7] rounded-[12px]">
                <input
                  name="password"
                  className=" w-full p-2 rounded-[12px] dark:bg-white dark:text-black"
                  type={secondInput}
                  placeholder="************"
                  autoComplete="off"
                  required
                />
                <span
                  onClick={() => {
                    secondInput === "password"
                      ? setSecondInput("text")
                      : setSecondInput("password");
                  }}
                  className="bg-[url('../images/glass.png')] w-[22px] h-[14px] absolute right-4 top-3 bg-no-repeat"
                ></span>
              </div>
              <button
                className="text-white w-full rounded-[12px] text-[16px] mt-3 py-2 bg-gradient-to-t from-[#1BB7B5] to-[#0EC5C9] font-[500] hover:bg-gradient-to-t hover:from-[#0F9694] hover:to-[#0A7476]"
                onClick={EnterAppBtn}
              >
                {t("register:bottom_btn")}
              </button>
            </div>
          ) : (
            <div className="">
              <div className="flex w-10 mx-auto justify-between">
                <span className="rounded-[50px] bg-[#1BB7B5] border-[#1BB7B5] border w-[16px]  h-[16px]"></span>
                <span className="rounded-[50px]  border border-[#D7E6E7] w-[16px] h-[16px] "></span>
              </div>
              <div className="w-full flex flex-col text-[12px] dark:text-[#759495] dark:bg-[#F7FEFE]">
                <label htmlFor="user-info" className="text-[12px] mt-3 ">
                  {t("register:fish")}
                </label>
                <input
                  type="text"
                  name="fullname"
                  required
                  placeholder={t("register:name_input")}
                  className="w-full outline-none rounded-[12px] boder-[#D7E6E7] border p-2 bg-[#F8FCFC] focus:bg-white focus:border-[#C5D7D8] dark:bg-white dark:text-black"
                />
                <label htmlFor="data" className="mt-3 ">
                  {t("register:birth_date")}
                </label>
                <div className="w-full rounded-[12px] flex relative items-center dark:bg-white  border p-2 bg-[#F8FCFC] active:bg-white focus:border-[#C5D7D8] ">
                  <span className="bg-[url('../images/calendar.png')] mx-2 w-[25px] h-[19px] inline-block"></span>
                  <p className="mx-3 dark:text-black">{t("register:choose")}</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    name="birthday"
                    dropdownMode="select"
                    className="bg-[#F8FCFC] dark:bg-white active:bg-white customDatePicker border-none w-full  dark:text-black "
                    customStyles={{ dateInput: { borderWidth: 0 } }}
                  />
                  <BiChevronRight className="text-[18px] ml-auto text-[#759495] " />
                </div>
                <label htmlFor="passport" className="mt-3">
                  {t("register:passport")}
                </label>
                <input
                  type="text"
                  name="passport"
                  required
                  placeholder="(AA 2314658)"
                  className="outline-none rounded-[12px] boder-[#D7E6E7] border p-2 bg-[#F8FCFC] focus:bg-white focus:border-[#C5D7D8] dark:bg-white dark:text-black"
                />
                <label htmlFor="province" className="mt-3">
                  {t("register:cities")}
                </label>
                <select
                  name="province"
                  id=""
                  className="bg-[#F8FCFC] p-2 outline-none border rounded-[12px] boder-[#D7E6E7] dark:bg-white dark:text-black"
                >
                  <option value="tosh">{t("register:tashkent")}</option>
                  <option value="and">{t("register:andijon")}</option>
                  <option value="bux">{t("register:buxoro")}</option>
                  <option value="far">{t("register:fargana")}</option>
                  <option value="jiz">{t("register:jizax")}</option>
                  <option value="xor">{t("register:xorazm")}</option>
                  <option value="nam">{t("register:namangan")}</option>
                  <option value="nav">{t("register:navoiy")}</option>
                  <option value="qash">{t("register:qash")}</option>
                  <option value="qor">{t("register:qora_qalpoq")}</option>
                  <option value="sam">{t("register:sam")}</option>
                  <option value="sir">{t("register:sirdaryo")}</option>
                  <option value="sur">{t("register:surxon")}</option>
                </select>
                <label htmlFor="specialty" className="mt-3">
                  {t("register:major")}
                </label>
                <input
                  type="text"
                  placeholder={t("register:job")}
                  name="specialty"
                  required
                  className="outline-none rounded-[12px] dark:bg-white dark:text-black boder-[#D7E6E7] border p-2 bg-[#F8FCFC] focus:bg-white focus:border-[#C5D7D8]"
                />
                <label htmlFor="workplace" className="mt-3">
                  {t("register:job_place")}
                </label>
                <input
                  type="text"
                  name="workplace"
                  placeholder={t("register:job_place_input")}
                  required
                  className="outline-none rounded-[12px] dark:bg-white dark:text-black boder-[#D7E6E7] border p-2 bg-[#F8FCFC] focus:bg-white focus:border-[#C5D7D8]"
                />
                <label htmlFor="position" className="mt-3">
                  {t("register:position")}
                </label>
                <input
                  type="text"
                  name="position"
                  required
                  className="outline-none dark:bg-white dark:text-black rounded-[12px] boder-[#D7E6E7] border p-2 bg-[#F8FCFC] focus:bg-white focus:border-[#C5D7D8]"
                />
                <label htmlFor="phone-num">{t("register:phone")}</label>
                <div className="  rounded-[12px] boder-[#D7E6E7] dark:text-black border p-2 bg-[#F8FCFC] focus:bg-white focus:border-[#C5D7D8]">
                  +998
                  <input
                    type="number"
                    name="phone"
                    required
                    placeholder="-- --- -- --"
                    className="outline-none dark:bg-white dark:text-black bg-[#F8FCFC] focus:bg-white focus:border-[#C5D7D8]"
                  />
                </div>
                <button
                  onClick={formSubmit}
                  className="text-white rounded-[12px] text-[16px] mt-3 py-2 bg-gradient-to-t from-[#1BB7B5] to-[#0EC5C9] font-[500] hover:bg-gradient-to-t hover:from-[#0F9694] hover:to-[#0A7476]"
                >
                  {t("register:bottom_btn")}
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
