import './sidebar.css'
import { FaFacebookSquare,FaTwitterSquare,FaPinterestSquare,FaInstagramSquare } from 'react-icons/fa';

const Sidebar = () => {
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
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
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
