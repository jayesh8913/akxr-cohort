import { useState, } from "../node_modules/react";
import About from "./About";
import Contact from "./Contact";
import { Link } from "../node_modules/react-router-dom";


const Header = () => {
  const [btn,setbtn]= useState('Login')
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li> <Link to={"/about"}>About us</Link> </li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li>Cart</li>
          <button className="login-btn"
           onClick={()=>{
            btn==='Login'?setbtn('Logout'):setbtn('Login') // this uses terenary operation as well where if else statement is used
           }}>{btn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header