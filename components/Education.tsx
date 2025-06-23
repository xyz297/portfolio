'use client';

import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="w-full px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <GraduationCap className="w-6 h-6" /> Education & Certifications
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">B.Tech in Agricultural Engineering</h3>
            <p className="text-gray-600 text-sm">AKS University — 2015 to 2019</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Certifications</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mt-2">
              <li>Google Data Analytics Professional Certificate — Coursera</li>
              <li>Foundations of Data Science — IBM (Coursera)</li>
              <li>Advanced SQL — HackerRank</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
