import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";


import AppLayout from "../src/AppLayout/AppLayout";
import Message from "./Components/Message";
import Notifications from "../src/Components/Notifications";
import LoginPage from "../src/pages/Login";
import RegisterPage from "./pages/Register";
import ProfilePage from "./pages/profile";
import FYP from './pages/FYP';
import AuthLayout from "./AppLayout/Protected";
import ReRoute from "./AppLayout/ReRoute";

//Routes for the main application
function App() {
  const router = createBrowserRouter(
    
    createRoutesFromElements(
      <>
      
      <Route path='/' element={<AppLayout />}>
        <Route path="/Notifications" element={<AuthLayout><Notifications /></AuthLayout>}/>
        <Route path="/login" element={<ReRoute><LoginPage /></ReRoute>}/>
        <Route path="/register" element={<ReRoute><RegisterPage/></ReRoute>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/Fyp' element={<FYP/>}/>
        <Route path='/messages' element={<Message/>}/>
      </Route>

      </>
    )
  );
  
  const [isVisible,SetVisibility]= useState(false)
  return (
    <>
    <RouterProvider router={router} />,
    {isVisible &&  <Message/>} 
    </>
  );
}


//this loads the routes that have been declared, into the application 

export default App;
