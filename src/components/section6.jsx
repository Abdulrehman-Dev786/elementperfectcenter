import React from "react";
import { FaGlobe, FaGithub, FaRecordVinyl, FaLanguage } from "react-icons/fa";
import { MdOutlinePriceChange, MdSupportAgent } from "react-icons/md";
import { IoSpeedometerSharp } from "react-icons/io5";
import { SlCamrecorder } from "react-icons/sl";
import { ImUsers } from "react-icons/im";

function Section6() {
  const boxData = [
    {
      number: "01",
      title: "Strategic Geographic Advantage",
      description:
        "Situated in Belize, Element Perfect Center enjoys a strategic geographical edge. With an English-speaking workforce, cultural alignment with Western markets, and proximity to major North American business centers, we offer seamless communication, cultural understanding, and real-time collaboration on a global scale.",
      icon: <FaGlobe />,
    },
    {
      number: "02",
      title: "Cutting-Edge Technology Integration",
      description:
        "WWe leverage advanced communication systems, CRM software, and analytics tools to enhance efficiency, productivity, and service quality. Our tech integration optimizes call routing, streamlines customer interactions, and provides data-driven insights for continual improvement.",
      icon: <FaGithub />,
    },
    {
      number: "03",
      title: "Proven Expertise and Track Record",
      description:
        "With a proven track record and industry expertise, we excel as a trusted outsourcing partner. Our seasoned professionals, continuous training, and innovative approach drive success and deliver exceptional results for clients, making us the preferred choice for reliable and results-oriented call center services.",
      icon: <FaRecordVinyl />,
    },
    {
      number: "04",
      title: "Language Proficiency and Cultural Alignment",
      description:
        "Our team comprises native English speakers who not only excel in language proficiency but also understand Western business norms. This combination fosters stronger connections, leading to enhanced customer satisfaction, improved rapport, and superior customer experiences.",
      icon: <FaLanguage />,
    },
    {
      number: "05",
      title: "Cost-Effective Operations",
      description:
        "Our location in Belize allows us to offer cost-effective services without compromising quality. Lower operational costs, competitive pricing, and efficient resource management translate to substantial savings for clients while maintaining top-tier service standards.Optimize your budget without compromising service quality...",
      icon: <MdOutlinePriceChange />,
    },
    {
      number: "06",
      title: "24/7 Support",
      description:
        "Element Perfect Center provides round-the-clock support, ensuring that clients receive assistance and solutions whenever they need them. Our team is available day and night, guaranteeing seamless operations and uninterrupted service delivery.",
      icon: <MdSupportAgent />,
    },
    {
      number: "07",
      title: "Tailored Solutions for Varied Needs",
      description:
        "At Element Perfect Center, we recognize the unique requirements of each client. Whether it’s customer support, technical aid, telemarketing, or back-office support, our customized solutions align with client objectives, ensuring optimal outcomes and value delivery.",
      icon: <IoSpeedometerSharp />,
    },
    {
      number: "08",
      title: "Compliance and Security Focus",
      description:
        "Element Perfect Center prioritizes regulatory compliance, data protection, and ethical standards. Robust cybersecurity measures, legal adherence, and quality assurance protocols ensure the security, confidentiality, and integrity of client data, fostering trust and credibility.e your budget without compromising service quality...",
      icon: <SlCamrecorder />,
    },
  ];

  return (
    <div className='bg-[url("/pngtree-simple-simple-concise-navy-blue-image_8355.jpg")] bg-cover bg-center bg-no-repeat py-16 mt-6 px-6 text-white'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Grid Box - Text and Button */}
        <div className=" rounded-md  col-span-1">
          <h3 className="text-orange-400 text-lg font-semibold mb-2">
            Why choose Us
          </h3>
          <h1 className="text-5xl  font-semibold font-sans">
            Unmatched Call <br /> Center Solutions
          </h1>
          <div className="w-32 md:w-32 h-1 mt-4 mb-3 bg-orange-500 "></div>
          <p className="text-white/80 text-base mb-6">
            At our call center, we pride ourselves on delivering unmatched
            solutions that set us apart from the competition.
          </p>
          <button className=" text-orange-400 px-4 py-2  hover:bg-orange-400 hover:text-white transition border-orange-500 border-2 ">
            Read More
          </button>
        </div>

        {/* Other Grid Boxes */}
        {boxData.map((box, index) => (
          <div id="numberhover" key={index} className=" p-1   ">
            <div className="flex items-center rounded-md border-b-4 border-orange-400 bg-blue-900 h-20 justify-between mb-3">
              <span id="number" className="text-3xl ps-4  ">
                {box.number}
              </span>
              <span className="text-5xl text-white pe-4">{box.icon}</span>
            </div>
            <h3 className="font-bold text-2xl text-gray-200 mb-2 ">
              {box.title}
            </h3>
            <p className="font-semibold font-serif text-gray-200">
              {box.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex mt-9 justify-center">
        <div className="rounded-md w-full flex flex-col items-center group">
          <div className="flex items-center rounded-md w-[300px] md:w-[620px] border-b-4 border-orange-400 bg-blue-900 h-20 justify-between mb-3">
            {/* Pehla span (number) */}
            <span
              id="number"
              className="text-3xl ps-4   font-bold transition-colors duration-300 group-hover:text-orange-400"
            >
              09
            </span>

            {/* Dusra span (icon) */}
            <span className="text-5xl text-white pe-4 animate-bounce-on-hover group-hover:animate-bounce-on-hover">
              <ImUsers />
            </span>
          </div>

          <div className="text-start">
            <h1 className="font-bold text-2xl text-gray-200 mb-2">
              Strategic Geographic Advantage
            </h1>
            <p className="text-base mb-6 mt-3 font-semibold">
              Situated in Belize, Element Perfect Center enjoys a strategic
              geographical edge. With an <br /> English-speaking workforce,
              cultural alignment with Western markets, and proximity to <br />{" "}
              major North American business centers, we offer seamless
              communication, cultural <br /> understanding, and real-time
              collaboration on a global scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
