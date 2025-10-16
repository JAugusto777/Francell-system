
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { KanbanColumn as KanbanColumnType, ServiceOrder } from '../types';
import ServiceOrderCard from './ServiceOrderCard';

interface KanbanColumnProps {
  column: KanbanColumnType;
}

const columnColorSchemes: { [key: string]: string } = {
    received: 'bg-white',
    diagnosis: 'bg-blue-50',
    'awaiting-approval': 'bg-yellow-50',
    'awaiting-parts': 'bg-orange-50',
    'in-repair': 'bg-purple-50',
    'testing-quality': 'bg-blue-50',
};


const KanbanColumn: React.FC<KanbanColumnProps> = ({ column }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });
  
  const bgColor = columnColorSchemes[column.id] || 'bg-gray-100';

  return (
    <div
      className="flex-shrink-0 w-80 md:w-96 rounded-xl shadow-sm"
    >
      <div className={`p-4 rounded-t-xl ${bgColor} border-b border-slate-200`}>
        <h2 className="text-lg font-bold text-blue-900">{column.title}</h2>
        <p className="text-sm text-slate-500">{column.orders.length} serviço{column.orders.length !== 1 ? 's' : ''}</p>
      </div>

      <div
        ref={setNodeRef}
        className={`p-4 rounded-b-xl min-h-[400px] transition-colors duration-300 ${isOver ? 'bg-blue-100' : bgColor}`}
      >
        <SortableContext items={column.orders.map(o => o.id)} strategy={verticalListSortingStrategy}>
          {column.orders.length > 0 ? (
            <div className="space-y-4">
              {column.orders.map((order: ServiceOrder) => (
                <ServiceOrderCard key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400 border-2 border-dashed border-slate-300 rounded-lg p-4">
              Arraste serviços para cá
            </div>
          )}
        </SortableContext>
      </div>
    </div>
  );
};

export default KanbanColumn;
