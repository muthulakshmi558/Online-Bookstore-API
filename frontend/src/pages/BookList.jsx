import React, { useEffect, useState } from "react";
import API from "../api/api";
import BookCard from "../components/BookCard";
import FilterBar from "../components/FilterBar";
import { motion, AnimatePresence } from "framer-motion";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const fetchBooks = async () => {
    const res = await API.get(
      `/books/?search=${search}&category__name=${category}`
    );
    setBooks(res.data.results);
  };

  useEffect(() => {
    fetchBooks();
  }, [search, category]);

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Page Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center text-[#07435C] mb-10 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📚 Online Bookstore
      </motion.h1>

      {/* Filter Bar */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <FilterBar onSearch={setSearch} onCategory={setCategory} />
      </motion.div>

      {/* Books Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        layout
      >
        <AnimatePresence>
          {books.map((book) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md hover:shadow-2xl rounded-2xl overflow-hidden transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 border border-gray-200"
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {books.length === 0 && (
        <motion.p
          className="text-center text-gray-500 mt-10 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No books found 📖
        </motion.p>
      )}
    </div>
  );
};

export default BookList;
