import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black">
      <div className=" mx-auto px-4">
        <div className="flex justify-between items-center h-22">
          {/* Brand */}

          <img
            className="w-10 h-10 md:w-20 md:h-20"
            src="mainlogo.PNG"
            alt=""
          />

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 *:font-serif">
            <a
              href="#"
              className="border-r-2 pe-3 border-black text-orange-500 "
            >
              Home
            </a>
            <a
              href="#"
              className=" border-r-2 pe-3 border-black hover:text-orange-500"
            >
              About
            </a>
            <a
              href="#"
              className=" border-r-2 pe-3 border-black hover:text-orange-500"
            >
              Why Belize
            </a>
            <a
              href="#"
              className=" border-r-2 pe-3 border-black hover:text-orange-500"
            >
              Careers
            </a>
            <a
              href="#"
              className=" border-r-2 pe-3 border-black hover:text-orange-500"
            >
              Service
            </a>
            <a
              href="#"
              className=" border-r-2 pe-3 border-black hover:text-orange-500"
            >
              Blog
            </a>
            <a
              href="#"
              className=" border-r-2 pe-3 border-black hover:text-orange-500"
            >
              Contact
            </a>
            <a href="#" className="">
              Careers
            </a>
          </div>
          <button className="hidden md:flex  items-center gap-2 bg-orange-400 text-white px-4 py-2 ">
            Book A Call! <FaArrowRight />
          </button>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2">
          <a href="#" className="  pe-3 border-black text-orange-500 ">
            Home
          </a>
          <a
            href="#"
            className=" block pe-3 border-black hover:text-orange-500"
          >
            About
          </a>
          <a
            href="#"
            className=" block pe-3 border-black hover:text-orange-500"
          >
            Why Belize
          </a>
          <a
            href="#"
            className=" block pe-3 border-black hover:text-orange-500"
          >
            Careers
          </a>
          <a
            href="#"
            className=" block pe-3 border-black hover:text-orange-500"
          >
            Service
          </a>
          <a
            href="#"
            className=" block pe-3 border-black hover:text-orange-500"
          >
            Blog
          </a>
          <a
            href="#"
            className=" block pe-3 border-black hover:text-orange-500"
          >
            Contact
          </a>
          <a href="#" className=" block">
            Careers
          </a>
        </div>
      )}
    </nav>
  );
}

export default MainNavbar;
