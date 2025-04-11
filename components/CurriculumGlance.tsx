import React, { useState, useEffect, useRef } from 'react';

interface WalkthroughStep {
  element: string;
  title: string;
  description: string;
}

// Define components for curriculum page content sections
interface KeyConcept {
  title: string;
  description: string;
}

interface RealWorldExample {
  title: string;
  description: string;
}

interface ReflectionQuestion {
  question: string;
  weight: number;
}

interface LearningObjective {
  text: string;
}

interface CareerPathOption {
  value: string;
  label: string;
}

const CurriculumGlance: React.FC = () => {
  const [showEntryExperience, setShowEntryExperience] = useState(false);
  const [selectedMode, setSelectedMode] = useState<'guided' | 'explore'>('guided');
  const [isGuidedMode, setIsGuidedMode] = useState(false);
  const [isExploreMode, setIsExploreMode] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showWalkthroughBox, setShowWalkthroughBox] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [progress, setProgress] = useState(25); // Progress percentage for the chapter
  const [feedbackVisible, setFeedbackVisible] = useState<Record<number, boolean>>({});
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  
  // Sample data for the page
  const learningObjectives: LearningObjective[] = [
    { text: 'Differentiate between a job and a career' },
    { text: 'Identify how career paths affect long-term financial outcomes' },
    { text: 'Evaluate personal interests and skills in relation to potential career paths' },
    { text: 'Develop preliminary career path strategies for financial success' }
  ];
  
  const keyConcepts: KeyConcept[] = [
    { title: 'Job', description: 'A position of employment that provides immediate income but may have limited growth potential; typically viewed as a means to an end' },
    { title: 'Career', description: 'A sequence of related jobs in a particular field that provides growth, advancement, and increasing compensation over time' },
    { title: 'Career Path', description: 'A strategic progression of jobs, education, and skill acquisition that leads toward specific professional goals' },
    { title: 'Career Capital', description: 'The accumulated skills, experiences, knowledge, and connections that increase your value in the workplace' }
  ];
  
  const realWorldExamples: RealWorldExample[] = [
    {
      title: "Maya's Fast Food Job vs. Healthcare Career",
      description: "Maya worked at a fast-food restaurant during high school, making minimum wage with irregular hours. While this job provided some spending money, it offered no benefits, limited skill development, and no clear path to advancement. After graduation, Maya enrolled in a community college nursing program. Although she earned less during her education than she could have working full-time at the restaurant, within five years she had become a registered nurse earning more than three times her previous hourly wage, with excellent benefits, regular hours, and clear opportunities for specialization and advancement. By investing in a career path rather than continuing in a series of jobs, Maya significantly improved her long-term financial outlook."
    },
    {
      title: "Carlos's Strategic Career Path",
      description: "Carlos began working at an entry-level position at a technology company after completing a coding bootcamp. Rather than viewing this as just a job, he approached it as the first step in a career path. He volunteered for challenging projects to build his skills, sought mentorship from senior developers, and invested time in learning new programming languages. When he changed companies two years later, he received a 30% salary increase. After five years in the industry and multiple strategic moves, his income had more than doubled from his starting salary, and he had built enough career capital to negotiate flexible working arrangements and additional benefits. By treating his work as a career rather than just a job, Carlos was able to accelerate his financial progress and create more options for himself."
    }
  ];
  
  const reflectionQuestions: ReflectionQuestion[] = [
    { 
      question: "Consider your own interests, skills, and values. What careers might align with these aspects of yourself while also providing the financial future you envision?", 
      weight: 3 
    },
    { 
      question: "How might investing in a career path rather than working a series of unrelated jobs affect your long-term financial outcomes?", 
      weight: 3 
    },
    { 
      question: "What steps could you take now to begin building career capital in a direction that interests you?", 
      weight: 2 
    }
  ];
  
  // Define the walkthrough steps
  const walkthroughSteps: WalkthroughStep[] = [
    {
      element: '#standard-info',
      title: 'Standard & Chapter Navigation',
      description: 'This section shows the current standard and provides navigation to all chapters within it. The blue border indicates the area is part of Standard 1 covering careers and financial planning.'
    },
    {
      element: '.mt-8.bg-gradient-to-r.from-indigo-100.to-purple-100.rounded-xl',
      title: 'Your Progress',
      description: 'Track your progress through the chapter here. As you progress through the sections, the progress bar will fill up.'
    },
    {
      element: '#learning-objectives',
      title: 'Learning Objectives',
      description: 'These objectives outline what you will learn in this chapter, giving you clear goals to work towards.'
    },
    {
      element: '#intro',
      title: 'Introduction',
      description: 'This section introduces the key concepts and importance of understanding the difference between jobs and careers.'
    },
    {
      element: '#key-concepts',
      title: 'Key Concepts',
      description: 'These boxes highlight the essential terms and concepts you need to understand for this chapter.'
    },
    {
      element: '#deeper-exploration',
      title: 'Deeper Exploration',
      description: 'This section provides more detailed information about the topic, expanding on the key concepts.'
    },
    {
      element: '#real-world-examples',
      title: 'Real-World Examples',
      description: 'These examples show how the concepts apply in real-life situations, making abstract ideas more concrete.'
    },
    {
      element: '#reflection',
      title: 'Reflection Questions',
      description: 'These questions help you connect the concepts to your own life and deepen your understanding.'
    },
    {
      element: '#skill-builder',
      title: 'Skill Builder Activity',
      description: 'This interactive tool lets you create a personalized career path plan. The Career Path Planner helps students map out their education, work experience, networking, skill development, and other goals across three time horizons.'
    },
    {
      element: '#career-path-builder',
      title: 'Career Path Planner Tool',
      description: 'This comprehensive tool allows students to create a personalized career development plan by selecting goals across multiple categories and time frames.'
    },
    {
      element: '#summary',
      title: 'Summary',
      description: 'This section reinforces the key takeaways from the chapter and prepares you for the next part of the curriculum.'
    }
  ];

  // Education options for Career Path Planner
  const educationOptions: CareerPathOption[] = [
    { value: "Take specific high school courses related to my interests", label: "Take specific high school courses related to my interests" },
    { value: "Enroll in a certificate program", label: "Enroll in a certificate program" },
    { value: "Start associate degree coursework", label: "Start associate degree coursework" },
    { value: "Begin bachelor's degree program", label: "Begin bachelor's degree program" },
    { value: "Complete industry certifications", label: "Complete industry certifications" },
    { value: "Take online courses in my field of interest", label: "Take online courses in my field of interest" },
    { value: "Attend workshops and seminars", label: "Attend workshops and seminars" },
    { value: "Join specialized training programs", label: "Join specialized training programs" }
  ];

  // Work experience options for Career Path Planner
  const workOptions: CareerPathOption[] = [
    { value: "Find part-time job related to my interests", label: "Find part-time job related to my interests" },
    { value: "Secure an internship in my field", label: "Secure an internship in my field" },
    { value: "Volunteer for relevant organizations", label: "Volunteer for relevant organizations" },
    { value: "Job shadow professionals in my target career", label: "Job shadow professionals in my target career" },
    { value: "Start entry-level position in my industry", label: "Start entry-level position in my industry" },
    { value: "Begin apprenticeship program", label: "Begin apprenticeship program" },
    { value: "Work in customer service to build transferable skills", label: "Work in customer service to build transferable skills" },
    { value: "Create independent projects to build portfolio", label: "Create independent projects to build portfolio" }
  ];

  // Show entry experience on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEntryExperience(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Set up scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      // Determine which section is currently most visible
      let currentSection = null;
      const sections = ['learning-objectives', 'intro', 'key-concepts', 'deeper-exploration', 
                       'real-world-examples', 'reflection', 'skill-builder', 'summary'];
      
      for (const section of sections) {
        const element = sectionRefs.current[section];
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Functions to handle entry experience
  const handleSkipEntry = () => {
    setShowEntryExperience(false);
  };

  const handleContinueEntry = () => {
    setShowEntryExperience(false);
    
    if (selectedMode === 'guided') {
      startGuidedWalkthrough();
    } else {
      startExploreMode();
    }
  };

  const selectGuidedTour = () => {
    setSelectedMode('guided');
    localStorage.setItem('curriculumGlanceMode', 'guided');
  };

  const selectExploreMode = () => {
    setSelectedMode('explore');
    localStorage.setItem('curriculumGlanceMode', 'explore');
  };

  // Functions for guided walkthrough
  const startGuidedWalkthrough = () => {
    setIsGuidedMode(true);
    setIsExploreMode(false);
    setShowWalkthroughBox(true);
    setCurrentStepIndex(0);
  };

  const startExploreMode = () => {
    setIsGuidedMode(false);
    setIsExploreMode(true);
    setShowWalkthroughBox(false);
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleNextStep = () => {
    if (currentStepIndex < walkthroughSteps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const closeWalkthrough = () => {
    setShowWalkthroughBox(false);
    setIsGuidedMode(false);
  };

  // Function to handle reflection submissions
  const handleReflectionSubmit = () => {
    alert('Your reflections have been submitted successfully!');
  };

  // Function to handle text input and show feedback
  const handleTextareaBlur = (index: number, event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 10) {
      setFeedbackVisible(prev => ({
        ...prev,
        [index]: true
      }));
    }
  };

  // Current step for guided walkthrough
  const currentStep = walkthroughSteps[currentStepIndex];

  return (
    <div className="bg-gray-50">
      {/* Fixed Header */}
      <header className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex justify-center items-center h-10 w-10 rounded bg-white/20 text-white font-bold">
              PFL
            </div>
            <span className="ml-3 text-xl font-bold">PFL Academy</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a className="text-white hover:text-indigo-200 transition-colors nav-link" href="#">Home</a>
            <a className="text-white hover:text-indigo-200 transition-colors nav-link" href="#">Curriculum</a>
            <a className="text-white hover:text-indigo-200 transition-colors nav-link" href="#">Resources</a>
            <a className="text-white hover:text-indigo-200 transition-colors nav-link" href="#">Profile</a>
          </nav>
          {/* Mobile menu button */}
          <button className="md:hidden text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </header>
      
      {/* Entry Experience Overlay */}
      {showEntryExperience && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to the Curriculum at a Glance</h2>
            <p className="mb-6 text-gray-600">How would you like to explore this guide?</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div 
                className={`border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50 cursor-pointer transition-colors ${selectedMode === 'guided' ? 'bg-indigo-100 border-indigo-300' : ''}`}
                onClick={selectGuidedTour}
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
                className={`border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50 cursor-pointer transition-colors ${selectedMode === 'explore' ? 'bg-indigo-100 border-indigo-300' : ''}`}
                onClick={selectExploreMode}
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
                className="text-gray-600 hover:text-gray-800 mr-4"
                onClick={handleSkipEntry}
              >
                Skip
              </button>
              <button 
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                onClick={handleContinueEntry}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Guided Walkthrough Box */}
      {showWalkthroughBox && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-xl p-6 shadow-xl z-50 w-[450px] max-w-[90vw]">
          <div className="flex justify-between items-center mb-2">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium py-1 px-2 rounded">Guided Tour</span>
            <button 
              className="text-gray-400 hover:text-gray-600"
              onClick={closeWalkthrough}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{currentStep?.title}</h3>
          <p className="mt-1 text-gray-600">{currentStep?.description}</p>
          <div className="flex justify-between mt-4">
            <button 
              className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center disabled:bg-gray-300"
              onClick={handlePreviousStep}
              disabled={currentStepIndex === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Previous
            </button>
            <button 
              className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center disabled:bg-gray-300"
              onClick={handleNextStep}
              disabled={currentStepIndex >= walkthroughSteps.length - 1}
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center mt-3">
            {walkthroughSteps.map((_, index) => (
              <div 
                key={index} 
                className={`w-2.5 h-2.5 rounded-full mx-1 ${index === currentStepIndex ? 'bg-indigo-600' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
      )}
      
      <div className="h-20"></div>
      <div className="container mx-auto px-4 py-8 grid lg:grid-cols-10 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-xl p-6 sticky top-20 h-screen overflow-y-auto border border-gray-200">
          <div className="ribbon-box" id="standard-info">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Standard 1: Careers</h2>
            <p className="text-gray-600 mb-4">Understanding career paths, income planning, and effective financial management.</p>
            
            <ul className="space-y-2" id="chapter-navigation">
              {/* Current Chapter */}
              <li>
                <div className="flex items-center bg-indigo-50 p-2 rounded-lg">
                  <span className="border-l-4 border-indigo-700 pl-2 text-indigo-700 font-medium">1.1: Jobs vs. Careers</span>
                </div>
                {/* Section Navigation for Current Chapter */}
                <ul className="ml-6 mt-2 space-y-1" id="section-navigation">
                  {[
                    { id: 'learning-objectives', label: 'Learning Objectives' },
                    { id: 'intro', label: 'Introduction' },
                    { id: 'key-concepts', label: 'Key Concepts' },
                    { id: 'deeper-exploration', label: 'Deeper Exploration' },
                    { id: 'real-world-examples', label: 'Real-World Examples' },
                    { id: 'reflection', label: 'Reflection' },
                    { id: 'skill-builder', label: 'Skill Builder' },
                    { id: 'summary', label: 'Summary' }
                  ].map(section => (
                    <li key={section.id}>
                      <a 
                        className={`${activeSection === section.id ? 'text-indigo-700 font-medium' : 'text-gray-700 hover:text-indigo-700'} flex items-center transition-colors`} 
                        href={`#${section.id}`}
                      >
                        <span className="mr-2">•</span> {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              {/* Next Chapters (Upcoming) */}
              {[
                '1.2: Paying for Post-Secondary Education',
                '1.3: Income and Taxes',
                '1.4: Financial Goal Setting',
                '1.5: Managing Your Income Effectively'
              ].map((chapter, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <a className="text-gray-700 hover:text-indigo-700 transition-colors" href="#">{chapter}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Progress Tracker */}
          <div className="mt-8 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-4 shadow-lg ribbon-box">
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">Your Progress</h3>
            <div className="w-full bg-white/50 rounded-full h-2.5 mb-4">
              <div 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-indigo-800">Completed: <span className="font-medium">2/8 activities</span></p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-7 bg-white rounded-xl shadow-xl p-6 border border-gray-200 ribbon-box">
          {/* Chapter Title and Info */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Chapter 1.1: Jobs vs. Careers</h1>
          <p className="text-xl text-gray-600 mb-6">Understanding the financial impact of career choices</p>
          
          {/* Learning Objectives Section */}
          <div 
            className="learning-objectives ribbon-box" 
            id="learning-objectives"
            ref={el => sectionRefs.current['learning-objectives'] = el}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learning Objectives</h2>
            <p className="mb-2">By the end of this lesson, you will be able to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {learningObjectives.map((objective, index) => (
                <li key={index}>{objective.text}</li>
              ))}
            </ul>
          </div>
          
          {/* Introduction Section */}
          <section 
            className="ribbon-box" 
            id="intro"
            ref={el => sectionRefs.current['intro'] = el}
          >
            <h2 className="text-2xl font-bold text-gray-900 section-title">Introduction</h2>
            <p className="text-gray-700 mb-4">
              In today's fast-paced economy, understanding the difference between simply having a job and building a career is crucial to your financial future. The choices you make now about your education and work path can affect your earning potential for decades to come. While jobs provide immediate income, careers offer pathways to growth, advancement, and long-term financial stability.
            </p>
            <p className="text-gray-700 mb-4">
              Many high school students focus only on getting any job that pays, without considering how their choices fit into a larger career trajectory. However, those who strategically approach their work life tend to experience greater financial security and job satisfaction over time. The decisions you make about your education, skills development, and early work experiences establish the foundation for your financial independence.
            </p>
          </section>
          
          {/* Key Concepts Section */}
          <section 
            className="pt-4 ribbon-box" 
            id="key-concepts"
            ref={el => sectionRefs.current['key-concepts'] = el}
          >
            <h2 className="text-2xl font-bold text-gray-900 section-title">Key Concepts</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {keyConcepts.map((concept, index) => (
                <div className="key-concept" key={index}>
                  <h3 className="font-bold text-gray-900 mb-2">{concept.title}</h3>
                  <p className="text-gray-700">{concept.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Deeper Exploration Section */}
          <section 
            className="pt-4 ribbon-box" 
            id="deeper-exploration"
            ref={el => sectionRefs.current['deeper-exploration'] = el}
          >
            <h2 className="text-2xl font-bold text-gray-900 section-title">Deeper Exploration</h2>
            <p className="text-gray-700 mb-4">
              The distinction between jobs and careers goes far beyond semantics. A job primarily functions as a way to earn money to meet immediate financial needs. Jobs often require less specialized education or training, may be more temporary in nature, and typically offer limited opportunities for advancement within the organization. Examples include retail positions, food service roles, or seasonal work. While jobs are valuable for generating income, they generally don't build toward a larger professional goal.
            </p>
            <p className="text-gray-700 mb-4">
              Careers, by contrast, represent a series of connected positions within a field or industry that build upon each other over time. Careers typically require more specialized education, training, or skill development. They offer advancement opportunities, increasing responsibilities, and generally higher compensation as you progress. Examples include becoming a nurse, software developer, electrician, or financial analyst. Careers involve intentional planning, continuous learning, and strategic decisions about when to advance to new positions.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Building Career Capital</h3>
            <p className="text-gray-700 mb-4">
              One of the most valuable aspects of career development is the accumulation of career capital—the skills, experiences, connections, and reputation you build throughout your professional life. This capital makes you increasingly valuable to employers and opens doors to better opportunities. Unlike a job, which may provide limited transferable skills, careers allow you to build specialized expertise that can be leveraged for advancement.
            </p>
            <p className="text-gray-700 mb-4">
              Career capital can include technical skills specific to your field, soft skills like communication and leadership, professional certifications, and a network of industry contacts. The more career capital you accumulate, the more options you'll have and the higher earning potential you can command.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Implications &amp; Importance</h3>
            <p className="text-gray-700 mb-4">
              Understanding the difference between jobs and careers is foundational to financial literacy because your career path will likely be your primary income source throughout your life. The career choices you make will determine not just your annual salary, but your ability to save for emergencies, invest for retirement, qualify for loans, and achieve major financial milestones like homeownership.
            </p>
            <p className="text-gray-700 mb-4">
              Career decisions also impact your work-life balance, job satisfaction, and overall well-being—all factors that contribute to financial decision-making. Those with stable, growing careers often make different financial choices than those with unpredictable income from changing jobs.
            </p>
            <p className="text-gray-700 mb-4">
              In today's dynamic economy, even traditional career paths are evolving. Many workers now experience multiple careers throughout their lifetime, making strategic career planning and adaptability even more important skills for financial success. Understanding how to transition between careers, when to invest in additional education, and how to leverage transferable skills are crucial financial planning considerations.
            </p>
            
            <div className="discussion-prompt ribbon-box">
              <h3 className="font-semibold text-lg mb-2">Discussion Questions</h3>
              <ol className="list-decimal ml-6 mb-0">
                <li className="mb-2">How does this topic connect to your personal financial goals?</li>
                <li className="mb-2">What challenges might you face when applying these concepts?</li>
                <li>How can understanding this topic help you make better financial decisions?</li>
              </ol>
            </div>
          </section>
          
          {/* Real-World Examples Section */}
          <section 
            className="pt-4 ribbon-box" 
            id="real-world-examples"
            ref={el => sectionRefs.current['real-world-examples'] = el}
          >
            <h2 className="text-2xl font-bold text-gray-900 section-title">Real-World Examples</h2>
            {realWorldExamples.map((example, index) => (
              <div className="real-world-example" key={index}>
                <h3 className="text-lg font-semibold mb-2">{example.title}</h3>
                <p className="text-gray-700">{example.description}</p>
              </div>
            ))}
          </section>
          
          {/* Reflection Section */}
          <section 
            className="pt-4 mt-8 ribbon-box" 
            id="reflection"
            ref={el => sectionRefs.current['reflection'] = el}
          >
            <h2 className="text-2xl font-bold text-gray-900 section-title">Reflection Questions</h2>
            <div className="discussion-prompt">
              <p className="mb-4">Take a few minutes to reflect on what you've learned in this chapter.</p>
              <ol className="list-decimal ml-6 mb-4">
                {reflectionQuestions.map((question, index) => (
                  <li className="mb-3" key={index}>
                    <p className="font-medium text-gray-800">{question.question}</p>
                    <textarea 
                      className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
                      data-assessment-weight={question.weight} 
                      placeholder="Type your response here..." 
                      rows={2}
                      onBlur={(e) => handleTextareaBlur(index, e)}
                    ></textarea>
                    <div className={`feedback-container mt-2 text-sm text-indigo-700 bg-indigo-50 p-2 rounded-md ${feedbackVisible[index] ? '' : 'hidden'}`}>
                      Thank you for your thoughtful response! Your answer shows good understanding of the concepts.
                    </div>
                  </li>
                ))}
              </ol>
              <button 
                className="pfl-button hover:shadow-xl text-white px-6 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1"
                onClick={handleReflectionSubmit}
              >
                Submit Reflections
              </button>
            </div>
          </section>
          
          {/* Skill Builder Section */}
          <section 
            className="pt-4 ribbon-box" 
            id="skill-builder"
            ref={el => sectionRefs.current['skill-builder'] = el}
          >
            <h2 className="text-2xl font-bold text-gray-900 section-title">Skill Builder Activity</h2>
            <div className="skill-builder">
              <h3 className="text-xl font-semibold mb-3">Career Path Planner</h3>
              <p className="mb-4">In this activity, you'll create a personalized career path map that outlines your career goals and the steps needed to achieve them.</p>
              <div className="activity-timer mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  <span>Activity Time: 15-20 minutes</span>
                </div>
              </div>
              
              <h4 className="font-semibold mb-2">Instructions:</h4>
              <ol className="list-decimal ml-6 mb-4">
                <li className="mb-2">Think about your interests, skills, and values</li>
                <li className="mb-2">For each time frame, select one option from each category that aligns with your goals</li>
                <li className="mb-2">Ensure your selections create a logical progression from short-term to long-term goals</li>
                <li>Consider how each goal contributes to your overall career development</li>
              </ol>
              
              {/* Career Path Skill Builder Component */}
              <div className="feature-card bg-white p-6 border border-indigo-200 rounded-xl shadow-xl" id="career-path-builder">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Career Path Planner</h3>
                  <p className="text-gray-600">Create a personalized career path map that outlines your goals and steps needed to achieve them</p>
                </div>
                
                {/* Step Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Step 1 of 3
                    </span>
                    <span className="text-sm text-gray-500">
                      33% Complete
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-300" style={{ width: '33%' }}></div>
                    </div>
                    <div className="absolute top-4 left-0 w-full flex justify-between">
                      <div className="text-xs font-medium text-indigo-600">Short-Term Goals</div>
                      <div className="text-xs text-gray-400">Mid-Term Goals</div>
                      <div className="text-xs text-gray-400">Long-Term Goals</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded-xl p-6 mb-8 shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">
                    Short-Term Goals (1-2 years)
                  </h4>
                  <div className="space-y-6">
                    {/* Education Category */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Further Education
                      </label>
                      <select className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all">
                        <option value="">Select a goal...</option>
                        {educationOptions.map((option, index) => (
                          <option key={index} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Work Experience Category */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Work Experience
                      </label>
                      <select className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all">
                        <option value="">Select a goal...</option>
                        {workOptions.map((option, index) => (
                          <option key={index} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    {/* More categories would be added here */}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button className="pfl-button hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg">
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Summary Section */}
          <section 
            className="pt-4 mt-8 ribbon-box" 
            id="summary"
            ref={el => sectionRefs.current['summary'] = el}
          >
            <h2 className="text-2xl font-bold text-gray-900 section-title">Summary</h2>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4">
                The distinction between jobs and careers represents one of the most consequential financial decisions you'll make. While jobs provide immediate income, careers offer pathways to growth, advancement, and significantly higher lifetime earnings. By understanding this difference and making intentional choices about education, skill development, and professional growth, you can establish a stronger foundation for financial success.
              </p>
              <p className="text-gray-700">
                Career planning isn't just about choosing what you'll do for work—it's about strategically positioning yourself for financial stability and growth. The career capital you build, including specialized skills, knowledge, and professional relationships, becomes one of your most valuable financial assets, opening doors to opportunities and providing security in an ever-changing economy.
              </p>
            </div>
          </section>
          
          <div className="flex justify-end mt-8">
            <a className="pfl-button text-white font-medium px-6 py-3 rounded-lg text-lg shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center" href="day2.html">
              Continue to Day 2 Learning Lab
              <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex justify-center items-center h-10 w-10 rounded bg-white/20 text-white font-bold">
                  PFL
                </div>
                <span className="ml-3 text-xl font-bold">PFL Academy</span>
              </div>
              <p className="text-indigo-200">Empowering students with financial literacy skills for life.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a className="text-indigo-200 hover:text-white transition-colors" href="#">Home</a></li>
                <li><a className="text-indigo-200 hover:text-white transition-colors" href="#">Curriculum</a></li>
                <li><a className="text-indigo-200 hover:text-white transition-colors" href="#">Resources</a></li>
                <li><a className="text-indigo-200 hover:text-white transition-colors" href="#">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-indigo-200">If you need assistance, please contact your instructor or email support.</p>
            </div>
          </div>
          <div className="border-t border-indigo-800 mt-8 pt-6 text-center text-indigo-200">
            <p>© 2025 PFL Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CurriculumGlance;