
import React, { useState } from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { KanbanColumn as KanbanColumnType } from '../types';
import { ServiceOrder } from '../types';
import KanbanColumn from './KanbanColumn';
import { INITIAL_COLUMNS } from '../constants';

const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState<KanbanColumnType[]>(INITIAL_COLUMNS);

  const findColumn = (id: string) => {
    return columns.find(col => col.orders.some(order => order.id === id) || col.id === id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    const activeId = String(active.id);
    const overId = String(over.id);
    
    const activeColumn = findColumn(activeId);
    let overColumn = columns.find(col => col.id === overId);
    if (!overColumn) {
       overColumn = findColumn(overId);
    }

    if (!activeColumn || !overColumn || activeColumn === overColumn) {
      return;
    }
    
    setColumns(prevColumns => {
      const activeItems = activeColumn.orders;
      const overItems = overColumn.orders;

      const activeIndex = activeItems.findIndex(item => item.id === activeId);
      const activeOrder = activeItems[activeIndex];

      const newColumns = prevColumns.map(col => {
        if (col.id === activeColumn.id) {
          return {
            ...col,
            orders: col.orders.filter(order => order.id !== activeId)
          };
        }
        if (col.id === overColumn.id) {
            return {
                ...col,
                orders: [...col.orders, activeOrder]
            };
        }
        return col;
      });
      
      return newColumns;
    });
  };

  return (
    <div className="w-full overflow-x-auto pb-4">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="flex space-x-6">
          <SortableContext items={columns.map(c => c.id)} strategy={horizontalListSortingStrategy}>
            {columns.map(column => (
              <KanbanColumn key={column.id} column={column} />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};

export default KanbanBoard;
