import { useState,useEffect } from "react";

const Message = ()=>{
    const [message,setMessage] = useState('')
    const [username,setUsername] = useState('')
    const [error, setError]= useState('')
    const [success,setSuccess]= useState('')
    const [loading,setLoading]= useState(false)
    
    //needs too be an async function because its waiting for a command
    const messageSubmit = async (e)=>{
        
        
        e.preventDefault()
        const URL = 'http://localhost:3000/messages'

        try{
            //try statement 
            const response = await fetch(URL ,{
                //I need the URL, th method of request, and header content type
                method: "POST",
                headers: {
                    'Content-type':'application/json',
                },

                //A Body object or null to set request's body.
                body: JSON.stringify({
                    username: username,
                    body:message
                }),

            })


            //error message
            if(!response.ok){
                //Error is a js feature that you cAN SET A MESSAGE withinn using ()
                throw new Error('failed to post message')
            }



            const result = await response.json()
            setMessage('')
            setUsername('')
            setLoading(false)

        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
        console.log(username,message);
    }


    return(
        <div className="username">
            <form onSubmit={messageSubmit}>

            <div className="grid">
                <div className="justify-content">

                <input 
                type="text"  
                placeholder="username"
                onChange={(e)=> setUsername(e.target.value)}
                value={username}
                className= "w-20px p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                <input type="text"
                placeholder="Message" 
                onChange={(e)=>setMessage(e.target.value)}
                value={message}
                className="w-20px p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="Submit"
                placeholder='send'
                className={`bg-blue-500 text-white p-2 rounded ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}>
                    {loading ? "Posting..." : "Post"}
                </button>

                </div>
                
            </div>

            </form>
        </div>
    )
}

export default Message;