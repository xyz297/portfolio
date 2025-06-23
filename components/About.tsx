'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="w-full px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Personal Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I&apos;m <strong>Amit Tripathi</strong>, an experienced Data Analyst with 3+ years of expertise in ETL development and data analysis. I&apos;m skilled at designing, developing, and optimizing ETL workflows using Pentaho DI for seamless data integration and warehousing.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Proficient in extracting, transforming, and loading large and diverse datasets, ensuring high performance and data accuracy. Strong SQL expertise for writing complex queries, indexing, and optimizing performance. Experienced in low-code application development, creating actionable reports, and implementing SCD types.
          </p>

          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Bhopal, India
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              +91 97528 48785
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              amit5000tripathi@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <a href="https://linkedin.com/in/amit-tripathi-profile" target="_blank" className="hover:underline">LinkedIn Profile</a>
            </div>
          </div>
        </div>

        {/* Skills Panel */}
        <div className="grid gap-6">
          <Card className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">ETL & Programming</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Pentaho DI</Badge>
                <Badge>ETL Pipeline Development</Badge>
                <Badge>SQL</Badge>
                <Badge>Python (Basic for Data Analytics)</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">Databases</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Vertica</Badge>
                <Badge>MySQL</Badge>
                <Badge>AWS Redshift</Badge>
                <Badge>Postgres</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">Data Visualization & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Power BI</Badge>
                <Badge>Advanced MS Excel</Badge>
                <Badge>DBeaver</Badge>
                <Badge>Low-code App Builder</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">Gen-AI & Emerging Tech</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>ChatGPT</Badge>
                <Badge>Cursor</Badge>
                <Badge>Deepseek</Badge>
                <Badge>v0 by Vercel</Badge>
                <Badge>Lovable.dev</Badge>
                <Badge>Gemini</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Data Analysis</Badge>
                <Badge>Dashboard Development</Badge>
                <Badge>Root Cause Analysis</Badge>
                <Badge>UAT Testing</Badge>
                <Badge>Agile Methodologies</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
