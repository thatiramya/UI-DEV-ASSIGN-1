import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Order } from '../../types';

interface OrderCardProps {
  order: Order;
  onContactSupport: (orderId: string) => void;
}

export function OrderCard({ order, onContactSupport }: OrderCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all border border-indigo-50"
    >
      <motion.div 
        className="p-6 cursor-pointer hover:bg-gray-50 flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Order #{order.id}
            </h3>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                order.status === 'completed' ? 'bg-green-100 text-green-800' :
                order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}
            >
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </motion.span>
          </div>
          <div className="flex items-center justify-between text-gray-600">
            <span>{new Date(order.date).toLocaleDateString()}</span>
            <span className="font-medium">${order.total.toFixed(2)}</span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="ml-4"
        >
          <ChevronDown className="w-6 h-6 text-indigo-600" />
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 border-t bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
              <div className="space-y-4">
                {order.items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg shadow-md"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-medium text-indigo-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onContactSupport(order.id)}
                className="mt-6 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}