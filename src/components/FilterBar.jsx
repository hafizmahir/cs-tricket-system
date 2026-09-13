import React from 'react';
import { Search, Filter, RefreshCw } from 'lucide-react';

export default function FilterBar({
  searchQuery,
  setSearchQuery,
  selectedPriority,
  setSelectedPriority,
  onResetFilters
}) {
  return (
    <div className="bg-white rounded-xl p-4 mb-6 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
      
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search tickets by title, customer, or ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white text-xs sm:text-sm transition-all"
        />
      </div>

      {/* Filter Controls */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 focus:bg-white cursor-pointer"
          >
            <option value="All">All Priorities</option>
            <option value="HIGH PRIORITY">High Priority</option>
            <option value="MEDIUM PRIORITY">Medium Priority</option>
            <option value="LOW PRIORITY">Low Priority</option>
          </select>
        </div>

        {(searchQuery || selectedPriority !== 'All') && (
          <button
            onClick={onResetFilters}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs transition-colors flex items-center space-x-1 cursor-pointer"
            title="Reset Filters"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        )}
      </div>

    </div>
  );
}
