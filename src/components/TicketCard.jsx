import React from 'react';
import { Calendar } from 'lucide-react';

export default function TicketCard({ ticket, onSelectTicket, isInTaskStatus }) {
  // Priority label styling (Red for HIGH PRIORITY, Yellow/Orange for MEDIUM PRIORITY, Green for LOW PRIORITY)
  const getPriorityColor = (priority) => {
    if (!priority) return 'text-[#f59e0b]';
    const p = priority.toUpperCase();
    if (p.includes('HIGH')) return 'text-[#ef4444]';
    if (p.includes('MEDIUM')) return 'text-[#f59e0b]';
    if (p.includes('LOW')) return 'text-[#22c55e]';
    return 'text-slate-500';
  };

  // Status Badge Styling
  const renderStatusBadge = (status) => {
    if (status === 'In-Progress' || isInTaskStatus) {
      return (
        <span className="inline-flex items-center space-x-1 bg-[#fef9c3] text-[#a16207] px-2.5 py-0.5 rounded-full text-xs font-medium border border-amber-200/60 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#eab308]" />
          <span>In-Progress</span>
        </span>
      );
    }
    if (status === 'Resolved') {
      return (
        <span className="inline-flex items-center space-x-1 bg-[#dbeafe] text-[#1e40af] px-2.5 py-0.5 rounded-full text-xs font-medium border border-blue-200/60 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
          <span>Resolved</span>
        </span>
      );
    }
    // Default: Open
    return (
      <span className="inline-flex items-center space-x-1 bg-[#dcfce7] text-[#15803d] px-2.5 py-0.5 rounded-full text-xs font-medium border border-emerald-200/60 shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
        <span>Open</span>
      </span>
    );
  };

  return (
    <div
      onClick={() => onSelectTicket(ticket)}
      className={`bg-white rounded-xl border p-4 sm:p-5 shadow-xs ticket-card-hover flex flex-col justify-between cursor-pointer transition-all ${
        isInTaskStatus ? 'border-amber-300 ring-2 ring-amber-400/20 bg-amber-50/20' : 'border-slate-200/90'
      }`}
    >
      <div>
        {/* Header Row: Title & Status Badge */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug line-clamp-1">
            {ticket.title}
          </h3>
          {renderStatusBadge(ticket.status)}
        </div>

        {/* Ticket Description */}
        <p className="text-slate-500 text-xs sm:text-sm line-clamp-2 leading-relaxed my-3">
          {ticket.description}
        </p>
      </div>

      {/* Footer Row: Ticket ID & Priority | Customer | Date */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500 mt-2">
        
        {/* ID & Priority */}
        <div className="flex items-center space-x-1.5 font-medium">
          <span className="text-slate-400 font-mono">#{ticket.id}</span>
          <span className={`font-bold uppercase ${getPriorityColor(ticket.priority)}`}>
            {ticket.priority}
          </span>
        </div>

        {/* Customer Name */}
        <span className="font-medium text-slate-600 truncate max-w-[110px]">
          {ticket.customer}
        </span>

        {/* Date */}
        <div className="flex items-center space-x-1 text-slate-400 shrink-0">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>{ticket.createdAt}</span>
        </div>

      </div>
    </div>
  );
}
