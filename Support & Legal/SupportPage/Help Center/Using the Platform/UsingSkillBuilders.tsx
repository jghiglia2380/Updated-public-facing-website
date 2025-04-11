
import React from 'react';

export default function UsingSkillBuilders() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Using Skill Builders</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Discover how interactive simulations drive student engagement and application.
        </p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <ol className="list-decimal pl-6 space-y-3">
          <li>Open a chapter that includes a skill builder (noted by a ⚙️ icon).</li>
          <li>Click “Preview Simulation” to try it as a teacher.</li>
          <li>Assign it directly or use as a class-wide warmup.</li>
          <li>Review student results via the Dashboard → Activities tab.</li>
        </ol>
        <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">⚙️ All skill builders are auto-graded and tied to specific learning objectives.</p>
        </div>
      </section>
    </div>
  );
}
