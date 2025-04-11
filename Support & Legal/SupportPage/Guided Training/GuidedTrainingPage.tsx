import React, { useState } from 'react';
import { CareerPathTour } from './CareerPathTour';
import { FafsaTour } from './FafsaTour';
import { W4FormTour } from './W4FormTour';

// Skill builder configuration for Career Path component
const careerPathSkillBuilder = {
  sections: [
    {
      id: "short-term",
      title: "Short-Term Goals (0-2 Years)",
      categories: {
        education: {
          label: "Education",
          options: [
            "Attend a trade school",
            "Complete certification program",
            "Enroll in community college",
            "Finish high school diploma",
            "Take online courses",
            "Other (please specify)"
          ]
        },
        workExperience: {
          label: "Work Experience",
          options: [
            "Get a part-time internship",
            "Find an entry-level position",
            "Work in retail or service",
            "Volunteer in related field",
            "Complete job shadowing",
            "Other (please specify)"
          ]
        },
        networking: {
          label: "Networking",
          options: [
            "Join a local networking group",
            "Connect with professionals on LinkedIn",
            "Attend industry meetups",
            "Join student organizations",
            "Find a mentor",
            "Other (please specify)"
          ]
        },
        skillDevelopment: {
          label: "Skill Development",
          options: [
            "Learn Excel or Canva",
            "Develop public speaking skills",
            "Take writing courses",
            "Learn basic coding",
            "Improve time management",
            "Other (please specify)"
          ]
        },
        other: {
          label: "Other Goals",
          options: [
            "Attend a virtual career fair",
            "Create a personal website",
            "Build a professional social media presence",
            "Research target companies",
            "Set up informational interviews",
            "Other (please specify)"
          ]
        }
      }
    },
    {
      id: "mid-term",
      title: "Mid-Term Goals (2-5 Years)",
      categories: {
        education: {
          label: "Education",
          options: [
            "Complete associate's degree",
            "Earn bachelor's degree",
            "Finish advanced certification",
            "Start graduate studies",
            "Complete specialized training",
            "Other (please specify)"
          ]
        },
        workExperience: {
          label: "Work Experience",
          options: [
            "Secure full-time position",
            "Get promoted to team leader",
            "Switch to desired industry",
            "Complete major project",
            "Manage small team",
            "Other (please specify)"
          ]
        },
        networking: {
          label: "Networking",
          options: [
            "Present at industry conference",
            "Join professional association",
            "Build relationship with executives",
            "Create industry connections across companies",
            "Participate in leadership programs",
            "Other (please specify)"
          ]
        },
        skillDevelopment: {
          label: "Skill Development",
          options: [
            "Develop management skills",
            "Master industry software",
            "Learn additional languages",
            "Obtain specialized credentials",
            "Improve financial literacy",
            "Other (please specify)"
          ]
        },
        other: {
          label: "Other Goals",
          options: [
            "Start side business",
            "Establish reputation in field",
            "Publish article or research",
            "Build investment portfolio",
            "Develop emergency savings",
            "Other (please specify)"
          ]
        }
      }
    },
    {
      id: "long-term",
      title: "Long-Term Goals (5+ Years)",
      categories: {
        education: {
          label: "Education",
          options: [
            "Earn master's degree",
            "Complete doctoral program",
            "Obtain executive education",
            "Pursue continuous learning",
            "Reach expert status in field",
            "Other (please specify)"
          ]
        },
        workExperience: {
          label: "Work Experience",
          options: [
            "Reach senior leadership",
            "Achieve specific salary target",
            "Start own business",
            "Become industry thought leader",
            "Lead company division or department",
            "Other (please specify)"
          ]
        },
        networking: {
          label: "Networking",
          options: [
            "Mentor others in field",
            "Lead professional organization",
            "Build international connections",
            "Speak at major conferences",
            "Create professional network group",
            "Other (please specify)"
          ]
        },
        skillDevelopment: {
          label: "Skill Development",
          options: [
            "Develop executive presence",
            "Master strategic planning",
            "Lead organization change",
            "Improve negotiation skills",
            "Develop board-level expertise",
            "Other (please specify)"
          ]
        },
        other: {
          label: "Other Goals",
          options: [
            "Achieve financial independence",
            "Create scholarship or foundation",
            "Write book or major publication",
            "Establish industry award or recognition",
            "Develop retirement plan",
            "Other (please specify)"
          ]
        }
      }
    }
  ]
};

