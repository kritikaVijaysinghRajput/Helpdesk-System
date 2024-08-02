import React, { useState } from "react";
import Sidebar from "../../components/OperationTeam/Sidebar";
import Navbar from "../../components/Navbar";
import Dashboard from "../../components/OperationTeam/Dashboard";
import MyTicket from "../../components/OperationTeam/MyTicket";
import Profile from "../../components/OperationTeam/Profile";
import EditProfile from "../../components/OperationTeam/EditProfile";
import TicketApproval from "../../components/OperationTeam/TicketApproval";
import Performance from "../../components/OperationTeam/Performance";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return <Dashboard />;
      case "Ticket Approval":
        return <TicketApproval />;
      case "My Ticket":
        return <MyTicket />;
      case "Profile":
        return <Profile setCurrentPage={setCurrentPage} />;
      case "EditProfile":
        return <EditProfile />;
      case "Performance":
        return <Performance />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar setCurrentPage={setCurrentPage} />
      <div className="flex-1 flex flex-col">
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="flex-1 p-4 bg-gray-100">{renderPage()}</div>
        <footer className="bg-[#55D6C2] p-4 text-center text-black font-semibold">
          Footer Area
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
