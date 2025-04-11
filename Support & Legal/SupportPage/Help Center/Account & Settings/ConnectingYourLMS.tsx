
import React from 'react';

export default function ConnectingYourLMS() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Connecting Your LMS</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Sync PFL Academy with Canvas, Google Classroom, or PowerSchool.
        </p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <ol className="list-decimal pl-6 space-y-3">
          <li>Open your profile and go to the “Integrations” section.</li>
          <li>Select your LMS from the list of supported platforms.</li>
          <li>Authorize access using your school credentials.</li>
          <li>Once connected, grades and assignments sync automatically.</li>
        </ol>
        <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">🔗 If you need help with LMS credentials, contact your district’s IT team.</p>
        </div>
      </section>
    </div>
  );
}
