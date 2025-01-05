export const generateOrderResponse = (message: string, orderId: string): string => {
  const lowercaseMsg = message.toLowerCase();
  
  // Tracking & Delivery
  if (lowercaseMsg.includes('track') || lowercaseMsg.includes('where')) {
    return `I can help you track order #${orderId}. Your order is currently being processed and will be shipped soon. Once shipped, you'll receive a tracking number via email.`;
  }
  
  // Shipping Time
  if (lowercaseMsg.includes('when') || lowercaseMsg.includes('delivery') || lowercaseMsg.includes('arrive')) {
    return `For order #${orderId}, standard delivery takes 3-5 business days. Express shipping takes 1-2 business days. Would you like me to check specific delivery options for your location?`;
  }
  
  // Order Changes
  if (lowercaseMsg.includes('change') || lowercaseMsg.includes('modify')) {
    return `To modify order #${orderId}, please note that changes can only be made within 1 hour of placing the order. Would you like me to check if your order is still eligible for modifications?`;
  }
  
  // Cancellation
  if (lowercaseMsg.includes('cancel')) {
    return `I understand you'd like to cancel order #${orderId}. Cancellations are possible within 24 hours of placing the order. Would you like me to help you with the cancellation process?`;
  }
  
  // Returns & Refunds
  if (lowercaseMsg.includes('return') || lowercaseMsg.includes('refund')) {
    return `For order #${orderId}, we offer hassle-free returns within 30 days of delivery. Would you like me to guide you through our return process?`;
  }
  
  // Order Status
  if (lowercaseMsg.includes('status')) {
    return `Let me check the status of order #${orderId} for you. Your order is being processed and will be shipped according to the selected delivery method. Is there anything specific about the order you'd like to know?`;
  }
  
  // Payment
  if (lowercaseMsg.includes('payment') || lowercaseMsg.includes('paid')) {
    return `I can confirm that the payment for order #${orderId} has been successfully processed. Your receipt has been sent to your registered email. Do you need a copy of the invoice?`;
  }
  
  // Default response
  return `I'm here to help with order #${orderId}. You can ask me about tracking, delivery time, returns, or any other order-related questions. What would you like to know?`;
};