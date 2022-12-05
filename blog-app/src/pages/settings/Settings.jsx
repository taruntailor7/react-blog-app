import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { CgProfile } from 'react-icons/cg';

export const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img  src="https://avatars.githubusercontent.com/u/66818449?v=4" alt="" />
                <label htmlFor="fileInput">
                    <CgProfile className="settingsPPIcon"/>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Username"/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Email"/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password"/>
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
} 
