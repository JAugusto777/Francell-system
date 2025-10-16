
import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { ServiceOrder } from '../types';

interface ServiceOrderCardProps {
  order: ServiceOrder;
}

// SVG Icons for actions
const EditIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
);

const DeleteIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
);


const ServiceOrderCard: React.FC<ServiceOrderCardProps> = ({ order }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: order.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };
  
  const cardBorderColors: { [key: string]: string } = {
    'João Silva': 'border-gray-300', // Default
    'Maria Santos': 'border-yellow-400',
    'Pedro Oliveira': 'border-purple-400',
  };
  
  const borderColor = cardBorderColors[order.clientName] || 'border-gray-300';

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`bg-white rounded-lg shadow-md border-l-4 ${borderColor} p-4 cursor-grab active:cursor-grabbing`}
    >
        <div className="flex justify-between items-start mb-3">
            <div className="flex items-center space-x-2">
                 <span className="bg-slate-200 p-1.5 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                 </span>
                <span className="font-bold text-blue-900">{order.clientName}</span>
            </div>
            <div className="flex space-x-2">
                <button className="text-slate-500 hover:text-blue-600 transition-colors"><EditIcon /></button>
                <button className="text-slate-500 hover:text-red-600 transition-colors"><DeleteIcon /></button>
            </div>
        </div>

        <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                <span>{order.deviceModel}</span>
            </div>
            {order.deviceImei &&
                <div className="flex items-center space-x-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M9 4v16"/><path d="M15 4v16"/><path d="M4 9h16"/><path d="M4 15h16"/></svg>
                    <span># {order.deviceImei}</span>
                </div>
            }

            <div className="bg-red-50 text-red-800 p-2 rounded-md border border-red-200">
                <span className="font-semibold">Defeito:</span> {order.reportedDefect}
            </div>

            {order.diagnosis &&
                <div className="bg-blue-50 text-blue-800 p-2 rounded-md border border-blue-200">
                    <span className="font-semibold">Diagnóstico:</span> {order.diagnosis}
                </div>
            }
        </div>

        <div className="border-t border-slate-200 mt-4 pt-3 flex justify-between items-center">
             <div className="flex items-center space-x-2 text-sm text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                <span>{order.entryDate}</span>
            </div>
            <div>
                 <span className="text-sm text-slate-500">Orçamento: </span>
                 <span className="font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.budget)}
                </span>
            </div>
        </div>
    </div>
  );
};

export default ServiceOrderCard;
