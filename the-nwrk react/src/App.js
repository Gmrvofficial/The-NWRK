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
import LoginPage from "./pages/Login";


//Routes for the main application
const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<AppLayout />}>
      <Route path="/Messages" element={<Message/>}></Route>
      <Route path="/Notifications" element={<Notifications/>}></Route>
      <Route path="/Login" element={<LoginPage/>}></Route>
      
    </Route>
    
));

//this loads the routes that have been declared, into the application 
function App() {
  
    return (
      <RouterProvider router={router} />
    )
  }
  

export default App;