// FAFSa Navigator configuration
const fafsaSteps = [
  {
    title: "Getting Started",
    content: "The FAFSA (Free Application for Federal Student Aid) is the gateway to financial aid for college. Students must complete this form to be eligible for federal grants, work-study, and loans.",
    image: "/assets/fafsa-intro.png"
  },
  {
    title: "Student Information",
    content: "Students provide personal information including legal name, date of birth, social security number, and contact information. This establishes their identity for the application.",
    image: "/assets/fafsa-student-info.png"
  },
  {
    title: "School Selection",
    content: "Students can list up to 10 schools that will receive their FAFSA information. These schools use this data to create financial aid packages for the student.",
    image: "/assets/fafsa-school-selection.png"
  },
  {
    title: "Dependency Status",
    content: "The FAFSA determines if a student is dependent or independent through a series of questions about age, marital status, education level, and other factors.",
    image: "/assets/fafsa-dependency.png"
  },
  {
    title: "Parent Information",
    content: "Dependent students must provide information about their parents' finances, including tax information, assets, and household size.",
    image: "/assets/fafsa-parent-info.png"
  },
  {
    title: "Financial Information",
    content: "Students (and parents if dependent) provide details about income, taxes paid, assets, and untaxed income. The IRS Data Retrieval Tool can automatically transfer tax information.",
    image: "/assets/fafsa-financial.png"
  },
  {
    title: "Sign & Submit",
    content: "Both student and parent (if dependent) must create an FSA ID to electronically sign the FAFSA. After submission, students receive a Student Aid Report (SAR) with their Expected Family Contribution (EFC).",
    image: "/assets/fafsa-submit.png"
  }
];

