
import { KanbanColumn } from './types';

export const INITIAL_COLUMNS: KanbanColumn[] = [
  {
    id: 'received',
    title: 'Recebido / Entrada',
    orders: [
      {
        id: 'os-1',
        clientName: 'João Silva',
        deviceModel: 'iPhone 12 Pro',
        deviceImei: '352046111234567',
        reportedDefect: 'Tela quebrada e não carrega',
        diagnosis: 'Tela precisa ser substituída, conector de carga com mau contato',
        budget: 850.00,
        entryDate: '15/01/25',
      },
    ],
  },
  {
    id: 'diagnosis',
    title: 'Diagnóstico',
    orders: [],
  },
  {
    id: 'awaiting-approval',
    title: 'Aguardando Aprovação',
    orders: [
      {
        id: 'os-2',
        clientName: 'Maria Santos',
        deviceModel: 'Samsung Galaxy S21',
        deviceImei: '359768912345678',
        reportedDefect: 'Bateria descarrega muito rápido',
        diagnosis: 'Bateria com vida útil esgotada, necessário substituição',
        budget: 280.00,
        entryDate: '14/01/25',
      },
    ],
  },
  {
    id: 'awaiting-parts',
    title: 'Aguardando Peças',
    orders: [],
  },
  {
    id: 'in-repair',
    title: 'Em Reparo',
    orders: [
      {
        id: 'os-3',
        clientName: 'Pedro Oliveira',
        deviceModel: 'Xiaomi Redmi Note 10',
        deviceImei: '865345898765432',
        reportedDefect: 'Não liga, molhou',
        budget: 450.00,
        entryDate: '13/01/25',
      },
    ],
  },
  {
    id: 'testing-quality',
    title: 'Testes / Qualidade',
    orders: [],
  },
];
