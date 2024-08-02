import React from "react";
import { graph, person1, person2 } from "../../assets/index";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-center text-2xl text-black font-bold mb-6">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-500 rounded-3xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-center">Total Tickets</h3>
          <p className="text-8xl font-semibold text-center mt-16">12</p>
        </div>
        <div className="bg-green-500 rounded-3xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-center">Total Solved</h3>
          <p className="text-8xl font-semibold text-center mt-16">8</p>
        </div>
        <div className="bg-red-500 rounded-3xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-center">
            Total Awaiting Approval
          </h3>
          <p className="text-8xl font-semibold text-center mt-16">2</p>
        </div>
        <div className="bg-yellow-500 rounded-3xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-center">
            Total in Progress
          </h3>
          <p className="text-8xl font-semibold text-center mt-16">2</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <div className="bg-[#55D6C2] col-span-2 h-96 shadow-md flex justify-center items-center">
          <img src={graph} alt="Graph" />
        </div>
        <div>
          <div className="bg-[#55D6C2] h-60 mb-4 shadow-md flex justify-around items-center">
            <div className="text-center">
              <img
                className="p-1 h-15 w-15 mx-auto"
                src={person1}
                alt="Person 1"
              />
              <p className="font-semibold text-lg">3</p>
              <p className="font-semibold text-lg">Technical Supports</p>
            </div>
            <div className="text-center">
              <img
                className="p-2 h-15 w-15 mx-auto"
                src={person2}
                alt="Person 2"
              />
              <p className="font-semibold text-lg">4</p>
              <p className="font-semibold text-lg">Operation Team</p>
            </div>
          </div>
          <div className="bg-[#55D6C2] h-32 rounded-2xl shadow-md p-4">
            <p className="font-semibold text-2xl text-center mb-2">
              Customer Feedback
            </p>
            <div className="flex justify-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
