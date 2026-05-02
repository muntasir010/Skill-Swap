/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { 
  Menu, X, ArrowLeftRight, LogOut, Bell, 
  ChevronDown, PlusCircle, LayoutDashboard 
} from "lucide-react";
import { logout } from "../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import { UserAvatar } from "./UserAvatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/login");
    setIsDropdownOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className="border-b bg-white border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <ArrowLeftRight className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              Skill<span className="text-indigo-600">Swap</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/skills" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Explore Skills</Link>
            <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">About Us</Link>
            <Link to="/features" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Features</Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-5">
                <button className="text-gray-500 hover:text-indigo-600 transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
                
                <div className="relative">
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-full border border-gray-200 hover:bg-gray-100 transition-all"
                  >
                    <UserAvatar user={user} />
                    <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in duration-200">
                      <div className="px-4 py-3 border-b border-gray-50">
                        <p className="text-sm font-bold text-gray-900 truncate">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                      <div className="p-1">
                        <Link to="/add-item" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all">
                          <PlusCircle className="w-4 h-4" /> Add Item
                        </Link>
                        <Link to="/manage-items" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all">
                          <LayoutDashboard className="w-4 h-4" /> Manage Items
                        </Link>
                        <hr className="my-1 border-gray-50" />
                        <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-500 hover:bg-red-50 rounded-xl transition-all">
                          <LogOut className="w-4 h-4" /> Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-sm font-semibold text-gray-700 hover:text-indigo-600">Login</Link>
                <Link to="/register" className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">Join for Free</Link>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl z-50 p-4 space-y-4">
          {user && (
            <div className="flex items-center gap-3 px-3 py-2 mb-2 bg-gray-50 rounded-xl">
              <UserAvatar user={user} className="w-10 h-10" />
              <div>
                <p className="text-sm font-bold text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          )}
          <Link to="/skills" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl">Explore Skills</Link>
          <hr className="border-gray-100" />
          {user ? (
            <div className="space-y-1">
              <Link to="/add-item" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-indigo-50 rounded-xl transition-all"><PlusCircle className="w-5 h-5 text-gray-400" /> Add Item</Link>
              <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-all"><LogOut className="w-5 h-5" /> Logout</button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <Link to="/login" onClick={() => setIsOpen(false)} className="text-center py-3 text-gray-700 font-semibold border border-gray-200 rounded-xl">Login</Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="text-center bg-indigo-600 text-white py-3 font-bold rounded-xl shadow-lg">Join Free</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;