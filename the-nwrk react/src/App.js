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
import LoginPage from "../src/pages/Login";
import RegisterPage from "./pages/Register";
import ProfilePage from "./pages/profile";
import FYP from "./pages/FYP";


//Routes for the main application
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route path="/Messages" element={<Message />} />
      <Route path="/Notifications" element={<Notifications />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/Fyp' element={<FYP/>}/>
    </Route>
  )
);

//this loads the routes that have been declared, into the application 
function App() {
    return (
      <RouterProvider router={router} />
    );
}

export default App;
