'use client';
import { Award, Calendar, Clock, FileText, Gift, GraduationCap, Heart, Shield, Users } from 'lucide-react';
import React from 'react';
import Modal from './modal';
import BookFreeMockInterview from './forms/BookFreeMockInterview';

const Hero = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {/* Modal for booking session */}
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Book Free Mock Interview"
        description="Schedule your 1-on-1 session with an expert"
        ModalBody={<BookFreeMockInterview />} // Pass your form component here
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Gift className="w-6 h-6 text-purple-600" />
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  100% Free Community Service
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Meeta
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-semibold">Your Personal Career Mentor</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I&apos;m passionate about helping students like you land their dream jobs. Through free 1-on-1 mock
                interviews, resume reviews, and career guidance, I&apos;m here to support your journey to success. This
                is my way of giving back to the community and helping the next generation of professionals thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => setIsOpen(true)}
                  className="hover:cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  {/* Schedule Free Mock Interview */}
                  Book Free Session
                  <Calendar className="ml-2 w-5 h-5" />
                </button>
                <button className="hover:cursor-pointer  bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                  Get Resume Reviewed
                  <FileText className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>45-60 min sessions</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  <span>Completely free</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-1" />
                  <span>Community service</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      M
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Meeta</h3>
                      <p className="text-purple-600 font-medium">Career Mentor & Coach</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <GraduationCap className="w-5 h-5 mr-3 text-purple-500" />
                      <span>5+ years in tech industry</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-3 text-purple-500" />
                      <span>200+ students mentored</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="w-5 h-5 mr-3 text-purple-500" />
                      <span>90% interview success rate</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Heart className="w-5 h-5 mr-3 text-purple-500" />
                      <span>Passionate about giving back</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
