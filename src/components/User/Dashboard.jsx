import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-center text-2xl text-black  font-bold mb-4">
        Dashboard
      </h2>
      <div className="flex justify-around mt-10 text-black ">
        <div className="bg-blue-500 w-80 h-80  rounded-3xl p-6  shadow-md">
          <h3 className="text-xl font-semibold text-center">Total Tickets</h3>
          <div>
            <p className="text-8xl font-semibold text-center mt-16">12</p>
          </div>
        </div>
        <div className="bg-green-500 w-80 h-80  rounded-3xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-center">Total Solved</h3>
          <div>
            <p className="text-8xl font-semibold text-center mt-16">8</p>
          </div>
        </div>
        <div className="bg-red-500 w-80 h-80  rounded-3xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-center">
            Total Awaiting Approval
          </h3>
          <div>
            {" "}
            <p className="text-8xl font-semibold text-center mt-16">2</p>
          </div>
        </div>
        <div className="bg-yellow-500 w-80 h-80  rounded-3xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-center">
            Total in Progress
          </h3>
          <div>
            <p className="text-8xl font-semibold text-center mt-16">2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
