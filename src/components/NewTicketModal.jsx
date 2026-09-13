import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

export default function NewTicketModal({ isOpen, onClose, onCreateTicket }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [customer, setCustomer] = useState('');
  const [priority, setPriority] = useState('MEDIUM PRIORITY');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !customer.trim()) return;

    const today = new Date();
    const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

    onCreateTicket({
      title,
      description,
      customer,
      priority,
      createdAt: formattedDate
    });

    setTitle('');
    setDescription('');
    setCustomer('');
    setPriority('MEDIUM PRIORITY');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg shadow-xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-purple-100 text-[#8b5cf6]">
              <Plus className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Create New Ticket</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Ticket Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Payment Gateway Failure"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Customer Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. John Doe"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Priority Level
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-indigo-500 focus:bg-white text-sm cursor-pointer"
              >
                <option value="LOW PRIORITY">Low Priority</option>
                <option value="MEDIUM PRIORITY">Medium Priority</option>
                <option value="HIGH PRIORITY">High Priority</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Description
            </label>
            <textarea
              required
              rows="3"
              placeholder="Describe the issue..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white text-sm resize-none"
            />
          </div>

          {/* Form Footer */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-xs font-bold shadow-xs cursor-pointer"
            >
              Submit Ticket
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
