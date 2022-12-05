import "./navbar.css"
import { FaFacebookSquare,FaTwitterSquare,FaPinterestSquare,FaInstagramSquare } from 'react-icons/fa';
import { HiSearch } from 'react-icons/hi'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const user = false;
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
                        <NavLink className="link">{user && "LOGOUT"}</NavLink>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg" src="https://avatars.githubusercontent.com/u/66818449?v=4" alt="" />
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
                <HiSearch />
            </div>
        </div>
    )
}
