import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type SortOption = 'date-new' | 'date-old' | 'amount-high' | 'amount-low';

interface OrderSortProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export function OrderSort({ sortBy, onSortChange }: OrderSortProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className="relative">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="w-full appearance-none pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all bg-white"
        >
          <option value="date-new">Newest First</option>
          <option value="date-old">Oldest First</option>
          <option value="amount-high">Amount: High to Low</option>
          <option value="amount-low">Amount: Low to High</option>
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
      </div>
    </motion.div>
  );
}