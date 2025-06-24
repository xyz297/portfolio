'use client';

import { Gallery4 } from '@/components/ui/gallery4';
import type { Gallery4Item } from '@/components/ui/gallery4';

const projects: Gallery4Item[] = [
  {
    id: 'outliers-agent-detection',
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
    type: 'Professional',
    image: 'https://images.unsplash.com/photo-1554755229-ca4470e07232?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    company: 'Netlink Software Group'
  },
  {
    id: 'vendor-commit-portal',
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
    type: 'Professional',
    image: 'https://images.unsplash.com/photo-1554755229-ca4470e07232?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    company: 'Netlink Software Group'
  },
  {
    id: 'siriusxm-cv-dashboard',
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
    type: 'Professional',
    image: 'https://images.unsplash.com/photo-1554755229-ca4470e07232?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    company: 'Netlink Software Group'
  },
  {
    id: 'echopost-ai',
    title: 'EchopostAI — LinkedIn Post Generator',
    description: 'GenAI-powered tool to generate LinkedIn posts from user input with automatic hashtag addition and one-click copy-to-share functionality.',
    bullets: [
      'Built using Various AI tools like Cursor, ChatGPT and Deepseek',
      'Custom backend designed for seamless user experience',
      'Automatically add relevant hashtags on the generated post',
      'Allows one-click copy and share to LinkedIn',
      'Implemented natural language processing for content optimization',
      'Created user-friendly interface with real-time preview functionality'
    ],
    tags: ['GenAI', 'ChatGPT', 'Cursor', 'Backend Development', 'NLP'],
    type: 'Personal',
    image: '/echopostai.png',
    link: 'https://echopostai.netlify.app'
  },
  {
    id: 'hospitality-dashboard',
    title: 'Hospitality Dashboard — Power BI',
    description: 'Comprehensive Power BI dashboard for tracking patient flow, bed occupancy, and doctor utilization in healthcare settings.',
    bullets: [
      'Performed data cleaning and transformation in Power Query',
      'Designed a Star Schema and implemented relationships',
      'Built DAX measures for patient flow, bed occupancy, doctor utilization, medication usage',
      'Created interactive charts, slicers, and drill-downs',
      'Published to Power BI Service with scheduled refresh',
      'Developed automated alerting system for critical metrics'
    ],
    tags: ['Power BI', 'DAX', 'Star Schema', 'Healthcare Analytics', 'Data Visualization'],
    type: 'Personal',
    image: 'https://images.unsplash.com/photo-1554755229-ca4470e07232?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-gradient-to-br from-gray-50 to-blue-50 pl-5">
      <Gallery4 
        title="Featured Projects"
        description="A showcase of my professional and personal projects demonstrating expertise in data analysis, ETL development, and business intelligence solutions."
        items={projects}
      />
    </section>
  );
}
