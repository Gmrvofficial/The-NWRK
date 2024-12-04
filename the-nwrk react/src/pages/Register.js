import { useState } from "react";
import plug from '../Assets/plug.png'
import plug from '../Assets/plug.png'

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [business, setBusiness] = useState("");
  const [niche, setNiche] = useState("");
  const [username, setUsername] = useState("");


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
          niche: niche,
          username: username,
        }),
      });

      if (!response.ok) {
        console.log("Unable to Register");
        throw new Error("Unable to Register");
      }
      console.log();
    } catch (err) {
      console.log(err);
    }
  };

  return(
    <>
        <div className="border">
            <div className="flex items-center justify-center min-h-screen">
                <form className="" onSubmit={handleRegister}>
                    <div className="bg-black p-20 rounded-md ">
                        <div className="flex items-center justify-center p-6">
                            <div className="size-7 "><img src={plug} alt="" /></div>
                            <h1 className=" text-xl font-bold text-white">Sign Up</h1>

                        </div>
                        <div className="p-6 mx-6">

                            <input 
                            className="flex rounded-md p-1"
                            type="text" 
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}/>

                        </div>
                        <div className="p-6 mx-6">

                            <input 
                            className="flex rounded-md p-1"
                            type="text" 
                            placeholder="Username"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}/>

                        </div>
                        <div className="p-6 mx-6">
                            <input 
                            className="rounded-md p-1 "
                            type="password"
                            placeholder="Password"
                            value ={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />

                        </div>

                        <div className=" flex items-center justify-center p-3">
                            <button 
                            className="rounded-lg bg-sky-300 p-2 hover:animate-pulse"
                            >
                                Log In
                            </button>
                        </div>

                    </div>

                </form>

            </div>
        </div>
    </>
)
};

export default RegisterPage;