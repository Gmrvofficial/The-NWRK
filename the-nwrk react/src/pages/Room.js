import { useState,useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import Message from "../Components/Message";




const MainRoom = async () =>{
    //state to hold the list of rooms
    const [rooms,setRoom]=useState([])
    const [newRoomName, setNewRoom] =useState('')
    const navigate = useNavigate()

    // Function to create a new room

    const FetchRooms = async () =>{
        try{

            const uRL = 'http://localhost:3000/Rooms/'
            const response = await fetch(uRL,{
                "method": "GET",
                "Content-type":"application/json"
            })
            if(!response.ok){
                console.log('failed too fetch rooms ');
                throw new Error("Failed to fetch Rooms");
            }

        }catch(err){
            console.error(err)
        }


    }

    return(
        <>
            {rooms.map((room)=>{

                <div
                key={room._id}
                className="border-2 border-neutral-400">

                </div>
            })}
        </>
    )

}


export default MainRoom;
