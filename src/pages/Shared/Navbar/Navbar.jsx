import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userImg from '../../../assets/user.png';
import { AuthContext } from "../../../providers/AuthProvider";

function Navbar() {
    const { logOut, user } = useContext(AuthContext);

        const handelSignOut = () => {
            logOut()
                .then(result => {
                console.log(result)
            })
                .catch(error => {
                console.log(error.user)
            })
        }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 md:px-0 mb-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold text-gray-400">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-gray-400">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-2">
                <img src={userImg} className="w-10" />
                {user ?
                    <Link onClick={handelSignOut} className="bg-[#403F3F] hover:bg-orange-600 text-white btn rounded-none hover:text-black">Sign out</Link>
                    :
                    <Link to="/login" className="bg-[#403F3F] hover:bg-orange-600 text-white btn rounded-none hover:text-black">Login</Link>  
                }
            </div>
        </div>
    )
}

export default Navbar
