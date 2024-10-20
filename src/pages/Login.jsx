import { useState } from "react";

export default function Login() {
  const [current, setCurrent] = useState("Sign Up");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form
      action=""
      className="w-98% sm:max-w-96 m-auto flex flex-col items-center gap-4"
      onSubmit={handleSubmit}
    >
      <div className="inline-flex items-center gap-2 my-4">
        <p className="text-3xl">{current}</p>
        <hr className="w-8 h-[2px] bg-gray-900" />
      </div>
      {current === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full px-4 py-1 lg:py-2 border"
        />
      )}
      <input
        type="email"
        placeholder="email"
        required
        className="w-full px-4 py-1 lg:py-2 border"
      />
      <input
        type="passward"
        placeholder="password"
        required
        className="w-full px-4 py-1 lg:py-2 border"
      />
      <div className="w-full flex justify-between gap-3">
        <p className="cursor-pointer">Forgot Your Password?</p>
        {current === "Login" ? (
          <p onClick={() => setCurrent("Sign Up")} className="cursor-pointer">
            Creat Account
          </p>
        ) : (
          <p onClick={() => setCurrent("Login")} className="cursor-pointer">
            Login Here
          </p>
        )}
      </div>
      <div className="my-4">
        <button>{current === "Login" ? "Sign In" : "Sign up"}</button>
      </div>
    </form>
  );
}
