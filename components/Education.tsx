'use client';

import { GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Education() {
  return (
    <section id="education" className="w-full px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <GraduationCap className="w-6 h-6" /> Education & Certifications
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Education */}
          <Card className="bg-white shadow-sm border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">Education</h3>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">B.Tech in Agricultural Engineering</h4>
                <p className="text-gray-600 text-sm">AKS University</p>
                <p className="text-gray-500 text-sm">2015 – 2019</p>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-white shadow-sm border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-800">Certifications</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="font-medium text-gray-800">Google Data Analytics Professional Certificate</span>
                  <span className="text-gray-600 text-sm">Coursera</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-gray-800">Foundations of Data Science</span>
                  <span className="text-gray-600 text-sm">IBM (Coursera)</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-gray-800">Advanced SQL</span>
                  <span className="text-gray-600 text-sm">HackerRank</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
