import { useState } from "react";
import plug from "../Assets/plug.png";
import link from "../Assets/Link2.png";
import { NavLink, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [business, setBusiness] = useState("");
  const [niche, setNiche] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const uRL = "http://localhost:3000/login/register";
      const response = await fetch(uRL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
          business: business,
          niche: niche.split(","),
          username: username,
        }),

      });

      const data = await response;

      if (!response.ok) {
        console.log("Unable to Register");
        console.log(data)
        throw new Error("Unable to Register");
      }

      setMessage({ content: "Registration", type: "success" });
      navigate('/')
    } catch (err) {
      setMessage({ content: err.message, type: "error"});
      console.log(err);
    }
  };

  return (
    <>
      <div className="border">
        <div className=" flex items-center justify-center min-h-screen">
          <form className="" onSubmit={handleRegister}>
            <div className="bg-black p-20 rounded-md ">
              <div className="flex items-center justify-center p-6">
                <div className="w-20 brightness-150">
                  <img src={link} alt="" />
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <div className="rotate-90 w-10 animate-pulse brightness-150">
                  <img src={plug} alt="" />
                </div>
              </div>

              <div className="flex items-center justify-center p-6">
                <h1 className=" text-xl font-bold text-white">Sign Up</h1>
              </div>
              <div className="p-6 mx-6">
                <input
                  className="flex rounded-md p-1"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.toLowerCase())
                  }
                />
              </div>
              <div className="p-6 mx-6">
                <input
                  className="flex rounded-md p-1"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toLowerCase())}
                />
              </div>
              <div className="p-6 mx-6">
                <input
                  className="rounded-md p-1 "
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className=" flex items-center justify-center p-3">
                <button className="rounded-lg bg-sky-300 p-2 hover:text-sky-500 hover:bg-white hover:font-bold duration-150 ease-in-out hover:brightness-110">
                  Sign Up
                </button>
              </div>
              <div>
                {message.content && (
                  <div
                    className={`${
                      message.content === "success"
                        ? "text-lime-400"
                        : "text-rose-600"
                    }`}
                  >
                    {message.content}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center p-2 ">
              <NavLink
                to="/login"
                className="hover:text-sky-500 duration-150 ease-in-out"
              >
                Already have an account? Log In!
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
