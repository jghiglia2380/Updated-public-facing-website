<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resources - PFL Academy</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <style>
    /* Custom utilities for 3D transforms and effects */
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
    
    .transform {
      transform-style: preserve-3d;
    }
    
    /* Animation keyframes */
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

    /* Gradient hover effects */
    .feature-card {
      transition: all 0.3s ease;
    }
    
    .feature-card:hover {
      background-image: linear-gradient(to bottom right, rgba(79, 70, 229, 0.05), rgba(124, 58, 237, 0.05));
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    /* Fade effect for hero images */
    .fade-to-grid {
      position: relative;
    }
    
    .fade-to-grid::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 25%;
      background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
      pointer-events: none;
      z-index: 10;
    }
  </style>
</head>
<body>
  <header class="bg-white border-b border-gray-200 shadow-sm fixed w-full z-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="flex items-center">
            <div class="flex justify-center items-center h-10 w-10 rounded bg-indigo-600 text-white font-bold">
              PFL
            </div>
            <span class="ml-3 text-xl font-bold text-gray-900">PFL Academy</span>
          </div>
        </div>
        <nav class="hidden md:flex items-center space-x-8">
          <a href="/static-build/index101.html" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Home</a>
          <a href="/static-build/standards.html" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Curriculum</a>
          <a href="/static-build/resources.html" class="text-indigo-600 font-medium hover:text-indigo-800 text-sm">Resources</a>
          <a href="/static-build/community.html" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Community Partners</a>
          <a href="/static-build/student-login.html" class="text-gray-700 font-medium hover:text-indigo-800 text-sm border border-indigo-600 rounded-lg px-4 py-2 transition-colors">Student Portal</a>
        </nav>
      </div>
    </div>
  </header>
  
  <!-- Header Spacer -->
  <div class="h-20"></div>

  <!-- Primary Hero Section -->
  <div class="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 md:py-24 lg:py-28">
    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
    </div>

    <div class="relative mx-auto max-w-6xl px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white mb-6">
            <span class="mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
            </span>
            <span>Education Resources</span>
          </div>
          
          <h1 class="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Comprehensive Learning Resources for Students & Educators
          </h1>
          <p class="mt-6 text-lg text-indigo-100 max-w-2xl">
            A structured approach to financial literacy education, blending interactive tools, real-world applications, and expert support.
          </p>
          <div class="mt-10 flex flex-wrap gap-4">
            <a href="#teacher-resources" class="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-indigo-800 bg-white hover:bg-indigo-50 shadow-md transition-all duration-200 hover:-translate-y-1">
              Explore Teacher Resources
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a href="#student-resources" class="inline-flex items-center px-6 py-3 border border-white/30 text-sm font-medium rounded-lg text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-1">
              Explore Student Resources
            </a>
          </div>
        </div>
        
        <div class="relative">
          <!-- Hero image card -->
          <div class="relative">
            <div class="relative z-10 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl">
              <div class="overflow-hidden rounded-xl">
                <img
                  src="assets/images/resources/primary-hero.png"
                  alt="Students engaged in financial literacy education"
                  class="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div class="mt-6 flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                <div class="flex items-center">
                  <div class="rounded-full bg-indigo-600 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                      <path d="M12 22V8"></path>
                      <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
                      <path d="M8 5.2c0 1.8 1.6 3.3 4 3.3s4-1.5 4-3.3-1.6-3.3-4-3.3-4 1.5-4 3.3z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-base font-semibold text-gray-900">Financial Literacy Resources</h4>
                    <p class="text-sm text-gray-600">
                      Structured learning paths for students and educators
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Teacher Resources Section -->
  <div class="bg-zinc-50 py-16 md:py-32" id="teacher-resources">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 lg:text-5xl">
          Teacher Resources
        </h1>
        <p class="mt-4 text-xl text-gray-600 mx-auto max-w-3xl">
          Comprehensive tools and materials to deliver effective financial literacy education.
        </p>
      </div>

      <!-- Teacher Guide Image with Fade Effect -->
      <div class="relative flex justify-center fade-to-grid mb-8 mt-16">
        <img src="assets/images/resources/teacher-guide.png" alt="Teacher Guide Screenshot" class="w-full max-w-5xl rounded-lg shadow-xl">
      </div>

      <!-- First Row: 3 Resource Cards -->
      <div class="mx-auto mt-12 grid max-w-6xl gap-10 md:grid-cols-3">
        <!-- Teacher Resource 1 -->
        <div class="feature-card group rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300">
          <div class="relative mx-auto h-36 w-36 duration-200 overflow-hidden">
            <!-- Basic background -->
            <div aria-hidden class="absolute inset-0 bg-purple-50/30 rounded-full"></div>
            
            <!-- Simple but visible grid pattern using inline style -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background-image: linear-gradient(to right, rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.2) 1px, transparent 1px); background-size: 24px 24px;"></div>
            
            <!-- Radial gradient overlay for dissolving effect -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background: radial-gradient(circle at center, transparent 30%, white 100%); mix-blend-mode: overlay;"></div>
            
            <!-- Icon container with full borders and better shadow -->
            <div class="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              </svg>
            </div>
          </div>
          <h2 class="mt-8 text-xl font-semibold text-gray-900">Comprehensive Lesson Plans</h2>
          <p class="mt-3 text-base text-gray-600 leading-relaxed">
            Step-by-step guides for structured, synchronous instruction.
          </p>
        </div>

        <!-- Teacher Resource 2 -->
        <div class="feature-card group rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300">
          <div class="relative mx-auto h-36 w-36 duration-200 overflow-hidden">
            <!-- Basic background -->
            <div aria-hidden class="absolute inset-0 bg-purple-50/30 rounded-full"></div>
            
            <!-- Simple but visible grid pattern using inline style -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background-image: linear-gradient(to right, rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.2) 1px, transparent 1px); background-size: 24px 24px;"></div>
            
            <!-- Radial gradient overlay for dissolving effect -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background: radial-gradient(circle at center, transparent 30%, white 100%); mix-blend-mode: overlay;"></div>
            
            <!-- Icon container with full borders and better shadow -->
            <div class="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </div>
          <h2 class="mt-8 text-xl font-semibold text-gray-900">Adaptive Instructional Support</h2>
          <p class="mt-3 text-base text-gray-600 leading-relaxed">
            On-demand expert guidance embedded into the platform.
          </p>
        </div>

        <!-- Teacher Resource 3 -->
        <div class="feature-card group rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300">
          <div class="relative mx-auto h-36 w-36 duration-200 overflow-hidden">
            <!-- Basic background -->
            <div aria-hidden class="absolute inset-0 bg-purple-50/30 rounded-full"></div>
            
            <!-- Simple but visible grid pattern using inline style -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background-image: linear-gradient(to right, rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.2) 1px, transparent 1px); background-size: 24px 24px;"></div>
            
            <!-- Radial gradient overlay for dissolving effect -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background: radial-gradient(circle at center, transparent 30%, white 100%); mix-blend-mode: overlay;"></div>
            
            <!-- Icon container with full borders and better shadow -->
            <div class="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </div>
          </div>
          <h2 class="mt-8 text-xl font-semibold text-gray-900">Assessment & Grading</h2>
          <p class="mt-3 text-base text-gray-600 leading-relaxed">
            Tools for tracking student progress, flexible grading structures.
          </p>
        </div>
      </div>
      
      <!-- Second Row: 2 Resource Cards, centered -->
      <div class="mx-auto mt-10 grid max-w-6xl gap-10 md:grid-cols-2 md:max-w-4xl">
        <!-- Teacher Resource 4 -->
        <div class="feature-card group rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300">
          <div class="relative mx-auto h-36 w-36 duration-200 overflow-hidden">
            <!-- Basic background -->
            <div aria-hidden class="absolute inset-0 bg-purple-50/30 rounded-full"></div>
            
            <!-- Simple but visible grid pattern using inline style -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background-image: linear-gradient(to right, rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.2) 1px, transparent 1px); background-size: 24px 24px;"></div>
            
            <!-- Radial gradient overlay for dissolving effect -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background: radial-gradient(circle at center, transparent 30%, white 100%); mix-blend-mode: overlay;"></div>
            
            <!-- Icon container with full borders and better shadow -->
            <div class="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
          </div>
          <h2 class="mt-8 text-xl font-semibold text-gray-900">Classroom Engagement Tools</h2>
          <p class="mt-3 text-base text-gray-600 leading-relaxed">
            Interactive worksheets, group activities, real-world financial scenarios.
          </p>
        </div>

        <!-- Teacher Resource 5 -->
        <div class="feature-card group rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300">
          <div class="relative mx-auto h-36 w-36 duration-200 overflow-hidden">
            <!-- Basic background -->
            <div aria-hidden class="absolute inset-0 bg-purple-50/30 rounded-full"></div>
            
            <!-- Simple but visible grid pattern using inline style -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background-image: linear-gradient(to right, rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.2) 1px, transparent 1px); background-size: 24px 24px;"></div>
            
            <!-- Radial gradient overlay for dissolving effect -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background: radial-gradient(circle at center, transparent 30%, white 100%); mix-blend-mode: overlay;"></div>
            
            <!-- Icon container with full borders and better shadow -->
            <div class="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
          </div>
          <h2 class="mt-8 text-xl font-semibold text-gray-900">Professional Development</h2>
          <p class="mt-3 text-base text-gray-600 leading-relaxed">
            Continuous, built-in professional development. Every day.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Student Resources Section -->
  <div class="bg-white py-16 md:py-32" id="student-resources">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 lg:text-5xl">
          Student Resources
        </h1>
        <p class="mt-4 text-xl text-gray-600 mx-auto max-w-3xl">
          Interactive tools and materials to build essential financial literacy skills.
        </p>
      </div>

      <!-- Student Curriculum Image with Fade Effect -->
      <div class="relative flex justify-center fade-to-grid mb-8 mt-16">
        <img src="assets/images/resources/student-curriculum.png" alt="Student Curriculum Screenshot" class="w-full max-w-5xl rounded-lg shadow-xl">
      </div>

      <!-- First Row: 3 Resource Cards -->
      <div class="mx-auto mt-12 grid max-w-6xl gap-10 md:grid-cols-3">
        <!-- Student Resource 1 -->
        <div class="feature-card group rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300">
          <div class="relative mx-auto h-36 w-36 duration-200 overflow-hidden">
            <!-- Basic background -->
            <div aria-hidden class="absolute inset-0 bg-purple-50/30 rounded-full"></div>
            
            <!-- Simple but visible grid pattern using inline style -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background-image: linear-gradient(to right, rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.2) 1px, transparent 1px); background-size: 24px 24px;"></div>
            
            <!-- Radial gradient overlay for dissolving effect -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background: radial-gradient(circle at center, transparent 30%, white 100%); mix-blend-mode: overlay;"></div>
            
            <!-- Icon container with full borders and better shadow -->
            <div class="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
            </div>
          </div>
          <h2 class="mt-8 text-xl font-semibold text-gray-900">Interactive Learning</h2>
          <p class="mt-3 text-base text-gray-600 leading-relaxed">
            Hands-on exercises, financial simulations, and self-guided tools.
          </p>
        </div>

        <!-- Student Resource 2 -->
        <div class="feature-card group rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300">
          <div class="relative mx-auto h-36 w-36 duration-200 overflow-hidden">
            <!-- Basic background -->
            <div aria-hidden class="absolute inset-0 bg-purple-50/30 rounded-full"></div>
            
            <!-- Simple but visible grid pattern using inline style -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background-image: linear-gradient(to right, rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.2) 1px, transparent 1px); background-size: 24px 24px;"></div>
            
            <!-- Radial gradient overlay for dissolving effect -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background: radial-gradient(circle at center, transparent 30%, white 100%); mix-blend-mode: overlay;"></div>
            
            <!-- Icon container with full borders and better shadow -->
            <div class="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M12 18v-6"></path>
                <path d="M8 18v-1"></path>
                <path d="M16 18v-3"></path>
              </svg>
            </div>
          </div>
          <h2 class="mt-8 text-xl font-semibold text-gray-900">Skill-Building Activities</h2>
          <p class="mt-3 text-base text-gray-600 leading-relaxed">
            Career exploration, budgeting, investment planning.
          </p>
        </div>

        <!-- Student Resource 3 -->
        <div class="feature-card group rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300">
          <div class="relative mx-auto h-36 w-36 duration-200 overflow-hidden">
            <!-- Basic background -->
            <div aria-hidden class="absolute inset-0 bg-purple-50/30 rounded-full"></div>
            
            <!-- Simple but visible grid pattern using inline style -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background-image: linear-gradient(to right, rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.2) 1px, transparent 1px); background-size: 24px 24px;"></div>
            
            <!-- Radial gradient overlay for dissolving effect -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background: radial-gradient(circle at center, transparent 30%, white 100%); mix-blend-mode: overlay;"></div>
            
            <!-- Icon container with full borders and better shadow -->
            <div class="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
              </svg>
            </div>
          </div>
          <h2 class="mt-8 text-xl font-semibold text-gray-900">Podcast-Based Learning</h2>
          <p class="mt-3 text-base text-gray-600 leading-relaxed">
            Audio-enhanced lesson content for improved accessibility and engagement.
          </p>
        </div>
      </div>
      
      <!-- Second Row: 2 Resource Cards, centered -->
      <div class="mx-auto mt-10 grid max-w-6xl gap-10 md:grid-cols-2 md:max-w-4xl">
        <!-- Student Resource 4 -->
        <div class="feature-card group rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300">
          <div class="relative mx-auto h-36 w-36 duration-200 overflow-hidden">
            <!-- Basic background -->
            <div aria-hidden class="absolute inset-0 bg-purple-50/30 rounded-full"></div>
            
            <!-- Simple but visible grid pattern using inline style -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background-image: linear-gradient(to right, rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.2) 1px, transparent 1px); background-size: 24px 24px;"></div>
            
            <!-- Radial gradient overlay for dissolving effect -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background: radial-gradient(circle at center, transparent 30%, white 100%); mix-blend-mode: overlay;"></div>
            
            <!-- Icon container with full borders and better shadow -->
            <div class="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
                <path d="M3 3v18h18"></path>
                <path d="m19 9-5 5-4-4-3 3"></path>
              </svg>
            </div>
          </div>
          <h2 class="mt-8 text-xl font-semibold text-gray-900">Assessments & Progress Tracking</h2>
          <p class="mt-3 text-base text-gray-600 leading-relaxed">
            Quizzes, progress monitoring tools, and goal-setting features.
          </p>
        </div>

        <!-- Student Resource 5 -->
        <div class="feature-card group rounded-xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300">
          <div class="relative mx-auto h-36 w-36 duration-200 overflow-hidden">
            <!-- Basic background -->
            <div aria-hidden class="absolute inset-0 bg-purple-50/30 rounded-full"></div>
            
            <!-- Simple but visible grid pattern using inline style -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background-image: linear-gradient(to right, rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.2) 1px, transparent 1px); background-size: 24px 24px;"></div>
            
            <!-- Radial gradient overlay for dissolving effect -->
            <div aria-hidden class="absolute inset-0 rounded-full" style="background: radial-gradient(circle at center, transparent 30%, white 100%); mix-blend-mode: overlay;"></div>
            
            <!-- Icon container with full borders and better shadow -->
            <div class="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
                <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                <line x1="8" x2="16" y1="21" y2="21"></line>
                <line x1="12" x2="12" y1="17" y2="21"></line>
              </svg>
            </div>
          </div>
          <h2 class="mt-8 text-xl font-semibold text-gray-900">Financial Planning Resources</h2>
          <p class="mt-3 text-base text-gray-600 leading-relaxed">
            College financing tools, tax resources, real-world application tools.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="bg-zinc-50 py-16 md:py-24">
    <div class="mx-auto max-w-6xl px-6">
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(79,70,229,0.4)] hover:-translate-y-1">
        <div class="px-6 py-12 sm:px-12 lg:px-16 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 class="text-3xl font-semibold text-white">
              Ready to bring financial literacy to your community?
            </h2>
            <p class="mt-4 text-lg text-indigo-100">
              Join schools and districts across the country integrating engaging, standards-aligned financial literacy curriculum into their classrooms.
            </p>
            
            <ul class="mt-8 space-y-4">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-200 mt-1">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="ml-3 text-indigo-100">Turnkey curriculum aligned with state standards</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-200 mt-1">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="ml-3 text-indigo-100">Interactive tools for enhanced student engagement</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-200 mt-1">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="ml-3 text-indigo-100">Adaptive instructional support for educators</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-200 mt-1">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="ml-3 text-indigo-100">Flexible implementation options for schools</span>
              </li>
            </ul>
            
            <div class="mt-8">
              <p class="text-indigo-100">For partnership inquiries:</p>
              <a href="mailto:info@pflacademy.co" class="text-white font-semibold hover:text-indigo-100">info@pflacademy.co</a>
            </div>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-medium text-gray-900 mb-6">Request a Partnership Demo</h3>
            <form class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label for="first_name" class="block text-sm font-medium text-gray-700 mb-1">First name</label>
                  <input type="text" name="first_name" id="first_name" class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <div>
                  <label for="last_name" class="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                  <input type="text" name="last_name" id="last_name" class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                </div>
              </div>
              <div>
                <label for="institution" class="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                <input type="text" name="institution" id="institution" class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="email" id="email" class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              </div>
              <div>
                <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-lg py-3 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 hover:shadow-xl hover:translate-y-[-3px] hover:brightness-105">
                  Book a Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white border-t border-gray-200">
  <div class="mx-auto max-w-6xl py-12 px-6 lg:py-16">
    <div class="grid grid-cols-1 gap-8 xl:grid-cols-5">
      <div class="xl:col-span-2">
        <div class="flex items-center">
          <div class="flex justify-center items-center h-10 w-10 rounded bg-indigo-600 text-white font-bold">
            PFL
          </div>
          <span class="ml-3 text-xl font-bold text-gray-900">PFL Academy</span>
        </div>
        <p class="mt-4 text-base text-gray-600 max-w-md">
          Empowering the next generation with essential financial literacy skills for a secure and successful future.
        </p>
        <div class="mt-6 flex space-x-5">
          <a href="#" class="text-gray-400 hover:text-gray-500" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-8 xl:col-span-3 xl:grid-cols-3">
        <div>
          <h3 class="text-lg font-bold text-gray-900">
            Quick Links
          </h3>
          <ul class="mt-4 space-y-3">
            <li>
              <a href="/static-build/index101.html" class="text-sm text-gray-600 hover:text-indigo-600">
                Home
              </a>
            </li>
            <li>
              <a href="/static-build/standards.html" class="text-sm text-gray-600 hover:text-indigo-600">
                Curriculum
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                Resources
              </a>
            </li>
            <li>
              <a href="/static-build/community.html" class="text-sm text-gray-600 hover:text-indigo-600">
                Community Partners
              </a>
            </li>
            <li>
              <a href="/static-build/student-login.html" class="text-sm text-gray-600 hover:text-indigo-600">
                Student Portal
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-bold text-gray-900">
            Instructor & Student Resources
          </h3>
          <ul class="mt-4 space-y-3">
            <li class="text-sm font-medium text-gray-700">
              For Instructors:
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                Comprehensive Teacher Guides
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                Adaptive Instructional Support
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                Customizable Grading & Assessments
              </a>
            </li>
            <li class="mt-8 pt-4 border-t border-gray-100 text-sm font-medium text-gray-700">
              For Students:
            </li>
            <li>
              <a href="/static-build/curriculum-glance.html" class="text-sm text-gray-600 hover:text-indigo-600">
                Curriculum at a Glance
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                Learning Lab Activities
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                Assessment & Grading
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-bold text-gray-900">
            Support & Legal
          </h3>
          <ul class="mt-4 space-y-3">
            <li>
              <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                Support
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                Contact Support
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">
                Accessibility Statement
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
      <p class="text-sm text-gray-600">
        &copy; 2025 PFL Academy. All rights reserved.
      </p>
      <div class="flex space-x-6 mt-4 md:mt-0">
        <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">Privacy Policy</a>
        <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">Terms of Service</a>
        <a href="#" class="text-sm text-gray-600 hover:text-indigo-600">Contact</a>
      </div>
    </div>
    
    <div class="mt-8 flex items-center justify-center">
      <div class="flex items-center space-x-2 text-sm text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <span>2380 California Street, San Francisco, CA 94115</span>
        <span>•</span>
        <span>(415) 990-2754</span>
        <span>•</span>
        <a href="mailto:partners@pflacademy.co" class="hover:text-indigo-600">partners@pflacademy.co</a>
      </div>
    </div>
  </div>
</footer>

</body>
</html>