import { motion } from 'framer-motion';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useOrderStore } from '../../store/orderStore';

interface OrderSuccessProps {
  total: number;
  itemCount: number;
  newOrder: any; // Replace 'any' with your Order type
}

export function OrderSuccess({ total, itemCount, newOrder }: OrderSuccessProps) {
  const navigate = useNavigate();
  const addOrder = useOrderStore((state) => state.addOrder);

  const handleBackToHome = () => {
    // Add the new order to the store before navigating
    addOrder(newOrder);
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative overflow-hidden"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            <CheckCircle className="w-20 h-20 text-green-500" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 bg-green-500 rounded-full opacity-20"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-4"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Order Placed Successfully!
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center items-center gap-2 text-gray-600"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>{itemCount} items • ${total.toFixed(2)}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-500"
          >
            Thank you for your order! You'll receive a confirmation email shortly.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBackToHome}
            className="mt-6 w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Back to Home
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}