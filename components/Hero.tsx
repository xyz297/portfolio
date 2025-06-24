
'use client';

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Left Text Column */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Available for opportunities
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Hi, I&apos;m <span className="text-blue-600">Amit Tripathi</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Data Analyst & ETL Expert
          </h2>
          
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Experienced Data Analyst with <strong>3+ years of expertise</strong> in ETL development and data analysis. Skilled at designing, developing, and optimizing ETL workflows using Pentaho DI for seamless data integration and warehousing. Committed to delivering scalable, efficient, and data-centric solutions.
          </p>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-600" />
              <span>Bhopal, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-blue-600" />
              <span>+91 97528 48785</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-blue-600" />
              <span>amit5000tripathi@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <Link 
              href="#contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </Link>
            
            <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all duration-300"
              onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.download = 'Amit_Tripathi_Data_Analyst_resume.pdf'; // Custom filename for download
              link.click();
            }}>
              <Download size={16} />
              Download CV
            </button>

            <div className="flex gap-4 text-sm text-gray-500 ml-4">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                <span>📊</span>
                <span>Data Analyst</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                <span>🔄</span>
                <span>ETL Expert</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                <span>💻</span>
                <span>3+ Years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="flex-1 relative flex justify-center">
          <div className="relative w-[320px] h-[380px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-indigo-200 border-4 border-white">
            <Image
              src="/profile.svg"
              alt="Amit Tripathi - Data Analyst"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Labels */}
          <div className="absolute -top-6 -left-8 bg-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg text-gray-700 border border-gray-100">
            <span className="text-gray-500">Based in</span> <span className="text-blue-600">Bhopal, India</span>
          </div>

          <div className="absolute -bottom-8 -right-6 bg-white px-5 py-3 rounded-xl text-sm font-medium shadow-lg text-blue-600 border border-blue-100">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></span>
              ETL & Data Expert
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 -right-12 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-12 w-16 h-16 bg-indigo-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
}
