
import React from 'react';

export default function UnderstandingPermissionsAndRoles() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 py-20 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Understanding Permissions & Roles</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Know what teachers, admins, and students can do on the platform.
        </p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto text-gray-800">
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Teachers</strong> can assign curriculum, manage classes, and view analytics.</li>
          <li><strong>Admins</strong> manage users, access site-wide reports, and control integrations.</li>
          <li><strong>Students</strong> access content, complete activities, and track progress.</li>
        </ul>
        <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
          <p className="text-indigo-800 font-medium">🛡 Roles are automatically assigned during registration but can be updated by an administrator.</p>
        </div>
      </section>
    </div>
  );
}
