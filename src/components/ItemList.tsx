import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Item } from '../types';

interface ItemListProps {
  items: Item[];
}

export function ItemList({ items }: ItemListProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-[calc(100vh-12rem)] overflow-auto">
      <h2 className="text-xl font-semibold mb-4">Available Items</h2>
      <div className="grid gap-4">
        {items.map((item) => (
          <DraggableItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

interface DraggableItemProps {
  item: Item;
}

function DraggableItem({ item }: DraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: item.id,
    data: item,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-move touch-none"
    >
      <div className="flex gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
          draggable={false}
        />
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
        </div>
      </div>
    </div>
  );
}