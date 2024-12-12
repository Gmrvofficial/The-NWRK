import { useState,useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import Message from "../Components/Message";
import load from '../Assets/load.png';




const Messages = async () =>{
    //state to hold the list of rooms
    const [message,setMessage]= useState(null)
    const [newMessage, setNewMessage] =useState('')
    const navigate = useNavigate()

    // Function to create a new room

    const FetchMessages = async () =>{
        try{

            const uRL = 'http://localhost:3000/messages/'
            const response = await fetch(uRL,{
                "method": "GET",
                "Content-type":"application/json"
            })
            if(!response.ok){
                console.log('failed too fetch messages ');
                throw new Error("Failed to fetch Messages");
            }

        }catch(err){
            console.error(err)
        }


    }

    const HandleSendM = async ()=>{
        try{
            uRL = 'http://locslhost:3000/messages/newMessagee'
            const response = await fetch(uRL,{
                
            }
            )
        }
    }

    const messageGroups = async ()={

    }

    return(
        <>
            {!message && <p className="animate-pulse">Loading...</p>}
            {!message && <img src={load} alt="loading" className="animate-spin"/>}

            {message && 

                message.map((conversations,index)=>{
                    
                    <div
                    key={conversations._id}
                    className="border-2 border-neutral-400">

                    </div>
                })

            }
        </>
    )

}


export default Messages;
