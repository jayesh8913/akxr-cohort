import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter ,RouterProvider, Outlet} from "react-router-dom";
import Shimmer from "./components/Shimmer";

const Groceries=lazy(()=>import("./components/Groceries"))


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
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
    element:(<Suspense fallback={<Shimmer/>}><Groceries/></Suspense>)
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
