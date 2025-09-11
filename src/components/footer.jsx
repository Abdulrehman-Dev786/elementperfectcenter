// Footer.jsx
import { Phone, MapPin } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#133963] font-semibold font-serif mt-11 md:pt-10  text-white">
      <div className="mx-auto  p-4   grid md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="mb-10">
          <div className="flex items-start ">
            <div className="  bg-transparent">
              <img src="footerlogo.PNG" alt="" />
            </div>
          </div>
          <p className="text-md leading-relaxed">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            genration.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-md font-semibold hover:underline"
          >
            Get in Touch →
          </a>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-lg font-bold mb-3  inline-block">
            BUSINESS HOURS
          </h3>
          <div className="w-24 md:w-24 h-1  mb-3 bg-orange-500 "></div>
          <p>
            <span className="font-semibold">Opening Days :</span>
            <br />
            Monday – Saturday: 7pm to 7pm
          </p>
          <p className="mt-3">
            <span className="font-semibold">Vacations :</span>
            <br />
            All Sunday Days <br /> All Official Holidays
          </p>
        </div>

        {/* Practice Areas */}
        <div>
          <h3 className="text-lg font-bold mb-3  inline-block">
            PRACTICE AREAS
          </h3>
          <div className="w-24 md:w-24 h-1  mb-3 bg-orange-500 "></div>
          <ul className="space-y-2">
            {[
              "Home",
              "About",
              "Why Belize",
              "Careers",
              "Services",
              "Pricing",
              "Blog",
              "Contact Us",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm hover:text-orange-400 flex items-center"
                >
                  <span className="mr-2 text-orange-500 ">›</span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="font-semibold  font-serif">
          <h3 className="text-lg font-semibold mb-3  inline-block">
            GET IN TOUCH
          </h3>
          <div className="w-24 md:w-24 h-1  mb-3 bg-orange-500 "></div>
          <p className="flex items-start mb-3 text-sm">
            <MapPin className="w-7 h-7 mr-2 mb-3 mt-1 text-orange-400" />
            <span className="text-orange-500 md:text-white">
              55 Churchill Street, Benque Viejo del Carmen, Cayo, Belize.
            </span>
          </p>
          <p className="flex items-center mb-3 text-sm">
            <Phone className="w-5 h-5 mr-2 text-orange-400" />
            +501 621 - 3616
          </p>
          <p className="text-sm mb-11">
            Don’t miss to subscribe to our news feeds, kindly fill the form
            below.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 w-full rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-orange-400 px-4 rounded-r-md">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <hr className="bg-white" />

      {/* Bottom Bar */}
      <div className="bg-[#133963] flex justify-between p-3 *:text-[15px]  items-center text-center text-sm">
        <div className="font-semibold font-serif">Element Perfect Center</div>
        <div>
          © 2024{" "}
          <span className="font-semibold font-serif">
            Element Perfect Center All rights reserved.
          </span>{" "}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
