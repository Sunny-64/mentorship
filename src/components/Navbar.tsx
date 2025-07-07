'use client';
import { Heart } from 'lucide-react';
import Modal from './modal';
import React from 'react';
import BookFreeMockInterview from './forms/BookFreeMockInterview';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Book Free Mock Interview"
        description="Schedule your 1-on-1 session with an expert"
        ModalBody={<BookFreeMockInterview purpose="mock-interview" />}
      />

      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Meeta&apos;s Mentorship</span>
                <p className="text-xs text-gray-500">Free Career Guidance</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-slate-600 transition-colors font-medium">
                About Me
              </a>
              <a href="#services" className="text-gray-600 hover:text-slate-600 transition-colors font-medium">
                Services
              </a>
              <a href="#success-stories" className="text-gray-600 hover:text-slate-600 transition-colors font-medium">
                Success Stories
              </a>
              <a href="#faq" className="text-gray-600 hover:text-slate-600 transition-colors font-medium">
                FAQ
              </a>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-gradient-to-r from-slate-600 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:cursor-pointer hover:from-slate-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
              >
                Book Free Session
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
