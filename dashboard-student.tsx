<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Dashboard - PFL Academy</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: #f9fafb;
        }

        .dashboard-card {
            transition: all 0.3s ease;
        }

        .dashboard-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .status-completed {
            background-color: #d1fae5;
            color: #065f46;
        }

        .status-in-progress {
            background-color: #e0f2fe;
            color: #0369a1;
        }

        .status-upcoming {
            background-color: #f3f4f6;
            color: #4b5563;
        }

        .status-overdue {
            background-color: #fee2e2;
            color: #991b1b;
        }

        /* Progress bar styles */
        .progress-bar {
            height: 8px;
            border-radius: 4px;
            background-color: #e5e7eb;
            overflow: hidden;
        }

        .progress-value {
            height: 100%;
            border-radius: 4px;
            background-color: #4f46e5;
        }

        /* Modal Styles */
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 50;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        }

        .modal.active {
            opacity: 1;
            pointer-events: auto;
        }

        .modal-content {
            background-color: white;
            border-radius: 0.5rem;
            max-width: 600px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            transform: translateY(20px);
            transition: transform 0.3s ease;
        }

        .modal.active .modal-content {
            transform: translateY(0);
        }

        /* Chat box styles */
        .chat-container {
            display: flex;
            flex-direction: column;
            height: 300px;
        }

        .chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 1rem;
        }

        .message {
            margin-bottom: 1rem;
            max-width: 80%;
        }

        .message-sent {
            margin-left: auto;
            background-color: #4f46e5;
            color: white;
            border-radius: 1rem 1rem 0 1rem;
            padding: 0.75rem 1rem;
        }

        .message-received {
            margin-right: auto;
            background-color: #f3f4f6;
            color: #1f2937;
            border-radius: 1rem 1rem 1rem 0;
            padding: 0.75rem 1rem;
        }

        .chat-input {
            display: flex;
            padding: 0.5rem;
            border-top: 1px solid #e5e7eb;
        }
        
        /* Portfolio Styles */
        .portfolio-item {
            transition: all 0.3s ease;
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .portfolio-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .portfolio-item.standard-1 {
            border-top: 4px solid #3b82f6;
        }
        
        .portfolio-item.standard-2 {
            border-top: 4px solid #10b981;
        }
        
        .portfolio-item.standard-3 {
            border-top: 4px solid #8b5cf6;
        }
        
        .portfolio-item.standard-5 {
            border-top: 4px solid #f59e0b;
        }
        
        .portfolio-item.standard-7 {
            border-top: 4px solid #ef4444;
        }
        
        .portfolio-item.standard-15 {
            border-top: 4px solid #6366f1;
        }
        
        .portfolio-item.locked {
            opacity: 0.6;
            border-top: 4px solid #9ca3af;
        }
        
        .portfolio-header {
            padding: 1rem;
            border-bottom: 1px solid #f3f4f6;
            display: flex;
            align-items: center;
        }
        
        .portfolio-icon {
            width: 40px;
            height: 40px;
            padding: 0.5rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 0.75rem;
        }
        
        .standard-1 .portfolio-icon {
            background-color: #dbeafe;
        }
        
        .standard-2 .portfolio-icon {
            background-color: #d1fae5;
        }
        
        .standard-3 .portfolio-icon {
            background-color: #ede9fe;
        }
        
        .standard-5 .portfolio-icon {
            background-color: #fef3c7;
        }
        
        .standard-7 .portfolio-icon {
            background-color: #fee2e2;
        }
        
        .standard-15 .portfolio-icon {
            background-color: #e0e7ff;
        }
        
        .locked .portfolio-icon {
            background-color: #f3f4f6;
        }
        
        .portfolio-controls {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1.5rem;
        }
        
        .portfolio-controls button {
            background-color: #4f46e5;
            color: white;
            border: none;
            border-radius: 0.375rem;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            font-weight: 500;
            margin: 0 0.5rem;
            cursor: pointer;
            transition: background-color 0.2s;
            display: flex;
            align-items: center;
        }
        
        .portfolio-controls button:hover {
            background-color: #4338ca;
        }
        
        .portfolio-controls button svg {
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
        }
        
        .legend {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .legend-item {
            display: flex;
            align-items: center;
            margin-right: 0.5rem;
        }
        
        .legend-color {
            width: 1rem;
            height: 1rem;
            border-radius: 0.25rem;
            margin-right: 0.5rem;
        }
        
        .portfolio-content {
            padding: 1rem;
        }
        
        .completed-badge {
            background-color: #10b981;
            color: white;
            font-size: 0.625rem;
            padding: 0.125rem 0.375rem;
            border-radius: 9999px;
            margin-left: 0.5rem;
        }
        
        .chapter-label {
            display: inline-block;
            font-size: 0.625rem;
            background-color: #f3f4f6;
            color: #6b7280;
            padding: 0.125rem 0.375rem;
            border-radius: 9999px;
            margin-top: 0.25rem;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .portfolio-item {
            animation: fadeIn 0.6s ease-out forwards;
        }
        
        .portfolio-item:nth-child(1) { animation-delay: 0.1s; }
        .portfolio-item:nth-child(2) { animation-delay: 0.15s; }
        .portfolio-item:nth-child(3) { animation-delay: 0.2s; }
        .portfolio-item:nth-child(4) { animation-delay: 0.25s; }
        .portfolio-item:nth-child(5) { animation-delay: 0.3s; }
        .portfolio-item:nth-child(6) { animation-delay: 0.35s; }
        .portfolio-item:nth-child(7) { animation-delay: 0.4s; }
        .portfolio-item:nth-child(8) { animation-delay: 0.45s; }
        .portfolio-item:nth-child(9) { animation-delay: 0.5s; }
    </style>
</head>
<body>
    <!-- Header Section (Sticky) -->
    <header class="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <div class="flex justify-center items-center h-10 w-10 rounded bg-indigo-600 text-white font-bold">
                            PFL
                        </div>
                        <span class="ml-3 text-xl font-bold text-gray-900">PFL Academy</span>
                    </div>
                    <nav class="hidden md:flex items-center space-x-8 ml-10">
                        <a href="#" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Home</a>
                        <a href="/static-build/standards.html" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Curriculum</a>
                        <a href="#" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Resources</a>
                        <a href="#" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Messages</a>
                        <a href="#" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Help</a>
                    </nav>
                </div>
                <div class="flex items-center">
                    <button id="notificationBtn" class="mr-4 relative">
                        <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>
                    <div class="flex items-center text-gray-700">
                        <span class="hidden md:inline-block mr-2 text-sm">Alex Student</span>
                        <div class="relative">
                            <button class="flex items-center justify-center rounded-full bg-gray-100 h-8 w-8 focus:outline-none">
                                <span class="text-sm font-medium text-gray-800">AS</span>
                            </button>
                        </div>
                    </div>
                    <a href="#" class="hidden md:block ml-6 text-sm text-gray-700 hover:text-indigo-600">Logout</a>
                    <button class="ml-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Dashboard Header -->
    <div class="bg-white py-8 px-4 shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto">
            <div class="md:flex md:items-center md:justify-between">
                <div class="flex-1 min-w-0">
                    <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:truncate">My Learning Dashboard</h1>
                    <p class="mt-2 text-gray-600">Track your progress, complete assignments, and manage your financial literacy journey.</p>
                </div>
                <div class="mt-4 md:mt-0 md:ml-4">
                    <button id="messageTeacherBtn" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
                        </svg>
                        Message Teacher
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Dashboard Content -->
    <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <!-- Section 1: Quick Stats Dashboard Cards -->
        <section class="mb-10">
            <h2 class="text-lg font-medium text-gray-900 mb-5">My Progress</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <!-- Card 1: Overall Progress -->
                <div class="dashboard-card bg-white overflow-hidden shadow rounded-lg cursor-pointer border border-gray-200">
                    <div class="p-5">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                                <svg class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">Overall Progress</dt>
                                    <dd>
                                        <div class="text-lg font-medium text-gray-900">42%</div>
                                        <div class="mt-1 progress-bar">
                                            <div class="progress-value" style="width: 42%"></div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Current Chapter -->
                <div class="dashboard-card bg-white overflow-hidden shadow rounded-lg cursor-pointer border border-gray-200">
                    <div class="p-5">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-blue-100 rounded-md p-3">
                                <svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">Current Chapter</dt>
                                    <dd>
                                        <div class="text-lg font-medium text-gray-900">2.3: Tax Filing Requirements</div>
                                        <div class="flex items-center text-xs text-blue-600">
                                            <svg class="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                            </svg>
                                            <span>Day 1 of 2 completed</span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Average Score -->
                <div class="dashboard-card bg-white overflow-hidden shadow rounded-lg cursor-pointer border border-gray-200">
                    <div class="p-5">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-green-100 rounded-md p-3">
                                <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">Average Score</dt>
                                    <dd>
                                        <div class="text-lg font-medium text-gray-900">85%</div>
                                        <div class="flex items-center text-xs text-green-600">
                                            <svg class="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586l3.293-3.293A1 1 0 0112 7z" clip-rule="evenodd" />
                                            </svg>
                                            <span>+3% since last assessment</span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Badges Earned -->
                <div class="dashboard-card bg-white overflow-hidden shadow rounded-lg cursor-pointer border border-gray-200">
                    <div class="p-5">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-purple-100 rounded-md p-3">
                                <svg class="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">Badges Earned</dt>
                                    <dd>
                                        <div class="text-lg font-medium text-gray-900">7</div>
                                        <div class="flex items-center text-xs text-purple-600">
                                            <span>2 badges available this week</span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 2: Current Assignments -->
        <section class="mb-10">
            <div class="flex justify-between items-center mb-5">
                <h2 class="text-lg font-medium text-gray-900">Current Assignments</h2>
                <div class="flex items-center">
                    <div class="mr-4">
                        <select class="rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="all">All Assignments</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="overdue">Overdue</option>
                        </select>
                    </div>
                    <button class="flex items-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Assignment
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Chapter
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Due Date
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" class="relative px-6 py-3">
                                            <span class="sr-only">Action</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <!-- Assignment 1 -->
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm font-medium text-gray-900">Tax Filing Requirements Quiz</div>
                                            <div class="text-sm text-gray-500">10 multiple choice questions</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">2.3: Tax Filing Requirements</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">Apr 5, 2025</div>
                                            <div class="text-sm text-gray-500">1 day left</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-in-progress">
                                                In Progress
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" class="text-indigo-600 hover:text-indigo-900">Continue</a>
                                        </td>
                                    </tr>
                                    <!-- Assignment 2 -->
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm font-medium text-gray-900">Tax Form Analysis Project</div>
                                            <div class="text-sm text-gray-500">W-2 and 1040 form analysis</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">2.3: Tax Filing Requirements</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">Apr 10, 2025</div>
                                            <div class="text-sm text-gray-500">6 days left</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-upcoming">
                                                Not Started
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" class="text-indigo-600 hover:text-indigo-900">Start</a>
                                        </td>
                                    </tr>
                                    <!-- Assignment 3 -->
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm font-medium text-gray-900">Budget Analysis Exercise</div>
                                            <div class="text-sm text-gray-500">Personal budget creation</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">1.5: Managing Your Income Effectively</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">Mar 30, 2025</div>
                                            <div class="text-sm text-red-500">4 days overdue</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-overdue">
                                                Overdue
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" class="text-indigo-600 hover:text-indigo-900">Complete Now</a>
                                        </td>
                                    </tr>
                                    <!-- Assignment 4 -->
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm font-medium text-gray-900">SMART Goals Worksheet</div>
                                            <div class="text-sm text-gray-500">Financial goal setting exercise</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">1.4: Financial Goal Setting</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">Mar 25, 2025</div>
                                            <div class="text-sm text-gray-500">Submitted</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-completed">
                                                Completed
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" class="text-indigo-600 hover:text-indigo-900">View Feedback</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Learning Path and Curriculum Progress -->
        <section class="mb-10">
            <h2 class="text-lg font-medium text-gray-900 mb-5">My Learning Path</h2>
            <div class="bg-white shadow rounded-lg p-6">
                <div class="mb-6">
                    <h3 class="text-md font-medium text-gray-900 mb-3">Standard 1: Careers</h3>
                    <div class="space-y-3">
                        <!-- Chapter 1.1 -->
                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="text-sm font-medium text-gray-900">1.1: Jobs vs. Careers</span>
                                </div>
                                <span class="text-xs font-medium text-green-600">100% Complete</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-value" style="width: 100%"></div>
                            </div>
                        </div>
                        
                        <!-- Chapter 1.2 -->
                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="text-sm font-medium text-gray-900">1.2: Paying for Post-Secondary Education</span>
                                </div>
                                <span class="text-xs font-medium text-green-600">100% Complete</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-value" style="width: 100%"></div>
                            </div>
                        </div>
                        
                        <!-- Chapter 1.3 -->
                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="text-sm font-medium text-gray-900">1.3: Income and Taxes</span>
                                </div>
                                <span class="text-xs font-medium text-green-600">100% Complete</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-value" style="width: 100%"></div>
                            </div>
                        </div>
                        
                        <!-- Chapter 1.4 -->
                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="text-sm font-medium text-gray-900">1.4: Financial Goal Setting</span>
                                </div>
                                <span class="text-xs font-medium text-green-600">100% Complete</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-value" style="width: 100%"></div>
                            </div>
                        </div>
                        
                        <!-- Chapter 1.5 -->
                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="flex items-center">
                                    <svg class="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="text-sm font-medium text-gray-900">1.5: Managing Your Income Effectively</span>
                                </div>
                                <span class="text-xs font-medium text-blue-600">75% Complete</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-value" style="width: 75%"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h3 class="text-md font-medium text-gray-900 mb-3">Standard 2: Taxes</h3>
                    <div class="space-y-3">
                        <!-- Chapter 2.1 -->
                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="flex items-center">
                                    <svg class="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="text-sm font-medium text-gray-900">2.1: Understanding Federal and State Taxes</span>
                                </div>
                                <span class="text-xs font-medium text-blue-600">50% Complete</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-value" style="width: 50%"></div>
                            </div>
                        </div>
                        
                        <!-- Chapter 2.2 -->
                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="flex items-center">
                                    <svg class="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="text-sm font-medium text-gray-900">2.2: Understanding Tax Brackets and Tax Rates</span>
                                </div>
                                <span class="text-xs font-medium text-blue-600">50% Complete</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-value" style="width: 50%"></div>
                            </div>
                        </div>
                        
                        <!-- Chapter 2.3 -->
                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="flex items-center">
                                    <svg class="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="text-sm font-medium text-gray-900">2.3: Understanding Tax Filing Requirements</span>
                                </div>
                                <span class="text-xs font-medium text-blue-600">50% Complete</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-value" style="width: 50%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Section 4: My Financial Literacy Portfolio -->
        <section class="mb-10">
            <div class="flex justify-between items-center mb-5">
                <h2 class="text-lg font-medium text-gray-900">My Financial Literacy Portfolio</h2>
                <a href="#" class="text-sm text-indigo-600 hover:text-indigo-900 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    View Full Portfolio
                </a>
            </div>
            
            <div class="bg-white shadow rounded-lg p-6">
                <p class="text-gray-600 mb-4">Your financial literacy portfolio grows as you complete each chapter, collecting and organizing your work into a comprehensive showcase of your financial knowledge and skills.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <!-- Portfolio Item 1 -->
                    <div class="portfolio-item standard-1 bg-white">
                        <div class="portfolio-header">
                            <div class="portfolio-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/3940/3940056.png" alt="Career Path" class="h-6 w-6">
                            </div>
                            <div>
                                <h3 class="text-sm font-semibold text-gray-900">Career Path Plan</h3>
                                <span class="chapter-label">Ch 1.1: Jobs vs. Careers</span>
                                <span class="completed-badge">Completed</span>
                            </div>
                        </div>
                        <div class="portfolio-content">
                            <p class="text-xs text-gray-600">Educational goals timeline and career development strategy from Chapter 1.1 Day 2.</p>
                            <div class="mt-2 text-right">
                                <a href="#" class="text-xs text-indigo-600 hover:text-indigo-800">View Details</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Portfolio Item 2 -->
                    <div class="portfolio-item standard-1 bg-white">
                        <div class="portfolio-header">
                            <div class="portfolio-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/3247/3247952.png" alt="Education Timeline" class="h-6 w-6">
                            </div>
                            <div>
                                <h3 class="text-sm font-semibold text-gray-900">Education Timeline</h3>
                                <span class="chapter-label">Ch 1.1: Jobs vs. Careers</span>
                                <span class="completed-badge">Completed</span>
                            </div>
                        </div>
                        <div class="portfolio-content">
                            <p class="text-xs text-gray-600">Visual representation of educational milestones aligned with career goals.</p>
                            <div class="mt-2 text-right">
                                <a href="#" class="text-xs text-indigo-600 hover:text-indigo-800">View Details</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Portfolio Item 3 -->
                    <div class="portfolio-item standard-1 bg-white">
                        <div class="portfolio-header">
                            <div class="portfolio-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/2382/2382600.png" alt="Salary Progression" class="h-6 w-6">
                            </div>
                            <div>
                                <h3 class="text-sm font-semibold text-gray-900">Salary Progression</h3>
                                <span class="chapter-label">Ch 1.1: Jobs vs. Careers</span>
                                <span class="completed-badge">Completed</span>
                            </div>
                        </div>
                        <div class="portfolio-content">
                            <p class="text-xs text-gray-600">Visualization of expected salary growth over time based on education and experience.</p>
                            <div class="mt-2 text-right">
                                <a href="#" class="text-xs text-indigo-600 hover:text-indigo-800">View Details</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Portfolio Item 4 -->
                    <div class="portfolio-item standard-1 bg-white">
                        <div class="portfolio-header">
                            <div class="portfolio-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/5577/5577172.png" alt="Skills Development" class="h-6 w-6">
                            </div>
                            <div>
                                <h3 class="text-sm font-semibold text-gray-900">Skills Development Plan</h3>
                                <span class="chapter-label">Ch 1.1: Jobs vs. Careers</span>
                                <span class="completed-badge">Completed</span>
                            </div>
                        </div>
                        <div class="portfolio-content">
                            <p class="text-xs text-gray-600">Technical and soft skills development roadmap for your chosen career.</p>
                            <div class="mt-2 text-right">
                                <a href="#" class="text-xs text-indigo-600 hover:text-indigo-800">View Details</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Portfolio Item 5 -->
                    <div class="portfolio-item standard-2 bg-white">
                        <div class="portfolio-header">
                            <div class="portfolio-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/4457/4457307.png" alt="Tax System Analysis" class="h-6 w-6">
                            </div>
                            <div>
                                <h3 class="text-sm font-semibold text-gray-900">Tax System Analysis</h3>
                                <span class="chapter-label">Ch 2.1: Federal & State Taxes</span>
                                <span class="completed-badge">Completed</span>
                            </div>
                        </div>
                        <div class="portfolio-content">
                            <p class="text-xs text-gray-600">Comprehensive analysis of how different tax systems impact your finances.</p>
                            <div class="mt-2 text-right">
                                <a href="#" class="text-xs text-indigo-600 hover:text-indigo-800">View Details</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Portfolio Item 6 -->
                    <div class="portfolio-item standard-2 bg-white">
                        <div class="portfolio-header">
                            <div class="portfolio-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/2329/2329087.png" alt="Tax Bracket Calculator" class="h-6 w-6">
                            </div>
                            <div>
                                <h3 class="text-sm font-semibold text-gray-900">Tax Bracket Calculator</h3>
                                <span class="chapter-label">Ch 2.2: Tax Brackets and Rates</span>
                                <span class="completed-badge">Completed</span>
                            </div>
                        </div>
                        <div class="portfolio-content">
                            <p class="text-xs text-gray-600">Interactive calculator for understanding marginal tax rates impact.</p>
                            <div class="mt-2 text-right">
                                <a href="#" class="text-xs text-indigo-600 hover:text-indigo-800">View Details</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Portfolio Item 7 - Locked -->
                    <div class="portfolio-item locked bg-white">
                        <div class="portfolio-header">
                            <div class="portfolio-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-sm font-semibold text-gray-500">Tax Filing System</h3>
                                <span class="chapter-label">Ch 2.3: Tax Filing Requirements</span>
                            </div>
                        </div>
                        <div class="portfolio-content">
                            <p class="text-xs text-gray-400">Complete Chapter 2.3 to unlock this portfolio item.</p>
                            <div class="mt-2 text-right">
                                <span class="text-xs text-gray-400">Locked</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Portfolio Item 8 -->
                    <div class="portfolio-item standard-15 bg-white">
                        <div class="portfolio-header">
                            <div class="portfolio-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/909/909314.png" alt="Resume" class="h-6 w-6">
                            </div>
                            <div>
                                <h3 class="text-sm font-semibold text-gray-900">Professional Resume</h3>
                                <span class="chapter-label">Ch 15.2: Resume Building</span>
                                <span class="completed-badge">Completed</span>
                            </div>
                        </div>
                        <div class="portfolio-content">
                            <p class="text-xs text-gray-600">Complete professional resume tailored to your career goals.</p>
                            <div class="mt-2 text-right">
                                <a href="#" class="text-xs text-indigo-600 hover:text-indigo-800">View Details</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Portfolio Item 9 -->
                    <div class="portfolio-item standard-15 bg-white">
                        <div class="portfolio-header">
                            <div class="portfolio-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/8971/8971603.png" alt="Interview Prep" class="h-6 w-6">
                            </div>
                            <div>
                                <h3 class="text-sm font-semibold text-gray-900">Interview Preparation</h3>
                                <span class="chapter-label">Ch 15.4: Interview Skills</span>
                                <span class="completed-badge">Completed</span>
                            </div>
                        </div>
                        <div class="portfolio-content">
                            <p class="text-xs text-gray-600">Comprehensive interview preparation with practice questions and responses.</p>
                            <div class="mt-2 text-right">
                                <a href="#" class="text-xs text-indigo-600 hover:text-indigo-800">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Standards Legend -->
                <div class="legend mt-6 bg-gray-50 p-4 rounded-lg">
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: #3b82f6;"></div>
                        <span class="text-sm text-gray-600">Standard 1: Careers</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: #10b981;"></div>
                        <span class="text-sm text-gray-600">Standard 2: Taxes</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: #8b5cf6;"></div>
                        <span class="text-sm text-gray-600">Standard 3: Financial Services</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: #f59e0b;"></div>
                        <span class="text-sm text-gray-600">Standard 5: Investing</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: #ef4444;"></div>
                        <span class="text-sm text-gray-600">Standard 7: Credit</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: #6366f1;"></div>
                        <span class="text-sm text-gray-600">Standard 15: Career Readiness</span>
                    </div>
                </div>
                
                <!-- Portfolio Controls -->
                <div class="portfolio-controls">
                    <button class="download-portfolio-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        Download Portfolio
                    </button>
                    <button class="share-portfolio-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        Share Portfolio
                    </button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer Section -->
    <footer class="bg-white border-t border-gray-200 mt-12">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="md:flex md:items-center md:justify-between">
                <div class="flex justify-center md:order-2">
                    <a href="#" class="text-gray-500 hover:text-gray-600">
                        <span class="sr-only">Help Center</span>
                        <span class="text-sm">Help Center</span>
                    </a>
                    <a href="#" class="ml-6 text-gray-500 hover:text-gray-600">
                        <span class="sr-only">Privacy Policy</span>
                        <span class="text-sm">Privacy Policy</span>
                    </a>
                    <a href="#" class="ml-6 text-gray-500 hover:text-gray-600">
                        <span class="sr-only">Terms of Service</span>
                        <span class="text-sm">Terms of Service</span>
                    </a>
                </div>
                <div class="mt-8 md:mt-0 md:order-1">
                    <p class="text-center text-sm text-gray-500">&copy; 2025 PFL Academy. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- JavaScript for interactive elements -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Download portfolio button
            const downloadBtn = document.querySelector('.download-portfolio-btn');
            if (downloadBtn) {
                downloadBtn.addEventListener('click', function() {
                    alert('Your portfolio is being prepared for download. This feature will be available in the full version.');
                });
            }
            
            // Share portfolio button
            const shareBtn = document.querySelector('.share-portfolio-btn');
            if (shareBtn) {
                shareBtn.addEventListener('click', function() {
                    alert('Share your portfolio with teachers, mentors, or potential employers. This feature will be available in the full version.');
                });
            }
        });
    </script>
</body>
</html>