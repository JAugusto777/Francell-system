
import React from 'react';
import KanbanBoard from './components/KanbanBoard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="px-8 py-6 md:px-12">
        <h1 className="text-4xl font-bold text-blue-800">Kanban - Serviços</h1>
        <p className="text-lg text-slate-500 mt-1">Gerenciamento de Ordens de Serviço</p>
      </header>
      <main className="p-4 md:p-8">
        <KanbanBoard />
      </main>
    </div>
  );
};

export default App;
