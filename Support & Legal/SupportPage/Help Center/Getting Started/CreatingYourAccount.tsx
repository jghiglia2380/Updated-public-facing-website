
import React from 'react';

export default function CreatingYourAccount() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Creating Your Account</h1>
        <p className="text-lg max-w-2xl mx-auto">Start your PFL Academy journey by creating your personal instructor or student account.</p>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Step-by-Step Instructions</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Visit the <a href="/student-login" className="text-indigo-600 hover:underline">login page</a>.</li>
          <li>Click on <strong>Register</strong> and select your role: Teacher or Student.</li>
          <li>Fill out the form with your name, email, school, and create a secure password.</li>
          <li>Check your email for a verification link and click it to confirm your account.</li>
          <li>Log in and begin exploring the dashboard and curriculum.</li>
        </ol>

        <div className="mt-10 p-6 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">💡 Tip: Use your school email address to ensure seamless LMS integration.</p>
        </div>
      </section>

      <section className="bg-indigo-50 py-12 text-center px-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">Need more help?</h3>
        <p className="text-gray-600 mb-4">Contact our support team if you run into any issues during registration.</p>
        <a href="mailto:support@pflacademy.co" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-indigo-700">
          Contact Support
        </a>
      </section>
    </div>
  );
}
