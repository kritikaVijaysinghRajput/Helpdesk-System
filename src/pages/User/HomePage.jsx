import React, { useState } from "react";
import Sidebar from "../../components/User/Sidebar";
import Navbar from "../../components/Navbar";
import Dashboard from "../../components/User/Dashboard";
import NewTicket from "../../components/User/NewTicket";
import MyTicket from "../../components/User/MyTicket";
import Profile from "../../components/User/Profile";
import EditProfile from "../../components/User/EditProfile";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return <Dashboard />;
      case "New Ticket":
        return <NewTicket />;
      case "My Ticket":
        return <MyTicket />;
      case "Profile":
        return <Profile setCurrentPage={setCurrentPage} />;
      case "EditProfile":
        return <EditProfile />;
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
