
export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 px-4 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Protecting your privacy is our priority. This Privacy Policy applies to PFL Academy and governs data collection and usage.
        </p>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto space-y-10 text-gray-700 text-sm">
        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">1. Collection of Information</h2>
          <p>
            PFL Academy does not collect personally identifiable information (PII) such as full names, mailing addresses, email addresses, or payment information.
            Students register using a username and password and select their school district and site. No additional personal data is collected.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">2. Use of Information</h2>
          <p>
            Since PFL Academy does not collect PII, we do not use personal data for communication or service delivery. Any student-generated content, including usernames, project data, and skill builder results, is used solely to deliver the educational experience.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">3. Sharing Information with Third Parties</h2>
          <p>
            PFL Academy does not sell, rent, or share user data with third parties. All content created within the platform stays securely within the PFL system.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">4. Parental Rights and Data Deletion Requests</h2>
          <p>
            Parents and guardians may request that their child’s data be deleted at any time by contacting support@pflacademy.co. Deletion requests will be fulfilled within 30 days unless retention is legally required.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">5. Data Retention Policy</h2>
          <p>
            Student-generated content is retained to support continuity in learning and to enable portfolio and capstone project completion. Upon request, this content will be permanently deleted from our systems.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">6. Breach Response Plan</h2>
          <p>
            In the event of a data breach, PFL Academy will:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Investigate the source and extent of the breach</li>
            <li>Notify our breach task force and secure the system</li>
            <li>Test the fix to ensure the vulnerability is resolved</li>
            <li>Alert affected users and authorities within 72 hours</li>
            <li>Execute long-term cleanup and security improvements</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">7. Security of Your Information</h2>
          <p>
            We use SSL encryption and modern security protocols to ensure all student-generated data is transmitted and stored securely. No platform can guarantee 100% security, but we are committed to protecting user content.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">8. Automatically Collected Information</h2>
          <p>
            PFL Academy does not automatically collect information about your device, browser, or location. We do not use tracking scripts, advertising pixels, or data profiling technologies.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">9. Tracking User Behavior</h2>
          <p>
            Our platform does not track user behavior for advertising, customization, or behavioral analysis. All activity is limited to educational engagement only.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be announced through the website. Continued use of the site implies acceptance of any changes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">Contact Information</h2>
          <p>
            If you have any questions or concerns regarding our privacy practices, please contact:
          </p>
          <p className="mt-2">
            PFL Academy<br />
            2380 California Street, #402<br />
            San Francisco, CA 94115<br />
            Email: <a href="mailto:support@pflacademy.co" className="text-indigo-600 underline">support@pflacademy.co</a>
          </p>
        </div>

        <div className="text-xs text-gray-500">
          Effective Date: April 10, 2025 — Last Updated: April 10, 2025
        </div>
      </section>
    </div>
  );
}
