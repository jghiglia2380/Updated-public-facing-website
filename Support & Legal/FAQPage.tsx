
export default function FAQPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Find quick answers to the most common questions from teachers and administrators.
        </p>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-10">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">How do I get started with PFL Academy?</h3>
          <p className="text-gray-700 text-sm">
            Log into your teacher dashboard and review the Getting Started videos. You can assign curriculum modules from there or integrate with Google Classroom.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Can I customize the curriculum for my pacing or instructional model?</h3>
          <p className="text-gray-700 text-sm">
            The curriculum is designed specifically for high school students. We offer two structured options: a 90-hour full-semester synchronous model and a flexible 30–45 hour asynchronous format for partial semesters or enrichment programs.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Do students need accounts to access the curriculum?</h3>
          <p className="text-gray-700 text-sm">
            Yes, students will log in using a class code or through your school’s LMS integration (e.g., Google Classroom or Clever).
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">What support is available for teachers?</h3>
          <p className="text-gray-700 text-sm">
            You can access 24/7 AI-powered help through our Live Chat, submit a ticket to our support team, or schedule personalized training through the Guided Training page.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Can I track student progress and grades?</h3>
          <p className="text-gray-700 text-sm">
            Absolutely! Our dashboard provides real-time analytics, auto-graded assessments, and downloadable reports to keep tabs on engagement and performance.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">What will students learn and walk away with?</h3>
          <p className="text-gray-700 text-sm">
            PFL Academy covers 15 core standards of personal financial literacy — from careers, taxes, and investing to credit, insurance, and consumer protection. Our hands-on approach blends interactive tools, real-world simulations, and a two-day model: Day 1 for instruction, Day 2 for application. Students will complete auto-graded activities, skill builders, and learning labs. They’ll walk away with a professional resume, a completed financial portfolio, and a capstone project demonstrating their mastery of real-life financial decision-making. These outcomes are designed to prepare them for postsecondary life, employment, and responsible adult choices.
          </p>
        </div>
      </section>
    </div>
  );
}
