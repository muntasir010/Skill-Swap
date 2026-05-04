import { motion } from "framer-motion";
import { Code2, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-sm border border-gray-100 overflow-hidden relative"
        >
          {/* Background Blur */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-5">
                About Our Platform
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Empowering People Through Skill Sharing 🚀
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our platform is designed to connect talented individuals who
                want to share their knowledge, services, and expertise with
                others. Whether you're a developer, designer, marketer, or
                creative professional — this platform helps you showcase your
                skills and grow your opportunities.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                We believe learning and collaboration should be simple,
                accessible, and inspiring for everyone. 🌍
              </p>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="About"
                className="rounded-[2rem] object-cover w-full h-[420px] shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-5">
              <Code2 className="w-7 h-7 text-indigo-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Modern Skills
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Discover trending and professional skills from experienced
              providers across multiple categories.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-5">
              <Users className="w-7 h-7 text-pink-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Community Driven
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Connect with passionate learners and providers in a growing and
              supportive community.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-5">
              <Sparkles className="w-7 h-7 text-emerald-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Easy Experience
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Clean interface, smooth navigation, and simple workflows to make
              sharing and exploring skills effortless.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;