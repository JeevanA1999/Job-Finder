import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosUnlock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import google from "../assests/google.png";
import fLogo from "../assests/fLogo.png";
import bgImage from "../assests/bgImage.png";
function Login() {
  const [login, SetLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  function handleAction() {
    SetLogin(!login);
  }
  return (
    <div className="h-fit bg-white ">
      <div className="container h-full py-10 flex sm:flex-row flex-col items-center justify-center w-12/12 mx-auto rounded-x1">
        <div className="bg-white mt-16 p-4 w-1/2 text-center rounded-x1">
          <div className="w-full items-center justify-center mx-auto p-4">
            <h1 className="uppercase font-bold text-blue-500 sm:text-2xl text-xl py-2">
              {login ? "Login" : "SignUp"}
            </h1>
            <p className="font-light text-xs sm:text-sm ">
              Very good works are waiting for you !!!
            </p>
            <div className="flex flex-col text-center mt-4 gap-4 relative">
              <div className="flex bg-[#F0EDFF] p-3 gap-2 my-auto mx-auto sm:w-2/3 w-fit items-center rounded-xl hover:border-gray-500 hover:shadow-md hover:outline-(#4b485b] ">
                <FaUser className="mt-0 size-4" />
                <input
                  className="bg-[#F0EDFF] outline-none w-full"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {login ? (
                <div></div>
              ) : (
                <div className="flex bg-[#F0EDFF] p-3 gap-2 my-auto mx-auto sm:w-2/3 w-fit itens-center rounded-xl hover:border-gray-500 hover:shadow-md hover:outline-[#4b485b] ">
                  <MdEmail className="mt-0 size-5" />
                  <input
                    className="bg-[#F0EDFF] outline-none w-full"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              )}
              <div className="flex bg-[#F0EDFF] p-3 gap-2 my-auto mx-auto sm:w-2/3 w-fit items-center rounded-xl hover:border-gray-500 hover:shadow-md hover:outline-[#4b485b] ">
                <IoIosUnlock className="mt-0 size-5" />
                <input
                  className="bg-[#F0EDFF] outline-none w-full"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button className="flex sm:text-sm text-xs justify-end mx-auto mt-2 text-stone-600 hover:text-stone-950">
              {login ? " Forgot Password?" : ""}
            </button>
            <div className="flex flex-row mt-4 text-center justify-center">
              <button
                className=" hover:text-black hover:shadow-lg py-4 px-6 gradientButton bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-bold rounded-2xl text-xs shadow-xl"
              >
                {login ? "Login" : "SignUp"} Now
              </button>
            </div>
            <div className="mt-2 items-center justify-center">
              <div class="relative flex py-4 items-center">
                <div class="flex-grow border-t border-[#F0EDFF]"></div>
                <span class="flex-shrink text-[gray-400] gap-x-1">
                  <p className="text-black font-light p-2">
                    <strong className="font-bold">
                      {""}
                      {login ? "Login" : "SignUp"}{" "}
                    </strong>
                    with Others
                  </p>
                </span>
                <div class="flex-grow border-t border-[#F0EDFF]"></div>
              </div>
              <button
                className="flex mt-2 text-xs sm:text-sm mx-auto sm:w-[254px] w-fit border-[#F0EDFF] items-center justify-center bg-white text-gray-800 font-semibold py-2 px-4 rounded border hover:border-gray-500 hover:shadow-md"
              >
                <img
                  src={google}
                  alt="Google Logo"
                  className="h-12 w-12 mr-2"
                />
                {login ? "Login" : "SignUp"} with{" "}
                <strong className="px-1"> Google</strong>
              </button>
              <button className="flex mt-2 text-xs sm:text-sm mx-auto sm:w-[254px] w-fit border-[#F0EDFF] items-center justify-center bg-white text-gray-800 font-semibold py-2 px-4 rounded border hover:border-gray-500 hover:shadow-md">
                <img src={fLogo} alt="Google Logo" className="h-10 w-10 mr-2" />
                {login ? "Login" : "SignUp"} with{" "}
                <strong className="px-1"> Facebook</strong>
              </button>
            </div>
            <div className="mx-auto ">
              <p className="mt-2">
                {login ? "Don't have an account?" : "Already have an account?"}
              </p>
              <p
                className=" hover: text-lg p2-4 px-2 outline-none text-blue-500 t font-bold rounded-2xl text-base "
                onClick={handleAction}
              >
                {login ? "SignUp" : "Login"}
              </p>
            </div>
          </div>
        </div>
        <div className=" w-1/2 h-full flex text-center rounded-xl sm:visible invisible">
          {/* bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 */}
          <div className="">
          <img src={bgImage} className="rounded-xl object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
