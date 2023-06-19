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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { resolve } from "styled-jsx/css";
import LiveSearch from "@/components/Davolash/LiveSearch";
import { useGlobalContext } from "@/context";
import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["add", "account"])),
    },
  };
}

function Add() {
  const { t } = useTranslation();
  const router = useRouter();
  const [drugsNum, setDrugsNum] = useState(4);
  const [numberEatDrug, setNumberEatDrug] = useState([1]);
  const { choosenPill } = useGlobalContext();
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      pill: "",
      times: [],
      quantity: "",
      type: "",
      period: "",
      extraInformation: "",
    },
  });
  const { fields } = useFieldArray({
    control,
    name: "times",
  });
  const handleExit = () => {
    router.pathname = "";
  };
  let newArray = [];

  const onSubmit = async (e, data) => {
    console.log(data);
    let token = localStorage.getItem("token");
    const response = await fetch("https://vitainline.uz/api/v1/healings", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    // console.log(response.status);
  };

  const AddClock = () => {
    let id = new Date().getTime();
    numberEatDrug.push(id);
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

  const ChangeLangBtn = (e) => {
    let lang = e.target.value;
    if (lang === "ru") {
      router.push("/ru/account/patsient/davolash/add");
    } else {
      window.location.pathname = "/account/patsient/davolash/add";
    }
  };

  useEffect(() => {
    setDrugsNum(drugsNum);
  }, [drugsNum]);

  return (
    <div className=" min-h-[100vh] bg-[#F7FEFE]">
      <div className="w-[1035px] mx-auto">
        {/* head */}
        <div className="flex h-[60px] pt-9 justify-between">
          <div className="flex">
            <Image
              src={img}
              width={50}
              height={50}
              className="w-auto h-auto"
              alt="logo"
            />
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

        <Formik initialValues={{ drugs: ["paresatomol"] }}>
          {({ values }) => (
            <Form
              action=""
              method="post"
              id="healing-add"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <FieldArray
                name="drugs"
                render={(arrayHelpers) => (
                  <div>
                    <div className="bg-white border border-[#D7E6E7] rounded-[24px] mt-6">
                      <div className="flex justify-between mt-7 mb-3">
                        <div className="flex items-center">
                          <button
                            className="flex dark:text-[#1B3B3C] items-center ml-[40px] py-1 bg-[#F8FCFC] border rounded-[12px] w-[188px] font-[500]"
                            onClick={GoToBackBtn}
                          >
                            <BsArrowLeft className="mx-3" />{" "}
                            {t("account:go_back_btn")}
                          </button>
                          <h3 className="text-[24px] ml-[18px] text-[#1B3B3C]">
                            {t("add:add_tool")}
                          </h3>
                        </div>
                        <div className="mr-10 flex items-center">
                          <button
                            onClick={onSubmit}
                            type="submit"
                            className="px-[30px] bg-[#1BB7B5] py-2 text-white rounded-[12px] flex items-center"
                          >
                            <BsCheck2 className="mr-3" />
                            {t("add:save")}
                          </button>
                        </div>
                      </div>
                      {values.drugs && values.drugs.length > 0
                        ? values.drugs.map((drug, index) => (
                            <div
                              className="mx-6 mt-10 rounded-[18px] border  border-[#D7E6E7] relative"
                              key={index}
                            >
                              <div className="text-left flex ">
                                <div className="text-[14px] pl-5 text-[#759495] rounded-tl-[18px]  font-[400] w-[200px] border border-[#D7E6E7] p-2 ">
                                  {t("add:tool")}
                                </div>
                                <div
                                  className="text-[14px] text-[#759495] font-[400] border border-[#D7E6E7] w-[200px] flex items-center p-2"
                                  type="button"
                                >
                                  {t("add:how_much")}
                                  <button
                                    className=" w-7 h-7 bg-[#1BB7B5] rounded-[8px] ml-3 flex items-center justify-center"
                                    onClick={AddClock}
                                  >
                                    <GoPlus className=" text-white " />
                                  </button>
                                </div>
                                <div className="text-[14px] text-[#759495] font-[400] w-[150px] p-2 border border-[#D7E6E7]">
                                  {t("add:num_eat")}
                                </div>
                                <div className="text-[14px] text-[#759495] font-[400] w-[150px] p-2 border border-[#D7E6E7]">
                                  {t("add:schedule_eat")}
                                </div>
                                <div className="text-[14px] text-[#759495] font-[400] w-[120px] p-2 border border-[#D7E6E7]">
                                  <p className="w-[90px]">{t("add:time")}</p>
                                </div>
                                <div className="text-[14px] text-[#759495] font-[400] w-[200px] rounded-tr-[18px] p-2 border border-[#D7E6E7]">
                                  {t("add:additional_info")}
                                </div>
                              </div>
                              <button
                                type="button"
                                className="absolute pl-1  ml-auto w-6 h-6 top-[-7px] right-[-7px] bg-white text-[#759495] rounded-[40px] border border-[#D7E6E7]  "
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                <RxCross2 />
                              </button>
                              <div className="text-left flex min-h-[250px]">
                                <div className="text-[14px] text-[#759495] rounded-bl-[18px]  font-[400] w-[200px] border border-[#D7E6E7] p-2 ">
                                  <LiveSearch />
                                </div>

                                <div className="flex flex-col text-[14px] text-[#759495] font-[400] border border-[#D7E6E7] w-[200px]   items-center p-2">
                                  {numberEatDrug.map((item, index) => {
                                    return (
                                      <div className="my-3" key={item}>
                                        <div className="flex items-center">
                                          <p className="mr-1">
                                            {index + 1}-{t("add:first_num")}
                                          </p>
                                          <div className="border border-[#D7E6E7] rounded-[12px] w-[77px] h-[34px] flex  justify-around items-center">
                                            <BsClock className="text-[#1BB7B5]" />
                                            {fields.map((field, index) => {
                                              <input
                                                name="times"
                                                type="time"
                                                key={field.id}
                                                {...register(
                                                  `times.${index}.value`
                                                )}
                                                className="w-9 h-3  outline-none dark:bg-white dark:text-black placeholder:text-[#C5D7D8]"
                                              />;
                                            })}
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
                                  <p
                                    {...register("quantity")}
                                    className="mx-2 text-[#1B3B3C] mt-1"
                                  >
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
                                        name="type"
                                        {...register("Ovqaydan oldin")}
                                        className=" dark:border-[#D7E6E7] brightness-150 active:brightness-150  hover:brightness-150 "
                                      />
                                      <label
                                        htmlFor="radio1"
                                        className="ml-1 dark:text-[#1B3B3C]"
                                      >
                                        {t("add:before_eat")}
                                      </label>
                                    </div>
                                    <div className="border border-[#D7E6E7] mt-3 p-1 rounded-xl">
                                      <input
                                        type="radio"
                                        id="radio2"
                                        {...register("Ovqatdan keyin")}
                                        name="type"
                                        className=" brightness-150  p-2 after:w-2 after:h-2 active:brightness-150  hover:brightness-150"
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
                                <div className="text-[14px] text-[#759495] font-[400] w-[120px] p-2 border border-[#D7E6E7]">
                                  <input
                                    type="text"
                                    placeholder={t("add:days")}
                                    name="period"
                                    {...register("period")}
                                    className="outline-none dark:bg-white dark:text-black p-2 border border-[#D7E6E7] rounded-xl w-[100%]"
                                  />
                                </div>
                                <div className="text-[14px] text-[#759495] font-[400]  p-2 w-[200px] rounded-br-[18px]  border border-[#D7E6E7]">
                                  <textarea
                                    name="extraInformation"
                                    rows={4}
                                    {...register("extraInformation")}
                                    className="border w-[170px] dark:bg-white dark:text-black rounded-xl p-1 border-[#D7E6E7] resize-none outline-none "
                                    placeholder={t("add:add_info_input")}
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          ))
                        : ""}
                      <button
                        type="button"
                        className="bg-[#1BB7B5] text-white rounded-[12px] w-[170px] ml-5 mb-8 mt-2 p-2"
                        onClick={() => arrayHelpers.push("")}
                      >
                        + {t("add:add_again")}
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
