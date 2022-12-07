import axios from "axios"
import { useContext, useState } from "react"
import { Navigate, NavLink } from "react-router-dom"
import { Context } from "../../context/context"
import "./login.css"

let initState = {
    username : "",
    password : ""
}

export const Login = () => {
  const [loginuser, setUser] = useState(initState)
  const [navigate,setNavigate] = useState(false)
  const {dispatch, isFetching} = useContext(Context);

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setUser({...loginuser, [name]:value})
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault()

    dispatch({type:"LOGIN_START"})
    try {
      const res = await axios.post("http://localhost:3050/auth/login", loginuser);
      dispatch({type:"LOGIN_SUCCESS", payload:res.data});
      alert(res.data.message);
      setNavigate(true)
    } catch (error) {
      console.log(error)
      dispatch({type:"LOGIN_FAILURE"});
    }
  }

  if(navigate){
    return <Navigate to="/"/>
  }

  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="loginInput" name="username" value={loginuser.username} placeholder="Enter your username..." onChange={handleChange} required/>
            <label>Password</label>
            <input type="password" className="loginInput" name="password" value={loginuser.password} placeholder="Enter your password..." onChange={handleChange} required/>
            <button type="submit" className="loginButton" disabled={isFetching}>Login</button>
        </form>
        <button className="loginRegisterButton">
          <NavLink to="/register" className="link">Register</NavLink>
        </button>
    </div>
  )
}
