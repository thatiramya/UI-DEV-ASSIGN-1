import { Order } from '../types';

type SortType = 'date-new' | 'date-old' | 'amount-high' | 'amount-low';

export const sortOrders = (a: Order, b: Order, sortBy: SortType): number => {
  // Validate inputs
  if (!a || !b || !sortBy) return 0;
  
  try {
    switch (sortBy) {
      case 'date-new':
        return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
      case 'date-old':
        return new Date(a.date || 0).getTime() - new Date(b.date || 0).getTime();
      case 'amount-high':
        return (b.total || 0) - (a.total || 0);
      case 'amount-low':
        return (a.total || 0) - (b.total || 0);
      default:
        return 0;
    }
  } catch (error) {
    console.error('Error sorting orders:', error);
    return 0;
  }
};

export const filterOrders = (orders: Order[], searchQuery: string): Order[] => {
  if (!searchQuery) return orders;
  
  const query = searchQuery.toLowerCase().trim();
  
  return orders.filter(order => {
    if (!order) return false;
    
    return (
      (order.id?.toLowerCase().includes(query)) ||
      (order.customer?.email?.toLowerCase().includes(query)) ||
      (order.items?.some(item => item?.name?.toLowerCase().includes(query)))
    );
  });
};