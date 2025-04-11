
import React from 'react';

export default function UpdatingYourProfile() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Updating Your Profile</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Keep your information up to date and personalize your experience.
        </p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <ul className="list-disc pl-6 space-y-3">
          <li>Click your profile icon in the top-right corner.</li>
          <li>Choose “Edit Profile” from the dropdown.</li>
          <li>Update your name, title, school, and profile picture.</li>
          <li>Click “Save Changes” to apply your updates instantly.</li>
        </ul>
        <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">🖼 A clear profile photo helps students and co-teachers identify you easily.</p>
        </div>
      </section>
    </div>
  );
}
