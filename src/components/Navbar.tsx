import { useState } from "react";
import { Menu, X, ArrowLeftRight, User, LogOut, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = false;

  const navLinks = [
    { name: "Explore Skills", path: "/skills" },
    { name: "How it Works", path: "/how-it-works" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="border-b bg-white border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <ArrowLeftRight className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-dark tracking-tight">
              Skill<span className="text-primary">Swap</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-5">
                <button className="text-gray-500 hover:text-primary">
                  <Bell className="w-5 h-5" />
                </button>
                <Link to="/dashboard" className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Naeem"
                      alt="avatar"
                    />
                  </div>
                </Link>
                <button className="text-sm font-semibold text-red-500 flex items-center gap-1">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-indigo-100 flex items-center justify-center"
                >
                  Join for Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary p-2"
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-50 absolute w-full left-0 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-primary rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-gray-100" />
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 px-3 py-2 text-gray-700"
                >
                  <User className="w-5 h-5" /> Profile
                </Link>
                <button className="w-full text-left flex items-center gap-2 px-3 py-2 text-red-500">
                  <LogOut className="w-5 h-5" /> Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-3 mt-4">
                <Link
                  to="/login"
                  className="text-center py-3 text-gray-700 font-semibold border border-gray-200 rounded-xl"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-center bg-indigo-700 text-white py-3 font-bold rounded-xl shadow-lg block mx-3"
                >
                  Join for Free
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
