import { Clock, Heart, Mail } from 'lucide-react'

const Footer = () => {
  return (
   <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">Meeta&apos;s Mentorship</span>
                  <p className="text-xs text-gray-400">Free Career Guidance</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Dedicated to helping students achieve their career goals through personalized, free mentorship and
                guidance. Your success is my mission.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Mock Interviews
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Resume Reviews
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Career Guidance
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    LinkedIn Optimization
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="mailto:meeta.mentor@gmail.com"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    meeta.mentor@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Evenings & Weekends</span>
                </li>
                <li className="flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  <span>100% Free Service</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Meeta&apos;s Career Mentorship. Made with ❤️ for students everywhere.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer