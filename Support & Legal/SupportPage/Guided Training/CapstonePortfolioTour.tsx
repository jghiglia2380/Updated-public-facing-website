import React, { useState, useEffect, useRef } from "react";

// Portfolio sections data
const sections = [
  {
    id: "intro",
    title: "Welcome to Your Portfolio Showcase",
    content: "This guided tour walks through the comprehensive student portfolio built across PFL Academy. It's designed to help students reflect on their growth and prepare for interviews, applications, and real-world opportunities.",
    icon: "📋"
  },
  {
    id: "career",
    title: "Career Planning & Goals",
    content: "Students select a long-term career path, define SMART goals, and plan key milestones with the Career Path Planner. These goals appear on their resume and help shape educational choices.",
    icon: "🚀"
  },
  {
    id: "education",
    title: "FAFSA & Education Financing",
    content: "Through the FAFSA Navigator, students walk through a real scenario of applying for federal aid. They also compare student loan options and create an education budget aligned with income outlook.",
    icon: "🎓"
  },
  {
    id: "banking",
    title: "Banking & Accounts",
    content: "Students compare checking accounts, open a mock account, and practice managing funds — including auto-pay, deposits, and balance tracking. These habits are documented in account reflections.",
    icon: "🏦"
  },
  {
    id: "investing",
    title: "Investment Strategy",
    content: "Using the Investing Skill Builder, students experiment with stocks, ETFs, and diversification. They also record risk tolerance and investment goals — all included in a personal finance summary.",
    icon: "📈"
  },
  {
    id: "protection",
    title: "Insurance & Fraud Protection",
    content: "Students explore renter's insurance, auto coverage, and identity protection. Their choices and rationale are included in the portfolio for real-world preparedness.",
    icon: "🛡️"
  },
  {
    id: "credit",
    title: "Credit & Debt Management",
    content: "From choosing a first credit card to learning about debt snowballs, credit knowledge is tracked through simulations and reflections. These entries show students understand how to manage credit responsibly.",
    icon: "💳"
  },
  {
    id: "resume",
    title: "Final Resume",
    content: "The resume pulls from the entire course — career goals, job experiences, and accomplishments from simulations. Students can download a polished PDF resume from the builder and use it anywhere\!",
    icon: "📄"
  },
  {
    id: "summary",
    title: "Capstone Summary",
    content: "This comprehensive portfolio tells a student's financial literacy story — and it's just getting started. Whether applying for jobs, scholarships, or reflecting on progress, the portfolio demonstrates real-world skills.",
    icon: "✨"
  },
];

export function CapstonePortfolioTour() {
  const [step, setStep] = useState(0);
  const currentRef = useRef(null);

  useEffect(() => {
    if (currentRef.current) {
      currentRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [step]);

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Capstone Portfolio Tour
        </h3>
        <p className="text-gray-600">
          Explore how students build and present their financial literacy journey through PFL Academy's comprehensive portfolio.
        </p>
      </div>

      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(step / (sections.length - 1)) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Start</span>
          <span>Portfolio Complete</span>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={step === index ? currentRef : null}
            className={`p-6 bg-white border-l-4 rounded-lg mb-4 transition-all duration-300 ${
              step === index
                ? "border-indigo-600 shadow-md transform scale-[1.02]"
                : "border-gray-200 opacity-0 h-0 m-0 p-0 overflow-hidden"
            }`}
          >
            <div className="flex items-start">
              <span className="text-3xl mr-4">{section.icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => setStep((s) => Math.max(s - 1, 0))}
          disabled={step === 0}
          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded disabled:opacity-50 hover:bg-gray-50 transition"
        >
          ← Previous
        </button>
        <span className="text-sm text-gray-500">
          {step + 1} of {sections.length}
        </span>
        <button
          onClick={() => setStep((s) => Math.min(s + 1, sections.length - 1))}
          disabled={step === sections.length - 1}
          className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50 hover:bg-indigo-700 transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
