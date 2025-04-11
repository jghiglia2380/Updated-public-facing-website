import React from 'react';

interface Standard {
  id: number;
  title: string;
  description: string;
  colorClass: string;
  chapters: Chapter[];
}

interface Chapter {
  number: string;
  title: string;
}

const Standards: React.FC = () => {
  // Sample data for financial literacy standards
  const standards: Standard[] = [
    {
      id: 1,
      title: "Income & Careers",
      description: "Understanding career paths, income, and financial planning for the future.",
      colorClass: "text-blue-600",
      chapters: [
        { number: "1.1", title: "Jobs vs. Careers" },
        { number: "1.2", title: "Paying for Post-Secondary Education" },
        { number: "1.3", title: "Income and Taxes" },
        { number: "1.4", title: "Financial Goal Setting" },
        { number: "1.5", title: "Managing Your Income Effectively" }
      ]
    },
    {
      id: 2,
      title: "Taxes",
      description: "Understanding tax obligations, types of taxes, and how they impact personal finances.",
      colorClass: "text-green-600",
      chapters: [
        { number: "2.1", title: "Understanding Federal and State Taxes" },
        { number: "2.2", title: "Understanding Tax Brackets and Tax Rates" },
        { number: "2.3", title: "Understanding Tax Filing Requirements" },
        { number: "2.4", title: "Understanding Tax Deductions and Credits" },
        { number: "2.5", title: "Tax Planning and Compliance" }
      ]
    },
    {
      id: 3,
      title: "Financial Services",
      description: "Exploring banking options, financial institutions, and services for money management.",
      colorClass: "text-purple-600",
      chapters: [
        { number: "3.1", title: "Understanding Different Types of Financial Service Providers" },
        { number: "3.2", title: "Choosing and Evaluating Financial Service Providers" }
      ]
    },
    {
      id: 4,
      title: "Banking & Deposits",
      description: "Learning about banking tools, account types, and electronic banking services.",
      colorClass: "text-yellow-600",
      chapters: [
        { number: "4.1", title: "Understanding and Using Banking Tools" }
      ]
    },
    {
      id: 5,
      title: "Saving & Investing",
      description: "Strategies for saving, investment options, and building long-term wealth.",
      colorClass: "text-red-600",
      chapters: [
        { number: "5.1", title: "Saving and Investing" },
        { number: "5.2", title: "Understanding The Power of Compound Interest" },
        { number: "5.3", title: "Evaluating Saving and Investment Strategies" },
        { number: "5.4", title: "Time is Money" },
        { number: "5.5", title: "Understanding Monetary Risk in Saving and Investing" }
      ]
    },
    {
      id: 6,
      title: "Retirement Planning",
      description: "Preparing for retirement, retirement accounts, and long-term financial security.",
      colorClass: "text-indigo-600",
      chapters: [
        { number: "6.1", title: "Planning for Retirement" },
        { number: "6.2", title: "Longevity and Retirement Planning" }
      ]
    },
    {
      id: 7,
      title: "Borrowing & Credit",
      description: "Understanding credit, loans, debt management, and responsible borrowing.",
      colorClass: "text-pink-600",
      chapters: [
        { number: "7.1", title: "Understanding the Cost of Borrowing" },
        { number: "7.2", title: "Choosing the Right Source of Credit" },
        { number: "7.3", title: "Understanding Credit Score" },
        { number: "7.4", title: "Consumer Credit Legislation" },
        { number: "7.5", title: "Understanding Student Loans" }
      ]
    },
    {
      id: 8,
      title: "Credit Cards",
      description: "Using credit cards responsibly, understanding terms, and avoiding debt traps.",
      colorClass: "text-orange-600",
      chapters: [
        { number: "8.1", title: "Credit Card Use and Management" },
        { number: "8.2", title: "Online Shopping" }
      ]
    },
    {
      id: 9,
      title: "Consumer Protection",
      description: "Protecting against fraud, understanding consumer rights, and making informed decisions.",
      colorClass: "text-teal-600",
      chapters: [
        { number: "9.1", title: "Protecting Yourself from Consumer Fraud" },
        { number: "9.2", title: "Identity Theft Prevention and Recovery" }
      ]
    },
    {
      id: 10,
      title: "Housing",
      description: "Understanding housing options, renting versus buying, and mortgages.",
      colorClass: "text-blue-800",
      chapters: [
        { number: "10.1", title: "Renting vs. Owning - Making Informed Housing Decisions" },
        { number: "10.2", title: "Understanding the Cost and Responsibilities of Renting" },
        { number: "10.3", title: "Understanding Home Buying" }
      ]
    },
    {
      id: 11,
      title: "Risk Management",
      description: "Identifying risks, insurance options, and strategies for financial protection.",
      colorClass: "text-green-800",
      chapters: [
        { number: "11.1", title: "Understanding and Managing Risk" },
        { number: "11.2", title: "Insurance as a Risk Management Tool" },
        { number: "11.3", title: "Insurance Costs" }
      ]
    },
    {
      id: 12,
      title: "Gambling Risk",
      description: "Understanding the financial risks of gambling and making informed choices.",
      colorClass: "text-red-800",
      chapters: [
        { number: "12.1", title: "Understanding the Risks of Gambling" },
        { number: "12.2", title: "The Costs and Benefits of Gambling" }
      ]
    },
    {
      id: 13,
      title: "Debt Management",
      description: "Strategies for managing debt effectively and building financial stability.",
      colorClass: "text-yellow-800",
      chapters: [
        { number: "13.1", title: "Strategies for Managing High Levels of Debt" }
      ]
    },
    {
      id: 14,
      title: "Charitable Giving",
      description: "Making meaningful charitable contributions and understanding the impact.",
      colorClass: "text-purple-800",
      chapters: [
        { number: "14.1", title: "Charitable Giving and Financial Planning" },
        { number: "14.2", title: "Checking Out Charitable Groups" }
      ]
    },
    {
      id: 15,
      title: "Career Readiness",
      description: "Preparing for the transition from education to career with essential skills.",
      colorClass: "text-pink-800",
      chapters: [
        { number: "15.1", title: "Career Exploration and Goal Setting" },
        { number: "15.2", title: "Resume Building and Personal Branding" },
        { number: "15.3", title: "Job Application Process" },
        { number: "15.4", title: "Interview Skills and Workplace Readiness" },
        { number: "15.5", title: "Entrepreneurship and Side Hustles" }
      ]
    }
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="flex justify-center items-center h-10 w-10 rounded bg-indigo-600 text-white font-bold">
                  PFL
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900">PFL Academy</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/static-build/index101.html" className="text-gray-700 font-medium hover:text-indigo-600 text-sm">Home</a>
              <a href="/static-build/standards.html" className="text-indigo-600 font-medium hover:text-indigo-800 text-sm">Curriculum</a>
              <a href="/static-build/resources.html" className="text-gray-700 font-medium hover:text-indigo-600 text-sm">Resources</a>
              <a href="/static-build/community.html" className="text-gray-700 font-medium hover:text-indigo-600 text-sm">Community Partners</a>
              <a href="/static-build/student-login.html" className="text-gray-700 font-medium hover:text-indigo-800 text-sm border border-indigo-600 rounded-lg px-4 py-2 transition-colors">Student Portal</a>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section with purple gradient background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 md:py-24 lg:py-28">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white mb-6">
                <span className="mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                  </svg>
                </span>
                <span>Curriculum Framework</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Comprehensive Financial Literacy Standards
              </h1>
              <p className="mt-6 text-lg text-indigo-100 max-w-2xl">
                A structured approach to equipping students with essential financial knowledge, preparing them for informed decision-making.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a 
                  href="#standards-grid" 
                  className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore Standards
                  <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-3 gap-4">
                {/* Number boxes representing each standard */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num, index) => (
                  <div 
                    key={num} 
                    className={`flex items-center justify-center h-24 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 animate-pulse-gentle`}
                    style={{ 
                      animationDelay: `${index * 0.2}s`,
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <span className="text-white text-3xl font-bold">{num}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Curriculum Framework</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comprehensive Standards for Financial Success</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our curriculum is organized around 15 essential standards that provide students with a complete foundation in financial literacy. Each standard is broken down into focused chapters with interactive activities.
            </p>
          </div>
          
          {/* Standards grid */}
          <div id="standards-grid" className="mt-16 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {standards.map((standard) => (
              <div 
                key={standard.id} A
                className={`standard-card feature-card bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg ${standard.colorClass}`}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${standard.colorClass.replace('text-', 'bg-').replace('-600', '-100').replace('-800', '-100')}`}>
                      <span className={`text-lg font-bold ${standard.colorClass}`}>{standard.id}</span>
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-gray-900">{standard.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{standard.description}</p>
                  
                  <div className="mt-2">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Chapters:</h4>
                    <ul className="space-y-1">
                      {standard.chapters.map((chapter) => (
                        <li key={chapter.number} className="text-sm">
                          <span className="font-medium">{chapter.number}:</span> {chapter.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href={`#standard-${standard.id}`}
                      className={`inline-flex items-center text-sm font-medium ${standard.colorClass} hover:underline`}
                    >
                      Explore Standard {standard.id}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum Approach Section */}
      <div className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 mb-6">
                <span>Curriculum Design</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Our Educational Approach</h2>
              <p className="text-lg text-gray-600 mb-8">
                The PFL Academy curriculum is designed to provide a comprehensive financial education through a carefully structured approach that ensures students develop both knowledge and practical skills.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Build Skills Incrementally</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Each standard builds upon previous knowledge, creating a solid foundation for complex concepts later in the curriculum.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Differentiated Learning</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Our two-day model provides both guided instruction and hands-on application through interactive Learning Labs.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Real-World Application</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Students apply concepts through practical exercises directly relevant to their lives and future financial decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 mix-blend-multiply"></div>
                <img className="relative max-w-full h-auto" src="/assets/curriculum-diagram.png" alt="Curriculum Structure" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-indigo-100 rounded-lg transform -rotate-6 z-0"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-purple-100 rounded-lg transform rotate-6 z-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Highlights */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Implementation Highlights</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Innovative Learning Features</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our curriculum includes a variety of innovative features designed to enhance the learning experience and ensure students build practical financial skills.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg feature-card">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Interactive Skill Builders</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Immersive activities that allow students to practice financial skills in simulated real-world scenarios.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg feature-card">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Learning Labs</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Hands-on workshops where students collaborate to solve financial challenges and create practical tools.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg feature-card">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Portfolio Integration</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Students build a comprehensive financial portfolio throughout the curriculum, creating a personal reference for future planning.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg feature-card">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Technology Integration</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Digital tools and simulations that reflect real financial technology platforms students will encounter in their lives.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg feature-card">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Assessment Framework</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Comprehensive evaluation tools that provide meaningful feedback and track progress throughout the learning journey.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg feature-card">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Personalized Learning</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Adaptive content that adjusts to student interests and learning needs for a customized educational experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="mx-auto max-w-6xl py-12 px-6 sm:py-16 lg:px-8 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
            Ready to explore the curriculum?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-indigo-100">
            Begin your journey to financial literacy with our comprehensive standards and engaging learning experiences.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/static-build/student-login.html"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Student Login
              <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-6xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="flex justify-center items-center h-10 w-10 rounded bg-indigo-600 text-white font-bold">
                  PFL
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900">PFL Academy</span>
              </div>
              <p className="text-sm leading-6 text-gray-600">
                Empowering the next generation with essential financial literacy skills.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Curriculum</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Standards</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Chapters</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Skill Builders</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Assessment</a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Resources</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Teacher Guides</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Student Resources</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Downloads</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Help Center</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">About</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Mission & Vision</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Team</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Press</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Cookies</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20">
            <p className="text-xs leading-5 text-gray-500">&copy; 2025 PFL Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Standards;