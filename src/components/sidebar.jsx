import React from "react";

const Sidebar = ({ sections, activeId, onSelect }) => {
  return (
    <div className="grid grid-cols-2  w-full  md:w-1/4 bg-white md:border-r md:min-h-screen">
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={`ps-3 w-[380px] md:w-[337px] py-3 cursor-pointer hover:bg-gray-100 transition ${
              activeId === section.id
                ? "bg-orange-100 text-orange-600 border-r-2 border-orange-600 font-semibold"
                : ""
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
