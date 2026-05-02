/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Search, ArrowRight, Loader2, Tag, FilterX } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { UserAvatar } from "./UserAvatar";
import { useGetAllItemsQuery } from "../redux/features/items/itemsApi";

const ItemsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const { data, isLoading, isError, error } = useGetAllItemsQuery({
    searchTerm: searchTerm || undefined,
    category: category || undefined,
  });

  const items = data?.data || [];

  if (isError) {
    console.error("API Error:", error);
    return (
      <div className="h-screen flex flex-col items-center justify-center text-red-500">
        <FilterX className="w-12 h-12 mb-4" />
        <p className="font-bold text-xl">Failed to load items!</p>
        <p className="text-sm">Please check your server connection.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Skill <span className="text-indigo-600">Marketplace</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Find the skills you need or share yours with our community.
          </p>
        </header>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
            <input
              type="text"
              placeholder="Search by title or description..."
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all border border-transparent focus:border-transparent"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 bg-gray-50 px-4 py-3.5 rounded-2xl border border-transparent focus-within:border-indigo-500 transition-all">
            <Tag className="w-5 h-5 text-gray-400" />
            <select
              className="bg-transparent outline-none font-medium text-gray-700 min-w-37.5"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Programming">Programming</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Writing">Writing</option>
            </select>
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="h-64 flex flex-col items-center justify-center gap-4 text-indigo-600">
            <Loader2 className="w-12 h-12 animate-spin" />
            <p className="font-medium animate-pulse">
              Loading amazing skills...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {items.map((item: any) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={item._id}
                  className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image || "https://via.placeholder.com/400x300"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-indigo-700 text-[11px] font-black uppercase rounded-full shadow-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <UserAvatar
                          user={item.provider}
                          className="w-8 h-8 border-2 border-indigo-50"
                        />
                        <span className="text-sm font-bold text-gray-700">
                          {item.provider?.name || "Expert"}
                        </span>
                      </div>
                      {item.price && (
                        <span className="text-indigo-600 font-black text-lg">
                          ${item.price}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2">
                      {item.shortDescription || item.description}
                    </p>

                    <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl group-hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 shadow-lg shadow-gray-200 group-hover:shadow-indigo-200">
                      View Details
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && items.length === 0 && (
          <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No Skills Found
            </h3>
            <p className="text-gray-500">
              No items were found that match your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsPage;
