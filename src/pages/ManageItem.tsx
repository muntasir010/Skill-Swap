/* eslint-disable @typescript-eslint/no-explicit-any */
import { Edit, Loader2, Plus, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetMyItemsQuery } from "../redux/features/items/itemsApi";

const ManageItems = () => {
  const { data, isLoading, isError } = useGetMyItemsQuery(undefined);

  const items = data?.data || [];

  if (isLoading) {
    return (
      <div className="h-96 flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-20 text-red-500">
        <AlertCircle className="mx-auto w-10 h-10 mb-2" />
        <p>Failed to load your items. Please make sure you are logged in.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-gray-900">My Listings</h1>
        <Link
          to="/add-item"
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2"
        >
          <Plus className="w-5 h-5" /> Add New
        </Link>
      </div>

      <div className="bg-white border border-gray-100 rounded-4xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 font-bold text-gray-600">Item Name</th>
              <th className="px-6 py-4 font-bold text-gray-600">Price</th>
              <th className="px-6 py-4 font-bold text-gray-600 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {items.map((item: any) => (
              <tr key={item._id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-5 font-bold text-gray-800">{item.title}</td>
                <td className="px-6 py-5 font-bold text-indigo-600">${item.price}</td>
                <td className="px-6 py-5 text-right">
                  <Link
                    to={`/edit-item/${item._id}`}
                    className="inline-flex p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    <Edit className="w-5 h-5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;