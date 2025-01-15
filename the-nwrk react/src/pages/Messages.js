import { useState,useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import Message from "../Components/Message";
import load from '../Assets/load.png';
import inProgress from '../Assets/loadingLG.jpg';




const Messages =() =>{
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
    useEffect(()=>{
        FetchMessages()
    },[])
    // const HandleSendM = async ()=>{
    //     try{
    //         uRL = 'http://locslhost:3000/messages/newMessagee'
    //         const response = await fetch(uRL,{
                
    //         }
    //         )
    //     }
    // }

    const messageGroups = async ()={

    }

    return(
        <>
      
    
            <div className="bg-black">
                <img src={inProgress} alt="" />
                <div className="flex items-center justify-center">
                    <h1 className="text-white animate-pulse font-bold font-xl p-6">Construction In Progress</h1>
                    <img src={load} alt="" className="h-6 animate-spin" />
        
                </div>
            </div>
            {!message && <p className="animate-pulse">Loading...</p>}
            {!message && <img src={load} alt="loading" className="animate-spin"/>}

        </>
    )

}


export default Messages;
