import React from "react";
import { useGlobalContext } from "@/context";

function KonsultatsiyaModal() {
  const { setKonModal } = useGlobalContext();
  return (
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
  );
}

export default KonsultatsiyaModal;
