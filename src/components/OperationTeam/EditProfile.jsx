import React from "react";

const EditProfile = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-2 mr-auto">User Profile</h1>
      <button className="bg-[#55D6C2] text-xl px-10 font-semibold mr-auto m-4 p-2 rounded mt-4">
        Edit Account
      </button>
      <div className="bg-white shadow rounded-2xl w-full p-10 ">
        <div className="grid grid-cols-2 gap-2">
          <label className="font-semibold bg-gray-300 p-1">Username</label>
          <input type="text" className="border p-2 rounded" />

          <label className="font-semibold bg-gray-300 p-1">
            Current Password
          </label>
          <input type="password" className="border p-2 rounded" />

          <label className="font-semibold bg-gray-300 p-1">New Password</label>
          <input type="password" className="border p-2 rounded" />

          <label className="font-semibold bg-gray-300 p-1">
            Confirm Password
          </label>
          <input type="password" className="border p-2 rounded" />

          <label className="font-semibold bg-gray-300 p-1">Email</label>
          <input type="email" className="border p-2 rounded" />

          <label className="font-semibold bg-gray-300 p-1">Real Name</label>
          <input type="text" className="border p-2 rounded" />

          <label className="font-semibold bg-gray-300 p-1">Access Level</label>
          <input type="text" className="border p-2 rounded" />

          <label className="font-semibold bg-gray-300 p-1">
            Project Access Level
          </label>
          <input type="text" className="border p-2 rounded" />
        </div>

        <button className="bg-[#55D6C2] text-xl px-10 font-semibold  p-2 rounded mt-4">
          Update User
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
