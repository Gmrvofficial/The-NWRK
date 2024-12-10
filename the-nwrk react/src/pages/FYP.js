import inProgress from '../Assets/loadingLG.jpg';
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import load from '../Assets/load.png';
const FYP = ()=>{
    const [isVisible,setVisibility] = useState(false)
    const [post ,setPost]= useState('')

    return (
        <>
          <div className="bg-black">
            <img src={inProgress} alt="" />
            <div className="flex items-center justify-center">
                <h1 className="text-white animate-pulse font-bold font-xl p-6">Construction In Progress</h1>
                <img src={load} alt="" className="h-6 animate-spin" />
    
            </div>
          </div>
        </>
      );
}

export default FYP;