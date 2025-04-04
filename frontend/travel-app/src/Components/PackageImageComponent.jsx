import React from "react";
import { Bookmark, Share2 } from "lucide-react";

const PackageImage =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const PackageImageComponent = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-5xl font-normal text-gray-900 tracking-tight">
          Traditional Cooking Class in Rome
        </h1>
        <div className="flex space-x-4">
          <button className="px-5 py-2 bg-gray-800 text-white rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition">
            <Share2 size={20} />
            <span>Share</span>
          </button>
          <button className="px-5 py-2 bg-gray-800 text-white rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition">
            <Bookmark size={20} />
            <span>Save</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 items-stretch">
        <div className="col-span-2 h-[360px]">
          <img
            src={PackageImage}
            alt="Main View"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="grid grid-rows-2 grid-cols-2 gap-4 w-full h-[360px]">
          <img
            src={PackageImage}
            alt="Poolside"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
          <img
            src={PackageImage}
            alt="Cottage View"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
          <img
            src={PackageImage}
            alt="Interior"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
          <img
            src={PackageImage}
            alt="Another Pool View"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PackageImageComponent;
