import { NavLink } from "react-router-dom";
import logo from '../Assets/logo.png'
import nwrkadjust from '../Assets/nwrkadjust.jpg'
import Link2 from '../Assets/Link2.png'
import message from '../Assets/message.png'
import plug from '../Assets/plug.png'
import market from '../Assets/market.png'
import notification from '../Assets/notification.png'
import FYP from '../Assets/FYP.png'
import Home from '../Assets/Home.png'
//define the actual NavBar 
//(it isnt an actual React-Router tool, but a Function i make)

//NAVLINK is the actual tool. it allows you to create 
const NavBar = ()=>{

    return(
    <nav className="bg-white shadow-md">

        <div className="container mx-auto flex item-center  ">

            <div className="flex items-center justify-between">

                <NavLink to={'/'}> 
                    <img src={logo} alt="Tribe Cvlture" className="h-12 w-auto bg-blue- p-1" />
                </NavLink > 

                <NavLink to={'/'}> 
                    <img src={plug} alt="Tribe Cvlture" className="md:h-[25px] w-auto bg-blue- p-1" />
                </NavLink>

                <NavLink to={'/'}> 
                    <img src={nwrkadjust} alt="" className="md:h-[60px] w-auto " />
                </NavLink > 

            </div>

            <div className="flex items-end ml-auto justify-between">

                <div><NavLink to={'/'} className='text-gray-700 hover:text-gray-900  text-gray-700 py-2 px-4 rounded-lg transition hover:drop-shadow-[0_0_15px_rgba(75,85,99,0.6)] transition duration-300 hover:bg-gray-300 flex p-4 '> <img src={Home} alt="link" className="md:h-[30px] w-auto bg-blue- p-1"/><div>Home</div> </NavLink></div>
                <div><NavLink to={'/'} className='text-gray-700 hover:text-gray-900  text-gray-700 py-3 px-4 rounded-lg transition hover:drop-shadow-[0_0_15px_rgba(75,85,99,0.6)] transition duration-300 hover:bg-gray-300 flex p-2'>Profile</NavLink> </div>
                <div><NavLink to={'/'} className='text-gray-700 hover:text-gray-900  text-gray-700 py-2 px-4 rounded-lg transition hover:drop-shadow-[0_0_15px_rgba(75,85,99,0.6)] transition duration-300 hover:bg-gray-300 flex p-2'><img src={FYP} alt="link" className="md:h-[30px] w-auto bg-blue- p-1"/> <div>FYP</div></NavLink></div>
                <div><NavLink to={'/'} className='justify-center text-gray-700 hover:text-gray-900 text-gray-700 py-2 px-4 rounded-lg transition hover:drop-shadow-[0_0_15px_rgba(75,85,99,0.6)] transition duration-300 hover:bg-gray-300 flex p-2'> <img src={market} alt="" className="md:h-[33px] w-auto bg-blue- p-1"/> </NavLink></div>
                <div><NavLink to={'/'} className='text-gray-700 hover:text-gray-900  text-gray-700 py-2 px-4 rounded-lg transition hover:drop-shadow-[0_0_15px_rgba(75,85,99,0.6)] transition duration-300 hover:bg-gray-300 flex p-1'> <img src={Link2} alt="link" className="md:h-[30px] w-auto bg-blue- p-1"/></NavLink></div>
                <div><NavLink to={'/messages'} className='text-gray-700 hover:text-gray-900  text-gray-700 py-2 px-2 rounded-lg transition hover:drop-shadow-[0_0_15px_rgba(75,85,99,0.6)] transition duration-300 hover:bg-gray-300 flex p-1'> <img src={message} className="md:h-[33px] w-auto bg-blue- p-1" alt="" /></NavLink> </div>
                <div><NavLink to={'/notifications'} className='text-gray-700 hover:text-gray-900  text-gray-700 py-2 px-2 rounded-lg transition hover:drop-shadow-[0_0_15px_rgba(75,85,99,0.6)] transition duration-300 hover:bg-gray-300 flex p-1'><img src={notification} className="md:h-[33px] w-auto bg-blue- p-1"/></NavLink></div>
            </div>

        </div>


    </nav>

    )
}

export default NavBar;
