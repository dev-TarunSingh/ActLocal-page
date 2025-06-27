import React, { useState, useEffect } from "react";

export default function TermsPolicy() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 px-4 sm:px-6 lg:px-8 py-10 relative">
      {/* Toggle Button */}

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">
          Terms, Conditions and Privacy Policy
        </h1>

        <div className="flex justify-center mb-10">
          <button
            className="px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-black rounded shadow transition-colors duration-200"
            onClick={() => setDarkMode(!darkMode)}
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        {/* Terms & Conditions Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">1. Acceptance of Terms</h3>
              <p>
                By accessing or using ActLocal, users agree to be bound by these
                terms.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">2. Use of the Platform</h3>
              <ul className="list-disc list-inside">
                <li>
                  Users may post or respond to service listings that comply with
                  Indian law.
                </li>
                <li>
                  Illegal, misleading, or abusive content is strictly
                  prohibited.
                </li>
                <li>
                  ActLocal reserves the right to remove any content without
                  notice.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                3. User Responsibilities
              </h3>
              <ul className="list-disc list-inside">
                <li>
                  Users are responsible for the accuracy of the content they
                  post.
                </li>
                <li>
                  All agreements or payments between users and providers are at
                  their own risk.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">4. Account and Security</h3>
              <ul className="list-disc list-inside">
                <li>Users must keep their login credentials confidential.</li>
                <li>
                  ActLocal is not liable for unauthorized access due to user
                  negligence.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">5. Service Availability</h3>
              <p>
                The app may experience bugs, downtime, or under-development
                features during its testing phase.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">6. Termination</h3>
              <ul className="list-disc list-inside">
                <li>
                  ActLocal may suspend or terminate accounts that violate the
                  terms.
                </li>
                <li>Users can delete their accounts anytime.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                7. Limitation of Liability
              </h3>
              <p>
                ActLocal is not responsible for disputes, damages, or losses
                arising from user interactions. The platform acts only as a
                facilitator.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">1. Data We Collect</h3>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Personal Info:</strong> Name, Email, phone number, and
                  location for geolocation features.
                </li>
                <li>
                  <strong>Usage Data:</strong> Device info, preferences, and
                  activity logs.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">2. How We Use Data</h3>
              <ul className="list-disc list-inside">
                <li>To enable location-based service matching.</li>
                <li>To improve user experience and app performance.</li>
                <li>
                  To send important updates and optional promotional content.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">3. Data Sharing</h3>
              <ul className="list-disc list-inside">
                <li>
                  We do <strong>not</strong> sell or rent user data to third
                  parties.
                </li>
                <li>
                  Data may be shared with authorities when required under Indian
                  law.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">4. Security</h3>
              <ul className="list-disc list-inside">
                <li>We apply basic security practices to protect user data.</li>
                <li>Users should avoid sharing passwords or OTPs.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">5. Third-Party Services</h3>
              <p>
                We may use services like Firebase or analytics tools that
                collect data as per their own policies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">6. User Rights</h3>
              <ul className="list-disc list-inside">
                <li>Users can request to view or delete their data.</li>
                <li>Users can opt out of non-essential communication.</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-12 text-sm text-center text-gray-500 dark:text-gray-400">
          Last updated: June 2025
        </div>
      </div>
    </div>
  );
}
