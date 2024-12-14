import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineCircle } from "react-icons/md";

const steps = [
  { label: "Preliminary", completed: true },
  { label: "Your Details", completed: true },
  { label: "KYC", completed: true },
  { label: "Parties", completed: false },
  { label: "Claim", completed: false },
  { label: "Review", completed: false },
  { label: "Payment", completed: false },
];

const Progressbar = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full px-4 py-4">
      <div className="flex justify-center overflow-x-auto">
        <div className="flex items-center gap-4 md:gap-6 whitespace-nowrap">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActiveStep(index)}
            >
              <div className="flex items-center">
                <h1
                  className={`font-black text-sm md:text-lg flex items-center ${
                    index <= activeStep ? "text-black" : "text-slate-400"
                  }`}
                >
                  {index + 1}
                  <p
                    className={`text-xs md:text-sm ml-2 ${
                      index <= activeStep ? "text-slate-500" : "text-slate-400"
                    }`}
                    style={{ fontWeight: "500" }}
                  >
                    {step.label}
                  </p>
                </h1>
              </div>
              <div className="flex items-center">
                {index <= activeStep ? (
                  <IoIosCheckmarkCircle className="text-blue-500 w-6 h-6 md:w-8 md:h-8" />
                ) : (
                  <MdOutlineCircle
                    className={`${
                      index <= activeStep ? "text-blue-500" : "text-blue-200"
                    } w-6 h-6 md:w-8 md:h-8`}
                  />
                )}
                {index < steps.length - 1 && (
                  <hr
                    className={`w-20 md:w-32 hidden md:block ${
                      index < activeStep
                        ? "border-blue-500"
                        : "border-blue-200"
                    }`}
                  />
                )}
              </div>
              {index === activeStep && (
                <p
                  className={`text-xs md:text-sm ${
                    index <= activeStep ? "text-slate-500" : "text-slate-400"
                  }`}
                  style={{ fontWeight: "500" }}
                >
                  (Approx 5 Min)
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
