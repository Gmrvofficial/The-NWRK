import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "./AppLayout/AppLayout";
import Message from "./Copmponents/Message";

//Routes for the main application
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<AppLayout />}></Route>,
    <Route path="/messages" element={<Message/>}></Route>
    </>
));

  
function App() {
  
    return (
      <RouterProvider router={router} />
    )
  }
  

export default App;
