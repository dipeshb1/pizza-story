import React from "react";
import Card from "./Card";

function ReviewsSection() {
  // Example data for reviews
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      date: "June 28, 2024",
      review: "Delicious pizza! Loved every bite.",
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "July 2, 2024",
      review: "Best pizza in town. Crust was perfect!",
    },
    {
      id: 3,
      name: "Mike Johnson",
      date: "July 5, 2024",
      review: "Amazing flavors! Would order again.",
    },
    {
      id: 4,
      name: "Sarah Brown",
      date: "July 7, 2024",
      review: "Great service and tasty toppings.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
      {reviews.map((review) => (
        <Card
          key={review.id}
          name={review.name}
          date={review.date}
          review={review.review}
        />
      ))}
    </div>
  );
}

export default ReviewsSection;
