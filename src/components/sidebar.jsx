import React from "react";

const Sidebar = ({ sections, activeId, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:w-1/4 bg-white md:border-r md:min-h-screen">
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={`ps-3 w-full md:w-[337px] py-3 cursor-pointer hover:bg-orange-100 transition relative
              ${
                activeId === section.id
                  ? "bg-orange-100 text-orange-600 font-semibold"
                  : ""
              }`}
            onClick={() => onSelect(section.id)}
          >
            {/* Active Orange Line */}
            {activeId === section.id && (
              <span className="absolute left-0 top-0 h-full w-1 bg-orange-600 rounded-r-md transition-all duration-300"></span>
            )}
            {section.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
