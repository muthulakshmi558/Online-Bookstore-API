import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react"; // lucide-react icons

const FilterBar = ({ onSearch, onCategory }) => {
  const [searchText, setSearchText] = useState("");
  const [categoryText, setCategoryText] = useState("");

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-4 mb-8"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            onSearch(e.target.value);
          }}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-[#07435C] focus:border-[#07435C] transition-all outline-none"
        />
      </div>

      {/* Category Input */}
      <div className="relative flex-1">
        <Filter className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Filter by category..."
          value={categoryText}
          onChange={(e) => {
            setCategoryText(e.target.value);
            onCategory(e.target.value);
          }}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-[#07435C] focus:border-[#07435C] transition-all outline-none"
        />
      </div>
    </motion.div>
  );
};

export default FilterBar;
