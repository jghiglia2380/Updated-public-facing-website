
export default function SupportPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Need Help? We're Here for You.</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Access expert support, guided walkthroughs, and all the resources you need to get the most out of PFL Academy.
        </p>
      </section>

      {/* Support Options Grid */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-center gap-6">
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 hover:border-indigo-500 transition">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">📘 Help Center</h3>
            <p className="text-gray-600 mb-3">Browse articles, how-to guides, and troubleshooting tips.</p>
            <a href="#" className="text-indigo-600 hover:underline font-medium">Visit Help Center →</a>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 hover:border-indigo-500 transition">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">🎓 Guided Training</h3>
            <p className="text-gray-600 mb-3">Watch walkthrough videos and access interactive training labs.</p>
            <a href="#" className="text-indigo-600 hover:underline font-medium">Access Training →</a>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 hover:border-indigo-500 transition">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">💬 Live Chat</h3>
            <p className="text-gray-600 mb-3">Chat with a real person during school hours (8am–5pm CST).</p>
            <a href="#" className="text-indigo-600 hover:underline font-medium">Start Chat →</a>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 hover:border-indigo-500 transition">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">📣 Feedback & Suggestions</h3>
            <p className="text-gray-600 mb-3">Tell us what you love or how we can improve the platform.</p>
            <a href="#" className="text-indigo-600 hover:underline font-medium">Submit Feedback →</a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-50 py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Still Need Help?</h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-6">
          If you can't find what you're looking for, our team is ready to assist.
        </p>
        <a href="mailto:support@pflacademy.co" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium shadow hover:bg-indigo-700">
          Contact Support
        </a>
      </section>
    </div>
  );
}
