import { useContext, useEffect, useState } from "react";
// awesome button
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Context } from "../context/Context";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const { token, setToken, navigate, backend_url } = useContext(Context);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [current, setCurrent] = useState("Sign Up");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (current === "Sign Up") {
        const response = await axios.post(backend_url + `/api/user/register`, {
          name,
          email,
          password,
        });
        console.log("response", response);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backend_url + `/api/user/login`, {
          email,
          password,
        });
        if (response.data?.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data?.message || "An error occurred");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <form
      action=""
      className="w-98% sm:max-w-96 m-auto flex flex-col items-center gap-4 bg-white"
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
          name="name"
          id="name"
          placeholder="Name"
          required
          className="w-full px-4 py-1 lg:py-2 border"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      )}
      <input
        type="email"
        placeholder="email"
        name="email"
        id="email"
        required
        className="w-full px-4 py-1 lg:py-2 border"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password" // Fixed typo here
        placeholder="password"
        required
        className="w-full px-4 py-1 lg:py-2 border"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
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
        {/* awesome button */}
        <span className="text-white w-full">
          <AwesomeButton
            className="w-full h-7 md:h-8 lg:h-9 xl:h-10 my-1 md:my-0 text-xs md:text-sm lg:text-base font-medium"
            type="primary"
          >
            {current === "Login" ? "Sign In" : "Sign up"}
          </AwesomeButton>
        </span>
      </div>
    </form>
  );
}
