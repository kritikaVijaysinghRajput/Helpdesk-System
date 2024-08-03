import React from "react";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center bg-[#55D6C2] h-screen w-full">
      <div className="bg-[#8fe0d4] h-3/4 w-3/6 flex flex-col justify-center items-center text-center text-black p-8 rounded-lg shadow-lg">
        <i className="text-4xl font-bold w-full mb-8">Helpdesk System</i>

        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="w-3/5 px-4 py-3 mb-4 outline-none text-2xl border mt-5 border-black "
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="w-3/5 px-4 py-3 mb-4 outline-none text-2xl border border-black "
        />
        <a href="/user/home">
          <button className="  w-72 px-4 py-3 mt-5  text-white text-2xl rounded-2xl hover:bg-[#52e561] bg-[#03CC17]">
            Sign In
          </button>
        </a>

        <div className="flex mt-7 ">
          <a href="/forgotPassword">
            {" "}
            <p className="text-red-500 font-semibold text-xl mr-60 ">
              Forgot Password
            </p>
          </a>
          <a href="/signup">
            {" "}
            <p className="text-black font-semibold text-xl mr-9 ">Sign Up</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
