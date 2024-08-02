import React from "react";

const TicketDetailsModal = ({ ticket, onClose }) => {
  if (!ticket) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-1/2">
        <h2 className="text-2xl font-bold text-center mb-4">Ticket Details</h2>
        <p className="text-xl">Ticket No: {ticket.ticketNo}</p>
        <p className="text-xl">Date: {ticket.date}</p>
        <p className="text-xl">Name: {ticket.name}</p>
        <p className="text-xl">Dept: {ticket.dept}</p>
        <br />
        <p className="text-xl">Title: {ticket.title}</p>
        <p className="text-xl">Description: {ticket.description}</p>
        <p className="text-xl">Category: {ticket.category}</p>
        <p className="text-xl">Type: {ticket.type}</p>
        <p className="text-xl">Priority: {ticket.priority}</p>
        <p className="text-xl">Status: {ticket.status}</p>
        <p className="text-xl">Attachment: {ticket.attachment}</p>
        <div className="flex justify-center gap-20">
          <button
            onClick={onClose}
            className="mt-4 px-20 text-xl font-semibold  py-2 bg-purple-400  rounded-md"
          >
            Update
          </button>
          <button
            onClick={onClose}
            className="mt-4 px-20 text-xl font-semibold  py-2 bg-green-500  rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsModal;
