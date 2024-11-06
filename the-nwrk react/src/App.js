import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import AppLayout from "../src/AppLayout/AppLayout";
import Message from "./Components/Message";
import Notifications from "../src/Components/Notifications";
console.log('hi');

//Routes for the main application
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<AppLayout />}></Route>
    <Route path="/messages" element={<Message/>}></Route>
    <Route path="/notifications" element={<Notifications/>}></Route>
    
    </>
));

 
function App() {
  
    return (
      <RouterProvider router={router} />
    )
  }
  

export default App;
