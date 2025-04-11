import { useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Auto-Graded Assessments',
    summary: 'Instantly grade multiple choice, true/false, and short-answer questions.',
    details: [
      'AI short answer scoring with feedback',
      'Randomized question order',
      'Instant student results & explanations',
    ],
  },
  {
    title: 'Custom Rubrics',
    summary: 'Grade open-ended work with drag-and-drop rubric builders.',
    details: [
      'Rubric library for common projects',
      'Custom point weighting',
      'Teacher/student preview modes',
    ],
  },
  {
    title: 'Formative & Summative Tools',
    summary: 'Pre/post tests, exit tickets, and skill mastery dashboards.',
    details: [
      'Track student growth over time',
      'Interactive self-checks & peer review',
      'Built-in standards alignment',
    ],
  },
  {
    title: 'LMS Integration',
    summary: 'Sync grades with Google Classroom, Canvas, and PowerSchool.',
    details: [
      'One-click export & syncing',
      'Real-time grade passback',
      'CSV export for any LMS',
    ],
  },
];

export default function AssessmentsGrading() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Save Time Grading. Improve Student Outcomes.</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          AI-powered assessment tools that help teachers grade smarter—not harder.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-50" href="#features">See Features</a>
          <a className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10" href="#demo">Request a Demo</a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Assessment Tools That Work for Everyone</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              onClick={() => setActiveIndex(i === activeIndex ? null : i)}
              className={\`cursor-pointer bg-white rounded-xl p-6 shadow transition-all duration-300 border hover:border-indigo-400 \${activeIndex === i ? 'ring-2 ring-indigo-500' : ''}\`}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-3">{feature.summary}</p>
              {activeIndex === i && (
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  {feature.details.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* LMS Grid */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Works with Your LMS</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Our platform integrates with top learning management systems used in schools nationwide.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            <img src="https://www.instructure.com/sites/default/files/image/2021-12/Canvas_logo_single_mark.png" alt="Canvas" className="h-10 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png" alt="Google Classroom" className="h-10 mx-auto" />
            <img src="https://pfl-public.s3.us-west-1.amazonaws.com/powerschool-logo.png" alt="PowerSchool" className="h-10 mx-auto" />
            <img src="https://clever.com/favicon.ico" alt="Clever" className="h-10 mx-auto" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="demo" className="bg-indigo-50 py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Streamline Your Assessment Strategy</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Join thousands of educators using PFL Academy's grading and assessment tools to drive better outcomes.
        </p>
        <a href="mailto:partners@pflacademy.co" className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium shadow hover:bg-indigo-700 transition">
          Request a Personalized Demo
        </a>
      </section>
    </div>
  );
}
