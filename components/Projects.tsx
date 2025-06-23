'use client';

import { FolderKanban } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'Outliers Agent Detection',
    description: 'Audits outlier calls, provides actionable feedback, and enables performance review via dashboards.',
    bullets: [
      'Built ETL pipelines and normalized JSON data',
      'Implemented SCD and star/snowflake schemas',
      'Automated dynamic Excel reports using Pentaho',
    ],
  },
  {
    title: 'Vendor Commit Portal',
    description: 'Tracks individual/team goals, automates notifications, and visualizes commitment KPIs.',
    bullets: [
      'Optimized data pipelines and file/email automation',
      'Reviewed junior developer code and implemented SCD',
      'Created dynamic Excel outputs for business reviews',
    ],
  },
  {
    title: 'SiriusXM CV Dashboard',
    description: 'KPI dashboards and coaching tools for SiriusXM’s connected vehicle business line.',
    bullets: [
      'Designed automated ETL, SCD strategies, and validation',
      'Built dashboard usage metrics for management',
      'Automated reporting with Pentaho and SQL',
    ],
  },
  {
    title: 'EchopostAI — LinkedIn Generator',
    description: 'GenAI-powered tool to create professional LinkedIn posts with hashtags and sharing options.',
    bullets: ['Built using ChatGPT, Cursor, Deepseek', 'Custom backend and copy-to-clipboard UX'],
  },
  {
    title: 'Hospitality Dashboard — Power BI',
    description: 'Tracks patient flow, bed occupancy, and doctor utilization.',
    bullets: [
      'Transformed data in Power Query and DAX',
      'Created slicers, drilldowns, and scheduled reports',
    ],
  },
];

export default function Projects() {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <FolderKanban className="w-6 h-6" /> Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <Card key={idx} className="border border-gray-200 shadow-sm">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{project.description}</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 text-sm space-y-1">
                  {project.bullets.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
