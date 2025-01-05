import { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartItem } from '../types';
import { OrderSuccess } from './OrderConfirmation/OrderSuccess';

interface CartPanelProps {
  items: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
}

export function CartPanel({ items, onUpdateQuantity, onRemoveItem }: CartPanelProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: 'cart',
  });
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    setShowSuccess(true);
    // You can add API call here to submit the order
  };

  return (
    <>
      <div
        ref={setNodeRef}
        className={`bg-white rounded-lg shadow-lg p-6 h-[calc(100vh-12rem)] flex flex-col transition-colors ${
          isOver ? 'bg-blue-50' : ''
        }`}
      >
        <h2 className="text-xl font-semibold mb-4">Cart</h2>
        <div className="flex-1 overflow-auto">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="relative group flex items-center gap-4 p-4 border-b hover:bg-gray-50 transition-colors"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <MinusCircle className="w-5 h-5" />
                  </motion.button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <PlusCircle className="w-5 h-5" />
                  </motion.button>
                </div>
                <AnimatePresence>
                  {hoveredItem === item.id && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onRemoveItem(item.id)}
                      className="absolute right-2 top-2 p-1 text-red-500 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="w-5 h-5" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-4 pt-4 border-t">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-between items-center mb-4"
          >
            <span className="font-semibold">Total:</span>
            <motion.span
              key={total}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-xl font-bold"
            >
              ${total.toFixed(2)}
            </motion.span>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePlaceOrder}
            disabled={items.length === 0}
          >
            Place Order
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <OrderSuccess total={total} itemCount={items.length} />
        )}
      </AnimatePresence>
    </>
  );
}