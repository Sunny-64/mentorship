'use client';
import { Calendar, Clock, FileText, Linkedin, Mail, MessageCircle, User } from 'lucide-react';
import React, { useState } from 'react';

interface FormProps {
  purpose: 'resume-review' | 'mock-interview' | 'career-counselling';
}

const BookFreeMockInterview: React.FC<FormProps> = ({ purpose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    resumeLink: '',
    linkedinProfile: '',
    preferredDate: '',
    preferredTime: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
          Full Name *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
            placeholder="Enter your full name"
            required
          />
        </div>
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Email Address *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
            placeholder="your.email@example.com"
            required
          />
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Tell me about yourself and what you need help with *
        </label>
        <div className="relative">
          <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none">
            <MessageCircle className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
            placeholder="Share your background, target roles, and specific areas where you need help..."
            required
          />
        </div>
      </div>

      {/* Resume Link Field */}
      <div>
        <label htmlFor="resumeLink" className="block text-sm font-semibold text-gray-900 mb-2">
          Resume Link (Google Drive, Dropbox, etc.)
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FileText className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="url"
            id="resumeLink"
            name="resumeLink"
            value={formData.resumeLink}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
            placeholder="https://drive.google.com/..."
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">Optional: Share your resume for better preparation</p>
      </div>

      {/* LinkedIn Profile Field */}
      <div>
        <label htmlFor="linkedinProfile" className="block text-sm font-semibold text-gray-900 mb-2">
          LinkedIn Profile
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Linkedin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="url"
            id="linkedinProfile"
            name="linkedinProfile"
            value={formData.linkedinProfile}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">Optional: Help me understand your professional background</p>
      </div>

      {/* Date and Time Fields */}
      {purpose !== 'resume-review' && (
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-900 mb-2">
              Preferred Date *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-900 mb-2">
              Preferred Time *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="time"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                min="11:00"
                max="18:00"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                required
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Available between 11:00 AM and 6:00 PM</p>
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200">
        <h4 className="font-semibold text-gray-900 mb-2">What to expect:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• 45-60 minute video call session</li>
          <li>• Personalized interview practice</li>
          <li>• Immediate feedback and tips</li>
          <li>• Follow-up resources and guidance</li>
        </ul>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-slate-600 to-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-slate-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center"
      >
        Book My Free Session
        <Calendar className="ml-2 w-5 h-5" />
      </button>

      <p className="text-xs text-gray-500 text-center">
        I&apos;ll respond within 24 hours to confirm your session. This service is completely free!
      </p>
    </form>
  );
};

export default BookFreeMockInterview;