import { Briefcase, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why I Started This</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                As someone who has navigated the challenging world of job interviews and career transitions, I
                understand the anxiety and uncertainty that students face when entering the professional world.
              </p>
              <p>
                I remember my own struggles with interview preparation, resume writing, and understanding what employers
                really look for. That's why I decided to dedicate my time to helping students like you overcome these
                challenges.
              </p>
              <p>
                This mentorship program is my way of giving back to the community. Every session I conduct, every resume
                I review, and every piece of advice I share is completely free because I believe that career guidance
                should be accessible to everyone, regardless of their financial situation.
              </p>
              <p className="font-semibold text-purple-700">
                My mission is simple: to help you build confidence, improve your skills, and land the job you deserve.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Professional Background</h3>
                  <p className="text-sm text-gray-600">5+ years in tech industry</p>
                </div>
              </div>
              <p className="text-gray-600">
                Experienced in software development, project management, and team leadership across multiple companies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Passion for Mentoring</h3>
                  <p className="text-sm text-gray-600">Community-focused approach</p>
                </div>
              </div>
              <p className="text-gray-600">
                Dedicated to helping students succeed through personalized guidance and genuine care for their growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Results</h3>
                  <p className="text-sm text-gray-600">Track record of success</p>
                </div>
              </div>
              <p className="text-gray-600">
                90% of my mentees successfully land interviews and job offers at their target companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
