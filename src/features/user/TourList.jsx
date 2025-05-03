import React from "react";
import { useGetAllToursQuery } from "./tourApi";

export default function TourList() {
  const { isLoading, error, data } = useGetAllToursQuery();

  if (isLoading) return <div className="p-4 text-center">Loading tours...</div>;
  if (error)
    return (
      <div className="p-4 text-red-500 text-center">Error: {error.message}</div>
    );

  // Safely access tours data with optional chaining
  const tours = data?.data?.tours || [];
  console.log(data);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tourItem) => (
          <div
            key={tourItem.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Main cover image */}
            {tourItem.imageCover && (
              <img
                src={`/img/tours/${tourItem.imageCover}`}
                alt={tourItem.name}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{tourItem.name}</h2>
              <p className="text-gray-600 mb-4">{tourItem.summary}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold">Difficulty</p>
                  <p>{tourItem.difficulty}</p>
                </div>
                <div>
                  <p className="font-semibold">Duration</p>
                  <p>{tourItem.duration} days</p>
                </div>
                <div>
                  <p className="font-semibold">Price</p>
                  <p>${tourItem.price}</p>
                </div>
                <div>
                  <p className="font-semibold">Rating</p>
                  <p>
                    {tourItem.ratingsAverage} ({tourItem.ratingsQuantity})
                  </p>
                </div>
              </div>

              {/* Gallery images */}
              {tourItem.images?.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Gallery</h3>
                  <div className="flex space-x-2 overflow-x-auto">
                    {tourItem.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={`/img/tours/${img}`}
                        alt={`${tourItem.name} gallery ${idx + 1}`}
                        className="h-20 w-auto rounded"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
