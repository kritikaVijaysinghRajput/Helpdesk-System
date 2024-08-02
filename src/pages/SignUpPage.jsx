import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center bg-[#55D6C2] h-screen w-full">
      <div className="bg-[#8fe0d4] h-3/4 w-3/6 flex flex-col justify-center items-center text-center text-black p-8 rounded-lg shadow-lg">
        <i className="text-4xl font-bold w-full mb-8 ">Helpdesk System</i>
        <p className="text-xl font-semibold w-full mb-8">Sign up here</p>

        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="w-3/5 px-4 py-3 mb-4 text-2xl outline-none border border-black "
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="w-3/5 px-4 py-3 mb-4 text-2xl outline-none border border-black "
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className="w-3/5 px-4 py-3 mb-8 text-2xl outline-none border border-black "
        />
        <button className=" w-72 px-4 py-3 bg-blue-600  text-white text-2xl rounded-2xl hover:bg-blue-500">
          Sign Up
        </button>
        <div className="flex mt-5 ">
          <p className="text-red-500 font-semibold text-xl mr-60 ">
            Forgot Password
          </p>
          <p className="text-black font-semibold text-xl mr-9 ">Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
