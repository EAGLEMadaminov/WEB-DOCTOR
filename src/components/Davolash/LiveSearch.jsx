import React, { use, useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { useGlobalContext } from "@/context";
import { Field } from "formik";

function LiveSearch({ data }) {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setIsOpen] = useState(false);
  const { setChoosenPill } = useGlobalContext();
  console.log("ok");
  setChoosenPill(selected);
  data = selected;
  useEffect(() => {
    fetch("https://vitainline.uz/api/v1/pills")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div className="w-100% font-medium">
      <div
        className="bg-white w-full p-2 flex items-center rounded-[12px] border"
        onClick={() => setIsOpen(!open)}
      >
        <BiChevronDown size={20} className={`${open ? "rotate-180" : ""}`} />
        <p
          className={`text-[#1B3B3C] ml-2 font-[400]  ${
            selected && "text-black "
          }`}
        >
          {selected
            ? selected.length > 15
              ? selected.substring(0, 15) + "..."
              : selected
            : " Tanlang"}
        </p>
      </div>
      <ul
        className={`bg-white mt-2  overflow-y-auto ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <GoSearch size={14} />
          <input
            type="text"
            placeholder="Qidiruv"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            className="outline-none w-[130px] placeholder:text-gray-300 font-[400] p-2"
          />
        </div>
        {countries?.data?.map((item) => {
          return (
            <Field key={item.title}>
              {({ form }) => {
                const { values } = form;
                let num = values.healings.length - 1;
                values.healings[num].pill = selected;
                return (
                  <li
                    key={item.title}
                    className={`text-[#1B3B3C] font-[400] text-[14px] p-2 border-b-[1px] border-[#E9F6F6] hover:bg-sky-600 hover:text-white 
              ${
                item.title.toLowerCase() === selected.toLowerCase() &&
                "bg-sky-600 text-white"
              } ${
                      item.title.toLowerCase().startsWith(inputValue)
                        ? "block "
                        : "hidden"
                    }`}
                    onClick={() => {
                      if (item.title.toLowerCase() !== selected.toLowerCase()) {
                        setSelected(item.title);
                        setIsOpen(false);
                        setInputValue("");
                      }
                    }}
                  >
                    {item.title}
                  </li>
                );
              }}
            </Field>
          );
        })}
      </ul>
    </div>
  );
}

export default LiveSearch;
