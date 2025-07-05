import { ArrowRight, Heart } from 'lucide-react'

const Cta = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your Dream Job is Within Reach</h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t let interview anxiety or resume concerns hold you back. Let&apos;s work together to unlock your potential
            and land the job you deserve - completely free, because I believe in your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center">
              Start Your Journey Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-xl text-lg font-semibold border-2 border-white hover:bg-white hover:text-slate-600 transition-all duration-300 flex items-center justify-center">
              Learn More About Me
              <Heart className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
  )
}

export default Cta