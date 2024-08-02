import React from "react";
import { bm, bell, profile, arrow } from "../assets/index";

const Navbar = ({ setCurrentPage }) => {
  return (
    <div className="bg-[#55D6C2] h-20 flex items-center px-4">
      <div className="ml-auto flex space-x-7 p-2">
        <img src={bm} alt="bm" />
        <img src={bell} alt="bell" />
        <img
          src={profile}
          alt="profile"
          onClick={() => setCurrentPage("Profile")}
          className="cursor-pointer"
        />
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Navbar;
