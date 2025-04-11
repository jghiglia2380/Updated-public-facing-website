import React, { useState, useEffect } from "react";

// Tour step interface
interface TourStep {
  element: string;
  title: string;
  description: string;
  position: string;
}

export function W4FormTour() {
  const [currentStep, setCurrentStep] = useState(0);
  const [tooltipVisible, setTooltipVisible] = useState(true);

  // Define all tour steps
  const tourSteps: TourStep[] = [
    {
      element: "#scenario-section",
      title: "Practice Scenario",
      description: "This section provides the information you'll use to complete the W-4 form. For this exercise, you'll use the details of Alex Johnson who is starting a new job.",
      position: ""
    },
    {
      element: "#form-header",
      title: "Form Header",
      description: "This is the official IRS W-4 form header. The W-4 is used by employers to determine how much federal income tax to withhold from your paycheck.",
      position: ""
    },
    {
      element: "#personal-info-section",
      title: "Step 1: Personal Information",
      description: "Enter your personal identification information here, including your name, Social Security Number, and address. This information must match your Social Security card.",
      position: ""
    },
    {
      element: "#filing-status-section",
      title: "Filing Status",
      description: "Select your tax filing status. This significantly affects your tax withholding. For Alex Johnson, you should select \"Single or Married filing separately\" since the scenario states he is single.",
      position: ""
    },
    {
      element: "#multiple-jobs-section",
      title: "Step 2: Multiple Jobs",
      description: "Check this box if you have more than one job or if you're married filing jointly and your spouse works. This helps ensure enough tax is withheld. For Alex, you would leave this unchecked since he only has one job.",
      position: ""
    },
    {
      element: "#dependents-section",
      title: "Step 3: Claim Dependents",
      description: "Claim qualifying children and other dependents here. Each dependent reduces your withholding. Alex has no dependents, so you should leave all fields blank or enter zero.",
      position: ""
    },
    {
      element: "#adjustments-section",
      title: "Step 4: Other Adjustments",
      description: "This optional section allows you to account for additional income, deductions, or extra withholding. For most new employees like Alex, this section can be left blank.",
      position: ""
    },
    {
      element: "#signature-section",
      title: "Step 5: Sign Here",
      description: "Your signature certifies that all information provided is accurate. Be sure to sign and date the form before giving it to your employer.",
      position: ""
    },
    {
      element: "#employer-section",
      title: "Employer Section",
      description: "This section is completed by your employer, not by you. It includes the employer's name, address, EIN (Employer Identification Number), and your first day of employment.",
      position: ""
    },
    {
      element: "#form-container",
      title: "Complete Form",
      description: "Now that you understand each section of the W-4, you would complete the form according to your particular situation and submit it to your employer. Remember that you can file a new W-4 whenever your personal or financial situation changes.",
      position: ""
    }
  ];

  const totalSteps = tourSteps.length;

  // Effect to scroll the highlighted element into view
  useEffect(() => {
    const step = tourSteps[currentStep];
    const targetElement = document.querySelector(step.element);
    
    // Remove existing highlights and add new one
    const existingHighlights = document.querySelectorAll('.tour-highlight');
    existingHighlights.forEach(highlight => {
      highlight.classList.remove('tour-highlight', 'pulse');
    });
    
    if (targetElement) {
      targetElement.classList.add('tour-highlight', 'pulse');
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [currentStep]);

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleClose = () => {
    setTooltipVisible(false);
    
    // Remove all highlights
    const highlights = document.querySelectorAll('.tour-highlight');
    highlights.forEach(highlight => {
      highlight.classList.remove('tour-highlight', 'pulse');
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      {/* Tour Progress Indicator */}
      {tooltipVisible && (
        <div className="fixed top-24 right-6 bg-white px-4 py-2 rounded-full shadow-md z-50 text-sm">
          Tour: {currentStep + 1} of {totalSteps}
        </div>
      )}
      
      {/* Tour Controls */}
      {tooltipVisible && (
        <div className="fixed bottom-6 right-6 flex gap-3 z-50">
          <button 
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-indigo-600 text-white rounded disabled:bg-indigo-300 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button 
            onClick={handleNext}
            disabled={currentStep === totalSteps - 1}
            className="px-4 py-2 bg-indigo-600 text-white rounded disabled:bg-indigo-300 disabled:cursor-not-allowed"
          >
            Next
          </button>
          <button 
            onClick={handleClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Close Tour
          </button>
        </div>
      )}
      
      {/* Tooltip that follows current highlight */}
      {tooltipVisible && (
        <div className="tour-tooltip fixed z-50 bg-indigo-700 text-white p-3 rounded-lg shadow-lg max-w-xs" style={{
          top: `calc(50% + 100px)`,
          left: `calc(50% - 140px)`,
        }}>
          <h3 className="font-bold mb-2">{tourSteps[currentStep].title}</h3>
          <p className="text-sm">{tourSteps[currentStep].description}</p>
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          W-4 Form Skill Builder
        </h3>
        <p className="text-gray-600">
          Learn how to complete a W-4 form to properly set up tax withholding from your paycheck.
        </p>
      </div>
      
      {/* Practice Scenario Section */}
      <div className="scenario-container mb-8" id="scenario-section">
        <h2 className="text-xl font-bold mb-4">Practice Scenario</h2>
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Use the following information to complete the form:</h3>
          <div className="md:flex md:gap-8">
            <div className="space-y-2 mb-4 md:mb-0">
              <p><span className="font-semibold">Name:</span> Alex Johnson</p>
              <p><span className="font-semibold">Address:</span> 123 Main Street, Anytown, OH 12345</p>
              <p><span className="font-semibold">SSN:</span> 123-45-6789</p>
              <p><span className="font-semibold">Filing Status:</span> Single</p>
            </div>
            <div className="space-y-2">
              <p><span className="font-semibold">Annual Income:</span> $42,000</p>
              <p><span className="font-semibold">Multiple Jobs:</span> No</p>
              <p><span className="font-semibold">Dependents:</span> None</p>
              <p><span className="font-semibold">Guidance:</span> New job, first time filing W-4</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-blue-700">
            <p>Note: Complete the form based on this fictitious scenario to practice correct withholding setup.</p>
          </div>
        </div>
      </div>
      
      {/* Form Container */}
      <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md" id="form-container">
        {/* W-4 Form Header */}
        <div className="flex border-b border-gray-300 p-4" id="form-header">
          <div className="w-1/4 pr-4 border-r border-gray-300">
            <div className="flex items-baseline gap-2">
              <span className="text-sm">Form</span>
              <span className="text-4xl font-bold">W-4</span>
            </div>
            <div className="text-[10px] leading-tight mt-1">
              Department of the Treasury<br />
              Internal Revenue Service
            </div>
          </div>
          <div className="w-1/2 px-4 border-r border-gray-300">
            <div className="text-center">
              <div className="font-bold text-lg">Employee's Withholding Certificate</div>
              <div className="text-xs mt-1 leading-tight">
                Complete Form W-4 so that your employer can withhold the correct federal income tax from your pay.<br />
                Give Form W-4 to your employer.<br />
                Your withholding is subject to review by the IRS.
              </div>
            </div>
          </div>
          <div className="w-1/4 pl-4 text-right">
            <div className="text-xs">OMB No. 1545-0074</div>
            <div className="mt-1">
              <span className="text-2xl font-bold tracking-wider">2025</span>
            </div>
          </div>
        </div>
        
        {/* Step 1: Personal Information */}
        <div className="p-4 border-t border-gray-300" id="personal-info-section">
          <div className="font-bold flex items-center mb-2">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-600 text-white rounded-full mr-2 text-sm">1</span>
            <span>Personal Information</span> 
            <span className="text-sm text-gray-500 ml-2">(a) First name and middle initial</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input type="text" placeholder="First name" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div>
              <input type="text" placeholder="Last name" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div>
              <input type="text" placeholder="Social Security Number" className="w-full border border-gray-300 p-2 rounded" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-sm mb-1">Address</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Street address" />
            </div>
            <div>
              <label className="block font-medium text-sm mb-1">City, State, ZIP</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="City, State ZIP" />
            </div>
          </div>
          <div className="mt-4" id="filing-status-section">
            <div className="font-bold mb-2">(b) Social security number</div>
            <div className="font-bold mb-2">(c) Filing status (check only ONE box)</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="flex items-center">
                <input type="radio" id="single" name="filingStatus" className="mr-2" />
                <label htmlFor="single">Single or Married filing separately</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="married" name="filingStatus" className="mr-2" />
                <label htmlFor="married">Married filing jointly</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="head" name="filingStatus" className="mr-2" />
                <label htmlFor="head">Head of household</label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 2: Multiple Jobs */}
        <div className="p-4 border-t border-gray-300" id="multiple-jobs-section">
          <div className="font-bold flex items-center">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-600 text-white rounded-full mr-2 text-sm">2</span>
            <span>Multiple Jobs or Spouse Works</span>
          </div>
          <div className="mt-2 bg-gray-100 p-3 rounded">
            <p className="text-sm">Complete this step if you (1) hold more than one job at a time, or (2) are married filing jointly and your spouse also works. The correct amount of withholding depends on income earned from all of these jobs.</p>
            <div className="mt-3">
              <div className="flex items-start">
                <input type="checkbox" id="multipleJobs" className="mt-1 mr-2" />
                <label htmlFor="multipleJobs" className="text-sm">
                  Check this box if there are only two jobs total. Do the same on Form W-4 for the other job.
                </label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 3: Dependents */}
        <div className="p-4 border-t border-gray-300" id="dependents-section">
          <div className="font-bold flex items-center">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-600 text-white rounded-full mr-2 text-sm">3</span>
            <span>Claim Dependents</span>
          </div>
          <div className="mt-2">
            <p className="text-sm mb-3">If your total income will be $200,000 or less ($400,000 or less if married filing jointly):</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-sm mb-1">Multiply the number of qualifying children under age 17 by $2,000</label>
                <div className="flex items-center">
                  <span className="mr-2">$</span>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                </div>
              </div>
              <div>
                <label className="block font-medium text-sm mb-1">Multiply the number of other dependents by $500</label>
                <div className="flex items-center">
                  <span className="mr-2">$</span>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label className="block font-medium text-sm mb-1">Add the amounts above for qualifying children and other dependents</label>
              <div className="flex items-center">
                <span className="mr-2">$</span>
                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 4: Other Adjustments */}
        <div className="p-4 border-t border-gray-300" id="adjustments-section">
          <div className="font-bold flex items-center">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-600 text-white rounded-full mr-2 text-sm">4</span>
            <span>Other Adjustments (Optional)</span>
          </div>
          <div className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium text-sm mb-1">(a) Other income (not from jobs)</label>
                <div className="flex items-center">
                  <span className="mr-2">$</span>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="0" />
                </div>
              </div>
              <div>
                <label className="block font-medium text-sm mb-1">(b) Deductions</label>
                <div className="flex items-center">
                  <span className="mr-2">$</span>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="0" />
                </div>
              </div>
              <div>
                <label className="block font-medium text-sm mb-1">(c) Extra withholding per pay period</label>
                <div className="flex items-center">
                  <span className="mr-2">$</span>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 5: Sign Here */}
        <div className="p-4 border-t border-gray-300" id="signature-section">
          <div className="font-bold flex items-center">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-600 text-white rounded-full mr-2 text-sm">5</span>
            <span>Sign Here</span>
          </div>
          <div className="mt-2">
            <p className="text-sm mb-3">Under penalties of perjury, I declare that this certificate, to the best of my knowledge and belief, is true, correct, and complete.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-sm mb-1">Employee's signature</label>
                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
              </div>
              <div>
                <label className="block font-medium text-sm mb-1">Date</label>
                <input type="date" className="w-full border border-gray-300 p-2 rounded" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Employer Section */}
        <div className="p-4 border-t border-gray-300 bg-gray-50" id="employer-section">
          <div className="font-bold mb-3">Employers Only</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium text-sm mb-1">Employer's name and address</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div>
              <label className="block font-medium text-sm mb-1">First date of employment</label>
              <input type="date" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div>
              <label className="block font-medium text-sm mb-1">Employer identification number (EIN)</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Submit Form
        </button>
      </div>
      
      {/* CSS styles for tour */}
      <style jsx>{`
        .tour-highlight {
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.6);
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          z-index: 10;
          background-color: rgba(255, 255, 255, 1);
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
          100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
        }
        
        .pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}