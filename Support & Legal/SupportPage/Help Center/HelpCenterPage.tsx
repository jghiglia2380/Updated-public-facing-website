
export default function HelpCenterPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Help Center</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Browse articles, find answers, and learn how to get the most from PFL Academy.
        </p>
      </section>

      {/* Search and Categories */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full max-w-xl px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:border-indigo-500 transition">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">Getting Started</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="/help/creating-your-account" className="hover:text-indigo-600">Creating your account</a></li>
              <li><a href="/help/logging-in-as-student-or-teacher" className="hover:text-indigo-600">Logging in as a student or teacher</a></li>
              <li><a href="/help/setting-up-your-first-class" className="hover:text-indigo-600">Setting up your first class</a></li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:border-indigo-500 transition">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">Using the Platform</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="/help/exploring-curriculum-standards" className="hover:text-indigo-600">Exploring curriculum standards</a></li>
              <li><a href="/help/viewing-student-progress" className="hover:text-indigo-600">Viewing student progress</a></li>
              <li><a href="/help/using-skill-builders" className="hover:text-indigo-600">Skill builder simulations</a></li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:border-indigo-500 transition">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">Account & Settings</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="/help/resetting-your-password" className="hover:text-indigo-600">Resetting your password</a></li>
              <li><a href="/help/managing-notifications" className="hover:text-indigo-600">Managing notifications</a></li>
              <li><a href="/help/connecting-your-lms" className="hover:text-indigo-600">Connecting your LMS</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-50 py-16 text-center px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Still can’t find what you need?</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Reach out to our support team and we’ll get back to you as soon as possible.
        </p>
        <a href="mailto:support@pflacademy.co" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium shadow hover:bg-indigo-700">
          Contact Support
        </a>
      </section>
    </div>
  );
}
