import React, { useState } from "react";
import { ArrowRight, ArrowLeft, X, Download } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1515169067865-5387ec356754",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
];

const UpcomingEvents = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [modalImg, setModalImg] = useState(null);

  const visibleImages = images.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < images.length) setStartIndex(startIndex + 1);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleImageClick = (img) => setModalImg(img);
  const handleClose = () => setModalImg(null);

  const downloadImage = (url) => {
    const link = document.createElement("a");
    link.href = url + "?download=true";
    link.download = "event-poster.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-3/4 mx-auto py-10 font-poppins text-[#3B3B3B]">
      <div className="bg-white rounded-xl shadow-lg p-6 relative">
        <h2 className="text-3xl font-bold mb-5 text-left">Upcoming Events</h2>

        <div className="grid grid-cols-3 gap-3">
          {visibleImages.map((img, i) => (
            <img
              key={i}
              src={`${img}?auto=format&fit=crop&w=600&q=80`}
              alt={`Event ${i + 1}`}
              className="w-full h-[240px] object-cover object-top rounded-md cursor-pointer hover:scale-[1.02] transition"
              onClick={() => handleImageClick(img)}
            />
          ))}
        </div>

        {/* Left Arrow */}
        {startIndex > 0 && (
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 transition"
            >
              <ArrowLeft size={24} className="text-[#3B3B3B]" />
            </button>
          </div>
        )}

        {/* Right Arrow */}
        {startIndex + 3 < images.length && (
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 transition"
            >
              <ArrowRight size={24} className="text-[#3B3B3B]" />
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="relative border-[2px] border-gray-300 rounded-lg overflow-hidden max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`${modalImg}?auto=format&fit=crop&w=1080&q=90`}
              alt="Zoomed"
              className="w-full max-h-[90vh] object-contain bg-white"
            />
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={handleClose}
                className="bg-white p-2 rounded-full hover:bg-gray-200 transition"
              >
                <X size={20} className="text-[#3B3B3B]" />
              </button>
              <button
                onClick={() => downloadImage(modalImg)}
                className="bg-white p-2 rounded-full hover:bg-gray-200 transition"
              >
                <Download size={20} className="text-[#3B3B3B]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
