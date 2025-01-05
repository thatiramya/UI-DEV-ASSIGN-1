import { motion } from 'framer-motion';
import { Package, Truck, User } from 'lucide-react';
import { Order } from '../../types';

interface OrderDetailsProps {
  order: Order;
}

export function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden"
    >
      <div className="p-6 space-y-6 bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
        {/* Customer Information */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-indigo-600">
            <User className="w-5 h-5" />
            <h3 className="font-semibold">Customer Information</h3>
          </div>
          <div className="grid gap-2 text-gray-600">
            <p>Email: {order.customer.email}</p>
            <p>Phone: {order.customer.phone}</p>
            <p>Address: {order.customer.address}</p>
          </div>
        </div>

        {/* Shipping Details */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-indigo-600">
            <Truck className="w-5 h-5" />
            <h3 className="font-semibold">Shipping Details</h3>
          </div>
          <div className="grid gap-2 text-gray-600">
            <p>Type: {order.shipping.type}</p>
            <p>Tracking: {order.shipping.trackingNumber}</p>
            <p>Estimated Delivery: {new Date(order.shipping.estimatedDelivery).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-indigo-600">
            <Package className="w-5 h-5" />
            <h3 className="font-semibold">Order Items</h3>
          </div>
          <div className="space-y-3">
            {order.items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-3 text-indigo-600">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>${order.shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-2 border-t">
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}