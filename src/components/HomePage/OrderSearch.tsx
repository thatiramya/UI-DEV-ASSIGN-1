import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface OrderSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function OrderSearch({ searchQuery, onSearchChange }: OrderSearchProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search orders..."
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
    </motion.div>
  );
}