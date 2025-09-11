import React from "react";
import "../components/slider.css";

const logos = [
  "/Direct-Solar-2.png",
  "/EBI-Main-V1_Logo-2.png",
  "/Google.jpg",
  "/RidgelineWealthGroup-B11copy2-1.png",
  "/zoom.jpg",
  "/Direct-Solar-2.png",
  "/EBI-Main-V1_Logo-2.png",
  "/Google.jpg",
  "/RidgelineWealthGroup-B11copy2-1.png",
  "/zoom.jpg",
];

function LogoSlider() {
  return (
    <div className="w-full mt-6 bg-white overflow-hidden">
      <div className="flex animate-scroll">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-44 h-28 flex items-center justify-center mx-6"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="max-h-30 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoSlider;