export default function GuidedTrainingPage() {
  const [activeDemo, setActiveDemo] = useState(null);

  const closeDemo = () => {
    setActiveDemo(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Guided Training</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Learn how to teach financial literacy with confidence using our self-paced training modules and interactive demos.
        </p>
      </section>

      {/* Featured Videos */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Getting Started Video Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 shadow rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">Getting Started for Teachers</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Getting Started for Teachers"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full rounded"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-4 shadow rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">Assigning Lessons & Activities</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Assigning Lessons"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full rounded"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Builder Demos */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Interactive Skill Builder Previews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition duration-200">
            <div className="flex items-center justify-center h-20 w-20 bg-indigo-100 rounded-full mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h4 className="text-indigo-700 font-semibold mb-2 text-center">Career Path Planner</h4>
            <p className="text-gray-600 text-sm mb-4">Experience how students develop personalized career roadmaps with short, mid, and long-term goals.</p>
            <button 
              onClick={() => setActiveDemo('career')}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded shadow hover:bg-indigo-700 transition"
            >
              Try Interactive Demo
            </button>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition duration-200">
            <div className="flex items-center justify-center h-20 w-20 bg-indigo-100 rounded-full mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="text-indigo-700 font-semibold mb-2 text-center">FAFSA Navigator</h4>
            <p className="text-gray-600 text-sm mb-4">See how students learn to navigate the federal aid application process with confidence.</p>
            <button 
              onClick={() => setActiveDemo('fafsa')}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded shadow hover:bg-indigo-700 transition"
            >
              Try Interactive Demo
            </button>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition duration-200">
            <div className="flex items-center justify-center h-20 w-20 bg-indigo-100 rounded-full mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h4 className="text-indigo-700 font-semibold mb-2 text-center">W-4 Form Guide</h4>
            <p className="text-gray-600 text-sm mb-4">Learn how students master filling out a W-4 tax withholding form for their first job.</p>
            <button 
              onClick={() => setActiveDemo('w4')}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded shadow hover:bg-indigo-700 transition"
            >
              Try Interactive Demo
            </button>
          </div>
        </div>
      </section>

      {/* Modal for interactive demos */}
      {activeDemo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {activeDemo === 'career' && 'Career Path Planner Demo'}
                {activeDemo === 'fafsa' && 'FAFSA Navigator Demo'}
                {activeDemo === 'w4' && 'W-4 Form Guide Demo'}
              </h3>
              <button 
                onClick={closeDemo}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              {activeDemo === 'career' && <CareerPathTour skillBuilder={careerPathSkillBuilder} />}
              {activeDemo === 'fafsa' && <FafsaTour steps={fafsaSteps} />}
              {activeDemo === 'w4' && <W4FormTour />}
            </div>
          </div>
        </div>
      )}

      {/* Downloads & Booking */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Resources & Live Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow text-center">
            <div className="flex items-center justify-center h-16 w-16 bg-indigo-100 rounded-full mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-indigo-700 font-semibold mb-2">Downloadable Resources</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="/assets/quick-start-guide.pdf" className="hover:text-indigo-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> Quick Start Guide (PDF)</a></li>
              <li><a href="/assets/teacher-slide-deck.pdf" className="hover:text-indigo-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> Teacher Slide Deck</a></li>
              <li><a href="/assets/request-custom-training.pdf" className="hover:text-indigo-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> Custom Training Request Form</a></li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow text-center">
            <div className="flex items-center justify-center h-16 w-16 bg-indigo-100 rounded-full mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-indigo-700 font-semibold mb-2">Book a Live Training</h4>
            <p className="text-sm text-gray-600 mb-4">Schedule a virtual PD session with one of our specialists.</p>
            <a
              href="https://calendly.com/pfl-training"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 font-medium transition"
            >
              Schedule Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
            <h3 className="font-semibold text-indigo-700">How do I assign skill builders to my students?</h3>
            <p className="mt-2 text-gray-600">Skill builders can be assigned from your teacher dashboard. Navigate to the chapter you're teaching, select the desired skill builder, and click "Assign to Class." You can set due dates and view completion status.</p>
          </div>
          <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
            <h3 className="font-semibold text-indigo-700">Can I customize the curriculum for my classroom?</h3>
            <p className="mt-2 text-gray-600">Yes! PFL Academy allows teachers to customize content to fit their classroom needs. You can reorder modules, adjust timelines, and select which activities best fit your teaching style and student requirements.</p>
          </div>
          <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
            <h3 className="font-semibold text-indigo-700">How are student portfolios accessed and graded?</h3>
            <p className="mt-2 text-gray-600">Student portfolios are accessible from the teacher dashboard. You can view individual student work, provide feedback, and use our rubric-based grading system to evaluate portfolio components across all standards.</p>
          </div>
          <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
            <h3 className="font-semibold text-indigo-700">Is technical support available during class time?</h3>
            <p className="mt-2 text-gray-600">Yes, we offer real-time support during school hours (8am-5pm CST). You can access support through the chat feature in your dashboard or call our dedicated teacher support line for immediate assistance.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">What Teachers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">JD</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Jessica Donovan</h4>
                  <p className="text-sm text-gray-500">High School Economics Teacher</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The interactive skill builders make complex financial concepts accessible and engaging for my students. The portfolio system helps them see the connections between different financial topics."</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">MR</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Rodriguez</h4>
                  <p className="text-sm text-gray-500">Career & Technical Education Director</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The Career Path Planner has transformed how our students approach their future planning. It's practical, comprehensive, and gives them a roadmap they can actually use beyond the classroom."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-indigo-100 text-lg max-w-xl mx-auto mb-6">
          Join thousands of educators already using PFL Academy to teach essential financial literacy skills.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/signup" className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-medium shadow hover:bg-indigo-50 transition">
            Create Free Account
          </a>
          <a href="/demo" className="bg-transparent text-white border border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition">
            Request Full Demo
          </a>
        </div>
      </section>
    </div>
  );
}

// Mock component for the FAFSA Navigator Tour
function FafsaTour({ steps }) {
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

      <div className="flex mb-6">
        <div className="w-1/3 pr-4">
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
        
        <div className="w-2/3">
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
          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          ← Previous
        </button>
        <span className="text-gray-500 text-sm">
          Step {currentStep + 1} of {steps.length}
        </span>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
  );
}