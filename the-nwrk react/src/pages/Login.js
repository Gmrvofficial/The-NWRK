import { useState } from "react"

const LoginPage = async ()=>{
    const [Name,SetUsername]= useState('')
    

    
    return(
        <>
            <div>
                <form >

                    <input 
                    type="text" 
                    placeholder="Username"/>

                    <input 
                    type="password"
                    placeholder="Password"/>

                    <button >
                        Log In
                    </button>

                </form>
            </div>
        </>
    )
}

export default LoginPage;