'use client';
import { MessageCircle, CheckCircle, FileText, Lightbulb } from 'lucide-react';
import React from 'react';
import BookFreeMockInterview from './forms/BookFreeMockInterview';
import Modal from './modal';

interface Service {
  title: string;
  description: string;
  features: string[];
  purpose: 'mock-interview' | 'resume-review' | 'career-counselling';
  icon: React.JSX.Element;
  btn: (onClick?: () => void) => React.JSX.Element;
  containerClasses: string;
}

const SERVICES: Service[] = [
  {
    title: 'Mock Interviews',
    description:
      'Practice with realistic interview scenarios tailored to your target role and industry. Get immediate feedback on your responses, body language, and communication style.',
    features: [
      'Technical & behavioral questions',
      'Industry-specific scenarios',
      'Real-time feedback & tips',
      '45-60 minute sessions',
    ],
    purpose: 'mock-interview',
    icon: (
      <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
    ),
    btn: (onClick?: () => void) => (
      <button
        onClick={onClick}
        className="w-full bg-slate-600 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors font-semibold"
      >
        Schedule Mock Interview
      </button>
    ),
    containerClasses:
      'bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200',
  },
  {
    title: 'Resume Review',
    description:
      "Get your resume professionally reviewed and optimized to pass ATS systems and catch recruiters' attention. Receive detailed feedback and suggestions for improvement.",
    features: ['ATS-friendly formatting', 'Keyword optimization', 'Personalized feedback', '1-on-1 consultation'],
    purpose: 'resume-review',
    icon: (
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <FileText className="w-8 h-8 text-white" />
      </div>
    ),
    btn: (onClick?: () => void) => (
      <button
        onClick={onClick}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        Submit Resume for Review
      </button>
    ),
    containerClasses:
      'bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200',
  },
  {
    title: 'Career Guidance',
    description:
      'Get personalized advice on career planning, job search strategies, and professional development. Navigate your career path with confidence and clarity.',
    features: ['Career path planning', 'Job search strategies', 'LinkedIn optimization', 'Networking advice'],
    purpose: 'career-counselling',
    icon: (
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <Lightbulb className="w-8 h-8 text-white" />
      </div>
    ),
    btn: (onClick?: () => void) => (
      <button
        onClick={onClick}
        className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
      >
        Book Career Consultation
      </button>
    ),
    containerClasses:
      'bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200',
  },
];

const Services = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [purpose, setPurpose] = React.useState<'mock-interview' | 'resume-review' | 'career-counselling'>(
    'mock-interview'
  );

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Book Free Mock Interview"
        description="Schedule your 1-on-1 session with an expert"
        ModalBody={<BookFreeMockInterview purpose={purpose} />}
      />

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How I Can Help You</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive career support tailored to your specific needs and goals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className={service.containerClasses}>
                {service.icon}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feat, key) => (
                    <li className="flex items-center text-gray-600" key={key}>
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                {service.btn(() => {
                  setPurpose(service.purpose);
                  setIsOpen(true);
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
