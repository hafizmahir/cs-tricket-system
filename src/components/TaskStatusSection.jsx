import React from 'react';

export default function TaskStatusSection({
  taskStatus,
  onCompleteTask,
  resolvedTickets
}) {
  return (
    <div className="space-y-6">
      
      {/* 1. Task Status Section */}
      <div>
        <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
          Task Status
        </h2>

        {taskStatus.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-xs">
            <p className="text-sm text-slate-400 font-medium">
              Select a customer ticket to add it to your active Task Status.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {taskStatus.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col justify-between space-y-3"
              >
                <h3 className="font-bold text-slate-900 text-sm leading-snug">
                  {task.title}
                </h3>

                <button
                  onClick={() => onCompleteTask(task.id)}
                  className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors shadow-xs cursor-pointer text-center"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2. Resolved Task Section */}
      <div>
        <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
          Resolved Task
        </h2>

        {resolvedTickets.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-xs">
            <p className="text-xs text-slate-400">No resolved tasks yet.</p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {resolvedTickets.map((item) => (
              <div
                key={item.id}
                className="bg-[#e0e7ff] text-[#3730a3] p-3 rounded-lg font-medium text-sm border border-indigo-100 shadow-2xs"
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
