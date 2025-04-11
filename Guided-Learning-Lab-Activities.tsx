<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PFL Academy - Learning Lab Activities Guide</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        /* Blue ribbon box style */
        .ribbon-box {
            border: 2px solid #4F46E5;
            border-radius: 10px;
            padding: 16px;
            margin-bottom: 24px;
            box-shadow: 0 0 4px 2px rgba(79, 70, 229, 0.3);
        }
        
        /* Core component styles */
        .learning-objectives {
            background-color: #e6f3ff;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            transition: all 0.3s ease;
        }
        
        .learning-objectives:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .discussion-prompt {
            background-color: #e6f0ff;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin: 1.5rem 0;
            border-left: 4px solid #3b82f6;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            transition: all 0.3s ease;
        }
        
        .discussion-prompt:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .audio-player {
            background-color: #f4f4f5;
            border-radius: 0.75rem;
            padding: 1rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
        }
        
        /* Custom styles for specific components */
        .activity-timer {
            background: linear-gradient(to right, #eef2ff, #ede9fe);
            border-left: 4px solid #4f46e5;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 0.5rem;
        }
        
        .learning-station {
            border: 1px solid #e5e7eb;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin: 1.5rem 0;
            background-color: #ffffff;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            transition: all 0.3s ease;
        }
        
        .learning-station:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            background-image: linear-gradient(to bottom right, rgba(79, 70, 229, 0.02), rgba(124, 58, 237, 0.02));
        }
        
        .learning-station h3 {
            color: #4f46e5;
            margin-bottom: 0.75rem;
        }
        
        .station-number {
            display: inline-block;
            width: 2rem;
            height: 2rem;
            text-align: center;
            line-height: 2rem;
            background: linear-gradient(to right, #4f46e5, #6366f1);
            color: white;
            border-radius: 9999px;
            margin-right: 0.5rem;
            box-shadow: 0 2px 4px -1px rgba(79, 70, 229, 0.3);
        }
        
        .important-note {
            background-color: #fffbeb;
            border-left: 4px solid #f59e0b;
            padding: 1.5rem;
            margin: 1.5rem 0;
            border-radius: 0.5rem;
            transition: all 0.3s ease;
        }
        
        .important-note:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .progress-bar {
            background-color: #e0e7ff;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            transition: all 0.3s ease;
        }
        
        /* Section headers with decorative elements */
        .section-title {
            position: relative;
            padding-bottom: 0.75rem;
            margin-bottom: 1.5rem;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(to right, #4f46e5, #8b5cf6);
            border-radius: 3px;
        }
        
        /* Day Toggle in sidebar */
        .day-toggle {
            display: flex;
            background-color: #f3f4f6;
            border-radius: 9999px;
            padding: 0.25rem;
            margin-bottom: 1rem;
            overflow: hidden;
        }
        
        .day-toggle-option {
            flex: 1;
            text-align: center;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .day-toggle-option.active {
            background: linear-gradient(to right, #4f46e5, #6366f1);
            color: white;
            box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);
        }
        
        /* Station indicators */
        .station-indicators {
            display: flex;
            justify-content: center;
            margin-bottom: 1.5rem;
        }
        
        .station-indicator {
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 50%;
            background-color: #e5e7eb;
            margin: 0 0.25rem;
            transition: all 0.3s ease;
        }
        
        .station-indicator.active {
            background: linear-gradient(to right, #4f46e5, #6366f1);
            transform: scale(1.2);
        }
        
        /* Toast notifications */
        .toast-notification {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background-color: #4f46e5;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transform: translateY(150%);
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            z-index: 50;
        }
        
        .toast-notification.show {
            transform: translateY(0);
            opacity: 1;
        }
        
        /* Button styles */
        .pfl-button {
            background: linear-gradient(to right, #4f46e5, #6366f1);
            color: white;
            border-radius: 0.5rem;
            padding: 0.75rem 1.5rem;
            font-weight: 500;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .pfl-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            filter: brightness(110%);
        }
        
        /* Smooth scrolling for anchor links */
        html {
            scroll-behavior: smooth;
        }
        
        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
            animation: fadeIn 0.5s ease forwards;
        }
        
        /* ===== Interactive walkthrough styles ===== */
        .highlight {
            border: 3px solid #6366F1;
            box-shadow: 0px 0px 10px rgba(99, 102, 241, 0.5);
            transition: all 0.3s ease-in-out;
            position: relative;
            z-index: 5; /* Ensure the highlighted element is above others */
        }

        /* Special styling for header elements to make sure they're visible */
        header .highlight, 
        .tab-group.highlight, 
        .print-btn.highlight {
            border: 3px solid #6366F1 !important;
            box-shadow: 0px 0px 10px rgba(99, 102, 241, 0.8) !important;
        }
        
        /* Special styling for buttons that have gradients */
        .pfl-button.highlight {
            border: 3px solid white !important;
            box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8) !important;
        }

        .pulse {
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.5); }
            50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.7); }
            100% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.5); }
        }

        .walkthrough-tooltip {
            display: none;
            position: absolute;
            background: white;
            border: 1px solid #E5E7EB;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            z-index: 100;
            width: 300px;
            max-width: 80vw;
            transition: opacity 0.3s ease;
        }
        
        /* Tooltip arrow for better visual connection to element */
        .walkthrough-tooltip::before {
            content: '';
            position: absolute;
            top: -8px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 0 8px 8px 8px;
            border-style: solid;
            border-color: transparent transparent white transparent;
            filter: drop-shadow(0px -2px 2px rgba(0, 0, 0, 0.05));
        }
        
        /* Arrow for tooltips that appear below elements */
        .walkthrough-tooltip.tooltip-arrow-top::before {
            top: auto;
            bottom: -8px;
            border-width: 8px 8px 0 8px;
            border-color: white transparent transparent transparent;
            filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.05));
        }

        .active-tooltip {
            display: block;
        }

        .walkthrough-box {
            display: none;
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: white;
            border: 1px solid #E5E7EB;
            border-radius: 12px;
            padding: 18px 24px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            width: 450px;
            max-width: 90vw;
            transition: all 0.3s ease-in-out;
        }

        .walkthrough-box.active {
            display: block;
            animation: slideUpFade 0.4s ease-out;
        }
        
        @keyframes slideUpFade {
            from { transform: translateX(-50%) translateY(20px); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }

        .walkthrough-controls {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
        }

        .walkthrough-button {
            background-color: #6366F1;
            color: white;
            padding: 9px 18px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .walkthrough-button:hover {
            background-color: #4F46E5;
            transform: translateY(-1px);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
        }

        .walkthrough-button:disabled {
            background-color: #CBD5E1;
            cursor: not-allowed;
            box-shadow: none;
            transform: none;
        }

        .walkthrough-progress {
            display: flex;
            justify-content: center;
            margin-top: 15px;
        }

        .progress-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #E2E8F0;
            margin: 0 5px;
            transition: all 0.3s;
            position: relative;
        }

        .progress-dot.active {
            background-color: #6366F1;
            transform: scale(1.2);
        }
        
        .progress-dot.active::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: rgba(99, 102, 241, 0.2);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: pulse 2s infinite;
        }

        /* Fade-in animation */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .fade-in {
            animation: fadeIn 0.5s;
        }
        
        /* Entry experience overlay */
        #entry-experience {
            position: fixed;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 50;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        /* Mode selector */
        .mode-selector {
            position: fixed;
            top: 80px;
            right: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            z-index: 990;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        .mode-button {
            padding: 10px 15px;
            cursor: pointer;
            transition: background-color 0.2s;
            border: none;
            background: none;
            text-align: left;
            display: flex;
            align-items: center;
        }

        .mode-button:hover {
            background-color: #F3F4F6;
        }

        .mode-button.active {
            background-color: #EEF2FF;
            font-weight: 500;
            color: #4F46E5;
        }

        .mode-button svg {
            margin-right: 8px;
        }

        /* Close button for tooltips */
        .tooltip-close {
            position: absolute;
            top: 5px;
            right: 5px;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 18px;
            color: #9CA3AF;
        }

        .tooltip-close:hover {
            color: #4B5563;
        }

        /* Hidden elements */
        .hidden {
            display: none !important;
        }
        
        /* Explore mode elements */
        .explore-interactive {
            transition: all 0.2s ease;
            position: relative;
            border: 2px solid transparent;
        }
        
        .explore-interactive:hover {
            border: 2px solid #6366F1;
            box-shadow: 0 0 8px rgba(99, 102, 241, 0.4);
            cursor: help;
        }
        
        .explore-tooltip {
            position: absolute;
            z-index: 1000;
            width: 300px;
            background-color: white;
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            transition: opacity 0.3s ease;
            border: 1px solid #E5E7EB;
        }
        
        .tooltip-arrow-bottom:before {
            content: '';
            position: absolute;
            top: -8px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 0 8px 8px 8px;
            border-style: solid;
            border-color: transparent transparent white transparent;
            filter: drop-shadow(0px -2px 2px rgba(0, 0, 0, 0.05));
        }
        
        .tooltip-arrow-top:before {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 8px 8px 0 8px;
            border-style: solid;
            border-color: white transparent transparent transparent;
            filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.05));
        }
        
        .explore-info-indicator {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #4F46E5;
            color: white;
            padding: 12px 20px;
            border-radius: 50px;
            box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: slideUpFadeIn 0.5s ease-out;
        }
        
        .fade-out {
            animation: fadeOut 1s ease-out forwards;
        }
        
        @keyframes slideUpFadeIn {
            from { transform: translate(-50%, 20px); opacity: 0; }
            to { transform: translate(-50%, 0); opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    </style>
</head>
<body class="bg-gray-50">
    <header class="bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-40">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center">
                <div class="flex justify-center items-center h-10 w-10 rounded bg-white/20 text-white font-bold">
                    PFL
                </div>
                <span class="ml-3 text-xl font-bold">PFL Academy</span>
            </div>
            <nav class="hidden md:flex space-x-8">
                <a href="#" class="text-white hover:text-indigo-200 transition-colors nav-link">Home</a>
                <a href="#" class="text-white hover:text-indigo-200 transition-colors nav-link">Curriculum</a>
                <a href="#" class="text-white hover:text-indigo-200 transition-colors nav-link">Resources</a>
                <a href="#" class="text-white hover:text-indigo-200 transition-colors nav-link">Profile</a>
            </nav>
            <!-- Mobile menu button -->
            <button class="md:hidden text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </header>
    <div class="h-20"></div>
    
    <!-- Entry Experience Overlay -->
    <!-- Entry Experience Overlay (initially hidden) -->
    <div id="entry-experience" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden">
        <div class="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">Welcome to the Learning Lab Activities</h2>
            <p class="mb-6 text-gray-600">How would you like to explore this guide?</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50 cursor-pointer transition-colors" id="guided-tour-option">
                    <div class="flex items-start mb-2">
                        <div class="bg-indigo-100 p-2 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Guided Tour</h3>
                            <p class="text-sm text-gray-600">Step-by-step walkthrough of key sections with explanations</p>
                        </div>
                    </div>
                    <div class="ml-11 text-sm text-gray-500">
                        Perfect for first-time users
                    </div>
                </div>
                
                <div class="border border-indigo-200 rounded-lg p-4 hover:bg-indigo-50 cursor-pointer transition-colors" id="explore-option">
                    <div class="flex items-start mb-2">
                        <div class="bg-indigo-100 p-2 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Explore on Your Own</h3>
                            <p class="text-sm text-gray-600">Self-directed exploration with hover explanations</p>
                        </div>
                    </div>
                    <div class="ml-11 text-sm text-gray-500">
                        Best for returning users
                    </div>
                </div>
            </div>
            
            <div class="flex justify-end">
                <button id="skip-entry" class="text-gray-600 hover:text-gray-800 mr-4">Skip</button>
                <button id="continue-entry" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Continue</button>
            </div>
        </div>
    </div>
    
    <!-- Walkthrough Mode Selector (hidden by default) -->
    <div class="mode-selector hidden" id="mode-selector">
        <button class="mode-button" id="guided-mode">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
            Guided Walkthrough
        </button>
        <button class="mode-button" id="explore-mode">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clip-rule="evenodd" />
            </svg>
            Explore Mode
        </button>
    </div>
    
    <!-- Guided Walkthrough Box -->
    <div class="walkthrough-box" id="walkthrough-box">
        <div class="flex justify-between items-center mb-2">
            <span class="bg-indigo-100 text-indigo-800 text-xs font-medium py-1 px-2 rounded">Guided Tour</span>
            <button id="close-walkthrough" class="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
        <h3 class="text-lg font-semibold text-gray-800" id="walkthrough-title">Learning Lab Activities</h3>
        <p class="mt-1 text-gray-600" id="walkthrough-description">This page contains four interactive learning stations that help students develop a comprehensive career plan.</p>
        <div class="walkthrough-controls mt-4">
            <button class="walkthrough-button" id="previous-step" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 inline" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
                Previous
            </button>
            <button class="walkthrough-button" id="next-step">
                Next
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 inline" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
        <div class="walkthrough-progress mt-3" id="walkthrough-progress">
            <!-- Progress dots will be inserted here -->
        </div>
    </div>

    <div class="container mx-auto px-4 py-8 grid lg:grid-cols-10 gap-8">
        <!-- Sidebar Navigation -->
        <div class="lg:col-span-3 bg-white rounded-xl shadow-xl p-6 sticky top-20 h-screen overflow-y-auto border border-gray-200">
            <div id="standard-info" class="ribbon-box">
                <h2 class="text-xl font-semibold text-gray-900 mb-4">Standard 1: Careers</h2>
                <p class="text-gray-600 mb-4">Understanding career paths, income planning, and effective financial management.</p>
            </div>
            
            <!-- Chapter Navigation Title -->
            <div class="mb-4 font-semibold text-gray-500 text-sm px-1">
                CHAPTER NAVIGATION
            </div>
            
            <div class="ribbon-box">
                <ul class="space-y-2" id="chapter-navigation">
                <!-- Chapter 1.1 -->
                <li class="mb-1">
                    <div class="w-full flex items-center px-4 py-3 text-sm font-medium rounded-t-lg bg-indigo-50 text-indigo-700">
                        <span class="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                        </span>
                        <span class="text-left">1.1: Jobs vs. Careers</span>
                    </div>
                </li>
                
                <!-- Chapter 1.1 Day 1 (collapsed) -->
                <li class="ml-6 mb-1">
                    <a href="chapter-1-1-day1-refined.html" class="w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-50 hover:text-indigo-700 transition-colors">
                        <span class="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </span>
                        <span>Day 1: Content Guide</span>
                    </a>
                </li>
                
                <!-- Chapter 1.1 Day 2 (expanded, current) -->
                <li class="ml-6">
                    <div class="w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-indigo-50 text-indigo-700 border-l-4 border-indigo-700">
                        <span class="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </span>
                        <span>Day 2: Learning Lab</span>
                    </div>
                    
                    <!-- Section Navigation for Current Chapter -->
                    <ul class="ml-6 mt-2 space-y-1" id="section-navigation">
                        <li>
                            <a href="#learning-objectives" class="text-gray-600 hover:text-indigo-700 flex items-center transition-colors text-xs">
                                <span class="mr-2">•</span> Learning Objectives
                            </a>
                        </li>
                        <li>
                            <a href="#intro" class="text-gray-600 hover:text-indigo-700 flex items-center transition-colors text-xs">
                                <span class="mr-2">•</span> Introduction
                            </a>
                        </li>
                        <li>
                            <a href="#station1" class="text-gray-600 hover:text-indigo-700 flex items-center transition-colors text-xs">
                                <span class="mr-2">•</span> Station 1: Career Path
                            </a>
                        </li>
                        <li>
                            <a href="#station2" class="text-gray-600 hover:text-indigo-700 flex items-center transition-colors text-xs">
                                <span class="mr-2">•</span> Station 2: Salary Progression
                            </a>
                        </li>
                        <li>
                            <a href="#station3" class="text-gray-600 hover:text-indigo-700 flex items-center transition-colors text-xs">
                                <span class="mr-2">•</span> Station 3: Skills Development
                            </a>
                        </li>
                        <li>
                            <a href="#station4" class="text-gray-600 hover:text-indigo-700 flex items-center transition-colors text-xs">
                                <span class="mr-2">•</span> Station 4: Obstacles
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" class="text-gray-600 hover:text-indigo-700 flex items-center transition-colors text-xs">
                                <span class="mr-2">•</span> Portfolio Integration
                            </a>
                        </li>
                        <li>
                            <a href="#reflection" class="text-gray-600 hover:text-indigo-700 flex items-center transition-colors text-xs">
                                <span class="mr-2">•</span> Reflection
                            </a>
                        </li>
                    </ul>
                </li>
                
                <!-- Next Chapters (Upcoming) -->
                <li>
                    <a href="#" class="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        <span class="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                        </span>
                        <span class="text-left">1.2: Paying for Post-Secondary Education</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        <span class="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                        </span>
                        <span class="text-left">1.3: Income and Taxes</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        <span class="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                        </span>
                        <span class="text-left">1.4: Financial Goal Setting</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        <span class="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                        </span>
                        <span class="text-left">1.5: Managing Your Income Effectively</span>
                    </a>
                </li>
            </ul>
            </div>
            
            <!-- Progress Tracker -->
            <div class="mt-8 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-4 shadow-lg ribbon-box">
                <h3 class="text-lg font-semibold text-indigo-800 mb-2">Your Progress</h3>
                <div class="w-full bg-white/50 rounded-full h-2.5 mb-4">
                    <div id="progress-bar" class="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full" style="width: 0%"></div>
                </div>
                <p class="text-sm text-indigo-800">Completed: <span id="progress-text" class="font-medium">0/4 stations</span></p>
                
                <!-- Station Indicators -->
                <div class="station-indicators mt-3">
                    <div class="station-indicator" data-station="1"></div>
                    <div class="station-indicator" data-station="2"></div>
                    <div class="station-indicator" data-station="3"></div>
                    <div class="station-indicator" data-station="4"></div>
                </div>
            </div>
            
            <!-- Chapter Progress -->
            <div class="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200 ribbon-box">
                <h4 class="text-sm font-medium text-gray-700 mb-2">Chapter Progress</h4>
                <div class="flex items-center space-x-2 text-xs text-gray-600">
                    <span class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        Day 1
                    </span>
                    <span class="font-medium">→</span>
                    <span class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                        </svg>
                        Day 2
                    </span>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="lg:col-span-7 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">Chapter 1.1: Jobs vs. Careers - Learning Lab</h1>
            <p class="text-xl text-gray-600 mb-6">Developing a strategic career plan aligned with financial goals</p>
            
            <!-- Learning Objectives Section -->
            <div id="learning-objectives" class="learning-objectives ribbon-box">
                <h2 class="text-xl font-semibold text-gray-900 mb-3">Learning Objectives</h2>
                <p class="mb-2">By the end of this Learning Lab, you will be able to:</p>
                <ul class="list-disc list-inside space-y-1 text-gray-700">
                    <li>Create a personalized career path based on your interests and goals</li>
                    <li>Project potential salary progression over your career lifetime</li>
                    <li>Identify both technical and soft skills needed for your chosen career</li>
                    <li>Develop strategies to overcome common career obstacles</li>
                    <li>Integrate your career planning into a comprehensive portfolio</li>
                </ul>
            </div>
            
            <!-- Introduction Section -->
            <section id="intro" class="ribbon-box">
                <h2 class="text-2xl font-bold text-gray-900 section-title">Introduction</h2>
                <p class="text-gray-700 mb-4">Welcome to the Career Path Implementation Workshop! In yesterday's lesson, you learned about the differences between jobs and careers and began exploring potential career paths. Today, you'll take a deeper dive and create a comprehensive career development plan tailored to your personal goals and aspirations.</p>
                <p class="text-gray-700 mb-4">This Learning Lab consists of four interactive stations. At each station, you'll complete activities that build upon each other to create a cohesive career plan. By the end, you'll have a clear roadmap for your future professional journey.</p>
                
                <div class="important-note">
                    <h3 class="font-semibold text-yellow-800">Important Note</h3>
                    <p class="text-gray-700">The career path you develop today is a starting point, not a fixed destination. As you grow and gain more experience, your interests and goals may evolve. This plan should be revisited and refined regularly throughout your educational and professional journey.</p>
                </div>
                
                <!-- Day 1 Connection -->
                <div class="mt-4 bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                    <h3 class="text-lg font-semibold text-indigo-800 mb-2">Connection to Day 1</h3>
                    <p class="text-gray-700">In Day 1, you learned about the key differences between jobs and careers, as well as the concept of career capital. Today's activities build directly on those concepts by helping you develop a strategic career path that maximizes your potential for both professional growth and financial success.</p>
                </div>
                
                <!-- Podcast Review Section -->
                <div class="bg-indigo-50 p-5 rounded-lg mt-5 mb-5">
                    <h3 class="font-bold text-gray-900 mb-2">Podcast Review: Jobs vs. Careers</h3>
                    <p class="text-gray-700 mb-4">Listen to this podcast to review key concepts from Day 1 before you begin today's activities.</p>
                    
                    <div class="bg-white rounded-lg p-4">
                        <audio controls class="w-full mb-2">
                            <source src="../finished LM recordings/1.1 - Jobs vs Careers.wav" type="audio/wav">
                            Your browser does not support the audio element.
                        </audio>
                        <div class="text-sm text-gray-500">
                            <p>Topics covered: Differences between jobs and careers, career capital, career planning, and long-term financial implications.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <div class="ribbon-box">
                <section id="station1" class="learning-station">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4"><span class="station-number">1</span> Educational Timeline</h2>
                    <p class="text-gray-700 mb-4">In this station, you'll map out the educational requirements and milestones for your chosen career path over different time horizons.</p>
                
                <div class="activity-timer">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Activity Time: 15 minutes</span>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-3 gap-4 mt-6">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h3 class="font-bold text-blue-800 mb-2">Short-Term (1-2 years)</h3>
                        <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="6" placeholder="What classes, training, or certifications will you pursue in the next 1-2 years?"></textarea>
                    </div>
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h3 class="font-bold text-blue-800 mb-2">Mid-Term (3-5 years)</h3>
                        <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="6" placeholder="What educational goals will you pursue in years 3-5?"></textarea>
                    </div>
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h3 class="font-bold text-blue-800 mb-2">Long-Term (5+ years)</h3>
                        <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="6" placeholder="What advanced degrees or specialized training might you need in the long term?"></textarea>
                    </div>
                </div>
                
                <button class="pfl-button px-6 py-2 rounded-lg mt-4 transition duration-200 hover:shadow-xl hover:-translate-y-1">Save Educational Timeline</button>
                </section>
            </div>
            
            <div class="ribbon-box">
                <section id="station2" class="learning-station">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4"><span class="station-number">2</span> Salary Progression Visualization</h2>
                    <p class="text-gray-700 mb-4">In this station, you'll research typical salary ranges for your chosen career and create a visual representation of potential earnings over time.</p>
                
                <div class="activity-timer">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Activity Time: 15 minutes</span>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Career Title:</label>
                            <input type="text" id="careerTitle" class="w-full p-2 border border-gray-300 rounded-md" placeholder="e.g., Software Developer">
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Entry-Level Salary (Year 1):</label>
                            <input type="number" id="entrySalary" class="w-full p-2 border border-gray-300 rounded-md" placeholder="40000" value="45000">
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Early-Career Salary (Year 5):</label>
                            <input type="number" id="earlySalary" class="w-full p-2 border border-gray-300 rounded-md" placeholder="60000" value="60000">
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Mid-Career Salary (Year 10):</label>
                            <input type="number" id="midSalary" class="w-full p-2 border border-gray-300 rounded-md" placeholder="80000" value="80000">
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Senior-Level Salary (Year 15):</label>
                            <input type="number" id="seniorSalary" class="w-full p-2 border border-gray-300 rounded-md" placeholder="100000" value="100000">
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Executive-Level Salary (Year 20):</label>
                            <input type="number" id="executiveSalary" class="w-full p-2 border border-gray-300 rounded-md" placeholder="120000" value="120000">
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Factors That Can Affect Salary Growth:</label>
                            <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="4" placeholder="e.g., advanced degrees, certifications, specialized skills, geographic location"></textarea>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="font-semibold text-gray-900 mb-3">Salary Progression Chart</h3>
                        <div class="bg-white border border-gray-200 rounded-lg p-4 h-64">
                            <canvas id="salaryChart"></canvas>
                        </div>
                        <p class="text-sm text-gray-500 mt-2">This chart illustrates potential salary growth over a 20-year career span.</p>
                        
                        <button class="pfl-button px-6 py-2 rounded-lg mt-4 transition duration-200 hover:shadow-xl hover:-translate-y-1">Generate Chart</button>
                    </div>
                </div>
                </section>
            </div>
            
            <div class="ribbon-box">
                <section id="station3" class="learning-station">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4"><span class="station-number">3</span> Skills Development Plan</h2>
                    <p class="text-gray-700 mb-4">In this station, you'll identify both technical and soft skills needed for success in your chosen career, and create a plan to develop them.</p>
                
                <div class="activity-timer">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Activity Time: 15 minutes</span>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <h3 class="font-semibold text-gray-900 mb-3">Technical Skills</h3>
                        <p class="text-gray-700 mb-2">These are specific abilities and knowledge required for your chosen field.</p>
                        
                        <div class="mb-3">
                            <label class="block text-gray-700 mb-1">Technical Skill 1:</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded-md">
                        </div>
                        <div class="mb-3">
                            <label class="block text-gray-700 mb-1">Technical Skill 2:</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded-md">
                        </div>
                        <div class="mb-3">
                            <label class="block text-gray-700 mb-1">Technical Skill 3:</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded-md">
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 mb-1">Technical Skill 4:</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded-md">
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">How will you develop these technical skills?</label>
                            <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="3" placeholder="e.g., courses, certifications, tutorials, projects"></textarea>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="font-semibold text-gray-900 mb-3">Soft Skills</h3>
                        <p class="text-gray-700 mb-2">These are interpersonal attributes that help you work effectively with others.</p>
                        
                        <div class="mb-3">
                            <label class="block text-gray-700 mb-1">Soft Skill 1:</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded-md">
                        </div>
                        <div class="mb-3">
                            <label class="block text-gray-700 mb-1">Soft Skill 2:</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded-md">
                        </div>
                        <div class="mb-3">
                            <label class="block text-gray-700 mb-1">Soft Skill 3:</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded-md">
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 mb-1">Soft Skill 4:</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded-md">
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">How will you develop these soft skills?</label>
                            <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="3" placeholder="e.g., volunteer work, group projects, leadership roles"></textarea>
                        </div>
                    </div>
                </div>
                
                <button class="pfl-button px-6 py-2 rounded-lg mt-4 transition duration-200 hover:shadow-xl hover:-translate-y-1">Save Skills Plan</button>
                </section>
            </div>
            
            <div class="ribbon-box">
                <section id="station4" class="learning-station">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4"><span class="station-number">4</span> Obstacle Analysis</h2>
                    <p class="text-gray-700 mb-4">In this station, you'll identify potential obstacles to achieving your career goals and develop strategies to overcome them.</p>
                
                <div class="activity-timer">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Activity Time: 15 minutes</span>
                    </div>
                </div>
                
                <table class="w-full border-collapse mt-6">
                    <thead>
                        <tr class="bg-indigo-50">
                            <th class="border border-indigo-200 p-3 text-left">Potential Obstacle</th>
                            <th class="border border-indigo-200 p-3 text-left">Strategy to Overcome</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="even:bg-gray-100">
                            <td class="border border-indigo-200 p-3">
                                <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="2" placeholder="Obstacle 1"></textarea>
                            </td>
                            <td class="border border-indigo-200 p-3">
                                <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="2" placeholder="Strategy 1"></textarea>
                            </td>
                        </tr>
                        <tr class="even:bg-gray-100">
                            <td class="border border-indigo-200 p-3">
                                <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="2" placeholder="Obstacle 2"></textarea>
                            </td>
                            <td class="border border-indigo-200 p-3">
                                <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="2" placeholder="Strategy 2"></textarea>
                            </td>
                        </tr>
                        <tr class="even:bg-gray-100">
                            <td class="border border-indigo-200 p-3">
                                <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="2" placeholder="Obstacle 3"></textarea>
                            </td>
                            <td class="border border-indigo-200 p-3">
                                <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="2" placeholder="Strategy 3"></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="mt-6">
                    <h3 class="font-semibold text-gray-900 mb-3">Support Network</h3>
                    <p class="text-gray-700 mb-3">Identify people or resources that can help you overcome obstacles and support your career journey.</p>
                    <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="4" placeholder="List individuals, organizations, mentors, or resources that can support you"></textarea>
                </div>
                
                <button class="pfl-button px-6 py-2 rounded-lg mt-4 transition duration-200 hover:shadow-xl hover:-translate-y-1">Save Obstacle Analysis</button>
                </section>
            </div>
            
            <section id="portfolio" class="mt-12 ribbon-box">
                <h2 class="text-2xl font-bold text-gray-900 section-title">Portfolio Integration</h2>
                <p class="text-gray-700 mb-4">Now that you've completed all four stations, it's time to integrate your work into a comprehensive career development portfolio.</p>
                
                <div class="bg-indigo-50 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold text-indigo-900 mb-4">Career Development Portfolio</h3>
                    <p class="text-gray-700 mb-4">Your portfolio combines all elements from today's Learning Lab into a cohesive career plan:</p>
                    
                    <ul class="list-disc list-inside mb-4 text-gray-700">
                        <li class="mb-2">Educational Timeline (Station 1)</li>
                        <li class="mb-2">Salary Progression Visualization (Station 2)</li>
                        <li class="mb-2">Skills Development Plan (Station 3)</li>
                        <li class="mb-2">Obstacle Analysis (Station 4)</li>
                    </ul>
                    
                    <p class="text-gray-700 mb-4">Review each section to ensure alignment across your entire career plan.</p>
                    
                    <div class="mb-4">
                        <label class="block text-gray-700 font-medium mb-2">Portfolio Summary (What have you learned about your chosen career path?)</label>
                        <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="4" data-ai-check="true" data-assessment-weight="4" placeholder="Summarize key insights and how this plan will guide your career decisions..."></textarea>
                        <div class="mt-2 hidden feedback-container text-green-600 text-sm"></div>
                    </div>
                    
                    <button class="pfl-button px-6 py-2 rounded-lg mt-2 transition duration-200 hover:shadow-xl hover:-translate-y-1">Complete Portfolio</button>
                </div>
            </section>
            
            <section id="reflection" class="mt-12 ribbon-box">
                <h2 class="text-2xl font-bold text-gray-900 section-title">Reflection</h2>
                
                <div class="discussion-prompt">
                    <h3 class="text-lg font-semibold text-indigo-800 mb-2">Final Reflection</h3>
                    <p class="text-gray-700 mb-3">What was the most valuable insight you gained from creating your career development plan? How has your perspective on careers changed?</p>
                    <textarea class="w-full p-2 border border-gray-300 rounded-md" rows="4" data-ai-check="true" data-assessment-weight="5" placeholder="Share your thoughts and reflections here..."></textarea>
                    <div class="mt-2 hidden feedback-container text-green-600 text-sm"></div>
                </div>
                
                <div class="flex justify-end mt-8">
                    <a href="#" class="pfl-button px-4 py-2 rounded-md font-medium transition flex items-center hover:shadow-xl hover:-translate-y-1">
                        Continue to Chapter 1.2
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    </div>
    
    <!-- Toast Notification -->
    <div id="toast" class="toast-notification">
        <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span id="toast-message">Your progress has been saved!</span>
        </div>
    </div>
    
    <footer class="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-8 mt-12">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-3 gap-8">
                <div>
                    <div class="flex items-center mb-4">
                        <div class="flex justify-center items-center h-10 w-10 rounded bg-white/20 text-white font-bold">
                            PFL
                        </div>
                        <span class="ml-3 text-xl font-bold">PFL Academy</span>
                    </div>
                    <p class="text-indigo-200">Empowering students with financial literacy skills for life.</p>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-indigo-200 hover:text-white transition-colors">Home</a></li>
                        <li><a href="#" class="text-indigo-200 hover:text-white transition-colors">Curriculum</a></li>
                        <li><a href="#" class="text-indigo-200 hover:text-white transition-colors">Resources</a></li>
                        <li><a href="#" class="text-indigo-200 hover:text-white transition-colors">Help Center</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Contact</h3>
                    <p class="text-indigo-200">If you need assistance, please contact your instructor or email support.</p>
                </div>
            </div>
            <div class="border-t border-indigo-800 mt-8 pt-6 text-center text-indigo-200">
                <p>&copy; 2025 PFL Academy. All rights reserved.</p>
            </div>
        </div>
    </footer>
    
    <script>
        // Initialize salary chart
        const ctx = document.getElementById('salaryChart').getContext('2d');
        const salaryChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Year 1', 'Year 5', 'Year 10', 'Year 15', 'Year 20'],
                datasets: [{
                    label: 'Projected Salary',
                    data: [45000, 60000, 80000, 100000, 120000],
                    fill: false,
                    borderColor: 'rgb(79, 70, 229)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
        
        // Station navigation
        let currentStation = 0;
        const stations = document.querySelectorAll('.learning-station');
        const stationIndicators = document.querySelectorAll('.station-indicator');
        
        // Initialize interactive elements
        document.addEventListener('DOMContentLoaded', () => {
            // Add smooth transitions between stations
            stations.forEach((station, index) => {
                station.style.opacity = '0';
                station.style.transform = 'translateY(20px)';
                
                // Use setTimeout to create a staggered animation effect
                setTimeout(() => {
                    station.style.opacity = '1';
                    station.style.transform = 'translateY(0)';
                    station.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                }, 100 * (index + 1));
            });
            
            // Initialize the salary chart with default values
            updateSalaryChart();
            
            // Load and display saved progress
            loadSavedProgress();
            
            // Set up progress tracking and interaction handling
            setupProgressTracking();
            
            // Initialize guided tour walkthrough if applicable
            initWalkthrough();
            
            // Show entry experience on page load with slight delay for better UX
            setTimeout(() => {
                document.getElementById('entry-experience').classList.remove('hidden');
                // Pre-select the guided tour option
                document.getElementById('guided-tour-option').classList.add('bg-indigo-100', 'border-indigo-300');
                localStorage.setItem('learningLabMode', 'guided');
            }, 500);
        });
        
        // Load saved progress from localStorage
        function loadSavedProgress() {
            const chapterId = '1.1'; // This should be dynamic based on the current chapter
            const progressKey = `pfl-progress-${chapterId}-day2`;
            
            // TEMPORARY: Reset progress for testing - uncomment to reset progress
            // localStorage.removeItem(progressKey);
            
            try {
                const savedProgress = localStorage.getItem(progressKey);
                if (savedProgress) {
                    const completedStations = JSON.parse(savedProgress);
                    
                    // Validate the saved data - ensure each ID actually exists in the DOM
                    const validStationIds = [];
                    const stations = document.querySelectorAll('.learning-station');
                    
                    // Get all valid station IDs
                    stations.forEach((station, index) => {
                        const stationId = station.id || `station${index + 1}`;
                        if (completedStations.includes(stationId)) {
                            validStationIds.push(stationId);
                        }
                    });
                    
                    // Only use validated station IDs
                    const progressBar = document.getElementById('progress-bar');
                    const progressText = document.getElementById('progress-text');
                    
                    if (progressBar && progressText) {
                        const percentage = Math.round((validStationIds.length / stations.length) * 100);
                        progressBar.style.width = `${percentage}%`;
                        progressText.textContent = `${validStationIds.length}/${stations.length} stations`;
                    }
                    
                    // Update localStorage with validated IDs
                    localStorage.setItem(progressKey, JSON.stringify(validStationIds));
                    
                    // Update station indicators
                    updateStationIndicators(validStationIds);
                } else {
                    // Initialize with empty progress
                    const progressBar = document.getElementById('progress-bar');
                    const progressText = document.getElementById('progress-text');
                    
                    if (progressBar && progressText) {
                        progressBar.style.width = '0%';
                        progressText.textContent = `0/4 stations`;
                    }
                    
                    // Clear any station indicators
                    document.querySelectorAll('.station-indicator').forEach(indicator => {
                        indicator.classList.remove('active');
                    });
                }
            } catch (e) {
                console.error('Error loading saved progress', e);
                // Reset to zero on error
                const progressBar = document.getElementById('progress-bar');
                const progressText = document.getElementById('progress-text');
                
                if (progressBar && progressText) {
                    progressBar.style.width = '0%';
                    progressText.textContent = `0/4 stations`;
                }
            }
        }
        
        // Set up event listeners to track progress and handle interactions
        function setupProgressTracking() {
            // Find all save buttons in the stations
            const saveButtons = document.querySelectorAll('.learning-station .pfl-button');
            
            // Add event listeners to each save button
            saveButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Find the parent station element
                    const parentStation = this.closest('.learning-station');
                    if (parentStation) {
                        // Mark this station as completed in localStorage
                        markStationAsCompleted(parentStation.id || parentStation.getAttribute('id'));
                    }
                });
            });
        }
        
        // Mark a specific station as completed
        function markStationAsCompleted(stationId) {
            if (!stationId) return;
            
            const chapterId = '1.1'; // This should be dynamic based on the current chapter
            const progressKey = `pfl-progress-${chapterId}-day2`;
            let completedStations = [];
            
            // Load existing progress
            try {
                const savedProgress = localStorage.getItem(progressKey);
                if (savedProgress) {
                    completedStations = JSON.parse(savedProgress);
                }
            } catch (e) {
                console.error('Error loading progress data', e);
            }
            
            // Add this station to completed list if not already there
            if (!completedStations.includes(stationId)) {
                completedStations.push(stationId);
                
                // Save updated progress
                try {
                    localStorage.setItem(progressKey, JSON.stringify(completedStations));
                } catch (e) {
                    console.error('Error saving progress data', e);
                }
                
                // Update the UI
                updateProgressDisplay(completedStations);
            }
        }
        
        // Update the progress display elements
        function updateProgressDisplay(completedStations) {
            const stations = document.querySelectorAll('.learning-station');
            
            // Update progress bar
            const progressBar = document.getElementById('progress-bar');
            const progressText = document.getElementById('progress-text');
            
            if (progressBar && progressText) {
                const percentage = Math.round((completedStations.length / stations.length) * 100);
                progressBar.style.width = `${percentage}%`;
                progressText.textContent = `${completedStations.length}/${stations.length} stations`;
            }
            
            // Update station indicators
            updateStationIndicators(completedStations);
        }
        
        // Function to update the salary chart
        function updateSalaryChart() {
            // Get values from the input fields
            const entrySalary = parseFloat(document.getElementById('entrySalary').value) || 45000;
            const earlySalary = parseFloat(document.getElementById('earlySalary').value) || 60000;
            const midSalary = parseFloat(document.getElementById('midSalary').value) || 80000;
            const seniorSalary = parseFloat(document.getElementById('seniorSalary').value) || 100000;
            const executiveSalary = parseFloat(document.getElementById('executiveSalary').value) || 120000;
            
            // Update chart data
            salaryChart.data.datasets[0].data = [entrySalary, earlySalary, midSalary, seniorSalary, executiveSalary];
            
            // Update career title if provided
            const careerTitle = document.getElementById('careerTitle').value;
            if (careerTitle) {
                salaryChart.data.datasets[0].label = `${careerTitle} Salary Progression`;
            } else {
                salaryChart.data.datasets[0].label = 'Projected Salary';
            }
            
            // Update the chart
            salaryChart.update();
        }
        
        // Add event listeners to all salary inputs
        document.getElementById('entrySalary').addEventListener('input', updateSalaryChart);
        document.getElementById('earlySalary').addEventListener('input', updateSalaryChart);
        document.getElementById('midSalary').addEventListener('input', updateSalaryChart);
        document.getElementById('seniorSalary').addEventListener('input', updateSalaryChart);
        document.getElementById('executiveSalary').addEventListener('input', updateSalaryChart);
        document.getElementById('careerTitle').addEventListener('input', updateSalaryChart);
        
        // Update chart when user clicks "Generate Chart" button
        document.querySelectorAll('#station2 .pfl-button').forEach(button => {
            button.addEventListener('click', function() {
                updateSalaryChart();
                showToast('Chart updated with your salary projections!');
            });
        });
        
        // Save button functionality with toast notifications
        document.querySelectorAll('.pfl-button').forEach(button => {
            button.addEventListener('click', function() {
                // Get the parent station if this is a station save button
                const parentStation = this.closest('.learning-station');
                
                if (parentStation) {
                    // Check if any inputs in this station have content
                    const inputs = parentStation.querySelectorAll('input, textarea');
                    let hasContent = false;
                    
                    inputs.forEach(input => {
                        if (input.value.trim().length > 0) {
                            hasContent = true;
                        }
                    });
                    
                    if (hasContent) {
                        // Find station number
                        const stationIndex = Array.from(stations).indexOf(parentStation);
                        showToast(`Station ${stationIndex + 1} saved successfully!`);
                        updateProgress();
                    } else {
                        showToast('Please complete the station before saving.', 'warning');
                    }
                } else {
                    // Handle non-station buttons (e.g., portfolio complete button)
                    showToast('Your portfolio has been saved!');
                    updateProgress();
                }
            });
        });
        
        // AI feedback system 
        document.querySelectorAll('[data-ai-check="true"]').forEach(element => {
            element.addEventListener('blur', function() {
                if (this.value.length > 10) {
                    const feedback = this.nextElementSibling;
                    if (feedback && feedback.classList.contains('feedback-container')) {
                        feedback.textContent = "Thank you for your thoughtful response! Your portfolio shows good understanding of career planning principles.";
                        feedback.classList.remove('hidden');
                    }
                }
            });
        });
        
        // Show toast notification
        function showToast(message, type = 'success') {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toast-message');
            
            // Set message
            toastMessage.textContent = message;
            
            // Set type-specific styling
            if (type === 'warning') {
                toast.style.backgroundColor = '#f59e0b';
            } else {
                toast.style.backgroundColor = '#4f46e5';
            }
            
            // Show toast
            toast.classList.add('show');
            
            // Hide toast after delay
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
        
        // Track progress for the sidebar
        function updateProgress() {
            const chapterId = '1.1'; // This should be dynamic based on the current chapter
            const progressKey = `pfl-progress-${chapterId}-day2`;
            let completedStations = [];
            
            // Try to load existing progress data from localStorage
            try {
                const savedProgress = localStorage.getItem(progressKey);
                if (savedProgress) {
                    completedStations = JSON.parse(savedProgress);
                }
            } catch (e) {
                console.error('Error loading progress data', e);
                completedStations = [];
            }
            
            const stations = document.querySelectorAll('.learning-station');
            let completed = 0;
            
            stations.forEach(station => {
                // Check if this station is in the completedStations list
                const stationId = station.id || `station${Array.from(stations).indexOf(station) + 1}`;
                if (completedStations.includes(stationId)) {
                    completed++;
                } else {
                    // Check if any inputs or textareas in this station have content
                    const inputs = station.querySelectorAll('input, textarea');
                    let hasContent = false;
                    
                    inputs.forEach(input => {
                        if (input.value.trim().length > 0) {
                            hasContent = true;
                        }
                    });
                    
                    // If has content and not already in completed list, add it
                    if (hasContent) {
                        completed++;
                        if (!completedStations.includes(stationId)) {
                            completedStations.push(stationId);
                            // Save updated progress
                            localStorage.setItem(progressKey, JSON.stringify(completedStations));
                        }
                    }
                }
            });
            
            // Update progress bar
            const progressBar = document.getElementById('progress-bar');
            const progressText = document.getElementById('progress-text');
            
            if (progressBar && progressText) {
                const percentage = Math.round((completed / stations.length) * 100);
                progressBar.style.width = `${percentage}%`;
                progressText.textContent = `${completed}/${stations.length} stations`;
            }
            
            updateStationIndicators(completedStations);
        }
        
        // Update station indicators
        function updateStationIndicators(completedStations = null) {
            const chapterId = '1.1'; // This should be dynamic based on the current chapter
            const progressKey = `pfl-progress-${chapterId}-day2`;
            const stations = document.querySelectorAll('.learning-station');
            const stationIndicators = document.querySelectorAll('.station-indicator');
            
            // If completedStations not provided, load from localStorage
            if (!completedStations) {
                try {
                    const savedProgress = localStorage.getItem(progressKey);
                    if (savedProgress) {
                        completedStations = JSON.parse(savedProgress);
                    } else {
                        completedStations = [];
                    }
                } catch (e) {
                    console.error('Error loading progress data', e);
                    completedStations = [];
                }
            }
            
            // Reset all indicators first
            stationIndicators.forEach(indicator => {
                indicator.classList.remove('active');
            });
            
            // Update indicators based on completed stations
            stations.forEach((station, index) => {
                const stationId = station.id || `station${index + 1}`;
                if (completedStations && completedStations.includes(stationId)) {
                    if (stationIndicators[index]) {
                        stationIndicators[index].classList.add('active');
                    }
                }
            });
            
            // Determine current station based on scroll position
            updateCurrentStationByScroll();
        }
        
        // Update current station based on scroll position
        function updateCurrentStationByScroll() {
            const scrollPosition = window.scrollY;
            const stations = document.querySelectorAll('.learning-station');
            const stationIndicators = document.querySelectorAll('.station-indicator');
            
            let foundCurrent = false;
            
            stations.forEach((station, index) => {
                const stationTop = station.offsetTop - 150;
                const stationBottom = stationTop + station.offsetHeight;
                
                if (scrollPosition >= stationTop && scrollPosition < stationBottom && !foundCurrent) {
                    // This is the current visible station
                    currentStation = index;
                    foundCurrent = true;
                    
                    // Update the indicators to show which one is current
                    stationIndicators.forEach((indicator, i) => {
                        if (i === index) {
                            indicator.classList.add('active');
                            indicator.style.transform = 'scale(1.3)';
                        } else if (indicator.classList.contains('active')) {
                            indicator.style.transform = 'scale(1.0)';
                        }
                    });
                }
            });
        }
        
        // Highlight active section in navigation based on scroll position
        window.addEventListener('DOMContentLoaded', () => {
            const objectives = document.querySelector('#learning-objectives');
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('#section-navigation a');
            
            function updateActiveSection() {
                const scrollPosition = window.scrollY;
                
                // Check if Learning Objectives section is in view
                const objectivesTop = objectives.offsetTop - 100;
                const objectivesBottom = objectivesTop + objectives.offsetHeight;
                
                // First reset all links
                navLinks.forEach(link => {
                    link.classList.remove('text-indigo-700', 'font-medium');
                    link.classList.add('text-gray-700');
                });
                
                // Check Learning Objectives first
                if (scrollPosition >= objectivesTop && scrollPosition < objectivesBottom) {
                    const objectivesLink = document.querySelector('#section-navigation a[href="#learning-objectives"]');
                    if (objectivesLink) {
                        objectivesLink.classList.remove('text-gray-700');
                        objectivesLink.classList.add('text-indigo-700', 'font-medium');
                    }
                    return;
                }
                
                // Then check all other sections
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        // Add active class to corresponding link
                        const correspondingLink = document.querySelector(`#section-navigation a[href="#${section.id}"]`);
                        if (correspondingLink) {
                            correspondingLink.classList.remove('text-gray-700');
                            correspondingLink.classList.add('text-indigo-700', 'font-medium');
                        }
                    }
                });
                
                // Also update station indicators based on scroll
                updateCurrentStationByScroll();
            }
            
            // Update active section when scrolling
            window.addEventListener('scroll', updateActiveSection);
            
            // Update active section on page load
            updateActiveSection();
        });
        
        // ===== GUIDED TOUR FUNCTIONALITY =====
        
        // Entry experience event listeners
        document.getElementById('guided-tour-option').addEventListener('click', function() {
            // Store the selection
            localStorage.setItem('learningLabMode', 'guided');
            // Highlight the selection
            this.classList.add('bg-indigo-100', 'border-indigo-300');
            document.getElementById('explore-option').classList.remove('bg-indigo-100', 'border-indigo-300');
        });
        
        document.getElementById('explore-option').addEventListener('click', function() {
            // Store the selection
            localStorage.setItem('learningLabMode', 'explore');
            // Highlight the selection
            this.classList.add('bg-indigo-100', 'border-indigo-300');
            document.getElementById('guided-tour-option').classList.remove('bg-indigo-100', 'border-indigo-300');
        });
        
        document.getElementById('continue-entry').addEventListener('click', function() {
            // Hide the entry experience
            document.getElementById('entry-experience').classList.add('hidden');
            
            // Get the selected mode
            const mode = localStorage.getItem('learningLabMode');
            
            // Start the appropriate mode
            if (mode === 'guided') {
                startGuidedWalkthrough();
            } else if (mode === 'explore') {
                startExploreMode();
            } else {
                // Default to explore mode if no selection was made
                startExploreMode();
            }
        });
        
        document.getElementById('skip-entry').addEventListener('click', function() {
            // Hide the entry experience without starting a guided tour
            document.getElementById('entry-experience').classList.add('hidden');
        });
        
        // Define the steps for the guided walkthrough
        const walkthroughSteps = [
            {
                element: '#standard-info',
                title: 'Standard & Chapter Information',
                description: 'This section shows information about the current standard (Standard 1: Careers) and the chapter you\'re working on.'
            },
            {
                element: '.mt-8.bg-gradient-to-r.from-indigo-100.to-purple-100.rounded-xl',
                title: 'Progress Tracker',
                description: 'This progress tracker shows how many learning stations you\'ve completed. The colored dots below indicate each station\'s status.'
            },
            {
                element: '#learning-objectives',
                title: 'Learning Objectives',
                description: 'These objectives outline what students should be able to accomplish by the end of this Learning Lab.'
            },
            {
                element: '#intro',
                title: 'Introduction',
                description: 'This section introduces the Learning Lab activities and explains how they build on the concepts from Day 1.'
            },
            {
                element: '#station1',
                title: 'Learning Station 1: Educational Timeline',
                description: 'In this station, students map out the educational requirements for their chosen career path across different time horizons.'
            },
            {
                element: '#station2',
                title: 'Learning Station 2: Salary Progression',
                description: 'Students research typical salary ranges for their chosen career and create a visual representation of potential earnings over time.'
            },
            {
                element: '#station3',
                title: 'Learning Station 3: Skills Development',
                description: 'Students identify both technical and soft skills needed for their career and create a plan to develop them.'
            },
            {
                element: '#station4',
                title: 'Learning Station 4: Obstacle Analysis',
                description: 'Students identify potential obstacles to achieving their career goals and develop strategies to overcome them.'
            },
            {
                element: '#portfolio',
                title: 'Portfolio Integration',
                description: 'In this section, students combine all elements from the Learning Lab into a comprehensive career development portfolio.'
            },
            {
                element: '#reflection',
                title: 'Reflection',
                description: 'Students reflect on their Learning Lab experience and what they learned about career development.'
            }
        ];
        
        // Walkthrough state variables
        let currentStepIndex = 0;
        let isGuidedMode = false;
        let isExploreMode = false;
        
        // Initialize walkthrough functionality
        function initWalkthrough() {
            // Close button for walkthrough box
            document.getElementById('close-walkthrough').addEventListener('click', function() {
                document.getElementById('walkthrough-box').classList.remove('active');
                
                // Remove highlights
                document.querySelectorAll('.highlight').forEach(el => {
                    el.classList.remove('highlight', 'pulse');
                });
                
                // Show the mode selector for future reference
                document.getElementById('mode-selector').classList.remove('hidden');
            });
            
            // Next button for walkthrough
            document.getElementById('next-step').addEventListener('click', function() {
                if (currentStepIndex < walkthroughSteps.length - 1) {
                    currentStepIndex++;
                    showCurrentStep();
                }
            });
            
            // Previous button for walkthrough
            document.getElementById('previous-step').addEventListener('click', function() {
                if (currentStepIndex > 0) {
                    currentStepIndex--;
                    showCurrentStep();
                }
            });
            
            // Mode selector buttons
            document.getElementById('guided-mode').addEventListener('click', function() {
                startGuidedWalkthrough();
                document.getElementById('guided-mode').classList.add('active');
                document.getElementById('explore-mode').classList.remove('active');
            });
            
            document.getElementById('explore-mode').addEventListener('click', function() {
                startExploreMode();
                document.getElementById('explore-mode').classList.add('active');
                document.getElementById('guided-mode').classList.remove('active');
            });
        }
        
        // Start the guided walkthrough
        function startGuidedWalkthrough() {
            // Reset any explore mode elements
            resetExploreMode();
            
            // Set mode flags
            isGuidedMode = true;
            isExploreMode = false;
            
            // Show walkthrough box
            document.getElementById('walkthrough-box').classList.add('active');
            
            // Reset to first step
            currentStepIndex = 0;
            
            // Hide mode selector
            document.getElementById('mode-selector').classList.add('hidden');
            
            // Show first step
            showCurrentStep();
        }
        
        // Reset any explore mode elements
        function resetExploreMode() {
            // Clear any explore mode interactions
            document.querySelectorAll('.explore-interactive').forEach(el => {
                el.classList.remove('explore-interactive');
            });
            
            // Hide any tooltips
            const tooltips = document.querySelectorAll('.explore-tooltip');
            tooltips.forEach(tooltip => {
                tooltip.remove();
            });
            
            // Remove info indicator if it exists
            const infoIndicator = document.querySelector('.explore-info-indicator');
            if (infoIndicator) {
                infoIndicator.remove();
            }
        }
        
        // Start explore mode
        function startExploreMode() {
            // Reset guided walkthrough elements
            document.getElementById('walkthrough-box').classList.remove('active');
            document.querySelectorAll('.highlight').forEach(el => {
                el.classList.remove('highlight', 'pulse');
            });
            
            // Set mode flags
            isGuidedMode = false;
            isExploreMode = true;
            
            // Hide mode selector
            document.getElementById('mode-selector').classList.add('hidden');
            
            // Add explore interactivity to key elements
            walkthroughSteps.forEach(step => {
                const element = document.querySelector(step.element);
                if (element) {
                    element.classList.add('explore-interactive');
                    
                    // Add hover listener to show tooltip
                    element.addEventListener('mouseenter', function() {
                        showExploreTooltip(element, step.title, step.description);
                    });
                    
                    // Add leave listener to hide tooltip
                    element.addEventListener('mouseleave', function() {
                        hideExploreTooltip();
                    });
                }
            });
            
            // Show an info indicator
            const infoIndicator = document.createElement('div');
            infoIndicator.className = 'explore-info-indicator';
            infoIndicator.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
                Hover over highlighted sections for information
            `;
            document.body.appendChild(infoIndicator);
            
            // Remove indicator after 5 seconds
            setTimeout(() => {
                infoIndicator.classList.add('fade-out');
                setTimeout(() => {
                    infoIndicator.remove();
                }, 1000);
            }, 5000);
        }
        
        // Show explore mode tooltip
        function showExploreTooltip(element, title, description) {
            // Remove any existing tooltips
            hideExploreTooltip();
            
            // Create new tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'explore-tooltip';
            tooltip.id = 'explore-tooltip';
            tooltip.innerHTML = `
                <h3 class="text-lg font-semibold text-gray-800">${title}</h3>
                <p class="mt-1 text-gray-600">${description}</p>
            `;
            
            // Add tooltip to document
            document.body.appendChild(tooltip);
            
            // Position the tooltip
            const rect = element.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Decide whether to show tooltip above or below the element
            const spaceBelow = window.innerHeight - rect.bottom;
            const tooltipHeight = 100; // Approximate height
            
            if (spaceBelow > tooltipHeight) {
                // Show below
                tooltip.style.top = (rect.bottom + scrollTop + 10) + 'px';
                tooltip.classList.add('tooltip-arrow-bottom');
            } else {
                // Show above
                tooltip.style.top = (rect.top + scrollTop - tooltipHeight - 30) + 'px';
                tooltip.classList.add('tooltip-arrow-top');
            }
            
            // Center horizontally
            tooltip.style.left = (rect.left + (rect.width / 2) - 150) + 'px';
        }
        
        // Hide explore mode tooltip
        function hideExploreTooltip() {
            const tooltip = document.getElementById('explore-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        }
        
        // Show current step of guided walkthrough
        function showCurrentStep() {
            if (walkthroughSteps.length === 0) return;
            
            // Remove highlight from all elements
            document.querySelectorAll('.highlight').forEach(el => {
                el.classList.remove('highlight', 'pulse');
            });
            
            // Get current step
            const step = walkthroughSteps[currentStepIndex];
            
            // Update walkthrough box content
            document.getElementById('walkthrough-title').textContent = step.title;
            document.getElementById('walkthrough-description').textContent = step.description;
            
            // Find and highlight the target element
            const targetElement = document.querySelector(step.element);
            if (targetElement) {
                targetElement.classList.add('highlight', 'pulse');
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            // Update button states
            document.getElementById('previous-step').disabled = currentStepIndex === 0;
            document.getElementById('next-step').disabled = currentStepIndex >= walkthroughSteps.length - 1;
            
            // Update progress dots
            updateProgressDots();
        }
        
        // Update progress dots for guided walkthrough
        function updateProgressDots() {
            const progressContainer = document.getElementById('walkthrough-progress');
            progressContainer.innerHTML = '';
            
            walkthroughSteps.forEach((step, index) => {
                const dot = document.createElement('div');
                dot.className = 'progress-dot';
                if (index === currentStepIndex) {
                    dot.classList.add('active');
                }
                progressContainer.appendChild(dot);
            });
        }
        
        // Show entry experience on page load
        window.addEventListener('load', function() {
            // Show the entry experience modal after a short delay
            setTimeout(() => {
                document.getElementById('entry-experience').classList.remove('hidden');
                // Pre-select the guided tour option
                document.getElementById('guided-tour-option').classList.add('bg-indigo-100', 'border-indigo-300');
                localStorage.setItem('learningLabMode', 'guided');
            }, 500);
        });
    </script>
</body>
</html>