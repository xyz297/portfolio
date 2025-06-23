'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Personal Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I'm <strong>Amit Tripathi</strong>, a Data Analyst with over 3 years of hands-on experience in designing, developing, and optimizing ETL workflows using Pentaho DI. I'm passionate about transforming raw datasets into business-ready insights, enabling smarter decisions.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            I’ve worked across the entire data lifecycle—from ETL pipeline creation, SQL tuning, and dashboard development to data validation and automation. I also enjoy building low-code applications and experimenting with Generative AI tools.
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
              <a href="https://linkedin.com/in/" target="_blank" className="hover:underline">LinkedIn Profile</a>
            </div>
          </div>
        </div>

        {/* Skills Panel */}
        <div className="grid gap-6">
          <Card className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>ETL: Pentaho DI</Badge>
                <Badge>SQL</Badge>
                <Badge>Python (Basic)</Badge>
                <Badge>Vertica</Badge>
                <Badge>MySQL</Badge>
                <Badge>Redshift</Badge>
                <Badge>Postgres</Badge>
                <Badge>Power BI</Badge>
                <Badge>Excel</Badge>
                <Badge>DBeaver</Badge>
                <Badge>Low-code Builder</Badge>
                <Badge>ChatGPT</Badge>
                <Badge>Cursor</Badge>
                <Badge>Gemini</Badge>
                <Badge>v0 by Vercel</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
