import React from 'react';

const Stats = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-slate-600 mb-2 group-hover:scale-110 transition-transform duration-300">
              200+
            </div>
            <p className="text-gray-600 font-medium">Students Mentored</p>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
              90%
            </div>
            <p className="text-gray-600 font-medium">Interview Success Rate</p>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-slate-600 mb-2 group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <p className="text-gray-600 font-medium">Hours of Free Mentoring</p>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <p className="text-gray-600 font-medium">Free Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;