import { Order } from '../types';

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    date: new Date().toISOString(),
    items: [
      {
        id: 'makeup-1',
        sku: 'SKU-M1',
        name: 'Luxury Lipstick',
        price: 24.99,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400',
        description: 'Long-lasting matte lipstick'
      }
    ],
    total: 49.98,
    status: 'completed',
    customer: {
      email: 'customer@example.com',
      phone: '+1 234-567-8900',
      address: '123 Main St, City, Country'
    },
    shipping: {
      type: 'Standard',
      trackingNumber: 'TRK-001',
      estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
    },
    subtotal: 49.98,
    shippingCost: 0
  }
];