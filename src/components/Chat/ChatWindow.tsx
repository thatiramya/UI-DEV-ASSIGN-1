import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Minus, Send, Bot, User } from 'lucide-react';
import { ChatMessage } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatWindowProps {
  orderId: string | null;
  onClose: () => void;
}

// Simulated AI responses
const aiResponses = [
  "I'll help you with your order right away!",
  "Let me check that for you.",
  "Is there anything specific you'd like to know about your order?",
  "I understand your concern. Let me assist you with that.",
  "Thank you for your patience. I'm looking into this now."
];

export function ChatWindow({ orderId, onClose }: ChatWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const simulateAIResponse = () => {
    setIsTyping(true);
    setTimeout(() => {
      const response: ChatMessage = {
        id: Date.now().toString(),
        orderId: orderId!,
        sender: 'support',
        message: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!message.trim() || !orderId) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      orderId,
      sender: 'user',
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    simulateAIResponse();
  };

  if (!orderId) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl transition-all backdrop-blur-lg bg-opacity-95 border border-indigo-100 ${
        isMinimized ? 'h-14' : 'h-[32rem]'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          <h3 className="font-semibold">AI Support Assistant</h3>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
          >
            <Minus className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="p-4 h-[calc(32rem-8rem)] overflow-y-auto">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start gap-2 max-w-[80%] ${
                      msg.sender === 'user' ? 'flex-row-reverse' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        msg.sender === 'user' ? 'bg-indigo-100' : 'bg-purple-100'
                      }`}>
                        {msg.sender === 'user' ? 
                          <User className="w-4 h-4 text-indigo-600" /> : 
                          <Bot className="w-4 h-4 text-purple-600" />
                        }
                      </div>
                      <div className={`rounded-2xl p-3 ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        <p>{msg.message}</p>
                        <span className="text-xs opacity-75 block mt-1">
                          {new Date(msg.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="bg-gray-100 rounded-full px-4 py-2">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="p-4 border-t bg-gray-50">
              <div className="flex gap-2">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:from-indigo-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}