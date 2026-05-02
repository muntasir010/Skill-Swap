import { Link, useParams } from "react-router-dom";
import { useGetSingleItemQuery } from "../redux/features/items/itemsApi";

export const ItemDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleItemQuery(id);
  const item = data?.data;

  if (isLoading) return <p className="text-center">Loading details...</p>;

  return (
    <div className="max-w-4xl mx-auto my-10 py-20 px-4 md:px-8 border-2 border-gray-200 shadow-xl rounded-3xl bg-white">
        <div className="mb-6">
          <Link to={"/"} className="text-indigo-600 text-xl hover:text-indigo-800 font-medium">
            &larr; Back
          </Link>
        </div>
      <img src={item?.image} className="w-full mx-auto h-96 object-cover rounded-3xl mb-8" alt="" />
      <h1 className="text-4xl font-bold mb-4">{item?.title}</h1>
      <div className="flex justify-between gap-4 mb-6">
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">
          {item?.category}
        </span>
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">
          ${item?.price?.toFixed(2)}
        </span>
      </div>
      <p className="text-gray-600 leading-loose text-lg">{item?.description}</p>
      
      {/* Provider Info */}
      <div className="mt-10 p-6 bg-gray-50 rounded-2xl flex items-center gap-4">
        <img src={item?.provider?.image} className="w-12 h-12 rounded-full" alt="" />
        <div>
          <p className="font-bold">{item?.provider?.name}</p>
          <p className="text-sm text-gray-500">{item?.provider?.email}</p>
        </div>
      </div>
      <div className="mt-4">
        {item?.fullDescription}
      </div>
    </div>
  );
};