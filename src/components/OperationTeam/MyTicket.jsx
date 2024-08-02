import React, { useState } from "react";
import { tickets } from "../../constants/ticket.js";
import TicketDetailsModal from "../../modals/TicketDetailsTeamModal.jsx";

const MyTicket = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  return (
    <div className="p-8">
      <h1 className=" text-2xl font-bold mb-6">List of Tickets</h1>
      <div className="flex flex-col justify-between mb-4">
        <input
          type="text"
          placeholder="Find Ticket"
          className="border p-2 rounded shadow-sm outline-none bg-gray-200 text-black w-1/3"
        />
        <select className="border p-2  bg-gray-200 text-black outline-none mt-3 rounded mr-auto">
          <option>Show: 10 Entries</option>
          <option>Show: 20 Entries</option>
        </select>
      </div>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Ticket No.</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Support by</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Rate</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr
              key={ticket.ticketNo}
              className="bg-gray-200 font-semibold cursor-pointer"
              onClick={() => handleTicketClick(ticket)}
            >
              <td className="border p-5 text-blue-500">{ticket.ticketNo}</td>
              <td className="border p-2">{ticket.subject}</td>
              <td className="border p-2">
                <span
                  className={`px-2 py-2 rounded-xl text-white ${
                    ticket.status === "In Progress"
                      ? "bg-green-500"
                      : ticket.status === "On hold"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                  }`}
                >
                  {ticket.status}
                </span>
              </td>
              <td className="border p-2">{ticket.supportBy}</td>
              <td className="border p-2">{ticket.date}</td>
              <td className="border p-2">
                {"⭐".repeat(ticket.rate) + "☆".repeat(5 - ticket.rate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <div>Showing 1 to 5 of 5 entries</div>
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

export default MyTicket;
