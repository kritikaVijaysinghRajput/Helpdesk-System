import React from "react";
import { edit, profile } from "../../assets/index";

const Profile = ({ setCurrentPage }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-2">User Profile</h1>
      <div className="flex flex-col items-center bg-[#55D6C2] mt-10 w-3/4 h-3/4 p-20">
        <div className="flex justify-between w-full h-full">
          <div className="bg-white shadow rounded-2xl w-3/5 h-4/5 p-10">
            <div className="flex justify-end">
              <img
                src={edit}
                alt="Edit Profile"
                onClick={() => setCurrentPage("EditProfile")}
                className="w-10 h-10 cursor-pointer"
              />
            </div>
            <div className="flex justify-center mb-4">
              <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center">
                <img
                  src={profile}
                  alt="User Avatar"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
            </div>
            <p className="font-semibold text-2xl">Username</p>
            <p className="font-semibold text-2xl">Contact Number</p>
            <p className="font-semibold text-2xl">Email</p>
            <p className="font-semibold text-2xl">Department</p>
          </div>

          <div className="bg-white shadow rounded-2xl w-1/3 h-2/4 p-10 ml-10 flex flex-col justify-center">
            <p className="text-center text-xl font-semibold mb-4">
              Give Your Feedback
            </p>
            <textarea
              placeholder="Your feedback..."
              className="border p-2 bg-gray-300 rounded mb-4 resize-none"
              rows="4"
            ></textarea>
            <div className="flex justify-center mb-4">
              {"⭐"
                .repeat(5)
                .split("")
                .map((star, index) => (
                  <span
                    key={index}
                    className="text-gray-400 text-2xl cursor-pointer"
                  >
                    {star}
                  </span>
                ))}
            </div>
            <button className="bg-[#55D6C2] text-xl font-semibold p-2 rounded">
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
