
import React from 'react';

export default function InviteYourStudents() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Inviting Your Students</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Add your students to PFL Academy using invite links or class codes.
        </p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <ol className="list-decimal pl-6 space-y-3">
          <li>Open your class from the dashboard.</li>
          <li>Click “Invite Students” to copy a unique URL or class code.</li>
          <li>Share it via LMS, email, or print it out for students to join.</li>
          <li>Once students join, their progress appears in your dashboard.</li>
        </ol>
        <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">✅ Students do not need an email address to join your class—just the code.</p>
        </div>
      </section>
    </div>
  );
}
