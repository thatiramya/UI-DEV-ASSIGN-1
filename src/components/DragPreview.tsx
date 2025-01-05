import { Item } from '../types';

interface DragPreviewProps {
  item: Item;
}

export function DragPreview({ item }: DragPreviewProps) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-lg">
      <div className="flex gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}