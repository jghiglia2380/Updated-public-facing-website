
import React from 'react';

export default function LoggingInAsStudentOrTeacher() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Logging In as a Student or Teacher</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Learn how to securely log into your PFL Academy account based on your role.
        </p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Steps for Both Roles</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Go to the <a href="/student-login" className="text-indigo-600 hover:underline">login page</a>.</li>
          <li>Enter your email address and password used during registration.</li>
          <li>If you're a teacher, you'll be directed to your dashboard with class setup tools.</li>
          <li>If you're a student, you'll see assigned activities and chapter content.</li>
        </ul>
        <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">💡 Forgot your password? Click “Forgot Password” on the login screen to reset it.</p>
        </div>
      </section>
    </div>
  );
}
