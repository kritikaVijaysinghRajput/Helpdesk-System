import React, { useState } from "react";

const NewTicket = () => {
  const [formData, setFormData] = useState({
    ticketNo: "",
    name: "",
    date: "",
    department: "",
    subject: "",
    category: "",
    type: "",
    priority: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <h1 className="text-center text-3xl font-semibold mb-4">
        Create New Ticket
      </h1>
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="col-span-1 ">
          <label className="font-semibold text-xl">Ticket No.</label>
          <input
            type="text"
            name="ticketNo"
            value={formData.ticketNo}
            onChange={handleChange}
            className="w-full border bg-gray-300 p-2 rounded"
          />
        </div>
        <div className="col-span-1">
          <label className="font-semibold text-xl">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border bg-gray-300 p-2 rounded"
          />
        </div>
        <div className="col-span-1">
          <label className="font-semibold text-xl">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border bg-gray-300 p-2 rounded"
          />
        </div>
        <div className="col-span-1">
          <label className="font-semibold text-xl">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border bg-gray-300 p-2 rounded"
          />
        </div>
        <div className="col-span-2">
          <label className="font-semibold text-xl">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border bg-gray-300 p-2 rounded"
          />
        </div>
        <div className="col-span-1">
          <label className="font-semibold text-xl">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border bg-gray-300 p-2 rounded"
          />
        </div>
        <div className="col-span-1">
          <label className="font-semibold text-xl">Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border bg-gray-300 p-2 rounded"
          />
        </div>
        <div className="col-span-1">
          <label className="font-semibold text-xl">Priority</label>
          <input
            type="text"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border bg-gray-300 p-2 rounded"
          />
        </div>
        <div className="col-span-1">
          <label className="font-semibold text-xl">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border bg-gray-300 p-2 rounded h-32"
          ></textarea>
        </div>
      </form>
      <div className="flex w-full mt-4 ml-10  ">
        <div className=" bg-gray-300 w-64  py-2  rounded-sm ">
          <label className="flex items-center p-5 space-x-5">
            <input type="checkbox" />
            <span className="text-xl">I'm not a robot</span>
          </label>
        </div>
        <div className="mt-4 ml-96 ">
          <button
            type="submit"
            className="bg-[#55D6C2] rounded-md  font-semibold text-2xl px-20 py-2 "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTicket;
