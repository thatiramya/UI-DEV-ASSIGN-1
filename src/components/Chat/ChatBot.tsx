import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, User } from 'lucide-react';
import { generateOrderResponse } from '../../utils/chatResponses';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatBotProps {
  orderId: string;
}

export function ChatBot({ orderId }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hello! How can I help you with order #${orderId}?`,
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateOrderResponse(input, orderId),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`flex items-start gap-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user'
                      ? 'bg-purple-100'
                      : 'bg-indigo-100'
                  }`}
                >
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4 text-purple-600" />
                  ) : (
                    <Bot className="w-4 h-4 text-indigo-600" />
                  )}
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-2xl p-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                      : 'bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  <p>{message.text}</p>
                  <span className="text-xs opacity-75 block mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <Bot className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="bg-white rounded-full px-4 py-2 shadow-sm">
                <div className="flex gap-1">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 bg-indigo-400 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-indigo-400 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-indigo-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t bg-white/50 backdrop-blur-sm">
        <div className="flex gap-2">
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!input.trim()}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}