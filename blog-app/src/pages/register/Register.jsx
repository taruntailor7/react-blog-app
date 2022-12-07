import { useState } from "react"
import { Navigate, NavLink } from "react-router-dom"
import "./register.css"
import axios from "axios"

let initState = {
  username: "",
  email: "",
  password: "",
}

export const Register = () => {
  const [user, setUser] = useState(initState);
  const [error, setError] = useState(false);
  const [navigate, setNavigate] = useState(false);

  const handleChange = (e)=>{
    const {name, value} = e.target
    setUser({...user,[name]:value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
      setError(false)
      axios.post("http://localhost:3050/auth/register",user)
      .then(response =>{
          setUser(response.data.data)
          alert(response.data.message)
          setNavigate(true)
      })
      .catch(err => setError(true))
  }

  if(navigate){
    return <Navigate to="/login" />
  }

  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="registerInput" name="username" value={user.username} placeholder="Enter your username..." onChange={handleChange} required/>
            <label>Email</label>
            <input type="email" className="registerInput" name="email" value={user.email} placeholder="Enter your email..." onChange={handleChange} required/>
            <label>Password</label>
            <input type="password" className="registerInput" name="password" value={user.password} placeholder="Enter your password..." onChange={handleChange} required/>
            <button className="registerButton">Register</button>
        </form>
        <button type="submit" className="registerLoginButton">
          <NavLink to="/login" className="link">Login</NavLink>
        </button>
        <br />
        {error && <span style={{color: 'red'}}>User already registered!</span>}
    </div>
  )
}
