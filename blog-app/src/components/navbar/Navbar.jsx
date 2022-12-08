import "./navbar.css"
import { FaFacebookSquare,FaTwitterSquare,FaPinterestSquare,FaInstagramSquare } from 'react-icons/fa';
// import { HiSearch } from 'react-icons/hi'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/context";
import { BiUserCircle } from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Navbar = () => {
    const {user, dispatch} = useContext(Context);
    const PF = "https://viniya-blog.onrender.com/images/";

    const showToastErrorMessage = (msg) => {
        toast.error(msg, {
            position: toast.POSITION.TOP_CENTER
        });
    };

    const handleLogout = ()=>{
        dispatch({type: 'LOGOUT'})
        showToastErrorMessage("You have been logged out!")
    }

    return (
        <div className="navbar">
            <div className="topLeft">
                <FaFacebookSquare color="#1877f2" cursor="pointer"/>
                <FaTwitterSquare color="#1da1f2" cursor="pointer"/>
                <FaPinterestSquare color="#b7081b" cursor="pointer"/>
                <FaInstagramSquare color="#d33d6a" cursor="pointer"/>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <NavLink className="link" to="/" >HOME</NavLink>
                    </li>
                    <li className="topListItem">
                        <NavLink className="link">ABOUT</NavLink>
                    </li>
                    <li className="topListItem">
                        <NavLink className="link">CONTACT</NavLink>
                    </li>
                    <li className="topListItem">
                        <NavLink className="link" to="/write">WRITE</NavLink>
                    </li>
                    <li className="topListItem">
                        <NavLink className="link" onClick={handleLogout}>{user && "LOGOUT"}</NavLink>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <NavLink to="/settings">
                            { user.profilePic === "" ? <BiUserCircle fontSize="30px" color="black"/>: <img className="topImg" src={PF+user.profilePic} alt="" />}
                        </NavLink>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <NavLink className="link" to="/login">LOGIN</NavLink>
                            </li>
                            <li className="topListItem">
                                <NavLink className="link" to="register">REGISTER</NavLink>
                            </li>
                        </ul>
                    )
                }
                {/* <HiSearch /> */}
            </div>
            <ToastContainer />
        </div>
    )
}
