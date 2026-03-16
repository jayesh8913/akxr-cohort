import { Link } from "react-router-dom";
import { useState,Suspense, useContext } from "../node_modules/react";
import UserContext from "../utils/UserContext";


const Header = () => {
  const [btn,setbtn]= useState('Login')

  const {loggedInUser}= useContext(UserContext)
  return (
    <div className="flex justify-between border-2 rounded-lg">
      <div className="w-40">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 ">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">contact</Link></li>
          <li className="px-4">Cart</li>
          <li className="px-4"><Link to="/groceries">grocery</Link></li>
          <button className="login-btn cursor-pointer"
           onClick={()=>{
            btn==='Login'?setbtn('Logout'):setbtn('Login') // this uses terenary operation as well where if else statement is used
           }}>{btn}</button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header