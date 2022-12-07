import './sidebar.css'
import { FaFacebookSquare,FaTwitterSquare,FaPinterestSquare,FaInstagramSquare } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    getCategories();
  },[])
  
  const getCategories = ()=>{
    axios.get(`http://localhost:3050/categories`)
    .then((response)=>setCategories(response.data.data))
  }
  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img  src="https://www.techprevue.com/wp-content/uploads/2015/03/top-educational-blogs.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit in diam non pro id el us already have a good day to live.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map((cat)=>(
            <NavLink key={cat._id} to={`/?cat=${cat.name}`} className="link">
              <li className="sidebarListItem">{cat.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <FaFacebookSquare color="#1877f2" fontSize="25px" cursor="pointer" />
          <FaTwitterSquare color="#1da1f2"  fontSize="25px" cursor="pointer"/>
          <FaPinterestSquare color="#b7081b" fontSize="25px" cursor="pointer"/>
          <FaInstagramSquare color="#d33d6a" fontSize="25px" cursor="pointer"/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
