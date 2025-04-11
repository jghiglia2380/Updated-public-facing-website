import React, { useState, useEffect } from 'react';

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  popoutContent: React.ReactNode;
}

const AdaptiveInstructionalSupport: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [showSuggestionBubble, setShowSuggestionBubble] = useState(false);

  useEffect(() => {
    // Show suggestion bubble after 45 seconds
    const timer = setTimeout(() => {
      setShowSuggestionBubble(true);
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  const handleFeatureClick = (featureId: string) => {
    if (activeFeature === featureId) {
      setActiveFeature(null);
    } else {
      setActiveFeature(featureId);
    }
  };

  const dismissBubble = () => {
    setShowSuggestionBubble(false);
  };

  const featureCards: FeatureCardProps[] = [
    {
      id: 'smart-faqs',
      title: 'Smart FAQs',
      description: 'Get instant answers to common teaching questions',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      popoutContent: (
        <>
          <h4 className="text-lg font-semibold mb-2">Intelligent FAQ System</h4>
          <p className="mb-4">Our Smart FAQ system learns from thousands of teacher interactions to provide relevant answers based on the specific lesson context.</p>
          <div className="bg-white p-3 rounded-lg shadow-sm border border-indigo-100 mb-3">
            <div className="font-medium text-indigo-700 mb-1">Example Question</div>
            <p className="text-gray-700 text-sm">"How can I modify this activity for ESL students?"</p>
          </div>
          <div className="bg-indigo-50 p-3 rounded-lg">
            <div className="font-medium text-indigo-700 mb-1">Smart Answer</div>
            <p className="text-gray-700 text-sm">
              "For ESL students, try these modifications:
            </p>
            <ul className="list-disc pl-5 mt-1 text-sm text-gray-700">
              <li>Provide visual aids alongside key vocabulary</li>
              <li>Allow partner work with mixed language proficiency</li>
              <li>Offer sentence frames for written responses</li>
              <li>Extend time for completion by 5-7 minutes</li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: 'live-chat',
      title: 'Live Chat Support',
      description: 'Connect with education experts in real-time',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      popoutContent: (
        <>
          <h4 className="text-lg font-semibold mb-2">Real-Time Expert Support</h4>
          <p className="mb-4">Our live chat connects you with subject matter experts and experienced educators who can provide real-time assistance during your lesson.</p>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-3">
            <div className="bg-indigo-600 text-white p-2 text-sm">Live Support Chat</div>
            <div className="p-3">
              <div className="flex items-start mb-3">
                <div className="bg-gray-100 rounded-lg p-2 max-w-[75%]">
                  <p className="text-sm text-gray-700">I'm having trouble engaging my students in the goal-setting activity. Any suggestions?</p>
                  <p className="text-xs text-gray-500 mt-1">You • 10:42 AM</p>
                </div>
              </div>
              <div className="flex items-start justify-end mb-3">
                <div className="bg-indigo-50 rounded-lg p-2 max-w-[75%]">
                  <p className="text-sm text-gray-700">Try using the "future self" visualization technique! Have students close their eyes and describe their ideal future in detail before setting goals.</p>
                  <p className="text-xs text-gray-500 mt-1">Ms. Rodriguez, Financial Ed Specialist • 10:44 AM</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600">Response times typically under 2 minutes during school hours</p>
        </>
      )
    },
    {
      id: 'teaching-tips',
      title: 'Teaching Tips',
      description: 'Context-aware teaching suggestions',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      popoutContent: (
        <>
          <h4 className="text-lg font-semibold mb-2">Smart Teaching Tips</h4>
          <p className="mb-4">Our system tracks your position in the lesson and offers just-in-time teaching suggestions, differentiation strategies, and extension ideas.</p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <div>
                <h5 className="font-medium text-yellow-800 mb-1">Teaching Tip: SMART Goals Misconception</h5>
                <p className="text-sm text-yellow-700">Students often confuse "attainable" with "easy." Clarify that attainable goals should be challenging but possible with effort and resources available.</p>
                <div className="mt-2 flex">
                  <button className="text-xs bg-yellow-100 hover:bg-yellow-200 text-yellow-800 py-1 px-2 rounded mr-2 transition-colors">Show Example</button>
                  <button className="text-xs bg-yellow-100 hover:bg-yellow-200 text-yellow-800 py-1 px-2 rounded transition-colors">Dismiss</button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600">Tips appear automatically as you navigate through the lesson content</p>
        </>
      )
    },
    {
      id: 'community',
      title: 'Instructor Community',
      description: 'Learn from experienced PFL teachers',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      popoutContent: (
        <>
          <h4 className="text-lg font-semibold mb-2">Teacher Community Exchange</h4>
          <p className="mb-4">Connect with other PFL Academy teachers to share resources, success stories, and creative adaptations for your unique classroom needs.</p>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-3">
            <div className="border-b border-gray-200 p-3">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <span className="text-purple-700 font-medium">JM</span>
                </div>
                <div>
                  <div className="font-medium">John Mitchell</div>
                  <div className="text-xs text-gray-500">HS Financial Literacy • Detroit, MI</div>
                </div>
              </div>
              <h5 className="font-medium mt-2">Career Path Gallery Walk - Amazing Results!</h5>
              <p className="text-sm text-gray-700 mt-1">
                I modified the career exploration activity into a gallery walk with QR codes linking to industry professionals' video interviews. Students were highly engaged and asked thoughtful questions!
              </p>
            </div>
            <div className="bg-gray-50 px-3 py-2 text-sm">
              <span className="text-gray-600">14 comments</span>
              <span className="mx-2">•</span>
              <span className="text-indigo-600 font-medium">View Discussion</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">New discussions and resources added daily by our 2,400+ teacher community</p>
        </>
      )
    }
  ];

  const FeatureCard: React.FC<FeatureCardProps & { isActive: boolean; onClick: () => void }> = ({ 
    id, title, description, icon, popoutContent, isActive, onClick 
  }) => {
    return (
      <div 
        className={`feature-card bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-400 ${isActive ? 'active transform scale-110 z-10 shadow-lg' : ''}`}
        onClick={onClick}
      >
        <div className="p-6">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto transition-colors">
            <div className="text-indigo-600">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
          <p className="text-gray-600 text-center">{description}</p>
        </div>
        
        <div className="popout-content bg-white rounded-xl shadow-xl p-6 animate-fadeIn">
          <button className="close-popout absolute top-3 right-3 text-gray-400 hover:text-gray-600" onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {popoutContent}
        </div>
      </div>
    );
  };

  const customStyles = `
    @keyframes float {
      0% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(10px, 10px) rotate(5deg); }
      50% { transform: translate(0, 20px) rotate(0deg); }
      75% { transform: translate(-10px, 10px) rotate(-5deg); }
      100% { transform: translate(0, 0) rotate(0deg); }
    }
    
    .floating-icon {
      position: absolute;
      animation: float infinite linear;
      opacity: 0.2;
      color: white;
      font-size: 3rem;
      pointer-events: none;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out forwards;
    }
    
    .feature-card.active .popout-content {
      display: block;
    }
    
    .features-grid.has-active .feature-card:not(.active) {
      transform: scale(0.95);
      opacity: 0.5;
    }
    
    .perspective-1000 {
      perspective: 1000px;
    }
    
    .rotate-y-2 {
      transform: rotateY(2deg);
    }
    
    .rotate-x-5 {
      transform: rotateX(5deg);
    }
    
    .rotate-z-1 {
      transform: rotateZ(1deg);
    }
    
    .transform-3d {
      transform-style: preserve-3d;
    }
    
    .pulse {
      animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
      0% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.5); }
      50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.7); }
      100% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.5); }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="h-20"></div>
      <div className={`overlay ${activeFeature ? 'active' : ''}`} onClick={() => setActiveFeature(null)}></div>
      
      {/* Header Section */}
      <section className="bg-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Adaptive Instructional Support</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            On-demand expert assistance that adapts to your teaching context, providing real-time support exactly when you need it.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-16 px-4 transition-all duration-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Interactive Support Features</h2>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative features-grid ${activeFeature ? 'has-active' : ''}`}>
            {featureCards.map(card => (
              <FeatureCard 
                key={card.id}
                {...card}
                isActive={activeFeature === card.id}
                onClick={() => handleFeatureClick(card.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Transform Your Teaching Experience?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Join thousands of educators who rely on our adaptive instructional support system to enhance their classroom experience.
          </p>
          <button 
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:bg-indigo-700 transition-colors text-lg"
          >
            Try Instructor Support Now
          </button>
        </div>
      </section>

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
              <button onClick={dismissBubble} className="text-gray-500 text-sm mr-3">Dismiss</button>
              <button onClick={() => setActiveFeature('teaching-tips')} className="text-indigo-600 font-medium text-sm">Show Me</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdaptiveInstructionalSupport;