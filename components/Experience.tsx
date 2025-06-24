'use client';

import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Award, TrendingUp, ArrowUpRight } from 'lucide-react';
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
    level: 'Mid-level',
    description: '',
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
    level: 'Junior',
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="experience" className="w-full px-4 py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-100 shadow-sm mb-6">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-gray-700">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Career</span> Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From intern to data analyst, my journey showcases continuous growth in data analysis and ETL development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-[2.5rem] bottom-[2.5rem] w-0.5 bg-gradient-to-b from-blue-200 to-blue-100 transform -translate-x-1/2">
            <div 
              className="absolute top-0 left-0 w-full bg-blue-500 transition-all duration-700 ease-out"
              style={{ 
                height: `${((activeIndex + 1) / experiences.length) * 100}%`
              }}
            />
          </div>
          
          <div className="space-y-1">
            {experiences.map((job, idx) => (
              <div 
                key={job.id} 
                className={`relative transition-all duration-300 ${
                  idx % 2 === 0 ? 
                    'md:mr-[50%] md:pr-8' : 
                    'md:ml-[50%] md:pl-8'
                }`}
                style={{
                  marginTop: idx > 0 ? '-5rem' : '0'
                }}
                onMouseEnter={() => {
                  setActiveIndex(idx);
                  setIsHovering(job.id);
                }}
                onMouseLeave={() => setIsHovering(null)}
              >
                {/* Timeline Dot */}
                {/* <div className={`absolute left-6 md:left-1/2 top-1/2 w-4 h-4 z-20 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isHovering === job.id ? 'scale-150' : ''
                }`}>
                  <div className={`w-full h-full rounded-full border-2 border-white shadow-md transition-all duration-300 ${
                    idx <= activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                </div> */}
                
                {/* Experience Card */}
                <Card 
                  className={`relative overflow-hidden transition-all duration-500 ${
                    expandedCard === job.id ? 
                      'border-blue-200 shadow-lg bg-white' : 
                      'border-gray-100 hover:border-blue-100 bg-white/90 hover:bg-white'
                  } ${
                    idx === 0 ? 'ring-1 ring-blue-100' : ''
                  }`}
                  onClick={() => toggleCard(job.id)}
                >
                  {idx === 0 && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400" />
                  )}
                  
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Left Column */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-4">
                          <div className={`p-2 rounded-lg ${
                            idx === 0 ? 'bg-blue-100 text-blue-600' : 
                            idx === 1 ? 'bg-green-100 text-green-600' : 
                            idx === 2 ? 'bg-purple-100 text-purple-600' : 
                            'bg-yellow-100 text-yellow-600'
                          }`}>
                            <Briefcase className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                              {idx === 0 && (
                                <Badge className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">
                                  Current
                                </Badge>
                              )}
                            </div>
                            <div className="text-lg font-medium text-gray-700 mt-1">{job.company}</div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mb-4">
                          <Badge variant="outline" className="flex items-center gap-1 bg-white text-gray-600">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </Badge>
                          {/* <Badge variant="outline" className="flex items-center gap-1 bg-white text-gray-600">
                            <Calendar className="w-3 h-3" />
                            {job.period}
                          </Badge> */}
                          <Badge variant="outline" className="bg-white text-gray-600">
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="bg-white text-gray-600">
                            {job.level}
                          </Badge>
                        </div>
                        
                        {/* Skills */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-500 mb-2">TECHNOLOGIES USED</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, i) => (
                              <Badge 
                                key={i} 
                                variant="outline" 
                                className={`text-xs font-medium ${
                                  idx === 0 ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                                  idx === 1 ? 'bg-green-50 text-green-700 border-green-200' : 
                                  idx === 2 ? 'bg-purple-50 text-purple-700 border-purple-200' : 
                                  'bg-yellow-50 text-yellow-700 border-yellow-200'
                                }`}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Column (Dates) */}
                      <div className="md:w-40 flex-shrink-0">
                        <div className={`p-3 rounded-lg text-center ${
                          idx === 0 ? 'bg-blue-50' : 
                          idx === 1 ? 'bg-green-50' : 
                          idx === 2 ? 'bg-purple-50' : 
                          'bg-yellow-50'
                        }`}>
                          <div className="text-sm font-medium text-gray-700">{job.duration}</div>
                          <div className="text-xs text-gray-500 mt-1">{job.period}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expandable Content */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      expandedCard === job.id ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-gray-100 pt-4">
                        {/* Responsibilities */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-blue-500" />
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-3">
                            {job.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-3 group">
                                <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                  idx === 0 ? 'bg-blue-400' : 
                                  idx === 1 ? 'bg-green-400' : 
                                  idx === 2 ? 'bg-purple-400' : 
                                  'bg-yellow-400'
                                }`}></span>
                                <p className="text-gray-700 leading-relaxed">{point}</p>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        {job.achievements.length > 0 && (
                          <div className={`p-5 rounded-lg border ${
                            idx === 0 ? 'bg-blue-50 border-blue-100' : 
                            idx === 1 ? 'bg-green-50 border-green-100' : 
                            idx === 2 ? 'bg-purple-50 border-purple-100' : 
                            'bg-yellow-50 border-yellow-100'
                          }`}>
                            <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                              <Award className="w-4 h-4 text-blue-500" />
                              Key Achievements
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {job.achievements.map((achievement, i) => (
                                <div 
                                  key={i} 
                                  className={`flex items-center justify-between px-4 py-3 rounded-lg ${
                                    idx === 0 ? 'bg-white border border-blue-100' : 
                                    idx === 1 ? 'bg-white border border-green-100' : 
                                    idx === 2 ? 'bg-white border border-purple-100' : 
                                    'bg-white border border-gray-100'
                                  }`}
                                >
                                  <div className="text-sm text-gray-700">{achievement.label}</div>
                                  <div className={`font-semibold ${
                                    idx === 0 ? 'text-blue-600' : 
                                    idx === 1 ? 'text-green-600' : 
                                    idx === 2 ? 'text-purple-600' : 
                                    'text-gray-600'
                                  }`}>{achievement.value}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Show More/Less Button */}
                    <div className="flex justify-center mt-4">
                      <button 
                        className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          idx === 0 ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : 
                          idx === 1 ? 'bg-green-100 text-green-700 hover:bg-green-200' : 
                          idx === 2 ? 'bg-purple-100 text-purple-700 hover:bg-purple-200' : 
                          'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                        }`}
                        onClick={() => toggleCard(job.id)}
                      >
                        {expandedCard === job.id ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            <span>Show More</span>
                            <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <div className="mt-20 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-full border border-blue-200 mb-4">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-700">Career Growth</span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Professional Evolution</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Started as an intern and progressed to a senior data analyst role, consistently taking on more responsibilities and leading critical projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600">3+ Years</div>
              </div>
              <div className="text-gray-600">Total Experience</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <ArrowUpRight className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600">4 Roles</div>
              </div>
              <div className="text-gray-600">Progressive Growth</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Award className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600">1 Company</div>
              </div>
              <div className="text-gray-600">Consistent Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}