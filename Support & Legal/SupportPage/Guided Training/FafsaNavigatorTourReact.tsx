
import React, { useState, useEffect, useRef } from "react";

const tourSteps = [
  {
    id: "scenario",
    label: "Scenario",
    tooltip: "Let's begin by reviewing Jacob's example scenario.",
  },
  {
    id: "citizenship",
    label: "Citizenship",
    tooltip: "Next, we review his citizenship and dependency status.",
  },
  {
    id: "parent-info",
    label: "Parent Info",
    tooltip: "Now let's check in on parental information and education.",
  },
  {
    id: "income",
    label: "Income",
    tooltip: "We'll review the household income for FAFSA reporting.",
  },
  {
    id: "benefits",
    label: "Benefits",
    tooltip: "This section covers untaxed income and benefits.",
  },
  {
    id: "signature",
    label: "Sign & Submit",
    tooltip: "Finally, the signature and submission summary.",
  },
];

export default function FafsaNavigatorTourReact() {
  const [step, setStep] = useState(0);
  const currentRef = useRef(null);

  useEffect(() => {
    if (currentRef.current) {
      currentRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [step]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10 text-sm text-gray-800">
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 text-yellow-800 text-sm rounded">
        ⚠️ <strong>Practice Only:</strong> This guided FAFSA walkthrough is based on fictional examples. It does not collect or store personal information.
      </div>

      {tourSteps.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          ref={step === index ? currentRef : null}
          className={`p-6 bg-white border-l-4 ${
            step === index ? "border-blue-500 ring-4 ring-blue-300 rounded" : "border-gray-200"
          }`}
        >
          <h3 className="text-lg font-semibold mb-2">{section.label}</h3>
          <p>{section.tooltip}</p>
        </div>
      ))}

      <div className="flex justify-between items-center mt-10">
        <button
          disabled={step === 0}
          onClick={() => setStep((s) => s - 1)}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded disabled:opacity-50"
        >
          ← Back
        </button>
        <span className="text-xs text-gray-500">
          Step {step + 1} of {tourSteps.length}
        </span>
        <button
          disabled={step === tourSteps.length - 1}
          onClick={() => setStep((s) => s + 1)}
          className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
