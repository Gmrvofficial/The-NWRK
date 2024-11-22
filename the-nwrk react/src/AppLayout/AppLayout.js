import {Outlet } from "react-router-dom";

import NavBar from "./NavBar";

const AppLayout = () =>{
return(
    <>

    <NavBar/>
    {/* (renders the matched route's component) */}
    <Outlet />

    </>
)
}
export default AppLayout;