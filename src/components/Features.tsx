import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Megaphone,
  Globe,
  Smartphone,
  Database,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Build modern, responsive, and scalable websites using the latest technologies.",
    icon: Code2,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Create clean and user-friendly interfaces focused on better user experience.",
    icon: Palette,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Grow your audience and brand visibility through smart marketing strategies.",
    icon: Megaphone,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description:
      "Improve search engine rankings and boost organic traffic effectively.",
    icon: Globe,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "Develop high-performance mobile applications for Android and iOS platforms.",
    icon: Smartphone,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    id: 6,
    title: "Database Management",
    description:
      "Design and manage secure, optimized, and scalable database systems.",
    icon: Database,
    color: "bg-purple-100 text-purple-600",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-4">
            Features & Services
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Explore What We Offer 🚀
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Discover powerful services and opportunities designed to help
            creators, developers, and professionals grow their skills and
            connect with others.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;