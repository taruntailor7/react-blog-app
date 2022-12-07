import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { CgProfile } from 'react-icons/cg';
import { useContext, useState } from "react";
import { Context } from "../../context/context";
import axios from "axios";

export const Settings = () => {
  const {user} = useContext(Context)
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    let updatesUser = {
        userId : user._id,
        username,
        email,
        password
    }
    if(file){
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name",filename);
        data.append("file",file);
        updatesUser.profilePic = filename;
        try{
            await axios.post("http://localhost:3050/upload", data)
        } catch(err) {
            console.log(err,"err")
        }
    }

    try {
        await axios.put(`http://localhost:3050/users/${user._id}`, updatesUser)
        setSuccess(true)
    } catch (error) {
        console.log(error,"error")
    }
}

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img  src={user.profilePic} alt="" />
                <label htmlFor="fileInput">
                    <CgProfile className="settingsPPIcon"/>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
            </div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} />
            <button className="settingsSubmit" type="submit">Update</button>
            {success && (
              <span style={{color :"green", textAlign: "center", marginTop:"20px"}}>Profile has been updated.</span>
            )}
        </form>
      </div>
      <Sidebar />
    </div>
  )
} 
