import React, { useState, useEffect } from 'react';

// Defining interfaces for the walkthrough steps
interface WalkthroughStep {
  id: string;
  title: string;
  description: string;
  element: HTMLElement | null;
}

interface InstructorSupportSuggestion {
  question: string;
  response: string;
}

const TeacherGuideFooter: React.FC = () => {
  // Tab state
  const [activeTab, setActiveTab] = useState<'content-guide' | 'learning-lab'>('content-guide');
  
  // Instructor support panel state
  const [isSupportPanelOpen, setIsSupportPanelOpen] = useState(false);
  const [supportQuestion, setSupportQuestion] = useState('');
  const [responseVisible, setResponseVisible] = useState(false);
  const [currentResponse, setCurrentResponse] = useState<{question: string, response: string}>({
    question: '',
    response: ''
  });
  const [historyVisible, setHistoryVisible] = useState(false);
  const [questionHistory, setQuestionHistory] = useState<InstructorSupportSuggestion[]>([]);
  
  // Entry experience state
  const [showEntryExperience, setShowEntryExperience] = useState(true);
  const [selectedOption, setSelectedOption] = useState<'guided' | 'explore' | null>(null);
  
  // Guided walkthrough state
  const [isGuidedMode, setIsGuidedMode] = useState(false);
  const [isExploreMode, setIsExploreMode] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showWalkthroughBox, setShowWalkthroughBox] = useState(false);
  const [currentWalkthroughTitle, setCurrentWalkthroughTitle] = useState('');
  const [currentWalkthroughDescription, setCurrentWalkthroughDescription] = useState('');
  
  // Suggestion bubble state
  const [showSuggestionBubble, setShowSuggestionBubble] = useState(false);

  // Simulated steps for demo purposes
  const contentGuideSteps = [
    { id: 'lesson-overview', title: 'Lesson Overview', description: 'This section provides essential information about the lesson, including the standard, duration, and focus. It\'s the first place to look when planning to teach this chapter.' },
    { id: 'materials-needed', title: 'Materials Needed', description: 'This checklist helps you gather all necessary resources before teaching. Make sure to download digital materials or prepare printables in advance.' },
    { id: 'pre-class-setup', title: 'Pre-Class Setup', description: 'These are the actions you should take before students arrive. Proper preparation ensures smooth transitions between activities during class.' },
    { id: 'lesson-timeline', title: 'Lesson Timeline', description: 'This timeline shows how to pace your instruction. The 55-minute class is broken into 6 segments with specific time allocations for each activity.' },
    { id: 'instruction-notes', title: 'Detailed Instruction Notes', description: 'This section provides step-by-step guidance for each part of the lesson. It\'s organized chronologically following the lesson timeline.' },
  ];

  const learningLabSteps = [
    { id: 'lab-overview', title: 'Learning Lab Overview', description: 'This section provides essential information about Day 2\'s learning lab session, which focuses on applying concepts learned in Day 1 through hands-on activities.' },
    { id: 'lab-objectives', title: 'Learning Objectives', description: 'These objectives clarify what students should be able to do by the end of the learning lab. Use these to assess student progress and achievement.' },
    { id: 'lab-materials', title: 'Lab Materials', description: 'This list includes all the materials you\'ll need for Day 2\'s activities. Note that students will need their Day 1 SMART Goals Worksheets, so remind them to bring these.' },
  ];

  // Effect to show suggestion bubble after 45 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuggestionBubble(true);
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle entry experience options
  const handleEntryExperienceSelection = (option: 'guided' | 'explore') => {
    setSelectedOption(option);
  };

  // Function to continue from entry experience
  const handleContinueFromEntry = () => {
    setShowEntryExperience(false);
    
    if (selectedOption === 'guided') {
      startGuidedWalkthrough();
    } else if (selectedOption === 'explore') {
      startExploreMode();
    }
  };

  // Skip entry experience
  const skipEntryExperience = () => {
    setShowEntryExperience(false);
  };

  // Start guided walkthrough
  const startGuidedWalkthrough = () => {
    setIsGuidedMode(true);
    setIsExploreMode(false);
    setShowWalkthroughBox(true);
    setCurrentStepIndex(0);
    
    // Set initial step content
    if (contentGuideSteps.length > 0) {
      setCurrentWalkthroughTitle(contentGuideSteps[0].title);
      setCurrentWalkthroughDescription(contentGuideSteps[0].description);
    }
  };

  // Start explore mode
  const startExploreMode = () => {
    setIsExploreMode(true);
    setIsGuidedMode(false);
    setShowWalkthroughBox(false);
  };

  // Handle tab switching
  const switchTab = (tabId: 'content-guide' | 'learning-lab') => {
    setActiveTab(tabId);
  };

  // Go to next walkthrough step
  const goToNextStep = () => {
    const steps = activeTab === 'content-guide' ? contentGuideSteps : learningLabSteps;
    
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        setCurrentWalkthroughTitle(steps[newIndex].title);
        setCurrentWalkthroughDescription(steps[newIndex].description);
        return newIndex;
      });
    }
  };

  // Go to previous walkthrough step
  const goToPrevStep = () => {
    const steps = activeTab === 'content-guide' ? contentGuideSteps : learningLabSteps;
    
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prevIndex => {
        const newIndex = prevIndex - 1;
        setCurrentWalkthroughTitle(steps[newIndex].title);
        setCurrentWalkthroughDescription(steps[newIndex].description);
        return newIndex;
      });
    }
  };

  // Close walkthrough
  const closeWalkthrough = () => {
    setShowWalkthroughBox(false);
    setIsGuidedMode(false);
  };

  // Toggle support panel
  const toggleSupportPanel = () => {
    setIsSupportPanelOpen(!isSupportPanelOpen);
  };

  // Preset question in support panel
  const presetQuestion = (question: string) => {
    setSupportQuestion(question);
  };

  // Generate contextual response based on the question
  const generateContextualResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('human capital')) {
      return `<p>Here are some effective ways to explain human capital:</p>
      <ul class="list-disc pl-5 my-2">
          <li>Use a video game analogy: "Human capital is like upgrading a character. Each new skill makes you more valuable and able to take on bigger challenges."</li>
          <li>Draw two career paths on the board - one showing job hopping without skill building, another showing progressive skill development leading to advancement.</li>
          <li>Share relatable examples: "Learning Excel might seem small, but it adds value that employers will pay more for."</li>
      </ul>
      <p>Need examples tailored to your specific student interests?</p>`;
    } else if (lowerQuestion.includes('college') || lowerQuestion.includes('education')) {
      return `<p>Great question! When discussing whether college is necessary:</p>
      <ol class="list-decimal pl-5 my-2">
          <li>Present college as one path among many (apprenticeships, trade schools, certifications)</li>
          <li>Clarify that different careers have different educational requirements</li>
          <li>Frame education as an investment with various options</li>
          <li>Highlight successful individuals who took different educational paths</li>
      </ol>
      <p>The key message: education continues beyond high school for most careers, but it doesn't always mean a traditional four-year degree.</p>`;
    } else {
      return `<p>For teaching about jobs vs. careers effectively:</p>
      <ul class="list-disc pl-5 my-2">
          <li>Connect concepts to students' existing experiences</li>
          <li>Use visual aids and concrete examples</li>
          <li>Create opportunities for personal connection to the material</li>
          <li>Facilitate guided discussions to explore nuances</li>
      </ul>
      <p>Need more specific strategies for this topic?</p>`;
    }
  };

  // Handle get support help button click
  const handleGetSupportHelp = () => {
    if (supportQuestion.trim()) {
      const response = generateContextualResponse(supportQuestion);
      
      // Set current response
      setCurrentResponse({
        question: supportQuestion,
        response: response
      });
      
      // Add to history
      setQuestionHistory(prev => [{
        question: supportQuestion,
        response: response
      }, ...prev]);
      
      // Show response
      setResponseVisible(true);
      
      // Clear input
      setSupportQuestion('');
    }
  };

  // Show history
  const toggleHistory = () => {
    setHistoryVisible(!historyVisible);
  };

  // New question button
  const startNewQuestion = () => {
    setSupportQuestion('');
    setResponseVisible(false);
  };

  // Dismiss suggestion bubble
  const dismissSuggestionBubble = () => {
    setShowSuggestionBubble(false);
  };

  // Show teaching tip
  const showTeachingTip = () => {
    setShowSuggestionBubble(false);
    toggleSupportPanel();
    presetQuestion('How can I explain human capital to students using concrete examples?');
    handleGetSupportHelp();
  };

  // Custom styles for animations and effects
  const customStyles = `
    @keyframes pulse {
      0% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.5); }
      50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.7); }
      100% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.5); }
    }

    .highlight {
      border: 3px solid #6366F1;
      box-shadow: 0px 0px 10px rgba(99, 102, 241, 0.5);
      transition: all 0.3s ease-in-out;
      position: relative;
      z-index: 5;
    }

    .pulse {
      animation: pulse 1.5s infinite;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .fade-in {
      animation: fadeIn 0.5s;
    }

    @keyframes slideUpFade {
      from { transform: translateX(-50%) translateY(20px); opacity: 0; }
      to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }

    .active {
      display: block;
      animation: slideUpFade 0.4s ease-out;
    }

    .popout-content {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      max-width: 600px;
      margin: 0 auto;
      margin-top: 16px;
      z-index: 20;
    }

    .feature-card.active .popout-content {
      display: block;
    }

    .tab-content {
      display: none;
    }
    
    .tab-content.active {
      display: block;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      {/* Header */}
      <header className="header flex items-center justify-between fixed top-0 left-0 right-0 z-40 bg-indigo-600 text-white p-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">PFL Academy | Teacher Guide</h1>
          <nav className="ml-8 hidden md:block">
            <span className="text-white mr-4">Standards</span>
            <span className="text-white mr-4">Resources</span>
            <span className="text-white">Help</span>
          </nav>
        </div>
        <div className="flex items-center">
          <button 
            onClick={toggleSupportPanel}
            className="text-white bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-2 mr-3 flex items-center transition-all duration-300 shadow-sm hover:shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span>Instructor Support</span>
            <span className="ml-2 bg-white text-indigo-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">?</span>
          </button>
          <button className="text-white bg-white bg-opacity-20 rounded p-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </header>
      
      {/* Entry Experience Overlay */}
      {showEntryExperience && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to the Teacher Guide</h2>
            <p className="mb-6 text-gray-600">How would you like to explore this guide?</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div 
                className={`border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50 cursor-pointer transition-colors ${selectedOption === 'guided' ? 'bg-indigo-100 border-indigo-300' : ''}`}
                onClick={() => handleEntryExperienceSelection('guided')}
              >
                <div className="flex items-start mb-2">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Guided Tour</h3>
                    <p className="text-sm text-gray-600">Step-by-step walkthrough of key sections with explanations</p>
                  </div>
                </div>
                <div className="ml-11 text-sm text-gray-500">
                  Perfect for first-time users
                </div>
              </div>
              
              <div 
                className={`border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50 cursor-pointer transition-colors ${selectedOption === 'explore' ? 'bg-indigo-100 border-indigo-300' : ''}`}
                onClick={() => handleEntryExperienceSelection('explore')}
              >
                <div className="flex items-start mb-2">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Explore on Your Own</h3>
                    <p className="text-sm text-gray-600">Self-directed exploration with hover explanations</p>
                  </div>
                </div>
                <div className="ml-11 text-sm text-gray-500">
                  Best for returning users
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={skipEntryExperience}
                className="text-gray-600 hover:text-gray-800 mr-4"
              >
                Skip
              </button>
              <button 
                onClick={handleContinueFromEntry}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Guided Walkthrough Box */}
      {showWalkthroughBox && (
        <div className="walkthrough-box fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-xl p-6 shadow-lg z-50 w-[450px] max-w-[90vw]">
          <div className="flex justify-between items-center mb-2">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium py-1 px-2 rounded">Guided Tour</span>
            <button onClick={closeWalkthrough} className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{currentWalkthroughTitle}</h3>
          <p className="mt-1 text-gray-600">{currentWalkthroughDescription}</p>
          <div className="walkthrough-controls mt-4 flex justify-between">
            <button 
              onClick={goToPrevStep}
              disabled={currentStepIndex === 0}
              className={`flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors ${currentStepIndex === 0 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Previous
            </button>
            <button 
              onClick={goToNextStep}
              disabled={currentStepIndex >= (activeTab === 'content-guide' ? contentGuideSteps.length - 1 : learningLabSteps.length - 1)}
              className={`flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors 
              ${currentStepIndex >= (activeTab === 'content-guide' ? contentGuideSteps.length - 1 : learningLabSteps.length - 1) ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="walkthrough-progress mt-3 flex justify-center">
            {(activeTab === 'content-guide' ? contentGuideSteps : learningLabSteps).map((_, index) => (
              <div 
                key={index} 
                className={`w-2.5 h-2.5 rounded-full mx-1 ${currentStepIndex === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Spacer to push content below fixed header */}
      <div className="h-16"></div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="sidebar w-full md:w-1/4 bg-gray-50 p-6 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
          <div>
            <div className="p-4 rounded-lg bg-white shadow-lg mb-6">
              <h2 className="text-xl font-semibold text-indigo-700">Standard 1: Income and Money Management</h2>
              <p className="text-sm text-gray-700">Understanding income management strategies for financial stability.</p>

              <div className="mt-2 p-4 bg-indigo-100 rounded-lg">
                <h3 className="text-md font-medium mb-2">Teacher Guides</h3>
                
                <div className="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1.1 Jobs vs. Careers
                </div>
                
                <div className="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1.2 Paying for Post-Secondary Education
                </div>
                
                <div className="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1.3 Income and Taxes
                </div>
                
                <div className="nav-link font-semibold text-indigo-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1.4 Financial Goal Setting
                </div>
                
                <div className="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1.5 Managing Your Income Effectively
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-white shadow-lg mb-6">
              <h2 className="text-xl font-semibold text-indigo-700">Resources</h2>

              <div className="mt-2 p-4 bg-indigo-100 rounded-lg">
                <div className="nav-link flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                  View Student Content
                </div>
                <div className="nav-link flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                    <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                  </svg>
                  Download Materials
                </div>
                <div className="nav-link flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                  </svg>
                  Additional Resources
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 p-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            {/* Chapter Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold">Teacher Guide: 1.4 Financial Goal Setting</h1>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <div className="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Duration: 55 minutes
                  </div>
                </div>
              </div>
              
              <div className="tab-group flex border-b border-gray-200">
                <div 
                  className={`tab cursor-pointer px-4 py-2 font-medium ${activeTab === 'content-guide' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => switchTab('content-guide')}
                >
                  Content Guide
                </div>
                <div 
                  className={`tab cursor-pointer px-4 py-2 font-medium ${activeTab === 'learning-lab' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => switchTab('learning-lab')}
                >
                  Learning Lab
                </div>
              </div>
            </div>
            
            {/* Content Guide Tab */}
            <div id="content-guide" className={`tab-content ${activeTab === 'content-guide' ? 'block' : 'hidden'}`}>
              {/* Lesson Overview */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h2 className="text-lg font-semibold mb-2">Lesson Overview</h2>
                <p><strong>Standard:</strong> Standard 1: Income and Money Management</p>
                <p><strong>Chapter:</strong> 1.4: Financial Goal Setting</p>
                <p><strong>Duration:</strong> 55 minutes</p>
                <p><strong>Focus:</strong> Understanding and applying the SMART goal framework to financial objectives</p>
              </div>
              
              {/* Materials Needed */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Materials Needed</h2>
                <ul className="list-disc pl-6">
                  <li>Digital presentation on SMART goal framework</li>
                  <li>Financial goal examples handouts</li>
                  <li>SMART Goals Worksheet (digital or printable)</li>
                  <li>Contrasting case studies</li>
                  <li>Visual goal prioritization matrix</li>
                  <li>Sticky notes for prioritization activity</li>
                </ul>
              </div>
              
              {/* Additional sections would go here */}
              {/* This is a condensed version for brevity */}
            </div>
            
            {/* Learning Lab Tab */}
            <div id="learning-lab" className={`tab-content ${activeTab === 'learning-lab' ? 'block' : 'hidden'}`}>
              {/* Learning Lab Overview */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h2 className="text-lg font-semibold mb-2">Learning Lab Overview</h2>
                <p><strong>Standard:</strong> Standard 1: Income and Money Management</p>
                <p><strong>Chapter:</strong> 1.4: Financial Goal Setting</p>
                <p><strong>Duration:</strong> 55 minutes</p>
                <p><strong>Focus:</strong> Developing and refining financial goals through analysis, planning, and accountability systems</p>
                <p><strong>Learning Format:</strong> Multi-Activity</p>
              </div>
              
              {/* Additional sections would go here */}
              {/* This is a condensed version for brevity */}
            </div>
          </div>
          
          {/* Print Button */}
          <button className="fixed bottom-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:bg-indigo-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
            </svg>
            Print Guide
          </button>
        </main>
      </div>

      {/* Instructor Support Panel */}
      <div 
        className="fixed right-0 top-0 h-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden z-50 flex flex-col"
        style={{ width: isSupportPanelOpen ? '400px' : '0' }}
      >
        {/* Panel Header */}
        <div className="bg-indigo-50 p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-indigo-600 text-white p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold">Instructor Support</h2>
          </div>
          <button onClick={toggleSupportPanel} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Panel Content */}
        <div className="flex-grow overflow-y-auto p-4">
          {/* Context Indicator */}
          <div className="mb-4 bg-gray-50 p-3 rounded-lg text-sm">
            <div className="font-medium text-gray-700">Currently viewing:</div>
            <div className="flex items-center mt-1">
              <span className="text-indigo-600 font-semibold">Chapter 1.4:</span>
              <span className="ml-2">Financial Goal Setting</span>
            </div>
            <div className="flex items-center mt-1">
              <span className="text-indigo-600 font-semibold">Section:</span>
              <span className="ml-2">{activeTab === 'content-guide' ? 'Content Guide' : 'Learning Lab'}</span>
            </div>
          </div>
          
          {/* Suggested Questions for Current Context */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-3">Suggested Questions</h3>
            <div className="space-y-2">
              {activeTab === 'content-guide' ? (
                <>
                  <button className="w-full text-left p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors mb-2">
                    How can I explain human capital to students who struggle with abstract concepts?
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors mb-2">
                    What are alternative examples to use if students don't connect with the Alex and Taylor scenarios?
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors mb-2">
                    How should I respond if students question whether college is necessary for a career path?
                  </button>
                </>
              ) : (
                <>
                  <button className="w-full text-left p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors mb-2">
                    What are reliable career research resources for students interested in emerging fields?
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors mb-2">
                    How can I help students who are struggling to identify realistic obstacles?
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors mb-2">
                    What modifications can I make to the Human Capital Investment activity for a class running short on time?
                  </button>
                </>
              )}
            </div>
          </div>
          
          {/* Support Categories */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-3">Support Categories</h3>
            <div className="grid grid-cols-2 gap-3">
              <div 
                className="text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-100 cursor-pointer"
                onClick={() => presetQuestion('What teaching strategies work best for explaining the difference between jobs and careers?')}
              >
                <div className="font-semibold text-blue-700">Teaching Strategies</div>
                <div className="text-sm text-blue-600 mt-1">Methods for teaching complex concepts</div>
              </div>
              <div 
                className="text-left p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors border border-green-100 cursor-pointer"
                onClick={() => presetQuestion('How can I explain human capital in simpler terms for struggling students?')}
              >
                <div className="font-semibold text-green-700">Student Explanations</div>
                <div className="text-sm text-green-600 mt-1">Alternative ways to explain to students</div>
              </div>
              <div 
                className="text-left p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors border border-purple-100 cursor-pointer"
                onClick={() => presetQuestion('What extension activities can I provide for advanced students who finish early?')}
              >
                <div className="font-semibold text-purple-700">Extension Ideas</div>
                <div className="text-sm text-purple-600 mt-1">Challenges for advanced learners</div>
              </div>
              <div 
                className="text-left p-3 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors border border-yellow-100 cursor-pointer"
                onClick={() => presetQuestion('What real-world examples or analogies can help explain career development?')}
              >
                <div className="font-semibold text-yellow-700">Examples & Analogies</div>
                <div className="text-sm text-yellow-600 mt-1">Real-world connections</div>
              </div>
            </div>
          </div>
          
          {/* Ask a Question */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-3">Ask Your Own Question</h3>
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
              <textarea 
                value={supportQuestion}
                onChange={(e) => setSupportQuestion(e.target.value)}
                className="w-full p-3 text-gray-700 focus:outline-none" 
                rows={3} 
                placeholder="Type your teaching question here..."
              />
              <div className="bg-gray-50 px-3 py-2 border-t border-gray-200 flex justify-between">
                <div className="text-sm text-gray-500">Context-aware assistance</div>
                <button 
                  onClick={handleGetSupportHelp}
                  className="bg-indigo-600 text-white px-4 py-1 rounded text-sm font-medium">
                  Get Help
                </button>
              </div>
            </div>
          </div>
          
          {/* Response Container */}
          {responseVisible && (
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Response</h3>
              <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
                <div className="text-sm text-gray-500 mb-1">Your question:</div>
                <div className="font-medium mb-3">{currentResponse.question}</div>
                <div className="text-sm text-gray-500 mb-1">Response:</div>
                <div 
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: currentResponse.response }}
                />
              </div>
            </div>
          )}
          
          {/* Recent History */}
          {historyVisible && questionHistory.length > 0 && (
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Recent Questions</h3>
              <div className="space-y-3">
                {questionHistory.map((item, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-500 mb-1">Your question:</div>
                    <div className="font-medium mb-2">{item.question}</div>
                    <div className="text-sm text-gray-500 mb-1">Response:</div>
                    <div className="text-gray-700 text-sm history-response">
                      {item.response.substring(0, 100)}...
                    </div>
                    <button 
                      className="text-indigo-600 font-medium text-sm mt-1"
                      onClick={() => {
                        setCurrentResponse(item);
                        setResponseVisible(true);
                      }}
                    >
                      Show more
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Quick Actions Footer */}
        <div className="p-3 border-t border-gray-200 bg-gray-50">
          <div className="grid grid-cols-3 gap-2">
            <button 
              onClick={startNewQuestion}
              className="text-center p-2 text-xs font-medium text-gray-700 bg-white rounded border border-gray-200 hover:bg-gray-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New Question
            </button>
            <button 
              onClick={toggleHistory}
              className="text-center p-2 text-xs font-medium text-gray-700 bg-white rounded border border-gray-200 hover:bg-gray-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              History
            </button>
            <button className="text-center p-2 text-xs font-medium text-gray-700 bg-white rounded border border-gray-200 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Resources
            </button>
          </div>
        </div>
      </div>

      {/* Contextual Suggestion Bubble */}
      {showSuggestionBubble && (
        <div className="fixed bottom-20 right-6 bg-white rounded-lg shadow-lg p-4 max-w-sm border border-indigo-100 flex items-start z-30">
          <div className="bg-indigo-100 p-2 rounded-full mr-3 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-1">Teaching Tip: Human Capital</h4>
            <p className="text-sm text-gray-600 mb-2">Students often struggle with the abstract concept of human capital. Need some concrete examples and visual aids?</p>
            <div className="flex justify-end">
              <button 
                onClick={dismissSuggestionBubble}
                className="text-gray-500 text-sm mr-3"
              >
                Dismiss
              </button>
              <button 
                onClick={showTeachingTip}
                className="text-indigo-600 font-medium text-sm"
              >
                Show Me
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeacherGuideFooter;