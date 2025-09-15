import React from "react";

const Sidebar = ({ sections, activeId, onSelect }) => {
  return (
    <div className="flex w-full  md:w-1/4 bg-white ">
      <ul >
        {sections.map((section) => (
          <li
            key={section.id}
            className={`ps-3 w-[315px] md:w-[336px] py-3 text-[#133963] font-bold font-serif cursor-pointer border-r-4 hover:bg-gray-100 transition ${
              activeId === section.id ? "bg-orange-100 text-orange-700 border-r-2 border-orange-600 font-semibold" : ""
            }`}
            onClick={() => onSelect(section.id)}
          >
            {section.title}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;