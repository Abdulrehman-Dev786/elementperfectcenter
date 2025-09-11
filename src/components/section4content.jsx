import React from "react";
// section+sidebar+data.jsx
const Content = ({ section }) => {
  if (!section) return null;

  return (
    <div className=" w-full grid grid-cols-1 lg:grid-cols-2 md:w-3/4 p-6">
      <img
        src={section.image}
        alt={section.title}
        className="rounded-md mb-6 w-80 h-[450px]"
      />
      <div className="h-96  flex flex-col  justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {section.heading}
        </h2>
        <p className="text-gray-600 mb-4">{section.description}</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {section.toolsTitle}
        </h3>
        <p className="text-gray-600">{section.toolsDesc}</p>
      </div>
    </div>
  );
};

export default Content;
