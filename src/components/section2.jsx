import React from "react";

function Section2(props) {
  return (
    <>
      <div className="relative w-full h-[500px]">
        {/* Background Image */}
        <img
          src="callimg (1).png"
          alt="Slide"
          className="w-full h-[500px] object-cover"
        />

        {/* Text Over Image */}
        <div className="absolute inset-0 flex items-center justify-start text-white p-6 font-serif">
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-4xl font-extrabold">
              Let's do <span className="text-orange-600">Support</span> Business
              First <br /> Class Quality
            </h1>
            <br />
            <p>
              We have the best experts to elevate your business to the next
              level.
            </p>
            <br />
            <button className="border border-white px-6 py-2">
              Contect us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section2;
