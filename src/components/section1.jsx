import React from "react";
function Section1(props) {
  return (
    <>
      <div className="flex flex-col   mt-11 items-center  justify-center">
        <h1 className=" md:text-4xl  text-blue-950 font-serif font-bold">
          Providing Quality Call Solutions
        </h1>
        <div className="w-32 md:w-64 h-1 mt-4 mb-3 bg-orange-500 "></div>
        <p className="text-center">
          We deliver reliable, professional call solutions <br /> to help your
          business succeed.{" "}
        </p>
      </div>

      {/* cards */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
        <div
          id="card1"
          className="card relative shadow-md p-6  text-center overflow-hidden"
        >
          <img
            src="/step4.png"
            alt="Global service"
            className="w-16 h-16 object-contain mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-blue-900">
            Global service
          </h3>
          <p className="text-sm text-gray-600">
            Embrace the rhythm of progress in our modern world.
          </p>
        </div>

        <div
          id="card2"
          className="seccard relative  shadow-md p-6 text-center overflow-hidden"
        >
          <img
            src="/step3.png"
            alt="24/7 Support"
            className="w-16 h-16 object-contain mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-blue-900">24/7 Support</h3>
          <p className="text-sm text-gray-600">
            Round-the-clock support for your success journey.
          </p>
        </div>

        <div
          id="card3"
          className="card relative shadow-md p-6 text-center overflow-hidden"
        >
          <img
            src="/step2.png"
            alt="Team support"
            className="w-16 h-16 object-contain mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-blue-900">Team support</h3>
          <p className="text-sm text-gray-600">
            Empowering success with an awesome work team.
          </p>
        </div>

        <div
          id="card4"
          className="card relative shadow-md p-6 text-center overflow-hidden"
        >
          <img
            src="/step.png"
            alt="Changing Landscape"
            className="w-16 h-16 object-contain mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-blue-900">
            Changing Landscape
          </h3>
          <p className="text-sm text-gray-600">
            Stay ahead in the ever-changing landscape of the modern world.
          </p>
        </div>
      </div>
    </>
  );
}
export default Section1;
