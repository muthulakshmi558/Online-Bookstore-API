import { motion } from "framer-motion";

const BookCard = ({ book }) => {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-2xl p-6 flex flex-col border border-gray-200 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      layout
    >
      {/* Title */}
      <h2 className="font-bold text-xl text-[#07435C] mb-3 line-clamp-2">
        {book.title}
      </h2>

      {/* Author + Category */}
      <div className="space-y-1 mb-4">
        <p className="text-gray-700 text-sm">
          ✍️ <span className="font-medium">{book.author.name}</span>
        </p>
        <p className="text-gray-500 text-sm">
          📂 {book.category?.name || "Uncategorized"}
        </p>
      </div>

      {/* Price */}
      <p className="text-lg font-semibold text-[#0E7490] mb-4">
        💰 ₹{book.price}
      </p>

      {/* Rating + Published */}
      <div className="mt-auto flex justify-between items-center">
        <span className="bg-yellow-400 text-white font-bold text-sm px-3 py-1 rounded-full shadow-sm">
          ⭐ {book.rating}
        </span>
        <span className="text-gray-400 text-xs italic">
          {new Date(book.published_date).toLocaleDateString()}
        </span>
      </div>
    </motion.div>
  );
};

export default BookCard;
