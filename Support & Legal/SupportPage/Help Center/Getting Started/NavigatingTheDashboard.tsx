
import React from 'react';

export default function NavigatingTheDashboard() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Navigating the Dashboard</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Understand the layout and tools available in your PFL Academy dashboard.
        </p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <ul className="list-disc pl-6 space-y-3">
          <li>Top navigation: Access curriculum, classes, and grading tools.</li>
          <li>Sidebar: Quickly jump to chapters, reports, or student profiles.</li>
          <li>Dashboard cards: See recent activity, flagged items, and grading alerts.</li>
        </ul>
        <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">📊 Pro Tip: Use filters on your dashboard to quickly narrow results by class or chapter.</p>
        </div>
      </section>
    </div>
  );
}
