import { useState } from "react";
import plug from '../Assets/plug.png'
import link from '../Assets/Link2.png'


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
          niche: niche.split(','),
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
            <div className="bg-zinc-100 flex items-center justify-center min-h-screen">
                <form className="" onSubmit={handleRegister}>
                    <div className="bg-black p-20 rounded-md ">
                        <div className="flex items-center justify-center p-6">
                            <div className="w-20"><img src={link} alt="" /></div>
                        </div>
                        <div className="flex items-center justify-center ">
                                <div className="rotate-90 w-10 animate-pulse"><img src={plug} alt="" /></div>

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
                                Sign Up
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