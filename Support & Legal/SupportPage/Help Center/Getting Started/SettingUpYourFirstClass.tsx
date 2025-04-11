
import React from 'react';

export default function SettingUpYourFirstClass() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Setting Up Your First Class</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Get your classroom ready to use PFL Academy in just a few steps.
        </p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <ol className="list-decimal pl-6 space-y-3">
          <li>After logging in, click on “Create Class” in your instructor dashboard.</li>
          <li>Name your class and assign a grade level or curriculum standard.</li>
          <li>Use the invite link or class code to add students.</li>
          <li>Assign your first activity from the curriculum browser.</li>
        </ol>
        <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">📣 You can always edit class settings or rename your course later from the dashboard.</p>
        </div>
      </section>
    </div>
  );
}
