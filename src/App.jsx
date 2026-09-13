import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatusSection from './components/TaskStatusSection';
import FilterBar from './components/FilterBar';
import NewTicketModal from './components/NewTicketModal';
import ResolvedListModal from './components/ResolvedListModal';
import Footer from './components/Footer';

// Initial JSON mock tickets data
import initialTicketsData from './data/tickets.json';

export default function App() {
  // Initial tickets list
  const [tickets, setTickets] = useState(initialTicketsData);

  // Initial task status with #1002 as shown in reference image
  const initialActiveTask = initialTicketsData.find((t) => t.id === '1002') || initialTicketsData[1];
  const [taskStatus, setTaskStatus] = useState(initialActiveTask ? [initialActiveTask] : []);

  // Initial resolved list with #1004 as shown in reference image
  const initialResolvedTask = initialTicketsData.find((t) => t.id === '1004') || { id: '1004', title: 'Incorrect Billing Address' };
  const [resolvedTickets, setResolvedTickets] = useState([
    {
      id: initialResolvedTask.id,
      title: initialResolvedTask.title,
      customer: initialResolvedTask.customer || 'Emily Davis',
      resolvedAt: '1/18/2024',
      status: 'Resolved'
    }
  ]);

  // Stat Counters (Matching '0' and '0' from reference image initially)
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('All');

  // Modal toggles
  const [isNewTicketModalOpen, setIsNewTicketModalOpen] = useState(false);
  const [isResolvedModalOpen, setIsResolvedModalOpen] = useState(false);

  // -------------------------------------------------------------
  // Feature: Add Ticket to Task Status Section
  // -------------------------------------------------------------
  const handleSelectTicket = (ticket) => {
    // Check if ticket is already in Task Status
    const isAlreadyAdded = taskStatus.some((t) => t.id === ticket.id);
    if (isAlreadyAdded) {
      toast.warning(`Ticket #${ticket.id} is already in Task Status!`, {
        position: 'top-right',
        autoClose: 2500,
        theme: 'light',
      });
      return;
    }

    // Add to task status state
    const updatedTasks = [...taskStatus, ticket];
    setTaskStatus(updatedTasks);
    
    // Increase In-Progress count
    setInProgressCount((prev) => prev + 1);

    // React-Toastify feedback
    toast.info(`Ticket "${ticket.title}" added to Task Status!`, {
      position: 'top-right',
      autoClose: 2500,
      theme: 'light',
    });
  };

  // -------------------------------------------------------------
  // Feature: Complete Task Logic
  // -------------------------------------------------------------
  const handleCompleteTask = (ticketId) => {
    const completedTicket = taskStatus.find((t) => t.id === ticketId) || tickets.find((t) => t.id === ticketId);

    if (!completedTicket) return;

    // 1. Remove from Task Status
    setTaskStatus((prev) => prev.filter((t) => t.id !== ticketId));

    // 2. Mark status as Resolved in main tickets list
    setTickets((prev) =>
      prev.map((t) => (t.id === ticketId ? { ...t, status: 'Resolved' } : t))
    );

    // 3. Add to Resolved List
    const resolvedItem = {
      ...completedTicket,
      resolvedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Resolved'
    };
    setResolvedTickets((prev) => [resolvedItem, ...prev]);

    // 4. Decrease In Progress count (if > 0), Increase Resolved count
    setInProgressCount((prev) => Math.max(0, prev - 1));
    setResolvedCount((prev) => prev + 1);

    // 5. Toast notification
    toast.success(`Ticket "${completedTicket.title}" completed!`, {
      position: 'top-right',
      autoClose: 3000,
      theme: 'light',
    });
  };

  // -------------------------------------------------------------
  // Feature: Create New Ticket dynamically
  // -------------------------------------------------------------
  const handleCreateTicket = (newTicketData) => {
    const nextNumericId = 1001 + tickets.length;
    const newId = `${nextNumericId}`;
    const formattedTicket = {
      id: newId,
      ...newTicketData,
      status: 'Open'
    };

    setTickets((prev) => [formattedTicket, ...prev]);

    toast.success(`New Ticket #${newId} created successfully!`, {
      position: 'top-right',
      autoClose: 3000,
      theme: 'light'
    });
  };

  // -------------------------------------------------------------
  // Filter & Search Logic
  // -------------------------------------------------------------
  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPriority =
      selectedPriority === 'All' || ticket.priority.toUpperCase() === selectedPriority.toUpperCase();

    return matchesSearch && matchesPriority;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 selection:bg-purple-500 selection:text-white">
      {/* Toast Notification Container */}
      <ToastContainer pauseOnHover closeOnClick />

      {/* Navbar */}
      <Navbar
        onOpenNewTicket={() => setIsNewTicketModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        
        {/* Banner with Top 2 Cards (In-Progress & Resolved) */}
        <Banner
          inProgressCount={inProgressCount}
          resolvedCount={resolvedCount}
        />

        {/* Filter and Search Bar */}
        <FilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedPriority={selectedPriority}
          setSelectedPriority={setSelectedPriority}
          onResetFilters={() => {
            setSearchQuery('');
            setSelectedPriority('All');
          }}
        />

        {/* Main Section: Ticket Cards Grid (Left side 8 cols) & Task Status Section (Right side 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Customer Tickets Cards List (2-column grid) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Customer Tickets
              </h2>
            </div>

            {filteredTickets.length === 0 ? (
              <div className="py-16 text-center border border-slate-200 rounded-2xl bg-white shadow-xs">
                <p className="text-slate-500 font-medium text-sm">No customer tickets matching current filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedPriority('All');
                  }}
                  className="mt-3 px-4 py-2 rounded-lg bg-purple-100 text-[#8b5cf6] text-xs font-semibold hover:bg-purple-200 transition-colors cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {filteredTickets.map((ticket) => {
                  const isInTaskStatus = taskStatus.some((t) => t.id === ticket.id);
                  return (
                    <TicketCard
                      key={ticket.id}
                      ticket={ticket}
                      onSelectTicket={handleSelectTicket}
                      isInTaskStatus={isInTaskStatus}
                    />
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Side: Task Status Section */}
          <div className="lg:col-span-4">
            <TaskStatusSection
              taskStatus={taskStatus}
              onCompleteTask={handleCompleteTask}
              resolvedTickets={resolvedTickets}
            />
          </div>

        </div>

      </main>

      {/* Modals */}
      <NewTicketModal
        isOpen={isNewTicketModalOpen}
        onClose={() => setIsNewTicketModalOpen(false)}
        onCreateTicket={handleCreateTicket}
      />

      <ResolvedListModal
        isOpen={isResolvedModalOpen}
        onClose={() => setIsResolvedModalOpen(false)}
        resolvedTickets={resolvedTickets}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
