import React, { useState } from "react";

export function CareerPathTour({ skillBuilder }) {
  const [currentStep, setCurrentStep] = useState(0);
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Guided Career Path Planner Tour
        </h3>
        <p className="text-gray-600">
          Follow along as we demonstrate how students build comprehensive career plans.
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          {skillBuilder.sections[currentStep].title}
        </h4>
        
        <div className="space-y-4">
          {Object.entries(skillBuilder.sections[currentStep].categories).map(([id, category]) => (
            <div key={id} className="bg-white p-4 rounded shadow-sm">
              <h5 className="font-medium text-indigo-700 mb-2">{category.label}</h5>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>-- Select goal --</option>
                {category.options.map(option => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between mt-6">
        <button 
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-500">
          {currentStep + 1} of {skillBuilder.sections.length}
        </span>
        <button 
          onClick={() => setCurrentStep(Math.min(skillBuilder.sections.length - 1, currentStep + 1))}
          disabled={currentStep === skillBuilder.sections.length - 1}
          className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      
      <div className="text-center text-sm text-gray-500 italic mt-4">
        Demo automatically advances every few seconds
      </div>
    </div>
  );
}
