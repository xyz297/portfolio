'use client';

import { useState, useRef, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    company: 'Netlink Software Group of America Inc',
    location: 'Bhopal',
    period: 'Sep 2023 – Present',
    duration: '2 years',
    type: 'Full-time',
    level: 'Senior',
    description: '',
    // 'ETL development and data analysis initiatives, managing cross-functional teams and delivering business-critical insights.',
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
    skills: ['ETL Development', 'Pentaho DI', 'SQL', 'Team Management', 'Dashboard Development'],
    achievements: [
      { label: '30% reduction in monitoring effort', value: '30%' },
      { label: '60% reduction in testing time', value: '60%' },
      { label: 'Led Dev and QA teams', value: '2 Teams' },
      { label: 'Real-time dashboard development', value: '5+ Dashboards' }
    ]
  },
  {
    id: 'associate-analyst',
    title: 'Associate Data Analyst',
    company: 'Netlink Software Group of America Inc',
    location: 'Bhopal',
    period: 'Apr 2023 – Aug 2023',
    duration: '5 months',
    type: 'Full-time',
    level: 'Mid-level',
    description: 'Contributed to data analysis projects and ETL process development while enhancing reporting accuracy.',
    points: [
      'Supported data analysis tasks, including generating reports and analyzing trends in project data',
      'Contributed to the creation of ETL processes and automation of data workflows',
      'Enhanced reporting accuracy by developing robust data checks and validation routines',
    ],
    skills: ['Data Analysis', 'ETL Processes', 'Report Generation', 'Data Validation'],
    achievements: []
  },
  {
    id: 'trainee-analyst',
    title: 'Data Analyst (Trainee)',
    company: 'Netlink Software Group of America Inc',
    location: 'Bhopal',
    period: 'Oct 2022 – Apr 2023',
    duration: '7 months',
    type: 'Full-time',
    level: 'Junior',
    description: 'Gained hands-on experience in data pipeline development and dashboard creation.',
    points: [
      'Assisted in building data pipelines, cleaning datasets, and preparing reports',
      'Analyzed data patterns and supported dashboard creation for project teams',
    ],
    skills: ['Data Pipelines', 'Data Cleaning', 'Dashboard Support', 'Pattern Analysis'],
    achievements: []
  },
  {
    id: 'intern-analyst',
    title: 'Data Analyst (Intern)',
    company: 'Netlink Software Group of America Inc',
    location: 'Bhopal',
    period: 'May 2022 – Oct 2022',
    duration: '6 months',
    type: 'Internship',
    level: 'Entry',
    description: 'Started my journey in data analysis with foundational ETL and reporting experience.',
    points: [
      'Supported the design of ETL routines and created basic analytical reports',
      'Performed data validation, cleaning, and Excel-based reporting',
    ],
    skills: ['ETL Basics', 'Data Validation', 'Excel Reporting', 'Data Cleaning'],
    achievements: []
  },
];

export default function Experience() {
  const [expandedCard, setExpandedCard] = useState<string | null>('data-analyst');
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-card-id');
            if (cardId) {
              setVisibleCards(prev => new Set(Array.from(prev).concat(cardId)));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const cardRef = (element: HTMLDivElement | null, cardId: string) => {
    if (element && observerRef.current) {
      element.setAttribute('data-card-id', cardId);
      observerRef.current.observe(element);
    }
  };

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="experience" className="w-full px-6 py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-100 shadow-sm mb-6">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-gray-700">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey in data analysis and ETL development, showcasing growth from intern to senior analyst through hands-on experience and continuous learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200">
            <div 
              className="absolute top-0 left-0 w-full bg-gray-400 transition-all duration-700 ease-out"
              style={{ 
                height: `${((activeIndex + 1) / experiences.length) * 100}%`
              }}
            />
          </div>
          
          <div className="space-y-12">
            {experiences.map((job, idx) => (
              <div 
                key={job.id} 
                ref={(el) => cardRef(el, job.id)}
                className="relative"
                onMouseEnter={() => setActiveIndex(idx)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 z-20">
                  <div className={`w-full h-full rounded-full border-3 border-white shadow-lg transition-all duration-300 ${
                    idx === 0 ? 'bg-blue-600' : 'bg-gray-300 hover:bg-blue-400'
                  }`}>
                  </div>
                </div>
                
                {/* Experience Card */}
                <Card 
                  className={`ml-20 relative cursor-pointer transition-all duration-300 border-gray-200 hover:border-gray-300 ${
                    visibleCards.has(job.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } ${
                    expandedCard === job.id ? 'shadow-lg ring-1 ring-gray-200' : 'shadow-sm hover:shadow-md'
                  }`}
                  onClick={() => toggleCard(job.id)}
                >
                  <CardContent className="p-8">
                    {/* Current Role Indicator */}
                    {idx === 0 && (
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500 to-indigo-500" />
                    )}
                    
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                          {idx === 0 && (
                            <Badge className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">
                              Current
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-medium">{job.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed">{job.description}</p>
                      </div>
                      
                      <div className="flex flex-col items-end gap-3 mt-4 lg:mt-0">
                        <div className="text-right">
                          <div className="text-sm font-semibold text-gray-900">{job.period}</div>
                          <div className="text-xs text-gray-500">{job.duration}</div>
                        </div>
                        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
                          <span className="text-sm">
                            {expandedCard === job.id ? 'Show Less' : 'Show More'}
                          </span>
                          {expandedCard === job.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-blue-600" />
                        Key Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      expandedCard === job.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-600" />
                          Key Responsibilities
                        </h4>
                        <div className="space-y-3">
                          {job.points.map((point, i) => (
                            <div key={i} className="flex items-start gap-3 group">
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0 group-hover:bg-blue-600 transition-colors"></span>
                              <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">{point}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements for Senior Role */}
                      {job.achievements.length > 0 && (
                        <div className="p-6 bg-blue-50/50 rounded-lg border border-blue-100">
                          <h4 className="font-semibold text-gray-800 mb-4">
                            Key Achievements
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {job.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-center justify-between bg-white px-4 py-3 rounded-lg border border-gray-200">
                                <div className="text-sm text-gray-700">{achievement.label}</div>
                                <div className="font-semibold text-gray-900">{achievement.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Career Progression Summary */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 shadow-lg">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-full border border-blue-200 mb-6">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-700">Career Growth</span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Professional Evolution</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Started as an intern and progressed to a senior data analyst role, consistently taking on more responsibilities and leading critical projects through continuous learning and hands-on experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-blue-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="text-3xl font-bold text-blue-600 mb-2">2.5+ Years</div>
                <div className="text-gray-600">Total Experience</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-green-200 hover:border-green-300 hover:shadow-lg transition-all">
                <div className="text-3xl font-bold text-green-600 mb-2">4 Roles</div>
                <div className="text-gray-600">Progressive Growth</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-indigo-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                <div className="text-3xl font-bold text-indigo-600 mb-2">1 Company</div>
                <div className="text-gray-600">Consistent Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
