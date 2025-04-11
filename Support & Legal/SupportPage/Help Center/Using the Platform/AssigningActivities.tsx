
import React from 'react';

export default function AssigningActivities() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Assigning Activities</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Deliver curated lessons, assessments, and labs to your students with ease.
        </p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <ol className="list-decimal pl-6 space-y-3">
          <li>Browse or search the curriculum library.</li>
          <li>Click on any item and choose “Assign to Class.”</li>
          <li>Choose due date and grading visibility preferences.</li>
          <li>Students receive instant notification and see it appear in their dashboard.</li>
        </ol>
        <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">📝 You can assign items to multiple classes or individuals at once.</p>
        </div>
      </section>
    </div>
  );
}
