import Notifications from "./Notifications";
import { useState } from "react";


const Notification = () =>{
    
    const [notification,SetNotification]= useState([])
    const FetchNotifications = async () =>{

        try{

            const uRL = 'http://localhost:3000/notifications'
            //get response from the fetch
            const response = await fetch(uRL,{
                'method':'GET',
                'Content-Type':'application/json'
        
            })
    
            if(!response){
                console.log('Unable to fetch notifications');
                throw new Error('Failed to fetch Notifications')
            }

            //retrieve response data
            const data = await response.json()
            SetNotification(data)
        }catch(err){
            console.error(err);
            
        }

        
    }
    const DeleteNotification = async (id) =>{

        try{
            
            const uRL = `http://localhost:3000/notifications/delete/${id}`
            //get response from the fetch
            const response = await fetch(uRL,{
                'method':'DELETE',
                'Content-Type':'application/json'
            })

            if(!response){
                console.log('Unable to delete'); 
                throw new Error('Unable to delete notification')
            }

        }catch(err){
            console.error(err)
            
        }
    }

    return(
        <>
            <div>
                <ul>
                    {notification.map((n) =>(
                        <li key = {n._id}>
                            <p>{n.content}</p>
                            <p>{n.createdAt}</p>
                            <button onClick={()=>DeleteNotification(n._id)}> Delete </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Notification;