/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useCreateItemMutation } from "../redux/features/items/itemsApi";
import { Loader2, UploadCloud, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const [createItem, { isLoading }] = useCreateItemMutation();
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
  e.preventDefault();

  const form = e.target;

  const formData = new FormData();

  const itemData = {
    title: form.title.value,
    shortDescription: form.shortDescription.value,
    fullDescription: form.fullDescription.value,
    category: form.category.value,
    price: Number(form.price.value),
    priority: form.priority.value,
  };

  formData.append("data", JSON.stringify(itemData));

  if (form.file.files[0]) {
    formData.append("file", form.file.files[0]);
  }

  try {
    const res = await createItem(formData).unwrap();

    if (res.success) {
      alert("Item added successfully!");
      navigate("/items");
    }
  } catch (err) {
    console.error("Failed to add item:", err);
    alert("Something went wrong!");
  }
};

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
        <h2 className="text-3xl font-black text-gray-900 mb-8">Add New Item</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Title
            </label>

            <input
              name="title"
              type="text"
              required
              placeholder="e.g. Modern Web Development"
              className="w-full px-5 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Short Description
            </label>

            <textarea
              name="shortDescription"
              rows={2}
              required
              placeholder="Write a short description..."
              className="w-full px-5 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            ></textarea>
          </div>

          {/* Full Description */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Full Description
            </label>

            <textarea
              name="fullDescription"
              rows={5}
              required
              placeholder="Write detailed information..."
              className="w-full px-5 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            ></textarea>
          </div>

          {/* Category & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Category
              </label>

              <select
                name="category"
                required
                className="w-full px-5 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              >
                <option value="">Select Category</option>
                <option value="Programming">Programming</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Price ($)
              </label>

              <input
                name="price"
                type="number"
                required
                placeholder="20"
                className="w-full px-5 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Priority
            </label>

            <select
              name="priority"
              required
              className="w-full px-5 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            >
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Upload Image
            </label>

            <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-indigo-400 transition-colors">
              <input
                type="file"
                name="file"
                accept="image/*"
                required
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />

              {imagePreview ? (
                <img
                  src={imagePreview}
                  className="h-32 mx-auto rounded-lg object-cover"
                  alt="Preview"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <UploadCloud className="w-10 h-10 text-gray-400 mb-2" />

                  <p className="text-gray-500 text-sm">
                    Click or drag image to upload
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 disabled:bg-gray-400"
          >
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                <CheckCircle className="w-5 h-5" />
                Publish Item
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
