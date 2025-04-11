import React, { useState } from 'react';

const StudentLogin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'teacher'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [accessCode, setAccessCode] = useState('');

  const handleTabChange = (tab: 'student' | 'teacher') => {
    setActiveTab(tab);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle authentication here
    console.log('Logging in with:', { email, password, rememberMe, activeTab });
    alert(`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} login attempted with email: ${email}`);
  };

  return (
    <div className="min-h-screen bg-gradient-student">
      <div className="min-h-screen flex flex-col justify-center py-12 px-6 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center pulse-animation">
            <div className="flex justify-center items-center h-16 w-16 rounded-lg bg-white text-indigo-600 font-bold text-2xl">
              PFL
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            PFL Academy
          </h2>
          <p className="mt-2 text-center text-sm text-indigo-100 max-w">
            Your pathway to financial literacy
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="login-card">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                className={`w-1/2 py-4 text-sm font-medium text-center ${
                  activeTab === 'student' ? 'tab-active' : 'tab-inactive'
                }`}
                onClick={() => handleTabChange('student')}
              >
                Student Login
              </button>
              <button
                className={`w-1/2 py-4 text-sm font-medium text-center ${
                  activeTab === 'teacher' ? 'tab-active' : 'tab-inactive'
                }`}
                onClick={() => handleTabChange('teacher')}
              >
                Teacher Login
              </button>
            </div>

            <div className="py-8 px-4 sm:px-10">
              {/* SSO Buttons */}
              <div className="space-y-3">
                <button className="sso-button hover-lift">
                  <img
                    src="/assets/google-logo.svg"
                    alt="Google logo"
                    className="sso-logo"
                  />
                  <span>Continue with Google</span>
                </button>
                <button className="sso-button hover-lift">
                  <img
                    src="/assets/microsoft-logo.svg"
                    alt="Microsoft logo"
                    className="sso-logo"
                  />
                  <span>Continue with Microsoft</span>
                </button>
                <button className="sso-button hover-lift">
                  <img
                    src="/assets/clever-logo.svg"
                    alt="Clever logo"
                    className="sso-logo"
                  />
                  <span>Continue with Clever</span>
                </button>
              </div>

              <div className="mt-6">
                <div className="divider text-xs text-gray-500">
                  OR CONTINUE WITH EMAIL
                </div>
              </div>

              <div className="mt-6">
                <form className="space-y-6" onSubmit={handleLogin}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="your-email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  {activeTab === 'teacher' && (
                    <div>
                      <label htmlFor="access-code" className="block text-sm font-medium text-gray-700">
                        School Access Code
                      </label>
                      <div className="mt-1">
                        <input
                          id="access-code"
                          name="access-code"
                          type="text"
                          required
                          value={accessCode}
                          onChange={(e) => setAccessCode(e.target.value)}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Enter your school's access code"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover-lift"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>

              {activeTab === 'student' && (
                <div className="mt-6">
                  <div className="relative">
                    <div className="text-sm text-center">
                      <span className="text-gray-500">New to PFL Academy? </span>
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Create an account
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'teacher' && (
                <div className="mt-6">
                  <div className="relative">
                    <div className="text-sm text-center">
                      <span className="text-gray-500">Need to register your school? </span>
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 text-center">
            <a href="/static-build/index.html" className="text-sm text-indigo-100 hover:text-white">
              ← Back to home
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-transparent py-4">
        <div className="container mx-auto px-4">
          <div className="text-center text-indigo-100 text-xs">
            &copy; 2025 PFL Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentLogin;