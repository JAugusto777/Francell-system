
// Interface for an individual Service Order
export interface ServiceOrder {
  id: string;
  clientName: string;
  deviceModel: string;
  deviceImei?: string; // Optional
  reportedDefect: string;
  diagnosis?: string; // Optional
  budget: number;
  entryDate: string; // Keep as string for prototype simplicity
}

// Interface for a Kanban Column
export interface KanbanColumn {
  id: string;
  title: string;
  orders: ServiceOrder[];
}
