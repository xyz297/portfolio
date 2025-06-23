'use client';

import { Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    title: 'Data Analyst',
    company: 'Netlink Software Group of America Inc',
    period: 'Sep 2023 – Present',
    points: [
      'Designed and implemented ETL pipelines using Pentaho DI to transform raw data into dimension, fact, and aggregate tables, making it ready for key insights and reports on the dashboard',
      'Conducted data preparation, transformation, and dashboard development, ensuring accurate and actionable insights',
      'Built low-code applications using in-house app builder and designed their backend workflows by utilizing SQL',
      'Performed exploratory data analysis (EDA) to uncover trends, patterns, and anomalies in operational and service delivery data',
      'Created aggregated reports and visualizations that improved monitoring of KPIs and performance metrics',
      'Automated manual processes, reducing monitoring effort by 30% and testing time by 60%',
      'Delivered actionable insights through SQL queries, Excel reports, and near real-time dashboards',
      'Managed user login, roles, and permissions through SQL',
      'Managed Dev and QA teams, ensuring system integrity and guiding test case development'
    ],
  },
  {
    title: 'Associate Data Analyst',
    company: 'Netlink Software Group of America Inc',
    period: 'Apr 2023 – Aug 2023',
    points: [
      'Supported data analysis tasks, including generating reports and analyzing trends in project data',
      'Contributed to the creation of ETL processes and automation of data workflows',
      'Enhanced reporting accuracy by developing robust data checks and validation routines',
    ],
  },
  {
    title: 'Data Analyst (Trainee)',
    company: 'Netlink Software Group of America Inc',
    period: 'Oct 2022 – Apr 2023',
    points: [
      'Assisted in building data pipelines, cleaning datasets, and preparing reports',
      'Analyzed data patterns and supported dashboard creation for project teams',
    ],
  },
  {
    title: 'Data Analyst (Intern)',
    company: 'Netlink Software Group of America Inc',
    period: 'May 2022 – Oct 2022',
    points: [
      'Supported the design of ETL routines and created basic analytical reports',
      'Performed data validation, cleaning, and Excel-based reporting',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Briefcase className="w-8 h-8 text-blue-600" /> 
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in data analysis and ETL development, showcasing growth from intern to senior analyst.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600"></div>
          
          <div className="space-y-12">
            {experiences.map((job, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <Card className="ml-20 bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex items-center gap-2 text-gray-600 mb-3">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded-lg">
                        <span>{job.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {job.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2.5 flex-shrink-0"></span>
                          <p className="text-gray-700 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>

                    {/* Achievement highlights for current role */}
                    {idx === 0 && (
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-semibold text-blue-900 mb-2">Key Achievements</h4>
                        <div className="grid md:grid-cols-2 gap-3 text-sm text-blue-800">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600">📈</span>
                            <span>30% reduction in monitoring effort</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600">⚡</span>
                            <span>60% reduction in testing time</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600">👥</span>
                            <span>Led Dev and QA teams</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600">🔄</span>
                            <span>Real-time dashboard development</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Career progression summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Progression</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Started as an intern and progressed to a senior data analyst role, consistently taking on more responsibilities and leading critical projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="font-semibold text-blue-600">2.5+ Years</span>
                <span className="text-gray-600 ml-2">Total Experience</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="font-semibold text-green-600">4 Roles</span>
                <span className="text-gray-600 ml-2">Progressive Growth</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="font-semibold text-purple-600">1 Company</span>
                <span className="text-gray-600 ml-2">Consistent Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
