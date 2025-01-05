import { useState, useMemo } from 'react';
import { PlusCircle, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { OrderCard } from './OrderList/OrderCard';
import { OrderSearch } from './HomePage/OrderSearch';
import { OrderSort } from './HomePage/OrderSort';
import { ChatWindow } from './Chat/ChatWindow';
import { useOrderStore } from '../store/orderStore';
import { sortOrders, filterOrders } from '../utils/orderUtils';
import type { Order } from '../types';

type SortType = 'date-new' | 'date-old' | 'amount-high' | 'amount-low';

export default function HomePage() {
  const [activeChatOrder, setActiveChatOrder] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortType>('date-new');
  const orders = useOrderStore((state) => state.orders || []);

  const filteredAndSortedOrders = useMemo(() => {
    if (!Array.isArray(orders) || orders.length === 0) return [];
    
    const filtered = filterOrders(orders, searchQuery);
    return [...filtered].sort((a, b) => sortOrders(a, b, sortBy));
  }, [orders, searchQuery, sortBy]);

  if (!Array.isArray(orders) || orders.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800">No orders yet</h2>
          <p className="text-gray-600 mt-2">Create your first order to get started</p>
          <Link
            to="/new-order"
            className="mt-4 inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            New Order
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50">
      <div className="max-w-4xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <ShoppingBag className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Orders
            </h1>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/new-order"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              New Order
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <OrderSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <OrderSort sortBy={sortBy} onSortChange={setSortBy} />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="space-y-4"
        >
          {filteredAndSortedOrders.map((order: Order) => (
            <motion.div
              key={order.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <OrderCard
                order={order}
                onContactSupport={setActiveChatOrder}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ChatWindow
        orderId={activeChatOrder}
        onClose={() => setActiveChatOrder(null)}
      />
    </div>
  );
}