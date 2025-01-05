import { useState } from 'react';
import { DndContext, DragEndEvent, DragOverlay, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { CartPanel } from './CartPanel';
import { ItemList } from './ItemList';
import { AddItemPanel } from './AddItemPanel';
import { DragPreview } from './DragPreview';
import { OrderSuccess } from './OrderConfirmation/OrderSuccess';
import { Item, CartItem, Order } from '../types';
import { items as availableItems } from '../data/items';

export default function NewOrder() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [newOrder, setNewOrder] = useState<Order | null>(null);

  // Configure sensors for better drag control
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: { active: { id: string } }) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);
    
    if (over && over.id === 'cart') {
      const draggedItem = availableItems.find(item => item.id === active.id);
      if (draggedItem) {
        const existingItem = cartItems.find(item => item.id === draggedItem.id);
        if (existingItem) {
          setCartItems(cartItems.map(item =>
            item.id === draggedItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ));
        } else {
          setCartItems([...cartItems, { ...draggedItem, quantity: 1 }]);
        }
      }
    }
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      ));
    }
  };

  const removeItem = (itemId: string) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handlePlaceOrder = () => {
    const order: Order = {
      id: `ORD-${Date.now()}`,
      date: new Date().toISOString(),
      items: cartItems.map(item => ({
        ...item,
        sku: `SKU-${item.id}`
      })),
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      status: 'pending',
      customer: {
        email: 'customer@example.com',
        phone: '+1 234-567-8900',
        address: '123 Main St, City, Country'
      },
      shipping: {
        type: 'Standard',
        trackingNumber: `TRK-${Date.now()}`,
        estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
      },
      subtotal: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      shippingCost: 0
    };

    setNewOrder(order);
    setShowSuccess(true);
  };

  const activeItem = availableItems.find(item => item.id === activeId);

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">New Order</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CartPanel
              items={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeItem}
              onPlaceOrder={handlePlaceOrder}
            />
            <AddItemPanel />
            <ItemList items={availableItems} />
          </div>
        </div>
      </div>
      <DragOverlay>
        {activeId && activeItem ? (
          <DragPreview item={activeItem} />
        ) : null}
      </DragOverlay>
      {showSuccess && newOrder && (
        <OrderSuccess
          total={newOrder.total}
          itemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          newOrder={newOrder}
        />
      )}
    </DndContext>
  );
}