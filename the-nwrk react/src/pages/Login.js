import { useState } from "react"

const LoginPage = ()=>{ 
    const [Name,setUsername] = useState('')
    const [password,setPassword] = useState('')
    

    
    return(
        <>
            <div className="border">
                <div className="flex items-center justify-center min-h-screen">
                    <form className="" onSubmit=''>
                        <div className="bg-black p-10 rounded ">
                            <div className="flex items-center justify-center p-6">
                                <p className="text-white">Log In</p>

                            </div>
                            <div className="p-6 mx-6">

                                <input 
                                className="flex rounded p-1"
                                type="text" 
                                placeholder="Username"
                                value={Name}
                                onChange={(e)=>setUsername(e.target.value)}/>

                            </div>
                            <div className="p-6 mx-6">
                                <input 
                                className="rounded p-1 "
                                type="password"
                                placeholder="Password"
                                value ={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                />

                            </div>

                            <div className=" flex items-center justify-center p-3">
                                <button 
                                className=" rounded bg-sky-300 p-2 hover:animate-pulse"
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
}

export default LoginPage;