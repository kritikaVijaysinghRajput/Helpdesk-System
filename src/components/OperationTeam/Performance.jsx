import React from "react";
import { profile } from "../../assets/index";

const Performance = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Performance</h2>
      <div className="flex justify-between">
        <div className="flex flex-col items-start bg-gray-100 p-6 rounded-lg  w-2/3">
          <div className="flex items-center mb-4">
            <div className="bg-gray-300 flex justify-center items-centerrounded-3xl h-40 w-40 mr-4">
              <img className="h-32 w-32 mt-3" src={profile} alt="" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">Operation Name</h3>
              <div className="bg-gray-300 p-4 mt-5 rounded-lg">
                <p className="font-semibold text-xl">Contact No: 0123456789</p>
                <p className="font-semibold text-xl">Department: ABC</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 p-4 rounded-xl w-full">
            <h4 className="font-semibold text-2xl">Total Ticket Handle</h4>
            <p className="text-xl font-semibold mb-2">5</p>
            <p className="font-semibold text-xl">Ticket Solved: 2</p>
            <p className="font-semibold text-xl">Ticket Pending: 1</p>
            <p className="font-semibold text-xl">Ticket in progress: 2</p>
            <div className="flex mt-2">
              {"⭐"
                .repeat(5)
                .split("")
                .map((star, index) => (
                  <span key={index} className="text-yellow-500 text-lg">
                    {star}
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 w-1/3">
          {["Operation Name 1", "Operation Name 2", "Operation Name 3"].map(
            (name, index) => (
              <div key={index} className="flex items-center bg-gray-100 p-4">
                <div className="bg-gray-300 rounded-3xl flex justify-center items-center h-16 w-16 mr-4">
                  <img src={profile} alt="" />
                </div>
                <div className="flex-grow ">
                  <h4 className="font-semibold text-xl">{name}</h4>
                  <button className="bg-teal-500 p-5 text-lg mt-2 px-4 py-2 rounded-lg">
                    View details
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Performance;
