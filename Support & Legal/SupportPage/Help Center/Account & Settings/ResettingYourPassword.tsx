
import React from 'react';

export default function ResettingYourPassword() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Resetting Your Password</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Regain access to your account in just a few steps.
        </p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <ol className="list-decimal pl-6 space-y-3">
          <li>Go to the <a href="/student-login" className="text-indigo-600 hover:underline">login page</a>.</li>
          <li>Click on the “Forgot Password?” link beneath the login form.</li>
          <li>Enter your registered email address and submit.</li>
          <li>Check your inbox for a reset email and follow the link provided.</li>
          <li>Create a new password and log in with your updated credentials.</li>
        </ol>
        <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">🔐 Use a strong password that includes at least 8 characters, one number, and a symbol.</p>
        </div>
      </section>
    </div>
  );
}
