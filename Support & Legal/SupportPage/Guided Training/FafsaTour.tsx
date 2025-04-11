import React, { useState } from "react";

export function FafsaTour({ steps }) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          FAFSA Navigator Tour
        </h3>
        <p className="text-gray-600">
          Follow along as we demonstrate how students navigate the financial aid application process.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-6">
        <div className="w-full md:w-1/3 pr-0 md:pr-4 mb-4 md:mb-0">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-indigo-700 mb-4">Application Steps</h4>
            <nav className="space-y-2">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-full text-left p-2 rounded ${
                    currentStep === index 
                      ? "bg-indigo-100 text-indigo-700 font-medium" 
                      : "hover:bg-gray-100"
                  }`}
                >
                  {index + 1}. {step.title}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <div className="bg-gray-50 p-6 rounded-lg h-full">
            <h4 className="text-xl font-semibold text-indigo-700 mb-4">{steps[currentStep].title}</h4>
            <div className="mb-6 h-64 bg-gray-200 rounded flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>FAFSA form preview would appear here</p>
              </div>
            </div>
            <p className="text-gray-600">{steps[currentStep].content}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded disabled:opacity-50 hover:bg-gray-50 transition"
        >
          ← Previous
        </button>
        <span className="text-gray-500 text-sm">
          Step {currentStep + 1} of {steps.length}
        </span>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50 hover:bg-indigo-700 transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
