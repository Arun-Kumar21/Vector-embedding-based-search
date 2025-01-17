import { useState, useEffect } from "react";
import { Check } from "lucide-react";

const steps = [
  { id: 1, name: "Upload Data", status: "current" },
  { id: 2, name: "Processing Data", status: "upcoming" },
  { id: 3, name: "Indexing Data", status: "upcoming" },
  { id: 4, name: "Search Ready", status: "upcoming" },
];

type Status = "completed" | "current" | "upcoming";

export default function ProgressSteps() {
  const [currentStep, setCurrentStep] = useState(0);

  const getStepStatus = (stepIdx: number): Status => {
    if (stepIdx < currentStep) return "completed";
    if (stepIdx === currentStep) return "current";
    return "upcoming";
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-16">
      <nav aria-label="Progress" className="py-8">
        <ol
          role="list"
          className="flex items-center justify-center gap-2 sm:gap-4"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.name} className="flex items-center">
              <div className="relative flex items-center justify-center">
                <span className="absolute -bottom-[2rem] text-xs text-gray-500 whitespace-nowrap">
                  {step.name}
                </span>
                <div
                  className={`
                    h-6 w-6 rounded-full flex items-center justify-center
                    transition-all duration-500 ease-in-out
                    ${
                      getStepStatus(stepIdx) === "completed"
                        ? "bg-green-500 scale-110"
                        : getStepStatus(stepIdx) === "current"
                        ? "bg-black"
                        : "bg-gray-200"
                    }
                  `}
                >
                  {getStepStatus(stepIdx) === "completed" ? (
                    <Check className="h-3 w-3 text-white" />
                  ) : (
                    <span
                      className={`h-3 w-3 rounded-full ${
                        getStepStatus(stepIdx) === "current"
                          ? "bg-white"
                          : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              </div>
              {stepIdx !== steps.length - 1 && (
                <div className="hidden sm:block relative h-0.5 w-16">
                  <div
                    className="absolute inset-0 bg-gray-200"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-green-500 transition-all duration-500 ease-in-out"
                    style={{
                      width: `${
                        getStepStatus(stepIdx) === "completed"
                          ? "100%"
                          : getStepStatus(stepIdx) === "current"
                          ? "50%"
                          : "0%"
                      }`,
                    }}
                    aria-hidden="true"
                  />
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
