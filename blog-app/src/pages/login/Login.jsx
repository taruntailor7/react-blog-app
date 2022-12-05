import { NavLink } from "react-router-dom"
import "./login.css"

export const Login = () => {
  return (
    <div className="login">
        <spna className="loginTitle">Login</spna>
        <form className="loginForm">
            <label>Email</label>
            <input type="email" className="loginInput" placeholder="Enter your email..."/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password..."/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <NavLink to="/register" className="link">Register</NavLink>
        </button>
    </div>
  )
}
