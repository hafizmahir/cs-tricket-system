import React from 'react';
import { X, CheckCircle2, Calendar, User } from 'lucide-react';

export default function ResolvedListModal({ isOpen, onClose, resolvedTickets }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Resolved Tickets Archive</h3>
              <p className="text-xs text-slate-500">Total {resolvedTickets.length} tickets completed</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {resolvedTickets.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <CheckCircle2 className="w-10 h-10 mx-auto mb-2 text-slate-300" />
              <p className="text-sm font-medium">No resolved tickets yet.</p>
            </div>
          ) : (
            resolvedTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-slate-400">#{ticket.id}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700 uppercase">
                      Resolved
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">{ticket.title}</h4>
                  <p className="text-xs text-slate-500 flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <User className="w-3 h-3 text-slate-400" />
                      <span>{ticket.customer}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>Completed: {ticket.resolvedAt || 'Just now'}</span>
                    </span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
