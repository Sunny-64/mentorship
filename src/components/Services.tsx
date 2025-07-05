import { MessageCircle, CheckCircle, FileText, Lightbulb } from 'lucide-react';
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How I Can Help You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive career support tailored to your specific needs and goals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mock Interviews</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Practice with realistic interview scenarios tailored to your target role and industry. Get immediate
              feedback on your responses, body language, and communication style.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Technical & behavioral questions</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Industry-specific scenarios</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Real-time feedback & tips</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>45-60 minute sessions</span>
              </li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              Schedule Mock Interview
            </button>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-200">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Resume Review</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Get your resume professionally reviewed and optimized to pass ATS systems and catch recruiters&apos; attention.
              Receive detailed feedback and suggestions for improvement.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>ATS optimization</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Content & formatting review</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Industry-specific suggestions</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Before & after comparison</span>
              </li>
            </ul>
            <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors font-semibold">
              Submit Resume for Review
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Guidance</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Get personalized advice on career planning, job search strategies, and professional development. Navigate
              your career path with confidence and clarity.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Career path planning</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Job search strategies</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>LinkedIn optimization</span>
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Networking advice</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Book Career Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
