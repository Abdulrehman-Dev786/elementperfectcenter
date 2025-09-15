import React from "react";
// section+sidebar+data.jsx
const Content = ({ section }) => {
  if (!section) return null;

  return (
    <div className="md:flex md:w-3/4 p-6">
      <img
        src={section.image}
        alt={section.title}
        className="rounded-md  w-80 h-[450px]"
      />
      <div className="h-96   flex flex-col  p-4 items-start justify-center">
        <h2 className="text-2xl font-bold text-[#133963] font-serif mb-2">
          {section.heading}
        </h2>
        <p className="text-gray-600 mb-4">{section.description}</p>
        <h3 className="text-2xl font-bold text-[#133963] font-serif mb-2">
          {section.toolsTitle}
        </h3>
        <p className="text-gray-600">{section.toolsDesc}</p>
      </div>
    </div>
  );
};

export default Content;
