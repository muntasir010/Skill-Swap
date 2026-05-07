/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Loader2, Save, ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  useGetSingleItemQuery,
  useUpdateItemMutation,
} from "../redux/features/items/itemsApi";

const UpdateItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetSingleItemQuery(id);
  const [updateItem, { isLoading: isUpdating }] = useUpdateItemMutation();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (data?.data) {
      reset(data.data);
    }
  }, [data, reset]);

  const onSubmit = async (updatedData: any) => {
  try {
    const { _id, createdAt, updatedAt, provider, __v, image, ...filteredData } = updatedData;

    const finalData = {
      ...filteredData,
      price: Number(updatedData.price),
    };

    const formData = new FormData();
    
    formData.append("data", JSON.stringify(finalData));

    await updateItem({ id, data: formData }).unwrap();
    
    Swal.fire("Success!", "Item updated successfully", "success");
    navigate("/manage-items");
  } catch (err: any) {
    console.error("Update Error:", err);
    Swal.fire("Error", err?.data?.message || "Nothing to update", "error");
  }
};

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 mb-6 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Manage
        </button>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-gray-900">
              Update Skill Details
            </h1>
            <p className="text-gray-500">
              Edit the information below to update your listing.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Title */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                Item Title
              </label>
              <input
                {...register("title")}
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                placeholder="e.g. Advanced MERN Development"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                Category
              </label>
              <select
                {...register("category")}
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option value="Programming">Programming</option>
                <option value="Marketing">Marketing</option>
                <option value="Writing">Writing</option>
                <option value="Design">Design</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                Price ($)
              </label>
              <input
                type="number"
                {...register("price")}
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Short Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                Short Description
              </label>
              <input
                {...register("shortDescription")}
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Full Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                Full Description
              </label>
              <textarea
                {...register("fullDescription")}
                rows={8}
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                disabled={isUpdating}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:bg-gray-400"
              >
                {isUpdating ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Save className="w-5 h-5" />
                )}
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
