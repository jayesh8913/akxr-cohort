import { useState } from "../node_modules/react";


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
          <li>About Us</li>
          <li>Contact Us</li>
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