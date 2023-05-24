import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Register() {
  const [startDate, setStartDate] = useState();
  const [inputType, setInputType] = useState("password");
  const [secondInput, setSecondInput] = useState("password");
  const [show, setShow] = useState(false);

  const EnterAppBtn = (e) => {
    e.preventDefault();
    window.location.pathname = "account";
  };

  const handleClick = () => {
    setShow(true);
  };
  return (
    <div className="bg-[#F7FEFE] flex justify-center h-[100vh]">
      <div className="w-[450px]  ">
        <h1 className="text-[24px] text-center font-[500] text-[#1B3B3C]">
          Ro’yxatdan <span className="text-[#1BB7B5]">o’tish</span>
        </h1>
        <p className="text-[#759495]">
          Iltimos ro’yxatdan o’tish uchun quyidagi maydonlarni to’ldiring!
        </p>
        {show ? (
          <div className="">
            <div className="flex w-10 mx-auto justify-between">
              <span className="rounded-[50px]  border border-[#D7E6E7] w-[16px] h-[16px] "></span>
              <span className="rounded-[50px] bg-[#1BB7B5] border-[#1BB7B5] border w-[16px]  h-[16px]"></span>
            </div>
            <form
              method="post"
              action="httms://hecho.htmlacademy.ru"
              className="mt-[20px] text-[12px]"
            >
              <label htmlFor="password" className=" text-[#759495]">
                Parol
              </label>
              <div className="mb-3 mt-2 border relative border-[#D7E6E7] rounded-[12px]">
                <input
                  name="password"
                  className=" w-full p-2 rounded-[12px]"
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
                Parolni qaytaring
              </label>
              <div className="mt-2 border relative border-[#D7E6E7] rounded-[12px]">
                <input
                  name="password"
                  className=" w-full p-2 rounded-[12px]"
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
                Davom etish
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex w-10 mx-auto justify-between">
              <span className="rounded-[50px] bg-[#1BB7B5] border-[#1BB7B5] border w-[16px]  h-[16px]"></span>
              <span className="rounded-[50px]  border border-[#D7E6E7] w-[16px] h-[16px] "></span>
            </div>
            <form
              action="https://echo.htmlacademy.ru"
              method="POST"
              className="w-full flex flex-col text-[12px]"
              onSubmit={handleClick}
            >
              <label htmlFor="user-info" className="text-[12px] mt-3">
                FISH
              </label>
              <input
                type="text"
                required
                placeholder="(Eshonov Fakhriyor Farxodbekogli)"
                className="w-full outline-none rounded-[12px] boder-[#D7E6E7] border p-2 bg-[#F8FCFC] focus:bg-white focus:border-[#C5D7D8]"
              />
              <label htmlFor="data" className="mt-3">
                Tug’ilgan sana
              </label>
              <div className="w-full rounded-[12px] flex relative items-center  border p-2 bg-[#F8FCFC] active:bg-white focus:border-[#C5D7D8] ">
                <span className="bg-[url('../images/calendar.png')] mx-2 w-[25px] h-[19px] inline-block"></span>
                <p className="mx-3">Tanlang</p>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="bg-[#F8FCFC] customDatePicker border-none w-full "
                  customStyles={{ dateInput: { borderWidth: 0 } }}
                />
                <BiChevronRight className="text-[18px] ml-auto text-[#759495] " />
              </div>
              <label htmlFor="passport" className="mt-3">
                Passport seriya va raqami
              </label>
              <input
                type="text"
                name="passport"
                required
                placeholder="(AA 2314658)"
                className="outline-none rounded-[12px] boder-[#D7E6E7] border p-2 bg-[#F8FCFC] focus:bg-white focus:border-[#C5D7D8]"
              />
              <label htmlFor="city" className="mt-3">
                Viloyat
              </label>
              <select
                name="city"
                id=""
                className="bg-[#F8FCFC] p-2 outline-none border rounded-[12px] boder-[#D7E6E7] "
              >
                <option value="tosh">Toshkent</option>
                <option value="and">Andijon</option>
                <option value="bux">Buxoro</option>
                <option value="far">Farg&apos;ona</option>
                <option value="jiz">Jizzax</option>
                <option value="xor">Xorazm</option>
                <option value="nam">Namangan</option>
                <option value="nav">Navoiy</option>
                <option value="qash">Qashqadaryo</option>
                <option value="qor">Qoraqalpog&apos;iston</option>
                <option value="sam">Samarqand</option>
                <option value="sir">Sirdaryo</option>
                <option value="sur">Surxondaryo</option>
              </select>
              <label htmlFor="major" className="mt-3">
                Mutaxasisligi
              </label>
              <input
                type="text"
                placeholder="(Kardiolog)"
                name="major"
                required
                className="outline-none rounded-[12px] boder-[#D7E6E7] border p-2 bg-[#F8FCFC] focus:bg-white focus:border-[#C5D7D8]"
              />
              <label htmlFor="work-place" className="mt-3">
                Ish joyingiz
              </label>
              <input
                type="text"
                name="work-place"
                placeholder="(ishsiz)"
                required
                className="outline-none rounded-[12px] boder-[#D7E6E7] border p-2 bg-[#F8FCFC] focus:bg-white focus:border-[#C5D7D8]"
              />
              <label htmlFor="degree" className="mt-3">
                Lavozim
              </label>
              <input
                type="text"
                name="degree"
                required
                className="outline-none rounded-[12px] boder-[#D7E6E7] border p-2 bg-[#F8FCFC] focus:bg-white focus:border-[#C5D7D8]"
              />
              <label htmlFor="phone-num">Telefon raqamingiz</label>
              <div className="  rounded-[12px] boder-[#D7E6E7] border p-2 bg-[#F8FCFC] focus:bg-white focus:border-[#C5D7D8]">
                +998
                <input
                  type="number"
                  name="phone-num"
                  required
                  placeholder="-- --- -- --"
                  className="outline-none bg-[#F8FCFC] focus:bg-white focus:border-[#C5D7D8]"
                />
              </div>
              <button
                type="submit"
                className="text-white rounded-[12px] text-[16px] mt-3 py-2 bg-gradient-to-t from-[#1BB7B5] to-[#0EC5C9] font-[500] hover:bg-gradient-to-t hover:from-[#0F9694] hover:to-[#0A7476]"
                // onClick={handleClick}
              >
                Davom etish
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
