import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const Rating = ({ product }) => {
      const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

 const handleSubmit = () => {
    console.log("Submitted:", {
      productId: product.id,
      rating,
      reviewText,
    });
    // Reset form (optional)
    setRating(0);
    setHoverRating(0);
    setReviewText("");
  };


  return (
   <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 my-6">
      <div className="flex items-center space-x-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 rounded-md object-cover"
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
      </div>

      <div className="mt-4 flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = (hoverRating || rating) >= star;
          return (
            <span
              key={star}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
              className="cursor-pointer text-yellow-400 text-2xl transition-transform hover:scale-110"
            >
              {isFilled ? <AiFillStar /> : <AiOutlineStar />}
            </span>
          );
        })}
      </div>

      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review..."
        className="mt-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
      />

      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Submit Review
      </button>
    </div>
  )
}

export default Rating