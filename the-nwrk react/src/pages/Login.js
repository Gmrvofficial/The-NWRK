import { useState } from "react"
import nwrk from '../Assets/NWRK.png'
import plug from '../Assets/plug.png'
import { NavLink } from "react-router-dom"
const LoginPage = ()=>{ 
    const [Name,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [business, setBusiness] = useState("");
    const [niche, setNiche] = useState("");
    const [email,setEmail] =useState('');
    const[message,setMessage]=useState('')
    
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const uRL = 'http://localhost:3000/Login/'
            const response = await fetch(uRL,{
                "method":'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    username:Name,
                    password:password,
                    business:business,
                    nicheType:niche,
                    email:email})
            })
            const data = await response.json();

            if(!response.ok){
                console.log('Unable to Login',data);
                throw new Error('Error Logging in')
                
            }else{
            setMessage({message:'Login Successfull',type:'success'})
           }
        }catch(err){
            console.error(err);
            setMessage({message:err.message,type:'error'})
        }
    }

    
    return(
        <>
            <div className="border">
                <div className="flex items-center justify-center min-h-screen">
                    <form className="" onSubmit={handleSubmit}>
                        <div className="bg-black p-20 rounded-md ">
                            <div className="flex items-center justify-center ">
                                <div className="w-40"><img src={nwrk} alt="" /></div>

                            </div>
                            <div className="flex items-center justify-center ">
                                <div className="rotate-90 w-10 animate-pulse"><img src={plug} alt="" /></div>

                            </div>
                            <div className="flex items-center justify-center p-6">
                                <h1 className=" text-xl font-bold text-white">Log In</h1>

                            </div>
                            <div className="p-6 mx-6">

                                <input 
                                className="flex rounded-md p-1"
                                type="text" 
                                placeholder="Username"
                                value={Name}
                                onChange={(e)=>setUsername(e.target.value)}/>

                            </div>
                            <div className="p-6 mx-6">
                                <input 
                                className="rounded-md p-1"
                                type="password"
                                placeholder="Password"
                                value ={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                />

                            </div>

                            <div className=" flex items-center justify-center p-3">
                                <button 
                                className="rounded-lg bg-sky-300 p-2 hover:text-sky-500 hover:bg-white hover:font-bold duration-150 ease-in-out"
                                >
                                    Log In
                                </button>
                            </div>

                            <div>
                                {message.text && (
                                    <div className={`${message.type === 'success' ? 'text-lime-400': 'text-rose-600' }`}> 
                                    {message.text}
                                    </div>)}
                                </div> 
                            

                            </div>
                            <div className="flex items-center justify-center p-2 ">
                                <NavLink to='/register' className='hover:text-sky-300 duration-150 ease-in-out'> 
                                Already have an account? Sign Up!
                                </NavLink>
                            </div>

                    </form>

                </div>
            </div>
        </>
    )
}

export default LoginPage;