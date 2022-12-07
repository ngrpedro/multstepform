import React from "react";

const Steps = ({ currentStep }) => {
  return (
    <div>
      <div className="flex items-center justify-between w-full gap-4">
        <div>
          <h1 className="font-bold text-lg">
            <span className="py-[10px] px-4 rounded-md bg-orange-500 text-white mr-3">
              1
            </span>
            Sing Up
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-lg">
            <span
              className={`py-[10px] px-4 rounded-md mr-3 border border-orange-500 ${
                currentStep >= 1 ? "bg-orange-500 text-white" : ""
              }`}
            >
              2
            </span>
            Tell Us
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-lg">
            <span
              className={`py-[10px] px-4 rounded-md mr-3 border border-orange-500 ${
                currentStep >= 2 ? "bg-orange-500 text-white" : ""
              }`}
            >
              3
            </span>
            Tanks for that!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Steps;
