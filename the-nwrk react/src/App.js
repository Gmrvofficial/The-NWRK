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
import FYP from './pages/FYP';
import AuthLayout from "./AppLayout/Protected";
import ReRoute from "./AppLayout/reRoute";
//Routes for the main application
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<AppLayout />}>
      <Route path="/Messages" element={<AuthLayout><Message /></AuthLayout>} />
      <Route path="/Notifications" element={<AuthLayout><Notifications /></AuthLayout>}/>
      <Route path="/login" element={<ReRoute><LoginPage /></ReRoute>}/>
      <Route path="/register" element={<ReRoute><RegisterPage/></ReRoute>}/>
      <Route path='/profile' element={<AuthLayout><ProfilePage/></AuthLayout>}/>
      <Route path='/Fyp' element={<AuthLayout><FYP/></AuthLayout>}/>
    </Route>
    </>
  )
);

//this loads the routes that have been declared, into the application 
function App() {
    return (
      <RouterProvider router={router} />
    );
}

export default App;
