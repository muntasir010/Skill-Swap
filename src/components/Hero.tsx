import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const backgroundImage =
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80";

  return (
    <div className="relative flex items-center justify-center overflow-hidden min-h-[calc(100vh-66px)]">
      {/* 1. Background Image Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 2. Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-green-50 z-10" />
      </div>

      {/* 3. Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-300 text-sm font-medium mb-8">
          <span>The Future of Collaborative Learning</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
          Master New Skills by <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-400">
            Swapping Your Talent
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed">
          Teach your skills and learn something else. Exchange talent, not
          money. Join SkillSwap to connect with experts and grow together.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/register"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-500/30 flex items-center justify-center gap-2 group"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/how-it-works"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
          >
            How it Works
          </Link>
        </div>

        {/* Floating Stats Card */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 lg:gap-12">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-2xl flex items-center gap-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
