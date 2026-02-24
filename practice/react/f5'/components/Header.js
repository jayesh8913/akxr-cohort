import { Link } from "react-router-dom";
import { useState,Suspense } from "../node_modules/react";


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
          <li>Home</li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li>Cart</li>
          <li><Link to="/groceries">grocery</Link></li>
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