import React from "react";

export function Section5(props) {
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-3 *:font-serif gap-3 p-2">
        <div className="flex flex-col h-48 items-center  hover:bg-orange-400 *:hover:text-white justify-center border-blue-900 border-2 transition-all  duration-700 ease-in-out ">
          <h1 className="text-[90px] text-blue-900 font-extrabold">140 +</h1>
          <p className="text-3xl text-blue-900 font-bold">Clients Dialed</p>
        </div>
        <div className="flex flex-col h-48 items-center justify-center  hover:bg-orange-400 *:hover:text-white border-blue-900 border-2  transition-all  duration-700 ease-in-out  ">
          <h1 className="text-[90px] text-blue-900 font-extrabold ">25k</h1>
          <p className="text-3xl text-blue-900 font-bold">Successsful Leads</p>
        </div>
        <div className="flex flex-col h-48 items-center  hover:bg-orange-400 *:hover:text-white justify-center border-blue-900 border-2  transition-all  duration-700 ease-in-out ">
          <h1 className="text-[90px] text-blue-900 font-extrabold">75%</h1>
          <p className="text-3xl text-blue-900 font-bold">Contact Rate</p>
        </div>
      </div>
    </>
  );
}
