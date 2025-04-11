
import React from 'react';

export default function ViewingStudentProgress() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Viewing Student Progress</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Track mastery, completion rates, and performance analytics by student or class.
        </p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <ul className="list-disc pl-6 space-y-3">
          <li>Navigate to the “Progress” tab in your instructor dashboard.</li>
          <li>Select a class to view group metrics or drill into individual student detail.</li>
          <li>Toggle between Skill Builders, Assessments, and Reflection Journals.</li>
          <li>Export results for LMS sync or parent/administrator reporting.</li>
        </ul>
        <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">📈 Student progress is updated in real-time with auto-save and AI scoring.</p>
        </div>
      </section>
    </div>
  );
}
