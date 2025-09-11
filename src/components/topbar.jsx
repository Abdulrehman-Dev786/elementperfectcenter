import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

function Topbar(props) {
  return (
    <>
      <div className="w-full bg-[#133963] text-white text-sm py-3">
        <div className="text-center mx-auto flex flex-col md:flex-row justify-end items-center md:gap-4 px-3">
          <a
            href="tel:5016213616"
            className="flex items-center gap-2 hover:text-orange-500"
          >
            <FaPhoneAlt className="text-orange-500" />
            <span className="font-serif">Call us:</span> 501-621-3616
          </a>
          <a
            href="mailto:info@elementperfectcenter.com"
            className="flex items-center gap-2 hover:text-orange-500"
          >
            <FaEnvelope className="text-orange-500" />
            <span>Email: info@elementperfectcenter.com</span>
          </a>
          <span className="flex items-center gap-2 hover:text-orange-500">
            <FaClock className="text-orange-500" />
            <span className="font-serif">Working Hours:</span> 7am-7pm
          </span>
        </div>
      </div>
    </>
  );
}
export default Topbar;
