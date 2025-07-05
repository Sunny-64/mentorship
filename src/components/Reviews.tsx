import { Quote, Star } from 'lucide-react';
import React from 'react';

const Reviews = () => {
  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from students who achieved their career goals with personalized mentorship
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200">
            <Quote className="w-8 h-8 text-purple-600 mb-4" />
            <p className="text-gray-700 mb-6 leading-relaxed">
              &quot;Meeta&apos;s mock interviews were a game-changer! She helped me identify my weak points and gave me specific
              strategies to improve. After 3 sessions, I felt confident enough to interview at Google and got the
              offer!&quot;
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                SA
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Sarah Ahmed</p>
                <p className="text-sm text-gray-600">CS Graduate → Software Engineer at Google</p>
              </div>
            </div>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-200">
            <Quote className="w-8 h-8 text-pink-600 mb-4" />
            <p className="text-gray-700 mb-6 leading-relaxed">
              &quot;My resume was getting zero responses until Meeta reviewed it. She completely transformed it, and within 2
              weeks I had 5 interview calls! Her guidance throughout the process was invaluable.&quot;
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                MR
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Michael Rodriguez</p>
                <p className="text-sm text-gray-600">Business Major → Product Manager at Startup</p>
              </div>
            </div>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200">
            <Quote className="w-8 h-8 text-blue-600 mb-4" />
            <p className="text-gray-700 mb-6 leading-relaxed">
              &quot;As an international student, I was nervous about cultural fit questions. Meeta helped me understand what
              employers really want to hear and how to present my unique background as a strength.&quot;
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                PK
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Priya Kumar</p>
                <p className="text-sm text-gray-600">Engineering Student → Data Scientist at Microsoft</p>
              </div>
            </div>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200">
            <Quote className="w-8 h-8 text-green-600 mb-4" />
            <p className="text-gray-700 mb-6 leading-relaxed">
              &quot;Meeta didn&apos;t just help with interview prep - she helped me understand my career goals and create a
              strategic plan. Her mentorship extended far beyond just getting a job.&quot;
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                JL
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">James Liu</p>
                <p className="text-sm text-gray-600">Recent Graduate → UX Designer at Adobe</p>
              </div>
            </div>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-200">
            <Quote className="w-8 h-8 text-indigo-600 mb-4" />
            <p className="text-gray-700 mb-6 leading-relaxed">
              &quot;I was struggling with technical interviews until Meeta taught me how to think out loud and structure my
              problem-solving approach. Now I actually enjoy coding interviews!&quot;
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                EW
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Emily Wang</p>
                <p className="text-sm text-gray-600">CS Student → Full Stack Developer at Netflix</p>
              </div>
            </div>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-200">
            <Quote className="w-8 h-8 text-teal-600 mb-4" />
            <p className="text-gray-700 mb-6 leading-relaxed">
              &quot;What I appreciated most about Meeta was her genuine care and patience. She made me feel comfortable
              discussing my insecurities and helped me build real confidence, not just interview skills.&quot;
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                DT
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">David Thompson</p>
                <p className="text-sm text-gray-600">Marketing Student → Digital Marketing Manager</p>
              </div>
            </div>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
