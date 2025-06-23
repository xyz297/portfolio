// app/components/Hero.tsx

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Left Text Column */}
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2">Hey, I’m Amit Tripathi</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Crafting analytical & technical solutions<br />
            with focus on scalable data interfaces
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Data engineer and full-stack developer with expertise in Vertica, React, Python, and business intelligence. I turn complex datasets into clear, actionable dashboards and automation tools.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm hover:bg-blue-700 transition">
              Project request
            </button>

            <div className="flex gap-3 text-sm text-gray-500">
              <span>📊 Data Engineer</span>
              <span>🧠 BI Expert</span>
              <span>💻 3+ yrs experience</span>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="flex-1 relative flex justify-center">
          <div className="relative w-[280px] h-[340px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/profile.svg"
              alt="Amit Tripathi"
              fill
              className="object-cover"
            />
          </div>

          {/* Label Tags */}
          <div className="absolute -top-4 -left-6 bg-white px-3 py-1 rounded-lg text-xs font-semibold shadow text-gray-600">
            FROM <span className="text-blue-600">INDIA</span>
          </div>

          <div className="absolute -bottom-6 -right-8 bg-white px-4 py-2 rounded-xl text-sm font-medium shadow-md text-blue-600 border border-blue-100">
            🧠 Expert Data Engineer
          </div>
        </div>
      </div>
    </section>
  );
}
