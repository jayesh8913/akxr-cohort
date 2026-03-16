import React, {lazy,Suspense, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter ,RouterProvider, Outlet} from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext.js";
const Groceries=lazy(()=>import("./components/Groceries"))  // lazy loading to send info only when it is needed, making the app more fast to reload and efficient 


const AppLayout = () => {
   const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Jayesh Patil",
    };
    setUserName(data.name);
  }, []);
  return (
     <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[ 
      {
    path:"/about",
    element:<About/>
  }
  , {
    path:"/",
    element:<Body/>
  },
  {
    path:"/groceries",
    element:(<Suspense fallback={<Shimmer/>}><Groceries/></Suspense>)   // we have to use suspense b4 adding a lazy route
  },
   {
    path:"/contact",
    element:<Contact/>
  },{
    path:"/restaurants/:resId",
    element:<RestaurantMenu/>
  }],
    errorElement:<Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter} />);
