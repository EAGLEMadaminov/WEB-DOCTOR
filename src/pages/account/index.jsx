import React, { useState } from "react";
import Image from "next/image";
import img from "../../images/cite-logo.png";
import { FiChevronDown } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { MdOutlineBadge } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["register", "account"])),
    },
  };
}
function Account() {
  const { t } = useTranslation();
  const router = useRouter();
  const url = router.pathname;
  const [showInfo, setShowInfo] = useState(true);
  const [langValue, setLangValue] = useState("");
  if (url === "/ru/account") {
    setLangValue("ru");
  }
  const EnterPatsientBtn = () => {
    router.push("account/patsient");
  };

  const handleExit = () => {
    window.location.pathname = "";
  };

  const ChangeLangBtn = (e) => {
    let lang = e.target.value;
    if (lang === "ru") {
      router.push("/ru/account");
    } else {
      window.location.pathname = "/account";
    }
  };
  return (
    <div className="h-[110vh]  bg-[#F7FEFE]">
      <div className="lg:w-[1035px] w-[300px] sm:w-[500px] md:w-[800px]  mx-auto">
        {/* head */}
        <div className="flex h-[60px] pt-9 justify-center md:justify-between flex-wrap mb-4 items-center">
          <div className="flex">
            <Image src={img} width={50} height={50} alt="site logo" />
            <p className="text-black font-[500]">
              Vita in <span className="text-[#57D0CF]">line</span>
            </p>
          </div>
          <div className="flex ">
            <div className="flex w-[111px] h-[36px] items-center dark:text-[#1B3B3C] relative justify-between border border-[#D7E6E7] px-2 rounded-[12px]">
              <CiGlobe className="text-[#1BB7B5] text-xl" />
              <select
                onChange={ChangeLangBtn}
                value={langValue}
                style={{ WebkitAppearance: "none" }}
                className="outline-none  bg-[#F5FAFB]  px-2 absolute ml-7 pr-10  bg-transparent font-[500] "
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
              </select>
              <FiChevronDown className="text-xl " />
            </div>
            <button
              onClick={handleExit}
              className="w-[200px]  ml-[18px] flex py-[5px]  px-[18px]items-center h-[36px] text-[#FF0000] border rounded-[12px] border-[#D7E6E7]"
            >
              <RxExit className="mx-2 my-auto" /> {t("account:exit_account")}
            </button>
          </div>
        </div>

        {/* body  */}
        <div className="bg-white border border-[#D7E6E7] rounded-[24px] mt-6">
          <div className="flex justify-between">
            <div className="bg-[url('../images/account/account-left.png')] bg-no-repeat  ml-[107px] w-[168px] h-[278px]"></div>

            <div className="text-center">
              <div className="w-[130px] mx-auto h-[130px] relative mt-[65px] rounded-[130px] border  place-items-center border-[#D7E6E7]  bg-[url('../images/account/account-person.png')] bg-no-repeat bg-bottom"></div>
              <p className="text-[18px] text-[#759495] text-center">
                {t("account:major_doctor")}
              </p>
              <h2 className="text-[32px] text-[#1B3B3C] text-center">
                {t("account:doctor_name")}
              </h2>
            </div>

            <div className="bg-[url('../images/account/account-right.png')] bg-no-repeat w-[207px] h-[271px] mt-10 mr-16"></div>
          </div>

          <div className="flex justify-between flex-wrap">
            <div className="lg:w-[458px] w-[300px] mdw-[350px] ml-10 flex sm:px-1 px-4 py-2 border border-[#E9F6F7] rounded-[18px] bg-[#F8FEFE]">
              <div className="w-14 h-14 bg-[#E9F9FB] bg-center rounded-[56px] bg-[url('../images/account/suitcase.png')] bg-no-repeat ">
                <span className="block "></span>
              </div>
              <div className="ml-[18px] text-[#759495]">
                <p>{t("register:job_place")}</p>
                <h3 className="text-[20pz] text-[#1B3B3C]">
                  Medline Farg’ona filiali
                </h3>
              </div>
            </div>

            <div className="w-[300px] md:w-[350px] lg:w-[458px] mr-10 flex px-4 py-2 border border-[#E9F6F7] rounded-[18px] bg-[#F8FEFE]">
              <div className="w-14 h-14 bg-[#E9F9FB] flex items-center justify-center rounded-[56px]  ">
                <MdOutlineBadge className="text-2xl text-[#1BB7B5]" />
                <span className="block "></span>
              </div>
              <div className="ml-[18px] text-[#759495]">
                <p>{t("register:position")}</p>
                <h3 className="text-[20pz] text-[#1B3B3C]">
                  Bosh vrach kardiolog
                </h3>
              </div>
            </div>
          </div>

          <div className="mx-10">
            <h2 className="font-[500] text-[24px] text-[#1B3B3C] ">
              {t("account:pattsient_btn")}
            </h2>
            <div className="flex items-end">
              <form
                action=""
                onClick={(e) => e.preventDefault()}
                className="flex items-end flex-wrap sm:items-center justify-center"
              >
                <div className="flex flex-col">
                  <label className="text-[#759495] mb-[10px]" htmlFor="date">
                    {t("account:birth_date")}
                  </label>
                  <input
                    type="text"
                    name="date"
                    placeholder="06.05.2023"
                    className="lg:w-[305px] w-[220px] border dark:text-black outline-none dark:bg-white bg-[#F8FCFC] p-2 border-[#D7E6E7] rounded-[12px]"
                  />
                </div>
                <div className="flex flex-col ml-5">
                  <label
                    className="text-[#759495] mb-[10px]"
                    htmlFor="passport"
                  >
                    {t("account:passport")}
                  </label>
                  <input
                    type="text"
                    placeholder="AA7707787"
                    className="lg:w-[305px] w-[220px] border outline-none bg-[#F8FCFC] p-2 dark:bg-white dark:text-black border-[#D7E6E7] rounded-[12px]"
                  />
                </div>
                {showInfo ? (
                  <button
                    className="text-white ml-5 p-2  justify-between flex w-[220px] lg:w-[300px] rounded-[12px] mt-3  bg-gradient-to-t from-[#1BB7B5] to-[#0EC5C9] font-[500] hover:bg-gradient-to-t hover:from-[#0F9694] hover:to-[#0A7476]"
                    onClick={EnterPatsientBtn}
                  >
                    {t("account:pattsient_btn")}
                    <BsArrowRight className="text-2xl " />
                  </button>
                ) : (
                  ""
                )}
              </form>
            </div>
            {showInfo ? (
              <div className="flex items-center my-5">
                <IoMdPerson className="text-[#759495]" />
                <p className="ml-3 text-[#1B3B3C]">
                  Eshonov Fakhriyor Farxodbek o&apos;g&apos;li
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
