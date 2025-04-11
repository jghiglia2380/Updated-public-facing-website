
import React from 'react';

export default function UsingAdaptiveInstructionalSupport() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Using Adaptive Instructional Support</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Access context-aware coaching suggestions as you teach or prep your lesson.
        </p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <ul className="list-disc pl-6 space-y-3">
          <li>Open any curriculum chapter and enable “Instructor Support Panel.”</li>
          <li>Review suggested prompts, pacing tips, and extensions by activity section.</li>
          <li>Use the embedded chat to ask questions like “How do I teach APR?”</li>
          <li>Support logs are saved in your profile for later reference.</li>
        </ul>
        <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">💬 Support adapts in real-time based on where you are in the lesson.</p>
        </div>
      </section>
    </div>
  );
}
