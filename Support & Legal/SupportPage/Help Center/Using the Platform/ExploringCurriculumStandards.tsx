
import React from 'react';

export default function ExploringCurriculumStandards() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Exploring Curriculum Standards</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Learn how to navigate and implement PFL’s 15 curriculum standards.
        </p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <ul className="list-disc pl-6 space-y-3">
          <li>Click “Curriculum” in the top nav bar.</li>
          <li>Browse by standard (e.g., Careers, Taxes, Credit) using color-coded cards.</li>
          <li>Select a chapter to preview lessons, skill builders, and assessments.</li>
          <li>Use filters to sort by grade level, type, or length.</li>
        </ul>
        <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">📚 Use the curriculum preview tool to demo student-facing content live.</p>
        </div>
      </section>
    </div>
  );
}
