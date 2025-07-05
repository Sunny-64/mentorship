'use client';
import { FAQS } from '@/constants';
import { ChevronUp, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about my mentorship program</p>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-6 h-6 text-slate-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-slate-600 flex-shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;