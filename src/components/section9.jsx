import React from "react";
import { sections } from "../data";

function Section9(props) {
  return (
    <>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 p-2">
        {/* CEO Card */}
        <div className="flex flex-col md:flex-row rounded-3xl shadow-black bg-white shadow-lg h-auto  ">
          <img
            src="/Antwan-CEO.jpg"
            alt="Antwan McFadzean"
            className=" w-80 h-80 md:w-60 md:h-60  object-cover rounded-xl"
          />
          <div className="p-3 flex flex-col justify-center">
            <h1 className="text-2xl pb-2 text-blue-950 font-serif font-bold">
              Antwan McFadzean
            </h1>
            <h3 className="text-blue-950 pb-2 font-serif">CEO & FOUNDER</h3>
            <p className="text-black text-sm md:text-base">
              I’m Antwan, CEO of Element Perfect Center, a Belize-based call
              center. With expertise in management, finance, and customer
              service, I drive success by overseeing operations and optimizing
              financial strategies. I’m dedicated to continuous learning and
              bring fresh insights to our work. Beyond business, I enjoy
              basketball and cherish my family. Let’s collaborate for your
              success!
            </p>
          </div>
        </div>

        {/* COO Card */}
        <div className="flex flex-col md:flex-row rounded-3xl shadow-black bg-white shadow-lg h-auto  p-5">
          <img
            src="/Chloe-COO.jpg"
            alt="Chloe McFadzean"
            className="w-full md:w-40 h-40 md:h-full object-cover rounded-xl"
          />
          <div className="p-3 flex flex-col justify-center">
            <h1 className="text-2xl pb-2 text-blue-950 font-serif font-bold">
              Chloe McFadzean
            </h1>
            <h3 className="text-blue-950 pb-2 font-serif">COO & CO-FOUNDER</h3>
            <p className="text-black text-sm md:text-base">
              I’m Chloe Mcfadzean, COO, and Co-founder of Element Perfect Center
              (EPC). With years of experience in management, payroll, HR, and
              automation, I contribute to EPC’s success. Outside work, I love
              dogs, cherish family, and am happily married to Antwan, the
              Founder of EPC.!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section9;
