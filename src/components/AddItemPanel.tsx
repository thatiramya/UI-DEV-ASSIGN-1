import { useDroppable } from '@dnd-kit/core';
import { motion } from 'framer-motion';

export function AddItemPanel() {
  const { setNodeRef, isOver } = useDroppable({
    id: 'cart',
  });

  return (
    <motion.div
      ref={setNodeRef}
      animate={{
        scale: isOver ? 1.02 : 1,
        backgroundColor: isOver ? 'rgb(243, 244, 246)' : 'rgb(255, 255, 255)',
      }}
      className="bg-white rounded-lg shadow-lg p-6 h-[calc(100vh-12rem)] flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{
          y: isOver ? [0, -10, 0] : 0,
        }}
        transition={{ duration: 0.5, repeat: isOver ? Infinity : 0 }}
        className="text-center"
      >
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          Drop Zone
        </h2>
        <p className="text-gray-500">
          Drag items here to add them to your cart
        </p>
      </motion.div>
    </motion.div>
  );
}