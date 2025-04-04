import React from "react";

const reviews = [
  {
    name: "Isabella",
    years: "5 years on Airbnb",
    date: "March 2024",
    rating: 5,
    review:
      "An unforgettable experience! The cooking class was hands-on, and the chef made everything so easy to follow. Loved making fresh pasta from scratch! Highly recommend for food lovers visiting Rome.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Marco",
    years: "8 years on Airbnb",
    date: "April 2024",
    rating: 5,
    review:
      "Absolutely amazing! The atmosphere was warm and welcoming, and the dishes we prepared were delicious. The best part was enjoying our homemade meal with a glass of local wine!",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Sophie",
    years: "6 years on Airbnb",
    date: "May 2024",
    rating: 5,
    review:
      "I never knew making authentic Italian pasta could be this fun! The instructor was patient and knowledgeable. This was the highlight of my trip to Rome!",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Luca",
    years: "Rome, Italy",
    date: "June 2024",
    rating: 5,
    review:
      "A fantastic cooking class with an authentic touch! The ingredients were fresh, and the recipes were easy to recreate at home. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
  },
];

const Reviews = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        Guest Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md flex items-start space-x-4"
          >
            <img
              src={review.avatar}
              alt={review.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {review.name}
              </h3>
              <p className="text-sm text-gray-500">{review.years}</p>
              <p className="text-sm font-medium text-gray-700 mt-1">
                ⭐️⭐️⭐️⭐️⭐️ • {review.date}
              </p>
              <p className="text-gray-700 mt-2">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
