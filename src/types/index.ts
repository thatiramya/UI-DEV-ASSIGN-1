// Existing types...

export interface CustomerInfo {
  email: string;
  phone: string;
  address: string;
}

export interface ShippingDetails {
  type: 'Standard' | 'Express' | 'Next Day';
  trackingNumber: string;
  estimatedDelivery: string;
}

export interface OrderItem extends CartItem {
  sku: string;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  customer: CustomerInfo;
  shipping: ShippingDetails;
  subtotal: number;
  shippingCost: number;
}