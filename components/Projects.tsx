'use client';

import { FolderKanban, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Outliers Agent Detection',
    description: 'Application designed to audit outlier calls and provide feedback after the audit, categorizing calls as bad call, connection issue or coaching needed etc. Based on this feedback, higher authorities can assess an auditor\'s performance.',
    bullets: [
      'Developed ETL pipelines for data extraction, transformation, and loading from sources such as CSV and Database',
      'Optimized SQL queries to enhance ETL performance',
      'Implemented slowly changing dimensions for dynamic questionnaire visibility',
      'Handled JSON responses and normalized data for reporting using Pentaho and SQL',
      'Automated data testing with Pentaho PDI and SQL, generating dynamic Excel reports',
      'Developed data modeling and strategies using star and snowflake schemas for efficient data storage and retrieval'
    ],
    tags: ['ETL', 'Pentaho DI', 'SQL', 'JSON', 'Data Modeling'],
    type: 'Professional'
  },
  {
    title: 'Vendor Commit Portal',
    description: 'Application designed to facilitate efficient goal setting, tracking, and management for both individuals and teams. The platform allows users to define, commit and monitor their goals through a user-friendly interface and advanced tracking features.',
    bullets: [
      'Designed optimized data pipelines for automated extraction from source',
      'Built an automated pipeline for file handling and email notifications, streamlining workflows',
      'Implemented slowly changing dimensions for agents data',
      'Reviewed and tested ETL code developed by junior developers, providing necessary feedback and training',
      'Automated data testing with Pentaho PDI and SQL, generating dynamic Excel reports'
    ],
    tags: ['ETL', 'Automation', 'Team Management', 'Code Review'],
    type: 'Professional'
  },
  {
    title: 'SiriusXM CV Dashboard',
    description: 'Comprehensive Business Intelligence solution for SiriusXM\'s Sales and Saves data of connected vehicle Line of Business. Designed multiple dashboards to help both management and agents monitor performance trends. Includes a Coaching Management Tool for supervisors.',
    bullets: [
      'Designed and optimized data pipelines for automated extraction, transformation, and loading (ETL) from diverse source systems',
      'Built an automated file handling and email notification to streamline data ingestion and stakeholder communication',
      'Implemented Slowly Changing Dimensions (SCD) strategies to accurately track historical agent data changes',
      'Automated validation processes using Pentaho PDI and SQL, and delivered dynamic Excel reports for business users',
      'Built dynamic dashboard usage report for management users'
    ],
    tags: ['Business Intelligence', 'SCD', 'Dashboard', 'Management Tools'],
    type: 'Professional'
  },
  {
    title: 'EchopostAI — LinkedIn Post Generator',
    description: 'GenAI-powered tool to generate LinkedIn posts from user input with automatic hashtag addition and one-click copy-to-share functionality.',
    bullets: [
      'Built using Various AI tools like Cursor, ChatGPT and Deepseek',
      'Custom backend designed for seamless user experience',
      'Automatically add relevant hashtags on the generated post',
      'Allows one-click copy and share to LinkedIn'
    ],
    tags: ['GenAI', 'ChatGPT', 'Cursor', 'Backend Development'],
    type: 'Personal',
    link: 'https://echopostai.netlify.app'
  },
  {
    title: 'Hospitality Dashboard — Power BI',
    description: 'Comprehensive Power BI dashboard for tracking patient flow, bed occupancy, and doctor utilization in healthcare settings.',
    bullets: [
      'Performed data cleaning and transformation in Power Query',
      'Designed a Star Schema and implemented relationships',
      'Built DAX measures for patient flow, bed occupancy, doctor utilization, medication usage',
      'Created interactive charts, slicers, and drill-downs',
      'Published to Power BI Service with scheduled refresh'
    ],
    tags: ['Power BI', 'DAX', 'Star Schema', 'Healthcare Analytics'],
    type: 'Personal',
    link: '#'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full px-6 py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <FolderKanban className="w-8 h-8 text-blue-600" /> 
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my professional and personal projects demonstrating expertise in data analysis, ETL development, and business intelligence.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <Card key={idx} className="group border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50 transition-all"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    <Badge 
                      variant={project.type === 'Professional' ? 'default' : 'secondary'} 
                      className={`mb-3 px-3 py-1 ${project.type === 'Professional' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-100 text-green-700'}`}
                    >
                      {project.type}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {project.bullets.slice(0, 3).map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        {pt}
                      </li>
                    ))}
                    {project.bullets.length > 3 && (
                      <li className="text-gray-500 text-sm italic">
                        +{project.bullets.length - 3} more achievements...
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="text-xs hover:bg-blue-50 hover:border-blue-300 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in My Work?</h3>
            <p className="text-gray-600 mb-6">
              I&apos;m always excited to discuss new projects and opportunities. Let&apos;s connect to explore how I can help with your data analysis and ETL needs.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
