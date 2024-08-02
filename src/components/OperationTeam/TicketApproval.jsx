import React, { useState } from "react";
import TicketDetailsModal from "../../modals/TicketDetailsTeamModal";
import { ticketsApproval } from "../../constants/ticketApproval";

const TicketApproval = ({ setCurrentPage }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesToShow, setEntriesToShow] = useState(10);

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTickets = ticketsApproval.filter((ticket) =>
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Ticket Approval</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Find ticket"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded shadow-sm outline-none bg-gray-200 text-black"
        />
        <select
          value={entriesToShow}
          onChange={(e) => setEntriesToShow(e.target.value)}
          className="border p-2 bg-gray-200 text-black outline-none rounded"
        >
          <option value={10}>Show: 10 Entries</option>
          <option value={20}>Show: 20 Entries</option>
        </select>
      </div>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Ticket No.</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Priority</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Action</th>
            <th className="border p-2">Assign to</th>
          </tr>
        </thead>
        <tbody>
          {filteredTickets.slice(0, entriesToShow).map((ticket) => (
            <tr
              key={ticket.ticketNo}
              className="bg-gray-200 font-semibold cursor-pointer"
              onClick={() => handleTicketClick(ticket)}
            >
              <td className="border p-2 text-blue-500">{ticket.ticketNo}</td>
              <td className="border p-2">{ticket.subject}</td>
              <td className="border p-2">{ticket.category}</td>
              <td className="border p-2">{ticket.priority}</td>
              <td className="border p-2">{ticket.date}</td>
              <td className="border p-2 text-center">
                <button className="mx-1">✔️</button>
                <button className="mx-1">❌</button>
              </td>
              <td className="border p-2">
                <select className="border p-1 rounded">
                  <option value="">Select</option>
                  <option value="User1">User1</option>
                  <option value="User2">User2</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <div>
          Showing 1 to {Math.min(filteredTickets.length, entriesToShow)} of{" "}
          {filteredTickets.length} entries
        </div>
        <div>
          <button className="border px-2">«</button>
          <button className="border px-2">1</button>
          <button className="border px-2">»</button>
        </div>
      </div>

      {isModalOpen && (
        <TicketDetailsModal
          ticket={selectedTicket}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default TicketApproval;
