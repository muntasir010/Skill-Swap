import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Identity */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Skill <span className="text-indigo-600">Swap</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              The ultimate platform to exchange skills, grow your portfolio, and connect with experts worldwide. Start your journey today!
            </p>
            {/* <div className="flex items-center gap-4 pt-2">
              <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/items" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Browse Skills</Link></li>
              <li><Link to="/add-item" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Share a Skill</Link></li>
              <li><Link to="/bookmarks" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Saved Items</Link></li>
              <li><Link to="/categories" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Categories</Link></li>
            </ul>
          </div>

          {/* Support & Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">How it Works</Link></li>
              <li><Link to="/privacy" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>support@skillswap.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {currentYear} Skill Swap. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs flex items-center gap-1">
            Built with ❤️ for <span className="text-gray-900 font-semibold text-xs">Developers</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;