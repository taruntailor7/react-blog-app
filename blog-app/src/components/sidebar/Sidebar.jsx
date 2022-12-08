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
    axios.get(`https://viniya-blog.onrender.com/categories`)
    .then((response)=>setCategories(response.data.data))
  }
  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT BLOGS</span>
        <img  src="https://www.techprevue.com/wp-content/uploads/2015/03/top-educational-blogs.jpg" alt="" />
        <p>When blogging started, the first blogs were really glorified online journals, and in all likelihood, becoming a professional blogger and making money online wasn't the goal. Since then, the blogosphere has evolved, and now people blog for many different reasons. There are even distinctions among types of blogs - business, lifestyle, fashion, food, and entertainment blogs, among others.</p>
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
