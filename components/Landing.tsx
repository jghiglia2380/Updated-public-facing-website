import React from 'react';

const Landing: React.FC = () => {
  // Floating icons for background decoration
  const renderFloatingIcons = () => {
    const icons = [
      { symbol: '$', animationDuration: '15s', left: '10%', top: '20%' },
      { symbol: '%', animationDuration: '20s', left: '80%', top: '15%' },
      { symbol: '£', animationDuration: '18s', left: '20%', top: '70%' },
      { symbol: '¥', animationDuration: '22s', left: '75%', top: '65%' },
      { symbol: '€', animationDuration: '19s', left: '50%', top: '40%' },
    ];
    
    return icons.map((icon, index) => (
      <div 
        key={index}
        className="floating-icon"
        style={{
          left: icon.left,
          top: icon.top,
          animationDuration: icon.animationDuration
        }}
      >
        {icon.symbol}
      </div>
    ));
  };
  
  return (
    <div className="min-h-screen bg-white">
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
              <a href="#" className="text-gray-700 font-medium hover:text-indigo-600 text-sm">Home</a>
              <a href="/static-build/standards.html" className="text-gray-700 font-medium hover:text-indigo-600 text-sm">Curriculum</a>
              <a href="#" className="text-gray-700 font-medium hover:text-indigo-600 text-sm">Resources</a>
              <a href="/static-build/community-partners.html" className="text-gray-700 font-medium hover:text-indigo-600 text-sm">Community Partners</a>
              <a href="/static-build/student-login.html" className="text-indigo-600 font-medium hover:text-indigo-800 text-sm border border-indigo-600 rounded-lg px-4 py-2 transition-colors">Student Portal</a>
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

        {renderFloatingIcons()}

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white mb-6">
                <span className="mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                  </svg>
                </span>
                <span>Financial Literacy Education</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Empowering the Next Generation of Financially Literate Leaders
              </h1>
              <p className="mt-6 text-lg text-indigo-100 max-w-2xl">
                Interactive lessons, skill-building activities, and real-world applications to prepare students for financial success in an increasingly complex world.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a 
                  href="/static-build/standards.html" 
                  className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore Curriculum
                  <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="/static-build/student-login.html" 
                  className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Student Login
                </a>
              </div>
            </div>
            
            <div className="relative perspective-1000">
              <div className="relative transform rotate-y-2 transition-all duration-500 hover:rotate-y-0">
                <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-2xl">
                  <div className="rounded-xl bg-white">
                    <img 
                      src="/assets/dashboard-preview.png" 
                      alt="PFL Academy Dashboard Preview" 
                      className="mx-auto w-full rounded-t-xl" 
                    />
                    <div className="p-6 bg-white rounded-b-xl">
                      <h3 className="text-lg font-bold text-gray-900">Interactive Learning Platform</h3>
                      <p className="mt-2 text-sm text-gray-600">Personalized learning paths, interactive activities, and real-time progress tracking.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-20 -right-12 rotate-12 transform">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg p-1 shadow-xl">
                  <div className="bg-white rounded p-2">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="8" r="7"></circle>
                          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-xs font-semibold text-gray-900">Achievement Unlocked!</p>
                        <p className="text-xs text-gray-500">Saving Superstar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -left-8 -rotate-6 transform">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg p-1 shadow-xl">
                  <div className="bg-white rounded p-2">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-xs font-semibold text-gray-900">Progress Update</p>
                        <p className="text-xs text-gray-500">Budgeting Basics Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Comprehensive Curriculum</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Build essential financial skills</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              PFL Academy provides a structured curriculum that covers all aspects of personal financial literacy, from budgeting basics to advanced investment strategies.
            </p>
          </div>
        </div>
        
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">Interactive Learning</h2>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900">Engaging Activities</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Students learn through interactive exercises, simulations, and skill-building activities designed to make financial concepts accessible and engaging.
                  </p>
                  <div className="mt-8 bg-white">
                    <div className="-my-2 p-2 lg:-mx-8 lg:p-4">
                      <div className="p-5 bg-indigo-50 rounded-xl">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                              <path d="M16.5 9.4 7.55 4.24"></path>
                              <polyline points="3.29 7 12 12 20.71 7"></polyline>
                              <line x1="12" y1="22" x2="12" y2="12"></line>
                              <circle cx="18.5" cy="15.5" r="2.5"></circle>
                              <path d="M20.27 17.27 22 19"></path>
                            </svg>
                          </div>
                          <div className="ml-4">
                            <dt className="text-lg font-medium text-gray-900">Financial Simulations</dt>
                            <dd className="mt-1 text-gray-500">Practice financial decisions in safe, simulated environments.</dd>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">Real-World Application</h2>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900">Practical Skills</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Curriculum relates directly to students' lives with examples and activities that prepare them for real financial situations they'll encounter.
                  </p>
                  <div className="mt-8 bg-white">
                    <div className="-my-2 p-2 lg:-mx-8 lg:p-4">
                      <div className="p-5 bg-indigo-50 rounded-xl">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path>
                              <circle cx="16" cy="16" r="6"></circle>
                              <path d="m18 16-4 4"></path>
                              <path d="m14 12 4 4"></path>
                            </svg>
                          </div>
                          <div className="ml-4">
                            <dt className="text-lg font-medium text-gray-900">Case Studies</dt>
                            <dd className="mt-1 text-gray-500">Learn from realistic financial scenarios and decisions.</dd>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">Personalized Learning</h2>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900">Adaptive Pathways</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Students progress at their own pace with personalized feedback and customized learning paths based on their interests and needs.
                  </p>
                  <div className="mt-8 bg-white">
                    <div className="-my-2 p-2 lg:-mx-8 lg:p-4">
                      <div className="p-5 bg-indigo-50 rounded-xl">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                          </div>
                          <div className="ml-4">
                            <dt className="text-lg font-medium text-gray-900">Progress Tracking</dt>
                            <dd className="mt-1 text-gray-500">Monitor achievements and identify areas for growth.</dd>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Standards Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Financial Literacy Standards</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comprehensive Curriculum Coverage</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our curriculum covers all 15 financial literacy standards, providing students with a complete foundation for financial success.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {[
                {
                  name: "Income & Careers",
                  description: "Understanding career choices, income sources, and financial planning for the future.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  ),
                },
                {
                  name: "Taxes",
                  description: "Learn about different types of taxes, their purposes, and how they affect personal finances.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                      <line x1="7" y1="5" x2="7" y2="19"></line>
                    </svg>
                  ),
                },
                {
                  name: "Financial Services",
                  description: "Explore banking, financial institutions, and the services they provide for wealth management.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  ),
                },
                {
                  name: "Banking & Deposits",
                  description: "Understand various account types, deposit insurance, and electronic banking tools.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                      <line x1="2" y1="10" x2="22" y2="10"></line>
                    </svg>
                  ),
                },
                {
                  name: "Saving & Investing",
                  description: "Learn strategies for saving, investment options, and how to build wealth over time.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 7h-7.93a2 2 0 0 1-2-1.97c-.05-.9-.97-1.53-1.87-1.26L2 7.26v9.74c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V7z"></path>
                      <path d="M20 7v12"></path>
                      <path d="M16 7v12"></path>
                      <path d="M12 7v12"></path>
                      <path d="M8 7v12"></path>
                    </svg>
                  ),
                },
                {
                  name: "Consumer Protection",
                  description: "Identify fraud, understand consumer rights, and learn to make informed financial decisions.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <div key={index} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                      <div className="h-6 w-6 text-white">
                        {feature.icon}
                      </div>
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                    <div className="h-6 w-6 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
                        <polyline points="15 3 15 9 21 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <a href="/static-build/standards.html" className="text-indigo-600 hover:text-indigo-500">
                    View All 15 Standards
                    <span aria-hidden="true" className="ml-2">→</span>
                  </a>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Explore our complete curriculum covering all essential financial literacy standards.
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="mx-auto max-w-6xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-indigo-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform financial literacy education?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                PFL Academy provides a comprehensive platform for teaching essential financial skills to prepare students for a lifetime of financial well-being.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="/static-build/student-login.html"
                  className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Student Login
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 transform -translate-x-1/2 rotate-3"
                src="/assets/dashboard-full.png"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
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
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Partners</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Community Partners</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Schools</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Financial Institutions</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Become a Partner</a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
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
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-500">
              &copy; 2025 PFL Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;