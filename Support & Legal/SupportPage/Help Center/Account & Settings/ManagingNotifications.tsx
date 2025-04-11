
import React from 'react';

export default function ManagingNotifications() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Managing Notifications</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Customize how and when PFL Academy keeps you updated.
        </p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <ul className="list-disc pl-6 space-y-3">
          <li>Log into your account and navigate to your profile settings.</li>
          <li>Click the “Notifications” tab to view your preferences.</li>
          <li>Toggle email alerts for class activity, student submissions, or system announcements.</li>
          <li>Save your changes at the bottom of the screen.</li>
        </ul>
        <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">📧 You can opt out at any time — we only send what you find helpful.</p>
        </div>
      </section>
    </div>
  );
}
