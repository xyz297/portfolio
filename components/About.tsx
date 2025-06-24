'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Phone, Linkedin, User, Code, Database, BarChart3, Brain, Users, Download, ExternalLink } from 'lucide-react';

const skillCategories = [
  {
    id: 'etl',
    title: 'ETL & Programming',
    icon: Code,
    color: 'blue',
    description: 'Core development and data processing technologies',
    skills: ['Pentaho DI', 'ETL Pipeline Development', 'SQL', 'Python (Basic for Data Analytics)']
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Database,
    color: 'green',
    description: 'Database management and data storage solutions',
    skills: ['Vertica', 'MySQL', 'AWS Redshift', 'Postgres']
  },
  {
    id: 'visualization',
    title: 'Data Visualization & Tools',
    icon: BarChart3,
    color: 'purple',
    description: 'Business intelligence and reporting tools',
    skills: ['Power BI', 'Advanced MS Excel', 'DBeaver', 'Low-code App Builder']
  },
  {
    id: 'ai',
    title: 'Gen-AI & Emerging Tech',
    icon: Brain,
    color: 'indigo',
    description: 'Modern AI tools and emerging technologies',
    skills: ['ChatGPT', 'Cursor', 'Deepseek', 'v0 by Vercel', 'Lovable.dev', 'Gemini']
  },
  {
    id: 'other',
    title: 'Other Skills',
    icon: Users,
    color: 'orange',
    description: 'Additional professional and methodological skills',
    skills: ['Data Analysis', 'Dashboard Development', 'Root Cause Analysis', 'UAT Testing', 'Agile Methodologies']
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'text-blue-600',
    badge: 'bg-blue-100 text-blue-700 border-blue-300',
    hover: 'hover:border-blue-300'
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200', 
    icon: 'text-green-600',
    badge: 'bg-green-100 text-green-700 border-green-300',
    hover: 'hover:border-green-300'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    icon: 'text-purple-600',
    badge: 'bg-purple-100 text-purple-700 border-purple-300',
    hover: 'hover:border-purple-300'
  },
  indigo: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    icon: 'text-indigo-600',
    badge: 'bg-indigo-100 text-indigo-700 border-indigo-300',
    hover: 'hover:border-indigo-300'
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    icon: 'text-orange-600',
    badge: 'bg-orange-100 text-orange-700 border-orange-300',
    hover: 'hover:border-orange-300'
  }
};

export default function About() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isTextVisible, setIsTextVisible] = useState(false);

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
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observer for text section
    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTextVisible(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: '30px' }
    );

    const textElement = document.getElementById('about-text');
    if (textElement) {
      textObserver.observe(textElement);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      textObserver.disconnect();
    };
  }, []);

  const cardRef = (element: HTMLDivElement | null, cardId: string) => {
    if (element && observerRef.current) {
      element.setAttribute('data-card-id', cardId);
      observerRef.current.observe(element);
    }
  };

  return (
    <section id="about" className="w-full px-6 py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-blue-100 mb-6">
            <User className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-gray-700">Get to Know Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div 
            id="about-text"
            className={`transition-all duration-700 ${
              isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Amit Tripathi</h3>
                  <p className="text-blue-600 font-medium">Senior Data Analyst</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                I&apos;m an experienced Data Analyst with <strong className="text-blue-600">3+ years of expertise</strong> in ETL development and data analysis. I&apos;m skilled at designing, developing, and optimizing ETL workflows using Pentaho DI for seamless data integration and warehousing.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Proficient in extracting, transforming, and loading large and diverse datasets, ensuring high performance and data accuracy. Strong SQL expertise for writing complex queries, indexing, and optimizing performance. Experienced in low-code application development, creating actionable reports, and implementing SCD types.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 mb-8">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                Contact Information
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Bhopal, India</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                  <Phone className="w-4 h-4 text-green-600" />
                  <a href="tel:+919752848785" className="text-gray-700 hover:text-green-600 transition-colors">
                    +91 97528 48785
                  </a>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <a href="mailto:amit5000tripathi@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                    amit5000tripathi@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <a 
                    href="https://linkedin.com/in/amit-tripathi-profile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                  >
                    LinkedIn Profile
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Download className="w-4 h-4" />
                Download Resume
              </button>
              <a 
                href="#contact"
                className="flex items-center justify-center gap-2 border border-blue-200 text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>

          {/* Skills Panel */}
          <div className="space-y-6">
            {skillCategories.map((category, index) => {
              const colors = colorClasses[category.color as keyof typeof colorClasses];
              const IconComponent = category.icon;
              
              return (
                <Card 
                  key={category.id}
                  ref={(el) => cardRef(el, category.id)}
                  className={`transition-all duration-700 transform border-2 ${colors.border} ${colors.hover} shadow-lg hover:shadow-xl ${
                    visibleCards.has(category.id) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  } ${
                    hoveredCard === category.id ? 'scale-105' : ''
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className={`p-6 ${colors.bg} rounded-lg`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center border ${colors.border}`}>
                        <IconComponent className={`w-5 h-5 ${colors.icon}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                        <p className="text-sm text-gray-600">{category.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {category.skills.map((skill, i) => (
                        <Badge 
                          key={i} 
                          className={`${colors.badge} border hover:scale-105 transition-transform duration-200`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 text-center hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 text-center hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 text-center hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
            <div className="text-gray-600">Major Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}
