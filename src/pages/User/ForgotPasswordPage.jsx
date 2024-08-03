import React from "react";

const ForgotPasswordPage = () => {
  return (
    <div className="flex justify-center items-center bg-[#55D6C2] h-screen w-full">
      <div className="bg-[#8fe0d4] h-3/4 w-3/6 flex flex-col justify-center items-center text-center text-black p-8 rounded-lg shadow-lg">
        <p className="text-xl font-semibold w-96  mb-8">
          Don’t worry, Enter your email below and we will send you a link to
          change password.
        </p>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="w-3/5 px-4 py-3 mb-4 outline-none text-2xl border border-black "
        />
        <a href="/">
          {" "}
          <button className="  w-72 px-4 py-3 mt-5  text-white text-2xl rounded-2xl hover:bg-[#52e561] bg-[#03CC17]">
            Submit
          </button>
        </a>
        <a href="/">
          <button className="  w-72 px-4 py-3 mt-5  text-white text-2xl rounded-2xl hover:bg-blue-500 bg-blue-600">
            Sign in
          </button>
        </a>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
