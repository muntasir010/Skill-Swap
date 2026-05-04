/* eslint-disable @typescript-eslint/no-explicit-any */
import { Edit, Loader2, Plus, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useMyItemsQuery } from "../redux/features/items/itemsApi";

const ManageItems = () => {
  const { data, isLoading, isError } = useMyItemsQuery(undefined);

  const items = data?.data || [];

 

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-12 h-12 animate-spin text-indigo-600" />
        <p className="text-gray-500 font-medium">Loading your items...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-96 flex flex-col items-center justify-center text-red-500 gap-2">
        <AlertCircle className="w-12 h-12" />
        <p className="font-bold">Failed to load items. Check your connection or login status.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">Manage Your Items</h1>
            <p className="text-gray-500 mt-1">You have listed {items.length} skills on the platform.</p>
          </div>
          <Link
            to="/add-item"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
          >
            <Plus className="w-5 h-5" /> Add New Skill
          </Link>
        </div>

        {/* Table/List Section */}
        <div className="bg-white rounded-4xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest">Item Info</th>
                  <th className="px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest">Category</th>
                  <th className="px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest">Price</th>
                  <th className="px-8 py-5 text-xs font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {items.map((item: any) => (
                  <tr key={item._id} className="group hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gray-100 overflow-hidden border border-gray-100">
                          <img src={item.image} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg leading-tight">{item.title}</p>
                          <p className="text-gray-400 text-sm mt-1">ID: #{item._id.slice(-6)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 uppercase">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-xl font-black text-gray-900">${item.price}</p>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex justify-end gap-3">
                        <Link
                          to={`/edit-item/${item._id}`}
                          className="p-3 bg-gray-50 text-gray-400 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                          title="Edit"
                        >
                          <Edit className="w-5 h-5" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {items.length === 0 && (
            <div className="text-center py-24">
              <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="text-gray-300 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">No items found</h3>
              <p className="text-gray-400 mt-1">Get started by creating your first skill listing.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageItems;