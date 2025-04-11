import React from "react";

export function StepProgress({ currentStep, totalSteps, stepTitles }) {
  return (
    <div className="mb-8">
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div 
          className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
        ></div>
      </div>
      
      <div className="hidden md:flex justify-between mb-2">
        {stepTitles.map((title, index) => (
          <div 
            key={index} 
            className={`text-xs font-medium ${
              index <= currentStep ? "text-indigo-700" : "text-gray-400"
            } text-center w-24 truncate px-1`}
          >
            {title}
          </div>
        ))}
      </div>
      
      <div className="md:hidden text-center">
        <p className="text-sm font-medium text-indigo-700">{stepTitles[currentStep]}</p>
        <p className="text-xs text-gray-500">
          Step {currentStep + 1} of {totalSteps}
        </p>
      </div>
    </div>
  );
}
