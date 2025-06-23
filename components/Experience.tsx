'use client';

import { Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    title: 'Data Analyst',
    company: 'Netlink Software Group of America Inc',
    period: 'Sep 2023 – Present',
    points: [
      'Designed and implemented ETL pipelines using Pentaho DI',
      'Built low-code apps and managed backend with SQL',
      'Performed EDA and delivered near real-time dashboards',
      'Managed user login, roles, and Dev/QA testing activities',
    ],
  },
  {
    title: 'Associate Data Analyst',
    company: 'Netlink Software Group of America Inc',
    period: 'Apr 2023 – Aug 2023',
    points: [
      'Supported reporting and trend analysis',
      'Contributed to ETL and automation tasks',
      'Improved reporting accuracy with data validation',
    ],
  },
  {
    title: 'Data Analyst (Trainee)',
    company: 'Netlink Software Group of America Inc',
    period: 'Oct 2022 – Apr 2023',
    points: [
      'Assisted in pipeline creation and report development',
      'Cleaned datasets and supported dashboard efforts',
    ],
  },
  {
    title: 'Data Analyst (Intern)',
    company: 'Netlink Software Group of America Inc',
    period: 'May 2022 – Oct 2022',
    points: [
      'Created analytical reports and validated data',
      'Used Excel and SQL for reporting and cleanup',
    ],
  },
];

export default function Experience() {
  return (
    <section className="w-full px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Briefcase className="w-6 h-6" /> Experience
        </h2>

        <div className="grid gap-6">
          {experiences.map((job, idx) => (
            <Card key={idx} className="bg-white shadow-sm border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <div className="text-sm text-gray-600 mb-2">{job.company} — {job.period}</div>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {job.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
