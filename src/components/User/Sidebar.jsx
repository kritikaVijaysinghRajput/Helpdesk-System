import React from "react";
import { dashboard, myticket, newticket } from "../../assets/index";

const Sidebar = ({ setCurrentPage }) => {
  return (
    <div className="w-64 bg-gray-400 text-white flex flex-col">
      <div className="bg-[#55D6C2] h-20 flex items-center justify-center">
        <i className="font-bold text-4xl">Helpdesk</i>
      </div>
      <div className="flex flex-col mt-4 space-y-2 px-7 py-3 text-black">
        <div
          className="flex items-center p-2  cursor-pointer"
          onClick={() => setCurrentPage("Dashboard")}
        >
          <img className="h-6 w-6 mr-2" src={dashboard} alt="dashboard icon" />
          <span className="text-2xl font-semibold">Dashboard</span>
        </div>
        <div
          className="flex items-center p-2  cursor-pointer"
          onClick={() => setCurrentPage("New Ticket")}
        >
          <img className="h-6 w-6 mr-2" src={newticket} alt="dashboard icon" />
          <span className="text-2xl font-semibold">New Ticket</span>
        </div>
        <div
          className="flex items-center p-2  cursor-pointer"
          onClick={() => setCurrentPage("My Ticket")}
        >
          <img className="h-6 w-6 mr-2" src={myticket} alt="dashboard icon" />
          <span className="text-2xl font-semibold">My Ticket</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
