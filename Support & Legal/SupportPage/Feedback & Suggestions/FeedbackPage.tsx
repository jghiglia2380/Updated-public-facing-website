import React, { useState } from 'react';

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Feedback & Suggestions</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Help us improve by sharing your thoughts, ideas, or issues you’ve encountered.
        </p>
      </section>

      {/* Form */}
      <section className="py-16 px-6 max-w-xl mx-auto">
        {submitted ? (
          <div className="bg-white border border-green-300 text-green-800 p-6 rounded-xl text-center shadow">
            <h2 className="text-xl font-semibold mb-2">Thank you!</h2>
            <p>Your feedback has been submitted successfully.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-white p-8 rounded-xl shadow border border-gray-200 space-y-6"
          >
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                What type of feedback are you providing?
              </label>
              <select
                id="category"
                name="category"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select a category</option>
                <option value="bug">Report a Bug</option>
                <option value="feature">Request a Feature</option>
                <option value="content">Curriculum Feedback</option>
                <option value="general">General Suggestion</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Feedback
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Optional: Your Email (if you'd like a response)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md shadow hover:bg-indigo-700 transition"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
